function dfsummary(table; kwargs...)
    _dfsummary(DataFrame(table); kwargs...)
end

function _dfsummary(df::DataFrames.DataFrame)
    columns = propertynames(df)


    function row(colname)
        col = df[!, colname]
        n = length(col)
        n_valid = count(!ismissing, col)
        stats_vals, freqs, graph = _stats_values_freqs_graph(col, n_valid)
        n_missing = count(ismissing, col)
        [
            "Variable" => string(colname),
            "Stats / Values" => stats_vals,
            "Freqs (% of Valid)" => freqs,
            "Graph" => graph,
            "Valid" => Multiline(n_valid, Concat("(", round(n_valid / n * 100, digits = 1), "%)")),
            "Missing" => Multiline(n_missing, Concat("(", round(n_missing / n * 100, digits = 1), "%)"))
        ]
    end

    rows = row.(columns)

    headers = Cell.(only.(unique.(eachcol(stack([first.(r) for r in rows], dims = 1)))), bold = true, halign = :left)
    body = Cell.(stack((last.(x) for x in rows), dims = 1), valign = :center, halign = :left)


    Table([headers'; body], rowgaps = (1:length(columns)) .=> 6)
end

function _stats_values_freqs_graph(column::AbstractVector{<:Union{Missing,Number}}, _)
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

function _stats_values_freqs_graph(column::AbstractVector, n_valid)
    cm = collect(pairs(StatsBase.countmap(filter(!ismissing, column))))
    stats_vals = Concat.(1:length(cm), ". ", first.(cm))
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
    barheight = 18
    bargap = 4
    width = 100
    padding = 2
    n = length(freqs)
    RectPlot(
        (width + 2 * padding, barheight * n + (n - 1) * bargap + 2 * padding),
        map(enumerate(freqs)) do (i, freq)
            Rect(
                (0, freq / nvalid * width) .+ padding,
                ((i-1) * barheight + 0.5 * bargap, (i*barheight) - 0.5 * bargap) .+ padding,
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

function _showas(io::IO, M::MIME"text/html", r::RectPlot)
    print(io, """<svg width='$(r.size[1])' height='$(r.size[2])' xmlns='http://www.w3.org/2000/svg'>""")
    
    for rect in r.rects
        print(io, """<rect x='$(rect.x[1])' y='$(r.size[2] - rect.y[2])' width='$(rect.x[2] - rect.x[1])' height='$(rect.y[2] - rect.y[1])' fill='lightgray' stroke='gray'/>""")
    end

    print(io, "</svg>")
end

function _showas(io::IO, ::MIME"text/latex", r::RectPlot)
    print(io, "\\begin{tikzpicture}")

    cm(px) = px / 96 * 2.54
    
    for rect in r.rects
        print(io, "\\fill[cyan!30] (", cm(rect.x[1]), ",", cm(r.size[2] - rect.y[2]), ") rectangle (", cm(rect.x[2]), ",", cm(r.size[2] - rect.y[1]), ");")
    end
    
    print(io, "\\end{tikzpicture}")
    return
end

function _showas(io::IO, M::MIME"text/typst", r::RectPlot)
    print(io, "#image.decode(\"")
    _showas(io, MIME"text/html"(), r)
    print(io, """\")""")
end

WriteDocx.is_inline_element(::Type{RectPlot}) = true

function to_runs(r::RectPlot, props::WriteDocx.RunProperties)
    return [WriteDocx.Run([r], props)]
end

function WriteDocx.to_xml(r::RectPlot, rels)
    xml = WriteDocx.xml
    drawing = xml("w:drawing", [
        xml("wp:inline", [
            xml("a:graphic", [
                xml("a:graphicData", [
                    xml("pic:pic", [
                        xml("pic:nvPicPr", [
                            xml("pic:cNvPr", [], "id" => "0", "name" => "BarChart"),
                            xml("pic:cNvPicPr", [])
                        ]),
                        xml("pic:blipFill", [
                            xml("a:blip", [])
                        ]),
                        xml("pic:spPr", [
                            xml("a:xfrm", [
                                # Generate rectangles for each bar
                                xml("a:rect", [
                                    xml("a:solidFill", [
                                        xml("a:srgbClr", [], "val" => "ADD8E6")  # Light blue fill
                                    ]),
                                    xml("a:ln", [
                                        xml("a:solidFill", [
                                            xml("a:srgbClr", [], "val" => "000000")  # Black stroke
                                        ])
                                    ])
                                ], 
                                "l" => string(rect.x[1]),
                                "t" => string(r.size[2] - rect.y[2]),  # Flip y-coordinates for correct placement
                                "r" => string(rect.x[2]),
                                "b" => string(r.size[2] - rect.y[1])
                                ) for rect in r.rects  # Generate all rects as a vector
                            ])
                        ])
                    ])
                ], "uri" => "http://schemas.openxmlformats.org/drawingml/2006/picture")
            ])
        ] , "xmlns:wp" => "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing")
    ])
    return drawing
end
