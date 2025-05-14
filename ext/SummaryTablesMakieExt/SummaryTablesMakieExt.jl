module SummaryTablesMakieExt

import SummaryTables
import Makie
# these are just necessary due to bad macro hygiene of @Block in Makie
import Makie: Figure, Scene, GridLayout, Observable, make_block_docstring, theme, Auto, Inside, to_value

Makie.@Block SummaryTablesHLine2 begin
    @attributes begin
        color = @inherit(:linecolor, :black)
        linewidth = 1.0
        top = 0.0
        bottom = 0.0
    end
end

function Makie.initialize_block!(s::SummaryTablesHLine2)

    Makie.onany(s.blockscene, s.linewidth, s.top, s.bottom; update = true) do lw, top, bottom
        s.layoutobservables.autosize[] = (nothing, lw + top + bottom)
    end

    points = Makie.lift(s.blockscene, s.layoutobservables.computedbbox) do bbox
        xo, yo = bbox.origin
        w, h = bbox.widths
        yoffset::Float64 = s.bottom[] + 0.5 * s.linewidth[]
        y = yo + yoffset
        [Makie.Point(xo, y), Makie.Point(xo+w, y)]
    end

    Makie.lines!(s.blockscene, points; s.linewidth, s.color)
    return
end

function line!(scene::Makie.Scene, gl::Makie.GridLayout, row, col; bottom = true, gapsize, kwargs...)
    sgl = Makie.GridLayout(gl[row, col])
    points = Makie.lift(sgl.layoutobservables.computedbbox) do bb
        xo, yo = bb.origin
        xw, yw = bb.widths
        if bottom
            [Makie.Point(xo, yo - 0.5 * gapsize), Makie.Point(xo+xw, yo - 0.5 * gapsize)]
        else
            [Makie.Point(xo, yo + yw + 0.5 * gapsize), Makie.Point(xo+xw, yo + yw + 0.5 * gapsize)]
        end
    end
    Makie.lines!(scene, points; color = :black, kwargs...)
end

function SummaryTables.to_makie_spec(
        tbl::SummaryTables.Table;
        fontsize = Makie.current_default_theme()[:fontsize][],
        tellheight = true,
        tellwidth = true,
        alignmode = Makie.Inside(),
    )

    S = Makie.SpecApi

    tbl = SummaryTables.postprocess(tbl)
    cells = sort(SummaryTables.to_spanned_cells(tbl.cells), by = x -> (x.span[1].start, x.span[2].start))
    cells, annotations = SummaryTables.resolve_annotations(cells)
    matrix = SummaryTables.create_cell_matrix(cells)

    nrows, ncols = size(matrix)

    specs = Pair[]

    push!(specs, (1, 1:ncols, Makie.Top()) => S.SummaryTablesHLine2(bottom = 0, linewidth = 1))
    push!(specs, (nrows, 1:ncols, Makie.Bottom()) => S.SummaryTablesHLine2(top = 0, linewidth = 1, valign = :top))

    has_footer_section = !isempty(annotations) || !isempty(tbl.footnotes)
    rowgaps_with_bottom_borders = falses(nrows - 1)

    rowgap_dict = Dict(first.(tbl.rowgaps) .=> last.(tbl.rowgaps) .* 4/3)
    rowgap(row) = get(rowgap_dict, row, 2.0)
    colgap_dict = Dict(first.(tbl.colgaps) .=> last.(tbl.colgaps) .* 4/3)
    colgap(col) = get(colgap_dict, col, 10.0)

    for cell in cells
        push!(specs, cell.span => to_blockspec(cell.value, cell.style; fontsize))
        if cell.style.border_bottom
            last_row = cell.span[1].stop
            if last_row < nrows
                rowgaps_with_bottom_borders[last_row] = true
                gap = rowgap(last_row) / 2
                push!(specs, (last_row, cell.span[2], Makie.Bottom()) => S.SummaryTablesHLine2(top = gap, bottom = gap, linewidth = 0.75))
            end
        end
    end

    if tbl.header !== nothing
        gap = rowgap(tbl.header) / 2
        push!(specs, (tbl.header, 1:ncols, Makie.Bottom()) => S.SummaryTablesHLine2(top = gap, bottom = gap, linewidth = 0.75))
    end
    if tbl.footer !== nothing
        gap = rowgap(tbl.footer - 1) / 2
        push!(specs, (tbl.footer, 1:ncols, Makie.Top()) => S.SummaryTablesHLine2(top = gap, bottom = gap, linewidth = 0.75))
    end

    if has_footer_section
        footerspecs = []
        for (annotation, label) in annotations
            rt = if label === SummaryTables.NoLabel()
                to_rich_text(annotation)
            else
                Makie.rich(Makie.superscript(to_rich_text(label)), to_rich_text(annotation))
            end
            push!(footerspecs, S.Label(; text = rt, halign = :left, fontsize = 0.85 * fontsize))
        end
        for footnote in tbl.footnotes
            push!(footerspecs, S.Label(; text = to_rich_text(footnote), fontsize = 0.85 * fontsize, halign = :left))
        end
        push!(specs, (nrows, 1:ncols, Makie.Bottom()) => S.GridLayout(footerspecs, halign = :left, alignmode = Makie.Outside(0, 0, 0, rowgap(0)), rowgaps = Makie.Fixed(2.0)))
    end

    rowgaps = ifelse.(rowgaps_with_bottom_borders, Ref(Makie.Fixed(0)), Makie.Fixed.(rowgap.(1:length(rowgaps_with_bottom_borders))))
    colgaps = Makie.Fixed.(colgap.(1:ncols-1))

    return S.GridLayout(specs; tellheight, tellwidth, rowgaps, colgaps, alignmode)
end

to_font_symbol(; bold, italic) = bold ? (italic ? :bold_italic : :bold) : italic ? :italic : :regular

function to_blockspec(value, style::SummaryTables.CellStyle; fontsize)
    rt = value == "" ? "" : to_rich_text(value)
    font = to_font_symbol(; style.bold, style.italic)
    Makie.SpecApi.Label(; text = rt, font, halign = style.halign, valign = style.valign, fontsize)
end

# allow BlockSpecs and GridSpecs to nest objects in the table directly
to_blockspec(b::Union{Makie.BlockSpec,Makie.GridLayoutSpec}, style::SummaryTables.CellStyle; fontsize) = b

_string(x) = sprint(SummaryTables._showas, MIME"text/plain"(), x)

to_rich_text(x) = Makie.rich(_string(x))
to_rich_text(s::String) = Makie.rich(s)
to_rich_text(m::SummaryTables.ResolvedAnnotation) = Makie.rich(to_rich_text(m.value), Makie.superscript(_string(m.label)))
function to_rich_text(s::SummaryTables.Styled)
    Makie.rich(to_rich_text(s.value), color = Makie.RGBf(s.color.rgb...), font = to_font_symbol(; italic = something(s.italic, false), bold = something(s.bold, false)))
end
to_rich_text(::Nothing) = ""
function to_rich_text(m::SummaryTables.Multiline)
    args = []
    for (i, v) in enumerate(m.values)
        i > 1 && push!(args, "\n")
        push!(args, to_rich_text(v))
    end
    Makie.rich(args...)
end

end