function Base.show(io::IO, ::MIME"text/latex", ct::Table)
    ct = postprocess(ct)
    
    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)

    column_alignments = most_common_column_alignments(cells, matrix)
    colspec = let
        iob = IOBuffer()
        for (icol, al) in enumerate(column_alignments)
            char = al === :center ? 'c' :
                al === :right ? 'r' :
                al === :left ? 'l' : error("Invalid align $al")
            print(iob, char)
            if haskey(colgaps, icol)
                print(iob, "@{\\hskip $(colgaps[icol])pt}")
            end
        end
        String(take!(iob))
    end

    print(io, """
    \\begin{table}[!ht]
    \\setlength\\tabcolsep{0pt}
    \\centering
    \\begin{threeparttable}
    \\begin{tabular}{@{\\extracolsep{2ex}}*{$(size(matrix, 2))}{$colspec}}
    \\toprule
    """)

    running_index = 0
    bottom_borders = Dict{Int, Vector{UnitRange}}()

    for row in axes(matrix, 1)
        for col in axes(matrix, 2)
            index = matrix[row, col]
            column_align = column_alignments[col]
            if index == 0
                col > 1 && print(io, " & ")
                print_empty_latex_cell(io)
            else
                cell = cells[index]
                
                if cell.style.border_bottom && col == cell.span[2].start
                    lastrow = cell.span[1].stop
                    ranges = get!(bottom_borders, lastrow) do
                        UnitRange[]
                    end
                    border_columns = cell.span[2]
                    push!(ranges, border_columns)
                end

                halign_char = cell.style.halign === :left ? 'l' :
                             cell.style.halign === :center ? 'c' :
                             cell.style.halign === :right ? 'r' :
                             error("Unknown halign $(cell.style.halign)")
                valign_char = cell.style.valign === :top ? 't' :
                            cell.style.valign === :center ? 'c' :
                            cell.style.valign === :bottom ? 'b' :
                            error("Unknown valign $(cell.style.valign)")

                nrow = length(cell.span[1])
                ncol = length(cell.span[2])
                use_multicolumn = ncol > 1 || cell.style.halign !== column_align
                
                if index > running_index
                    # this is the top-left part of a new cell which can be a single or multicolumn/row cell
                    col > 1 && print(io, " & ")
                    if cell.value !== nothing
                        use_multicolumn && print(io, "\\multicolumn{$ncol}{$halign_char}{")
                        nrow > 1 && print(io, "\\multirow[$valign_char]{$nrow}{*}{")
                        print_latex_cell(io, cell)
                        nrow > 1 && print(io, "}")
                        use_multicolumn && print(io, "}")
                    end
                    running_index = index
                elseif col == cell.span[2][begin]
                    # we need to print additional multicolumn statements in the second to last
                    # row of a multirow
                    col > 1 && print(io, " & ")
                    if ncol > 1
                        print(io, "\\multicolumn{$ncol}{$halign_char}{}")
                    end
                end
            end
        end

        print(io, " \\\\")
        if haskey(rowgaps, row)
            print(io, "[$(rowgaps[row])pt]")
        end
        println(io)
        # draw any bottom borders that have been registered to be drawn below this row
        if haskey(bottom_borders, row)
            for range in bottom_borders[row]
                print(io, "\\cmidrule{$(range.start)-$(range.stop)}")
            end
            print(io, "\n")
        end

        if row == ct.header
            print(io, "\\midrule\n")
        end
        if row + 1 == ct.footer
            print(io, "\\midrule\n")
        end
    end
    print(io, "\\bottomrule\n")
    print(io, raw"""
    \end{tabular}
    """)
    if !isempty(annotations) || !isempty(ct.footnotes)
        println(io, "\\begin{tablenotes}[flushleft$(ct.linebreak_footnotes ? "" : ",para")]")
        println(io, raw"\footnotesize")
        for (annotation, label) in annotations
            if label !== NoLabel()
                print(io, raw"\item[")
                _showas(io, MIME"text/latex"(), label)
                print(io, "]")
            end
            _showas(io, MIME"text/latex"(), annotation)
            println(io)
        end
        for footnote in ct.footnotes
            print(io, raw"\item[]")
            _showas(io, MIME"text/latex"(), footnote)
            println(io)
        end
        println(io, raw"\end{tablenotes}")
    end

    print(io, raw"""
    \end{threeparttable}
    \end{table}
    """)

    # after end{tabular}:


    return
end

function most_common_column_alignments(cells, matrix)
    column_alignment_counts = StatsBase.countmap((cell.span[2], cell.style.halign) for cell in cells if cell.value !== nothing)
    
    alignments = (:center, :left, :right)
    return map(1:size(matrix,2)) do i_col
        i_max = argmax(get(column_alignment_counts, (i_col:i_col, al), 0) for al in alignments)
        return alignments[i_max]
    end
end

function get_class_styles(class, table_styles)
    properties = Dict{Symbol, Any}()
    if haskey(table_styles, class)
        merge!(properties, table_styles[class])
    end
    return properties
end

print_empty_latex_cell(io) = nothing

function print_latex_cell(io, cell::SpannedCell)
    cell.value === nothing && return

    st = cell.style
    st.indent_pt > 0 && print(io, "\\hspace{$(st.indent_pt)pt}")
    st.bold && print(io, "\\textbf{")
    st.italic && print(io, "\\textit{")
    st.underline && print(io, "\\underline{")
    _showas(io, MIME"text/latex"(), cell.value)
    st.underline && print(io, "}")
    st.italic && print(io, "}")
    st.bold && print(io, "}")
    return
end

function _showas(io::IO, ::MIME"text/latex", m::Multiline)
    print(io, "\\begin{tabular}{@{}c@{}}")
    for (i, value) in enumerate(m.values)
        i > 1 && print(io, " \\\\ ")
        _showas(io, MIME"text/latex"(), value)
    end
    print(io, "\\end{tabular}")
end

function _showas(io::IO, m::MIME"text/latex", s::Superscript)
    print(io, "\\textsuperscript{")
    _showas(io, m, s.super)
    print(io, "}")
end

function _showas(io::IO, m::MIME"text/latex", s::Subscript)
    print(io, "\\textsubscript{")
    _showas(io, m, s.sub)
    print(io, "}")
end

function _showas(io::IO, ::MIME"text/latex", r::ResolvedAnnotation)
    _showas(io, MIME"text/latex"(), r.value)
    if r.label !== NoLabel()
        print(io, "\\tnote{")
        _showas(io, MIME"text/latex"(), r.label)
        print(io, "}")
    end
end

function _str_latex_escaped(io::IO, s::AbstractString)
    escapable_special_chars = raw"&%$#_{}"
    a = Iterators.Stateful(s)
    for c in a
        if c in escapable_special_chars
            print(io, '\\', c)
        elseif c === '\\'
            print(io, "\\textbackslash{}")
        elseif c === '~'
            print(io, "\\textasciitilde{}")
        elseif c === '^'
            print(io, "\\textasciicircum{}")
        elseif isascii(c)
            c == '\0'          ? print(io, Base.escape_nul(peek(a))) :
            c == '\e'          ? print(io, "\\e") :
          # c == '\\'          ? print(io, "\\\\") :
            '\a' <= c <= '\r'  ? print(io, '\\', "abtnvfr"[Int(c)-6]) :
            c == '%'           ? print(io, "\\%") :
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

function _str_latex_escaped(s::AbstractString)
    return sprint(_str_latex_escaped, s, sizehint=lastindex(s))
end
