using Documenter, SummaryTables
using DocumenterVitepress

makedocs(
    sitename = "SummaryTables.jl",
    format = DocumenterVitepress.MarkdownVitepress(;
        repo = "https://github.com/PumasAI/SummaryTables.jl",
        deploy_url = "https://pumasai.github.io/SummaryTables.jl",
    ),
    pages = [
        "index.md",
        "output.md",
        "Predefined Tables" => [
            "predefined_tables/listingtable.md",
            "predefined_tables/summarytable.md",
            "predefined_tables/table_one.md",
        ],
        "Custom Tables" => [
            "custom_tables/table.md",
            "custom_tables/cell.md",
            "custom_tables/cellstyle.md",
        ],
    ],
    warnonly = get(ENV, "CI", "false") != "true",
    pagesonly = true,
)

deploydocs(
    repo = "github.com/PumasAI/SummaryTables.jl",
    target = "build",
    push_preview = true,
)
