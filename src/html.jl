Base.show(io::IO, ::MIME"juliavscode/html", ct::Table) = show(io, MIME"text/html"(), ct)

function Base.show(io::IO, ::MIME"text/html", ct::Table)
    ct = postprocess(ct)

    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    _io = IOBuffer()
    
    # The final table has a hash-based class name so that several different renderings (maybe even across
    # SummaryTables.jl versions) don't conflict and influence each other.
    hash_placeholder = "<<HASH>>" # should not collide because it's not valid HTML and <> are not allowed otherwise

    println(_io, "<table class=\"st-$(hash_placeholder)\">")

    print(_io, """
        <style>
            .st-$(hash_placeholder) {
                border: none;
                margin: 0 auto;
                padding: 0.25rem;
                border-collapse: separate;
                border-spacing: 0.85em 0.2em;
                line-height: 1.2em;
            }

            .st-$(hash_placeholder) tr td {
                vertical-align: top;
                padding: 0;
                border: none;
            }

            .st-$(hash_placeholder) br {
                line-height: 0em;
                margin: 0;
            }

            .st-$(hash_placeholder) sub {
                line-height: 0;
            }

            .st-$(hash_placeholder) sup {
                line-height: 0;
            }
        </style>
    """)
    # border-collapse requires a separate row/cell to insert a border, it can't be put on <tfoot>
    println(_io, "    <tr><td colspan=\"$(size(matrix, 2))\" style=\"border-bottom: 1.5px solid black; padding: 0\"></td></tr>")

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)

    running_index = 0
    for row in 1:size(matrix, 1)
        if row == ct.footer
            print(_io, "    <tfoot>\n")
            # border-collapse requires a separate row/cell to insert a border, it can't be put on <tfoot>
            print(_io, "        <tr><td colspan=\"$(size(matrix, 2))\" style=\"border-bottom:1px solid black;padding:0\"></td></tr>")
        end
        print(_io, "    <tr>\n")
        for col in 1:size(matrix, 2)
            index = matrix[row, col]
            if index > running_index
                print(_io, "        ")
                print_html_cell(_io, cells[index], rowgaps, colgaps)
                running_index = index
                print(_io, "\n")
            elseif index == 0
                print(_io, "        ")
                print_empty_html_cell(_io)
                print(_io, "\n")
            end
        end
        print(_io, "    </tr>\n")
        if row == ct.header
            # border-collapse requires a separate row/cell to insert a border, it can't be put on <thead>
            print(_io, "        <tr><td colspan=\"$(size(matrix, 2))\" style=\"border-bottom:1px solid black;padding:0\"></td></tr>")
        end
    end

    # border-collapse requires a separate row/cell to insert a border, it can't be put on <tfoot>
    println(_io, "    <tr><td colspan=\"$(size(matrix, 2))\" style=\"border-bottom: 1.5px solid black; padding: 0\"></td></tr>")

    if !isempty(annotations) || !isempty(ct.footnotes)
        print(_io, "    <tr><td colspan=\"$(size(matrix, 2))\" style=\"font-size: 0.8em;\">")
        for (i, (annotation, label)) in enumerate(annotations)
            i > 1 && print(_io, "&nbsp;&nbsp;&nbsp;&nbsp;")
            if label !== NoLabel()
                print(_io, "<sup>")
                _showas(_io, MIME"text/html"(), label)
                print(_io, "</sup> ")
            end
            _showas(_io, MIME"text/html"(), annotation)
        end
        for (i, footnote) in enumerate(ct.footnotes)
            (!isempty(annotations) || i > 1) && print(_io, "&nbsp;&nbsp;&nbsp;&nbsp;")
            _showas(_io, MIME"text/html"(), footnote)
        end
        println(_io, "</td></tr>")
    end

    print(_io, "</table>")

    s = String(take!(_io))

    short_hash = first(bytes2hex(SHA.sha256(s)), 8)
    s2 = replace(s, hash_placeholder => short_hash)
    print(io, s2)
end

function _showas(io::IO, ::MIME"text/html", m::Multiline)
    for (i, value) in enumerate(m.values)
        i > 1 && print(io, "<br>")
        _showas(io, MIME"text/html"(), value)
    end
end

function _showas(io::IO, ::MIME"text/html", r::ResolvedAnnotation)
    _showas(io, MIME"text/html"(), r.value)
    if r.label !== NoLabel()
        print(io, "<sup>")
        _showas(io, MIME"text/html"(), r.label)
        print(io, "</sup>")
    end
end

function _showas(io::IO, ::MIME"text/html", s::Superscript)
    print(io, "<sup>")
    _showas(io, MIME"text/html"(), s.super)
    print(io, "</sup>")
end

function _showas(io::IO, ::MIME"text/html", s::Subscript)
    print(io, "<sub>")
    _showas(io, MIME"text/html"(), s.sub)
    print(io, "</sub>")
end

function print_html_cell(io, cell::SpannedCell, rowgaps, colgaps)
    print(io, "<td")
    nrows, ncols = map(length, cell.span)
    if nrows > 1
        print(io, " rowspan=\"$nrows\"")
    end
    if ncols > 1
        print(io, " colspan=\"$ncols\"")
    end
    print(io, " style=\"")
    if cell.style.bold
        print(io, "font-weight:bold;")
    end
    if cell.style.italic
        print(io, "font-style:italic;")
    end
    if cell.style.underline
        print(io, "text-decoration:underline;")
    end
    padding_left = get(colgaps, cell.span[2].start-1, nothing)
    if cell.style.indent_pt != 0 || padding_left !== nothing
        pl = something(padding_left, 0.0) / 2 + cell.style.indent_pt
        print(io, "padding-left:$(pl)pt;")
    end
    padding_right = get(colgaps, cell.span[2].stop, nothing)
    if padding_right !== nothing
        print(io, "padding-right:$(padding_right/2)pt;")
    end
    if cell.style.border_bottom
        print(io, "border-bottom:1px solid black; ")
    end
    padding_bottom = get(rowgaps, cell.span[1].stop, nothing)
    if padding_bottom !== nothing
        print(io, "padding-bottom: $(padding_bottom/2)pt;")
    elseif cell.style.border_bottom
        print(io, "padding-bottom: 0.25em;") # needed to make border bottoms look less cramped
    end
    padding_top = get(rowgaps, cell.span[1].start-1, nothing)
    if padding_top !== nothing
        print(io, "padding-top: $(padding_top/2)pt;")
    end
    if cell.style.valign ∉ (:top, :center, :bottom)
        error("Invalid valign $(repr(cell.style.valign)). Options are :top, :center, :bottom.")
    end
    if cell.style.valign !== :top
        v = cell.style.valign === :center ? "middle" : "bottom"
        print(io, "vertical-align:$v;")
    end
    if cell.style.halign ∉ (:left, :center, :right)
        error("Invalid halign $(repr(cell.style.halign)). Options are :left, :center, :right.")
    end
    print(io, "text-align:$(cell.style.halign);")

    print(io, "\">")
    if cell.value !== nothing
        _showas(io, MIME"text/html"(), cell.value)
    end
    print(io, "</td>")
    return
end

function print_empty_html_cell(io)
    print(io, "<td class=\"st-empty\"></td>")
end

function print_html_styles(io, table_styles)
    println(io, "<style>")
    for (key, dict) in _sorted_dict(table_styles)
        println(io, key, " {")
        for (subkey, value) in _sorted_dict(dict)
            println(io, "    ", subkey, ": ", value, ";")
        end
        println(io, "}")
    end
    println(io, "</style>")
end

function _sorted_dict(d)
    ps = collect(pairs(d))
    sort!(ps, by = first)
end

# Escaping functions, copied from PrettyTables, MIT licensed.

function _str_html_escaped(
    io::IO,
    s::AbstractString,
    replace_newline::Bool = false,
    escape_html_chars::Bool = true,
)
    a = Iterators.Stateful(s)
    for c in a
        if isascii(c)
            c == '\n'          ? (replace_newline ? print(io, "<BR>") : print(io, "\\n")) :
            c == '&'           ? (escape_html_chars ? print(io, "&amp;")  : print(io, c)) :
            c == '<'           ? (escape_html_chars ? print(io, "&lt;")   : print(io, c)) :
            c == '>'           ? (escape_html_chars ? print(io, "&gt;")   : print(io, c)) :
            c == '"'           ? (escape_html_chars ? print(io, "&quot;") : print(io, c)) :
            c == '\''          ? (escape_html_chars ? print(io, "&apos;") : print(io, c)) :
            c == '\0'          ? print(io, escape_nul(peek(a))) :
            c == '\e'          ? print(io, "\\e") :
            c == '\\'          ? print(io, "\\\\") :
            '\a' <= c <= '\r'  ? print(io, '\\', "abtnvfr"[Int(c)-6]) :
            # c == '%'           ? print(io, "\\%") :
            isprint(c)         ? print(io, c) :
                                 print(io, "\\x", string(UInt32(c), base = 16, pad = 2))
        elseif !Base.isoverlong(c) && !Base.ismalformed(c)
            isprint(c)         ? print(io, c) :
            c <= '\x7f'        ? print(io, "\\x", string(UInt32(c), base = 16, pad = 2)) :
            c <= '\uffff'      ? print(io, "\\u", string(UInt32(c), base = 16, pad = Base.need_full_hex(peek(a)) ? 4 : 2)) :
                                 print(io, "\\U", string(UInt32(c), base = 16, pad = Base.need_full_hex(peek(a)) ? 8 : 4))
        else # malformed or overlong
            u = bswap(reinterpret(UInt32, c))
            while true
                print(io, "\\x", string(u % UInt8, base = 16, pad = 2))
                (u >>= 8) == 0 && break
            end
        end
    end
end

function _str_html_escaped(
    s::AbstractString,
    replace_newline::Bool = false,
    escape_html_chars::Bool = true
)
    return sprint(
        _str_html_escaped,
        s,
        replace_newline,
        escape_html_chars;
        sizehint = lastindex(s)
    )
end
