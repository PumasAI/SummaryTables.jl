using Documenter, SummaryTables
using DocumenterVitepress

makedocs(
    sitename = "SummaryTables.jl",
    format = DocumenterVitepress.MarkdownVitepress(;
        repo = "https://github.com/PumasAI/SummaryTables.jl",
    ),
    pages = [
        "Home" => "index.md",
        "Reference" => [
            "Table Functions" => [
                "reference/table_functions/simple_table.md",
                "reference/table_functions/listingtable.md",
                "reference/table_functions/summarytable.md",
                "reference/table_functions/table_one.md",
            ],
            "Infrastructure" => [
                "reference/infrastructure/table.md",
                "reference/infrastructure/cell.md",
                "reference/infrastructure/cellstyle.md",
            ],
            "reference/renderers.md",
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
