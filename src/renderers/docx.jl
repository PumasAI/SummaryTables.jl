const DOCX_OUTER_RULE_SIZE = 8 * WriteDocx.eighthpt
const DOCX_INNER_RULE_SIZE = 4 * WriteDocx.eighthpt
const DOCX_ANNOTATION_FONTSIZE = 8 * WriteDocx.pt

"""
    to_docx(ct::Table)

Creates a `WriteDocx.Table` node for `Table` `ct` which can be inserted into
a `WriteDocx` document.
"""
function to_docx(ct::Table)
    ct = postprocess(ct)
    
    cells = sort(to_spanned_cells(ct.cells), by = x -> (x.span[1].start, x.span[2].start))

    cells, annotations = resolve_annotations(cells)

    matrix = create_cell_matrix(cells)

    running_index = 0
    tablerows = WriteDocx.TableRow[]

    function full_width_border_row(sz; header = false)
        WriteDocx.TableRow(
            [WriteDocx.TableCell([WriteDocx.Paragraph([])],
            WriteDocx.TableCellProperties(
                gridspan = size(matrix, 2),
                borders = WriteDocx.TableCellBorders(
                    bottom = WriteDocx.TableCellBorder(
                        color = WriteDocx.automatic,
                        size = sz,
                        style = WriteDocx.BorderStyle.single,
                    ),
                    start = WriteDocx.TableCellBorder(color = WriteDocx.automatic, size = sz, style = WriteDocx.BorderStyle.none),
                    stop = WriteDocx.TableCellBorder(color = WriteDocx.automatic, size = sz, style = WriteDocx.BorderStyle.none),
                ),
                hide_mark = true,
            ))],
            WriteDocx.TableRowProperties(; header)
        )
    end

    push!(tablerows, full_width_border_row(DOCX_OUTER_RULE_SIZE; header = true))

    validate_rowgaps(ct.rowgaps, size(matrix, 1))
    validate_colgaps(ct.colgaps, size(matrix, 2))
    rowgaps = Dict(ct.rowgaps)
    colgaps = Dict(ct.colgaps)

    for row in 1:size(matrix, 1)        
        rowcells = WriteDocx.TableCell[]

        for col in 1:size(matrix, 2)
            index = matrix[row, col]
            if index == 0
                push!(rowcells, WriteDocx.TableCell([
                    WriteDocx.Paragraph([
                        WriteDocx.Run([
                            WriteDocx.Text("")
                        ])
                    ])
                ]))
            else
                cell = cells[index]
                is_firstcol = col == cell.span[2].start
                if !is_firstcol
                    continue
                end
                push!(rowcells, docx_cell(row, col, cell, rowgaps, colgaps))
                running_index = index
            
            end
        end
        push!(tablerows, WriteDocx.TableRow(rowcells, WriteDocx.TableRowProperties(; header = ct.header !== nothing && row <= ct.header)))

        if row == ct.header
            push!(tablerows, full_width_border_row(DOCX_INNER_RULE_SIZE; header = true))
        end
    end

    push!(tablerows, full_width_border_row(DOCX_OUTER_RULE_SIZE))

    separator_element = ct.linebreak_footnotes ? WriteDocx.Break() : WriteDocx.Text("    ")

    if !isempty(annotations) || !isempty(ct.footnotes)
        elements = []
        for (i, (annotation, label)) in enumerate(annotations)
            i > 1 && push!(elements, WriteDocx.Run([separator_element]))
            if label !== NoLabel()
                push!(elements, WriteDocx.Run([WriteDocx.Text(docx_sprint(label)), WriteDocx.Text(" ")],
                    WriteDocx.RunProperties(valign = WriteDocx.VerticalAlignment.superscript)))
            end
            push!(elements, WriteDocx.Run([WriteDocx.Text(docx_sprint(annotation))],
                WriteDocx.RunProperties(size = DOCX_ANNOTATION_FONTSIZE)))
        end
        for (i, footnote) in enumerate(ct.footnotes)
            (!isempty(annotations) || i > 1) && push!(elements, WriteDocx.Run([separator_element]))
            push!(elements, WriteDocx.Run([WriteDocx.Text(docx_sprint(footnote))],
                WriteDocx.RunProperties(size = DOCX_ANNOTATION_FONTSIZE)))
        end
        annotation_row = WriteDocx.TableRow([WriteDocx.TableCell(
            [WriteDocx.Paragraph(elements)],
            WriteDocx.TableCellProperties(gridspan = size(matrix, 2))
        )])
        push!(tablerows, annotation_row)
    end

    tablenode = WriteDocx.Table(tablerows,
        WriteDocx.TableProperties(
            margins = WriteDocx.TableLevelCellMargins(
                # Word already has relatively broadly spaced tables,
                # so we keep margins to a minimum. A little bit on the left
                # and right is needed to separate the columns from each other
                top = WriteDocx.pt * 0,
                bottom = WriteDocx.pt * 0,
                start = WriteDocx.pt * 1.5,
                stop = WriteDocx.pt * 1.5,
            ),
            # this spacing allows adjacent column underlines to be ever-so-slightly spaced apart,
            # which is otherwise not possible to achieve in Word (aside from adding empty spacing columns maybe)
            spacing = 1 * WriteDocx.pt,
        )
    )

    return tablenode
end

function paragraph_and_run_properties(st::CellStyle)
    para = WriteDocx.ParagraphProperties(
        justification = st.halign === :center ? WriteDocx.Justification.center :
            st.halign === :left ? WriteDocx.Justification.start :
            st.halign === :right ? WriteDocx.Justification.stop :
            error("Unhandled halign $(st.halign)"),
    )
    run = WriteDocx.RunProperties(
        bold = st.bold ? true : nothing, # TODO: fix bug in WriteDocx?
        italic = st.italic ? true : nothing, # TODO: fix bug in WriteDocx?
    )
    return para, run
end

function hardcoded_styles(class::Nothing)
    WriteDocx.ParagraphProperties(), (;)
end

function cell_properties(cell::SpannedCell, row, col, vertical_merge, gridspan, rowgaps, colgaps)
    cs = cell.style

    pt = WriteDocx.pt

    bottom_rowgap = get(rowgaps, cell.span[1].stop, nothing)
    if bottom_rowgap === nothing
        if cs.border_bottom # borders need a bit of spacing to look ok
            bottom_margin = 2.0 * pt
        else
            bottom_margin = nothing
        end
    else
        bottom_margin = 0.5 * bottom_rowgap * pt
    end

    top_rowgap = get(rowgaps, cell.span[1].start-1, nothing)
    top_margin = top_rowgap === nothing ? nothing : 0.5 * top_rowgap * pt

    left_colgap = get(colgaps, cell.span[2].start-1, nothing)
    if left_colgap === nothing
        if cs.indent_pt != 0
            left_margin = cs.indent_pt * pt
        else
            left_margin = nothing
        end
    else
        if cs.indent_pt != 0
            left_margin = (cs.indent_pt + 0.5 * left_colgap) * pt
        else
            left_margin = 0.5 * left_colgap * pt
        end
    end

    right_colgap = get(colgaps, cell.span[2].stop, nothing)
    right_margin = right_colgap === nothing ? nothing : 0.5 * right_colgap * pt

    left_end = col == cell.span[2].start
    right_end = col == cell.span[2].stop
    top_end = row == cell.span[1].start
    bottom_end = row == cell.span[1].stop

    # spanned cells cannot have margins in the interior
    if !right_end
        right_margin = nothing
    end
    if !left_end
        left_margin = nothing
    end
    if !top_end
        top_margin = nothing
    end
    if !bottom_end
        bottom_margin = nothing
    end

    WriteDocx.TableCellProperties(;
        margins = WriteDocx.TableCellMargins(
            start = left_margin,
            bottom = bottom_margin,
            top = top_margin,
            stop = right_margin,
        ),
        borders = cs.border_bottom ? WriteDocx.TableCellBorders(
            bottom = WriteDocx.TableCellBorder(color = WriteDocx.automatic, size = DOCX_INNER_RULE_SIZE, style = WriteDocx.BorderStyle.single),
            start = WriteDocx.TableCellBorder(color = WriteDocx.automatic, size = DOCX_INNER_RULE_SIZE, style = WriteDocx.BorderStyle.none), # the left/right none styles keep adjacent cells' bottom borders from merging together
            stop = WriteDocx.TableCellBorder(color = WriteDocx.automatic, size = DOCX_INNER_RULE_SIZE, style = WriteDocx.BorderStyle.none),
        ) : nothing,
        valign = cs.valign === :center ? WriteDocx.VerticalAlign.center :
            cs.valign === :bottom ? WriteDocx.VerticalAlign.bottom :
            cs.valign === :top ? WriteDocx.VerticalAlign.top :
            error("Unhandled valign $(cs.valign)"),
        vertical_merge,
        gridspan,
    )
end

function docx_cell(row, col, cell, rowgaps, colgaps)    
    ncols = length(cell.span[2])
    is_firstrow = row == cell.span[1].start
    is_firstcol = col == cell.span[2].start
    vertical_merge = length(cell.span[1]) == 1 ? nothing : is_firstrow
    gridspan = ncols > 1 ? ncols : nothing

    paraproperties, runproperties = paragraph_and_run_properties(cell.style)

    runs = if is_firstrow && is_firstcol
        if cell.value === nothing
            WriteDocx.Run[]
        else
            to_runs(cell.value, runproperties)
        end
    else
        [WriteDocx.Run([WriteDocx.Text("")], runproperties)]
    end
    cellprops = cell_properties(cell, row, col, vertical_merge, gridspan, rowgaps, colgaps)

    WriteDocx.TableCell([
        WriteDocx.Paragraph(runs, paraproperties),
    ], cellprops)
end

to_runs(x, props) = [WriteDocx.Run([WriteDocx.Text(docx_sprint(x))], props)]

function to_runs(c::Concat, props)
    runs = WriteDocx.Run[]
    for arg in c.args
        append!(runs, to_runs(arg, props))
    end
    return runs
end

# make a new property object where each field that's not nothing in x2 replaces the equivalent
# from x1, however, if the elements are both also property objects, merge those separately
@generated function merge_props(x1::T, x2::T) where {T<:Union{WriteDocx.TableCellProperties,WriteDocx.RunProperties,WriteDocx.ParagraphProperties,WriteDocx.TableCellBorders,WriteDocx.TableCellMargins}}
    FN = fieldnames(T)
    N = fieldcount(T)
    quote
        Base.Cartesian.@ncall $N $T i -> begin
            f1 = getfield(x1, $FN[i])
            f2 = getfield(x2, $FN[i])
            merge_props(f1, f2)
        end
    end
end

merge_props(x, y) = y === nothing ? x : y

function to_runs(s::Superscript, props::WriteDocx.RunProperties)
    props = merge_props(props, WriteDocx.RunProperties(valign = WriteDocx.VerticalAlignment.superscript))
    return to_runs(s.super, props)
end

function to_runs(s::Subscript, props::WriteDocx.RunProperties)
    props = merge_props(props, WriteDocx.RunProperties(valign = WriteDocx.VerticalAlignment.subscript))
    return to_runs(s.sub, props)
end

function to_runs(m::Multiline, props)
    runs = WriteDocx.Run[]
    for (i, val) in enumerate(m.values)
        i > 1 && push!(runs, WriteDocx.Run([WriteDocx.Break()])),
        append!(runs, to_runs(val, props))
    end
    return runs
end
function to_runs(r::ResolvedAnnotation, props)
    runs = to_runs(r.value, props)
    if r.label !== NoLabel()
        props = merge_props(props, WriteDocx.RunProperties(valign = WriteDocx.VerticalAlignment.superscript))
        push!(runs, WriteDocx.Run([WriteDocx.Text(docx_sprint(r.label))], props))
    end
    return runs
end

_rgb_to_hex(rgb) = join(string.(round.(Int, rgb .* 255); base = 16, pad = 2))

function to_runs(s::Styled, props::WriteDocx.RunProperties)
    # TODO: add underline once WriteDocx fixes support for it
    props = merge_props(props, WriteDocx.RunProperties(; s.bold, s.italic, color = s.color === nothing ? nothing : WriteDocx.HexColor(_rgb_to_hex(s.color.rgb))))
    return to_runs(s.value, props)
end

docx_sprint(x) = sprint(x) do io, x
    _showas(io, MIME"text"(), x)
end


function to_runs(r::RectPlot, props::WriteDocx.RunProperties)
    W = WriteDocx
    return [W.Run([W.InlineDrawing(W.Image(MIME"image/svg+xml"(), r), r.size[1] * W.pt, r.size[2] * W.pt)], props)]
end

