Base.show(io::IO, ::MIME"QuartoNotebookRunner/typst", t::Table) = show(io, MIME"text/typst"(), t)

function Base.show(io::IO, M::MIME"text/typst", ct::Table)
    ct = postprocess(ct)

    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    column_alignments = most_common_column_alignments(cells, matrix)

    # When `full_width` is set, proportional `fr` weights fill the text column (matching the DOCX `tblW
    # pct=100` stretch); otherwise N content-sized columns.
    columns_spec = ct.full_width ? "(" * join(("$(w)fr" for w in _typst_column_weights(cells, matrix)), ", ") * ")" :
        string(size(matrix, 2))

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)
    
    print(io, """

    #table(
        rows: $(size(matrix, 1)),
        columns: $(columns_spec),
        column-gutter: 0.25em,
        align: ($(join(column_alignments, ", "))),
        stroke: none,
    """)

    _colspan(n) = n == 1 ? "" : "colspan: $n"
    _rowspan(n) = n == 1 ? "" : "rowspan: $n"
    function _align(style, icol)
        halign = style.halign === column_alignments[icol] ?  nothing : typst_halign(style.halign)
        valign = style.valign === :top ?  nothing : typst_valign(style.valign)
        if halign === nothing && valign === nothing
            ""
        elseif halign === nothing
            "align: $valign"
        elseif valign === nothing
            "align: $halign"
        else
            "align: $halign + $valign"
        end
    end

    running_index = 0

    indentprint(level, args...) = print(io, "    " ^ level, args...)
    indentprintln(level, args...) = indentprint(level, args..., "\n")
    
    if ct.header !== nothing
        print(io, "    table.header(\n    ")
    end

    println(io, "    table.hline(y: 0, stroke: 1pt),")

    for row in 1:size(matrix, 1)
        level = (ct.header !== nothing && row <= ct.header) ? 2 : 1
        if row == ct.footer
            indentprintln(level, "table.hline(y: $(row-1), stroke: 0.75pt),")
        end
        for col in 1:size(matrix, 2)
            index = matrix[row, col]
            if index > running_index
                cell = cells[index]
                if cell.value === nothing
                    indentprintln(level, "[],")
                else
                    options = join(filter(!isempty, [
                        _rowspan(length(cell.span[1])),
                        _colspan(length(cell.span[2])),
                        _align(cell.style, col)
                    ]), ", ")
                    if isempty(options)
                        indentprint(level, "[")
                    else
                        indentprint(level, "table.cell(", options, ")[")
                    end
                    cell.style.bold && print(io, "*")
                    cell.style.italic && print(io, "_")
                    cell.style.underline && print(io, "#underline[")
                    cell.style.indent_pt > 0 && print(io, "#h($(cell.style.indent_pt)pt)")
                    _showas(io, M, cell.value)
                    cell.style.underline && print(io, "]")
                    cell.style.italic && print(io, "_")
                    cell.style.bold && print(io, "*")
                    print(io, "],\n")
                end
                if cell.style.border_bottom
                    indentprintln(level, "table.hline(y: $(row), start: $(cell.span[2].start-1), end: $(cell.span[2].stop), stroke: 0.75pt),")
                end
                running_index = index
            end
        end
        if row == ct.header
            indentprintln(level, "table.hline(y: $(row), stroke: 0.75pt),")
            indentprintln(level-1, "),")
        end
    end

    println(io, "    table.hline(y: $(size(matrix, 1)), stroke: 1pt),")

    if !isempty(annotations) || !isempty(ct.footnotes)
        align = _align(CellStyle(halign = :left), 1)
        colspan = "colspan: $(size(matrix, 2))"
        options = join(filter(!isempty, [align, colspan]), ", ")
        print(io, "    table.cell($options)[#text(size: 0.8em)[")

        if (!isempty(annotations) || !isempty(ct.footnotes)) && ct.linebreak_footnotes
            print(io, "\n        ")
        end

        for (i, (annotation, label)) in enumerate(annotations)
            i > 1 && print(io, ct.linebreak_footnotes ? "\\\n        " : "#h(1.5em, weak: true)")
            if label !== NoLabel()
                print(io, "#super[")
                _showas(io, MIME"text/typst"(), label)
                print(io, "]")
            end
            _showas(io, MIME"text/typst"(), annotation)
        end

        for (i, footnote) in enumerate(ct.footnotes)
            (!isempty(annotations) || i > 1) && print(io, ct.linebreak_footnotes ? "\\\n        " : "#h(1.5em, weak: true)")
            _showas(io, MIME"text/typst"(), footnote)
        end

        if (!isempty(annotations) || !isempty(ct.footnotes)) && ct.linebreak_footnotes
            print(io, "\n    ")
        end

        println(io, "]],") # table.cell()[#text(..)[
    end

    println(io, ")") # table()
    return
end

function _showas(io::IO, M::MIME"text/typst", m::Multiline)
    for (i, v) in enumerate(m.values)
        i > 1 && print(io, " #linebreak() ")
        _showas(io, M, v)
    end
end

function typst_halign(halign)
    halign === :left ? "left" : halign === :right ? "right" : halign === :center ? "center" : error("Invalid halign $(halign)")
end
function typst_valign(valign)
    valign === :top ? "top" : valign === :bottom ? "bottom" : valign === :center ? "horizon" : error("Invalid valign $(s.valign)")
end

function _showas(io::IO, ::MIME"text/typst", r::ResolvedAnnotation)
    _showas(io, MIME"text/typst"(), r.value)
    if r.label !== NoLabel()
        print(io, "#super[")
        _showas(io, MIME"text/typst"(), r.label)
        print(io, "]")
    end
end

function _showas(io::IO, ::MIME"text/typst", s::Superscript)
    print(io, "#super[")
    _showas(io, MIME"text/typst"(), s.super)
    print(io, "]")
end

function _showas(io::IO, ::MIME"text/typst", s::Subscript)
    print(io, "#sub[")
    _showas(io, MIME"text/typst"(), s.sub)
    print(io, "]")
end

function _showas(io::IO, M::MIME"text/typst", s::Styled)
    s.bold === true && print(io, "*")
    s.italic === true && print(io, "_")
    s.underline === true && print(io, "#underline[")
    if s.color !== nothing
        print(io, "#text(fill: rgb($(join(round.(Int, s.color.rgb .* 255), ","))))[")
    end
    _showas(io, M, s.value)
    s.color !== nothing && print(io, "]")
    s.underline === true && print(io, "]")
    s.italic === true && print(io, "_")
    s.bold === true && print(io, "*")
end

function _str_typst_escaped(io::IO, s::AbstractString)
    print(io, "#")
    _s = s isa String ? s : String(s)
    # it's much more difficult to try and make typst markup out of a string by escaping special characters
    # than it is to just use the #"some string" syntax where typst handles everything itself.
    # The only characters that need to be escaped this way are " and \ but `show` already handles that.
    # However, we need to undo the escaping of $ which is the only character that triggers special
    # behavior in a String and is therefore escaped to \$ in `show`
    r = repr(_s)
    replacers = (
        r"(?<!\\)(?:\\\\)*\\\$" => "\$",
    )
    if VERSION >= v"1.10"
        replace(io, r, replacers...)
    else
        rr = replace(r, replacers...)
        print(io, rr)
    end
    return
end

function _str_typst_escaped(s::AbstractString)
    return sprint(_str_typst_escaped, s, sizehint=lastindex(s))
end

function _showas(io::IO, ::MIME"text/typst", r::RectPlot)
    print(io, "#image.decode(\"")
    show(io, MIME"image/svg+xml"(), r)
    print(io, """\")""")
end

# Per-column `fr` weights so the Typst table fills the text width. A column's weight is proportional to its
# widest single-column cell (colspans don't count); empty columns get weight 1, normalised to the narrowest.
function _typst_column_weights(cells, matrix)
    ncols = size(matrix, 2)
    widths = zeros(Float64, ncols)
    for cell in cells
        cell.value === nothing && continue
        length(cell.span[2]) == 1 || continue
        icol = cell.span[2].start
        widths[icol] = max(widths[icol], _typst_content_width(cell.value))
    end
    for icol in 1:ncols
        widths[icol] == 0 && (widths[icol] = 1.0)
    end
    minw = minimum(widths)
    return [round(w / minw, digits = 2) for w in widths]
end

# Rough rendered width of a cell value, in character units, used only to proportion `full_width` columns.
# One method per value type; `Multiline` takes its widest line and `RectPlot` a fixed width so they don't inflate it.
_typst_content_width(::Nothing) = 0.0
_typst_content_width(s::AbstractString) = isempty(s) ? 0.0 : Float64(maximum(textwidth, split(s, '\n')))
_typst_content_width(m::Multiline) = maximum(_typst_content_width, m.values; init = 0.0)
_typst_content_width(c::Concat) = sum(_typst_content_width, c.args; init = 0.0)
_typst_content_width(s::Superscript) = 0.7 * _typst_content_width(s.super)
_typst_content_width(s::Subscript) = 0.7 * _typst_content_width(s.sub)
_typst_content_width(s::Styled) = _typst_content_width(s.value)
_typst_content_width(r::ResolvedAnnotation) =
    _typst_content_width(r.value) + (r.label === NoLabel() ? 0.0 : 0.7 * _typst_content_width(r.label))
_typst_content_width(c::CategoricalValue) = _typst_content_width(CategoricalArrays.DataAPI.unwrap(c))
_typst_content_width(::RectPlot) = 20.0
# Fallback: measure the rendered markup. This overestimates for styled/math content, which is fine since it
# only proportions opt-in `full_width` columns. Exact widths are Word/Typst's job.
_typst_content_width(x) = Float64(textwidth(sprint((io, v) -> _showas(io, MIME"text/typst"(), v), x)))
