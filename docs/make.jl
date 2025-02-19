using Documenter, SummaryTables
using DocumenterVitepress

makedocs(
    sitename = "SummaryTables.jl",
    format = DocumenterVitepress.MarkdownVitepress(;
        repo = "https://github.com/PumasAI/SummaryTables.jl",
    ),
    pages = [
        "index.md" => "Home",
        "Reference" => [
            "output.md",
            "Table Functions" => [
                "table_functions/simple_table.md",
                "table_functions/listingtable.md",
                "table_functions/summarytable.md",
                "table_functions/table_one.md",
            ],
            "Infrastructure" => [
                "infrastructure/table.md",
                "infrastructure/cell.md",
                "infrastructure/cellstyle.md",
            ],
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
