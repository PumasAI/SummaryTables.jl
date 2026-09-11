const OUTER_RULE_CHAR = '━'
const INNER_RULE_CHAR = '─'

to_em(l::Em) = l.value
to_em(l::Pt) = l.value / 12
length_to_chars(l::Length) = round(Int, 2 * to_em(l))
length_to_lines(l::Length) = round(Int, to_em(l))

struct TextLayout
    cells::Vector{SpannedCell}
    blocks::Vector{Vector{String}}
    matrix::Matrix{Int}
    colwidths::Vector{Int}
    rowheights::Vector{Int}
    colseps::Vector{Int}
    rowgaps::Vector{Int}
end

function Base.show(io::IO, ::MIME"text/plain", ct::Table)
    get(io, :limit, false) || return print_text_table(io, ct)
    maxwidth = displaysize(io)[2]
    for line in eachline(IOBuffer(sprint(print_text_table, ct)))
        println(io, truncate_line(line, maxwidth))
    end
end

function truncate_line(line, maxwidth)
    textwidth(line) <= maxwidth && return line
    width = 0
    for (i, c) in pairs(line)
        width += textwidth(c)
        width >= maxwidth && return string(line[1:prevind(line, i)], '…')
    end
    return line
end

function print_text_table(io::IO, ct::Table)
    ct = postprocess(ct)
    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))
    cells, annotations = resolve_annotations(cells)
    matrix = create_cell_matrix(cells)
    nrows, ncols = size(matrix)
    validate_rowgaps(ct.rowgaps, nrows)
    validate_colgaps(ct.colgaps, ncols)

    layout = text_layout(cells, matrix, ct)
    width = sum(layout.colwidths) + sum(layout.colseps)

    println(io, OUTER_RULE_CHAR ^ width)
    for row in 1:nrows
        for line in row_lines(layout, row)
            println(io, line)
        end
        if has_rule_below(ct, row)
            println(io, INNER_RULE_CHAR ^ width)
        elseif any(c -> c.span[1].stop == row && c.style.border_bottom, cells)
            println(io, cell_border_line(layout, row))
        end
    end
    println(io, OUTER_RULE_CHAR ^ width)

    print_text_footnotes(io, annotations, ct, width)
    return
end

has_rule_below(ct::Table, row) = row == ct.header || (ct.footer !== nothing && row == ct.footer - 1)

function text_layout(cells, matrix, ct::Table)
    nrows, ncols = size(matrix)
    colseps = fill(length_to_chars(ct.style.column_padding), ncols - 1)
    for (i, gap) in Dict(ct.colgaps)
        colseps[i] += max(1, length_to_chars(gap))
    end
    rowgap_lines = zeros(Int, nrows - 1)
    for (i, gap) in Dict(ct.rowgaps)
        has_rule_below(ct, i) && continue
        rowgap_lines[i] = max(1, length_to_lines(gap))
    end

    lines = [cell_text_lines(cell) for cell in cells]
    width_requirements = [SpanRequirement(cell.span[2], text_width(l)) for (cell, l) in zip(cells, lines)]
    height_requirements = [SpanRequirement(cell.span[1], length(l)) for (cell, l) in zip(cells, lines)]
    colwidths = fit_extents(ncols, colseps, width_requirements)
    rowheights = fit_extents(nrows, rowgap_lines, height_requirements)

    blocks = map(cells, lines) do cell, l
        width = span_extent(cell.span[2], colwidths, colseps)
        height = span_extent(cell.span[1], rowheights, rowgap_lines)
        align_block(l, width, height, cell.style)
    end
    return TextLayout(cells, blocks, matrix, colwidths, rowheights, colseps, rowgap_lines)
end

function cell_text_lines(cell::SpannedCell)
    cell.value === nothing && return [""]
    s = sprint(io -> _showas(io, MIME"text/plain"(), cell.value))
    indent = " " ^ length_to_chars(cell.style.indent)
    return [indent * line for line in split(s, '\n')]
end

text_width(lines) = maximum(textwidth, lines; init = 0)

"""
The columns (or rows) in `span` must together be at least `minimum_size`
characters wide (or lines tall), separators between them included.
"""
struct SpanRequirement
    span::UnitRange{Int}
    minimum_size::Int
end

span_extent(span, extents, seps) = sum(extents[span]) + sum(seps[span.start:span.stop-1]; init = 0)

function fit_extents(n, seps, requirements::Vector{SpanRequirement})
    extents = zeros(Int, n)
    for req in narrowest_first(requirements)
        missing_space = req.minimum_size - span_extent(req.span, extents, seps)
        missing_space > 0 && grow_evenly!(extents, req.span, missing_space)
    end
    return extents
end

narrowest_first(requirements) = sort(requirements, by = req -> length(req.span))

function grow_evenly!(extents, span, amount)
    per_extent, remainder = divrem(amount, length(span))
    for (i, k) in enumerate(span)
        extents[k] += per_extent + (i <= remainder)
    end
end

function align_block(lines, width, height, style::CellStyle)
    padded = [pad_line(line, width, style.halign) for line in lines]
    free = height - length(padded)
    top = style.valign === :top ? 0 :
        style.valign === :bottom ? free :
        style.valign === :center ? div(free, 2) :
        error("Invalid valign $(repr(style.valign)). Options are :top, :center, :bottom.")
    bottom = free - top
    return [blank_lines(top, width); padded; blank_lines(bottom, width)]
end

blank_lines(n, width) = n == 0 ? String[] : fill(" " ^ width, n)

function pad_line(line, width, halign)
    halign === :left && return rpad(line, width)
    halign === :right && return lpad(line, width)
    halign === :center || error("Invalid halign $(repr(halign)). Options are :left, :center, :right.")
    return rpad(lpad(line, textwidth(line) + div(width - textwidth(line), 2)), width)
end

function row_lines(layout::TextLayout, row::Int)
    (; cells, blocks, matrix, colwidths, rowheights, colseps, rowgaps) = layout
    nlines = rowheights[row] + (row < length(rowheights) ? rowgaps[row] : 0)
    return map(1:nlines) do k
        io = IOBuffer()
        col = 1
        while col <= size(matrix, 2)
            index = matrix[row, col]
            cell = cells[index]
            rowspan, colspan = cell.span
            line_in_block = sum(rowheights[rowspan.start:row-1] .+ rowgaps[rowspan.start:row-1]; init = 0) + k
            block = blocks[index]
            print(io, line_in_block <= length(block) ? block[line_in_block] : " " ^ span_extent(colspan, colwidths, colseps))
            col = colspan.stop + 1
            col <= size(matrix, 2) && print(io, " " ^ colseps[col - 1])
        end
        String(take!(io))
    end
end

function cell_border_line(layout::TextLayout, row::Int)
    (; cells, matrix, colwidths, colseps) = layout
    io = IOBuffer()
    col = 1
    while col <= size(matrix, 2)
        cell = cells[matrix[row, col]]
        colspan = cell.span[2]
        bordered = cell.span[1].stop == row && cell.style.border_bottom
        print(io, (bordered ? INNER_RULE_CHAR : ' ') ^ span_extent(colspan, colwidths, colseps))
        col = colspan.stop + 1
        col <= size(matrix, 2) && print(io, " " ^ colseps[col - 1])
    end
    return String(take!(io))
end

function print_text_footnotes(io::IO, annotations, ct::Table, width::Int)
    notes = String[]
    for (annotation, label) in annotations
        push!(notes, sprint() do io
            if label !== NoLabel()
                _showas(io, MIME"text/plain"(), Superscript(label))
                print(io, ' ')
            end
            _showas(io, MIME"text/plain"(), annotation)
        end)
    end
    for footnote in ct.footnotes
        push!(notes, sprint(io -> _showas(io, MIME"text/plain"(), footnote)))
    end
    isempty(notes) && return
    blocks = ct.linebreak_footnotes ? notes : [join(notes, "  ")]
    for line in Iterators.flatten(split.(blocks, '\n'))
        println(io, rstrip(pad_line(line, max(width, textwidth(line)), ct.style.footnote_halign)))
    end
end

function _showas(io::IO, M::MIME"text/plain", m::Multiline)
    for (i, value) in enumerate(m.values)
        i > 1 && print(io, '\n')
        _showas(io, M, value)
    end
end

function _showas(io::IO, M::MIME"text/plain", r::ResolvedAnnotation)
    _showas(io, M, r.value)
    r.label === NoLabel() || _showas(io, M, Superscript(r.label))
end

_showas(io::IO, M::MIME"text/plain", s::Styled) = _showas(io, M, s.value)

function _showas(io::IO, ::MIME"text/plain", c::CatFreqPlot)
    for (i, fraction) in enumerate(c.fractions)
        i > 1 && print(io, '\n')
        print(io, '█' ^ round(Int, fraction * 10))
    end
end

const SPARK_CHARS = collect("▁▂▃▄▅▆▇█")

function _showas(io::IO, ::MIME"text/plain", r::RectPlot)
    for rect in sort(r.rects, by = rect -> rect.x[1])
        height = (rect.y[2] - rect.y[1]) / r.size[2]
        print(io, iszero(height) ? ' ' : SPARK_CHARS[clamp(ceil(Int, height * length(SPARK_CHARS)), 1, length(SPARK_CHARS))])
    end
end
