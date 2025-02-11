module SummaryTablesMakieExt

import SummaryTables
import Makie

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

function SummaryTables.makie_table!(
        g::Union{Makie.GridPosition,Makie.GridSubposition},
        tbl::SummaryTables.Table;
        fontsize = Makie.current_default_theme()[:fontsize][],
        tellheight = true,
        tellwidth = true,
    )

    tbl = SummaryTables.postprocess(tbl)
    cells = sort(SummaryTables.to_spanned_cells(tbl.cells), by = x -> (x.span[1].start, x.span[2].start))
    cells, annotations = SummaryTables.resolve_annotations(cells)
    matrix = SummaryTables.create_cell_matrix(cells)

    scene = Makie.get_scene(g)
    gl = Makie.GridLayout(g; tellheight, tellwidth)

    gapsize = 8

    Makie.with_updates_suspended(gl) do

        line!(scene, gl, 1, 1:size(matrix,2); bottom = false, gapsize, linewidth = 1.25)

        running_index = 0
        for row in 1:size(matrix, 1)
            if row == tbl.footer
                # println(io, "    table.hline(y: $(row-1), stroke: 0.75pt),")
            end
            for col in 1:size(matrix, 2)
                index = matrix[row, col]
                if index > running_index
                    cell = cells[index]
                    if cell.value !== nothing
                        insert_cell!(gl[cell.span[1], cell.span[2]], cell.value, cell.style; fontsize)
                    end
                    if cell.style.border_bottom
                        line!(scene, gl, cell.span[1], cell.span[2]; gapsize, linewidth = 0.75)
                        # println(io, "    table.hline(y: $(row), start: $(cell.span[2].start-1), end: $(cell.span[2].stop), stroke: 0.75pt),")
                    end
                    running_index = index
                end
            end
            if row == tbl.header
                # println(io, "    table.hline(y: $(row), stroke: 0.75pt),")
            end
        end

        line!(scene, gl, size(matrix,1), 1:size(matrix,2); gapsize, linewidth = 1.25)

        if !isempty(annotations) || !isempty(tbl.footnotes)
            footgl = Makie.GridLayout(gl[size(matrix,1)+1, :], halign = :left)

            i = 0
            for (annotation, label) in annotations
                rt = if label === SummaryTables.NoLabel()
                    to_rich_text(annotation)
                else
                    Makie.rich(Makie.superscript(to_rich_text(label)), to_rich_text(annotation))
                end
                Makie.Label(footgl[i+=1, 1], rt, halign = :left, fontsize = 0.85 * fontsize)
            end

            for footnote in tbl.footnotes
                Makie.Label(footgl[i+=1, 1], to_rich_text(footnote), fontsize = 0.85 * fontsize, halign = :left)
            end
        end

        Makie.colgap!(gl, gapsize)
        Makie.rowgap!(gl, gapsize)

        return gl
    end
end

function insert_cell!(gp, value, style::SummaryTables.CellStyle; fontsize)
    value == "" && return
    rt = to_rich_text(value)
    font = style.bold ? (style.italic ? :bold_italic : :bold) : style.italic ? :italic : :regular 
    Makie.Label(gp, rt; font, halign = style.halign, valign = style.valign, fontsize)
end

function insert_cell!(gp, blockfunc::Function, style::SummaryTables.CellStyle; fontsize)
    blockfunc(gp; halign = style.halign, valign = style.valign)
end

to_rich_text(x) = Makie.rich(string(x))
to_rich_text(s::String) = Makie.rich(s)
to_rich_text(m::SummaryTables.ResolvedAnnotation) = Makie.rich(to_rich_text(m.value), Makie.superscript(string(m.label)))

end