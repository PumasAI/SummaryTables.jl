function find_rowgroup_labels(x::AbstractVector{<:AbstractString})
    labels = Pair{Int, String}[]
    prev = first(x)
    push!(labels, 1 => prev)
    for (i, x_i) in enumerate(x)
        if prev != x_i
            push!(labels, i => x_i)
        end
        prev = x_i
    end
    return Dict(labels)
end

function rowgroup_table(table, rowgroup_col; halign = :left)
    df = DataFrames.DataFrame(table)
    rowgroup_labels = find_rowgroup_labels(string.(getproperty(df, rowgroup_col)))
    select!(df, Not(rowgroup_col))

    body = Matrix{Cell}(undef, size(df, 1) + length(rowgroup_labels), size(df, 2))
    for j in axes(df, 2)
        offset = 0
        indent_pt = j == 1 ? 12 : 0
        for i in axes(df, 1)
            bold = i in keys(rowgroup_labels) && j == 1
            if i in keys(rowgroup_labels)
                if j != 1
                    body[i + offset, j] = Cell(nothing)
                    body[i + offset + 1, j] = Cell(df[i, j]; halign, indent_pt)
                else
                    body[i + offset, j] = Cell(rowgroup_labels[i]; halign, bold)
                    body[i + offset + 1, j] = Cell(df[i, j]; halign, indent_pt)
                end
                offset += 1
            else
                body[i + offset, j] = Cell(df[i, j]; halign, indent_pt)
            end
        end
    end

    header = [Cell(x; bold = true, halign) for x in names(df)]
    cells = [header'; body]
    return Table(cells; header = 1)
end

