"""
    overview_table(table)

Creates a `Table` that gives a summarized overview of the columns of `table`,
intended to give a quick intuition of the dataset.

To render the graphs with LaTeX, you need to include `\\usepackage{tikz}` in your preamble.

## Keyword arguments

- `max_categories = 10`: Limit the number of categories listed individually for categorical columns, the rest will be lumped together.
"""
function overview_table(table; kwargs...)
    _overview_table(DataFrame(table); kwargs...)
end

function _overview_table(df::DataFrames.DataFrame; max_categories = 10)
    columns = propertynames(df)


    function row(i, colname)
        col = df[!, colname]
        n = length(col)
        n_valid = count(!ismissing, col)
        stats_vals, freqs, graph = _stats_values_freqs_graph(col, n_valid; max_categories)
        n_missing = count(ismissing, col)
        [
            "No" => i,
            "Variable" => Multiline(string(colname), "[$(pretty_column_eltype(col))]"),
            "Stats / Values" => stats_vals,
            "Freqs (% of Valid)" => freqs,
            "Graph" => graph,
            "Valid" => Multiline(n_valid, Concat("(", round(n_valid / n * 100, digits = 1), "%)")),
            "Missing" => Multiline(n_missing, Concat("(", round(n_missing / n * 100, digits = 1), "%)"))
        ]
    end

    rows = row.(eachindex(columns), columns)

    headers = Cell.(only.(unique.(eachcol(stack([first.(r) for r in rows], dims = 1)))), bold = true, halign = :left)
    body = Cell.(stack((last.(x) for x in rows), dims = 1), valign = :center, halign = :left)


    Table([headers'; body], rowgaps = (1:length(columns)) .=> 6)
end

function _stats_values_freqs_graph(column::AbstractVector{<:Union{Missing,Number}}, _n_valid; max_categories)
    nonmissing = collect(skipmissing(column))
    mu = mean(nonmissing)
    sd = std(nonmissing)
    mi, ma = extrema(nonmissing)
    med = median(nonmissing)
    iqr = StatsBase.iqr(nonmissing)
    cv = StatsBase.variation(nonmissing)
    stats_vals = Multiline(
        Concat("Mean (sd): ", mu, " (", sd, ")"),
        Concat("min ≤ med ≤ max:"),
        Concat(mi, " ≤ ", med, " ≤ ", ma),
        Concat("IQR (CV): ", iqr, " (", cv, ")")
    )
    freqs = string(length(unique(nonmissing)), " distinct values")
    graph = cont_freq_plot(nonmissing)
    return stats_vals, freqs, graph
end

function _stats_values_freqs_graph(column::AbstractVector, n_valid; max_categories)
    cm = collect(pairs(StatsBase.countmap(filter(!ismissing, column))))
    sort!(cm, by = last, rev = true)
    cats_exceeded = length(cm) > max_categories
    if cats_exceeded
        cm = [
            cm[1:max_categories];
            "[$(length(cm) - max_categories) others]" => sum(last.(cm[max_categories+1:end]))
        ]
    end
    prefixes = string.(1:length(cm), ". ")
    if cats_exceeded
        prefixes[end] = ""
    end
    stats_vals = Concat.(prefixes, first.(cm))
    freqs = last.(cm)
    percents = 100 .* freqs ./ n_valid
    freqs_percents = Concat.(freqs, " (", round.(percents; digits = 1), "%)")
    graph = cat_freq_plot(freqs, n_valid)
    return Multiline(stats_vals...), Multiline(freqs_percents...), graph
end

struct Rect
    x::Tuple{Float64,Float64}
    y::Tuple{Float64,Float64}
end

struct RectPlot
    size::Tuple{Float64,Float64}
    rects::Vector{Rect}
end

function cat_freq_plot(freqs, nvalid)
    barheight = 12
    bargap = 3
    width = 100
    padding = 2
    n = length(freqs)
    RectPlot(
        (width + 2 * padding, barheight * n + (n - 1) * bargap + 2 * padding),
        map(enumerate(reverse(freqs))) do (i, freq)
            Rect(
                (0, freq / nvalid * width) .+ padding,
                ((i-1) * barheight + (i-1) * bargap, (i*barheight) + (i-1) * bargap) .+ padding,
            )
        end
    )
end

function cont_freq_plot(column)

    hist = StatsBase.fit(StatsBase.Histogram, collect(skipmissing(column)); nbins = 15)
    edges = hist.edges[1]
    weights = hist.weights

    height = 60
    width = 100
    padding = 2
    n = length(edges)
    barheights = weights ./ maximum(weights) * height
    baredges = (edges .- edges[1]) ./ (edges[end] - edges[1]) .* width

    RectPlot(
        (width + 2 * padding, height + 2 * padding),
        map(baredges[1:end-1], baredges[2:end], barheights) do xmin, xmax, y
            Rect(
                (xmin, xmax) .+ padding,
                (0, y) .+ padding,
            )
        end
    )
end

function Base.show(io::IO, ::MIME"image/svg+xml", r::RectPlot)
    viewBox = "0 0 $(r.size[1]) $(r.size[2])"
    print(io, """<svg width='$(r.size[1])' height='$(r.size[2])' xmlns='http://www.w3.org/2000/svg' viewBox='$(viewBox)'>""")
    
    for rect in r.rects
        print(io, """<rect x='$(rect.x[1])' y='$(r.size[2] - rect.y[2])' width='$(rect.x[2] - rect.x[1])' height='$(rect.y[2] - rect.y[1])' fill='lightgray' stroke='gray'/>""")
    end

    print(io, "</svg>")
end

function pretty_column_eltype(::AbstractVector{T}) where T
    nonmissing = nonmissingtype(T)
    suffix = nonmissing == T ? "" : "?"
    # we don't want long names like [CategoricalArrays.CategoricalValue{String, UInt8}] here,
    # the plain type name should be sufficient in almost all realistic cases
    str = repr(nonmissing; context = :module => parentmodule(nonmissing))
    return str * suffix
end
