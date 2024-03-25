function Base.show(io::IO, M::MIME"text/typst", ct::Table)
    ct = postprocess(ct)

    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)
    
    print(io, """

    #[
    #import "@preview/tablex:0.0.8": tablex, cellx, hlinex

    #tablex(
        columns: $(size(matrix, 2)),
        auto-vlines: false,
        auto-hlines: false,
        column-gutter: 0.25em,
    """)

    println(io, "    hlinex(y: 0, stroke: 1pt),")

    running_index = 0
    for row in 1:size(matrix, 1)
        if row == ct.footer
            println(io, "    hlinex(y: $(row-1), stroke: 0.75pt),")
        end
        for col in 1:size(matrix, 2)
            index = matrix[row, col]
            if index > running_index
                cell = cells[index]
                if cell.value !== nothing
                    print(io, "    cellx(colspan: $(length(cell.span[2])), x: $(col-1), y: $(row-1), align: $(typst_align(cell.style)))[")
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
                    println(io, "    hlinex(y: $(row), start: $(cell.span[2].start-1), end: $(cell.span[2].stop), stroke: 0.75pt),")
                end
                running_index = index
            end
        end
        if row == ct.header
            println(io, "    hlinex(y: $(row), stroke: 0.75pt),")
        end
    end

    println(io, "    hlinex(y: $(size(matrix, 1)), stroke: 1pt),")

    if !isempty(annotations) || !isempty(ct.footnotes)
        print(io, "    cellx(colspan: $(size(matrix, 2)), x: 0, y: $(size(matrix, 1)))[")

        for (i, (annotation, label)) in enumerate(annotations)
            i > 1 && print(io, "#h(1.5em, weak: true)")
            if label !== NoLabel()
                print(io, "#super[")
                _showas(io, MIME"text/typst"(), label)
                print(io, "]")
            end
            print(io, "#text(size: 0.8em)[")
            _showas(io, MIME"text/typst"(), annotation)
            print(io, "]")
        end

        for (i, footnote) in enumerate(ct.footnotes)
            (!isempty(annotations) || i > 1) && print(io, "#h(1.5em, weak: true)")
            _showas(io, MIME"text/typst"(), footnote)
        end

        print(io, "],") # cellx()[
    end

    println(io, "\n)") # tablex(
    println(io, "]") # #[
    return
end

function _showas(io::IO, M::MIME"text/typst", m::Multiline)
    for (i, v) in enumerate(m.values)
        i > 1 && print(io, " #linebreak() ")
        _showas(io, M, v)
    end
end

function typst_align(s::CellStyle)
    string(
        s.halign === :left ? "left" : s.halign === :right ? "right" : s.halign === :center ? "center" : error("Invalid halign $(s.halign)"),
        " + ",
        s.valign === :top ? "top" : s.valign === :bottom ? "bottom" : s.valign === :center ? "horizon" : error("Invalid valign $(s.valign)"),
    )
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

function _str_typst_escaped(io::IO, s::AbstractString)
    escapable_special_chars = raw"\$#*_"
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
