Base.show(io::IO, ::MIME"QuartoNotebookRunner/typst", t::Table) = show(io, MIME"text/typst"(), t)

function Base.show(io::IO, M::MIME"text/typst", ct::Table)
    ct = postprocess(ct)

    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    column_alignments = most_common_column_alignments(cells, matrix)

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)
    
    print(io, """

    #table(
        rows: $(size(matrix, 1)),
        columns: $(size(matrix, 2)),
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
    escapable_special_chars = raw"\$#*_<@`"
    a = Iterators.Stateful(s)
    for c in a
        if c in escapable_special_chars
            print(io, '\\', c)
        else
            print(io, c)
        end
    end
end

function _str_typst_escaped(s::AbstractString)
    return sprint(_str_typst_escaped, s, sizehint=lastindex(s))
end

function _showas(io::IO, ::MIME"text/typst", r::RectPlot)
    print(io, "#image.decode(\"")
    show(io, MIME"image/svg+xml"(), r)
    print(io, """\")""")
end
