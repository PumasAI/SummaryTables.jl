using Documenter, SummaryTables
using DocumenterVitepress

cp(
    joinpath(@__DIR__, "..", "CHANGELOG.md"),
    joinpath(@__DIR__, "src", "resources", "changelog.md"),
    force = true,
)

is_ci() = get(ENV, "CI", "false") == "true"

makedocs(
    sitename = "SummaryTables.jl",
    format = DocumenterVitepress.MarkdownVitepress(;
        repo = "https://github.com/PumasAI/SummaryTables.jl",
        (is_ci() ? (;) : (; deploy_url = ""))..., # without deploy_url="" locally the build is broken due to a SummaryTables.jl prefix
    ),
    pages = [
        "Home" => "index.md",
        "Reference" => [
            "Table Functions" => [
                "reference/table_functions/simple_table.md",
                "reference/table_functions/dfsummary.md",
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
        "Resources" => [
            "resources/api.md",
            "resources/changelog.md",
        ]
    ],
    warnonly = !is_ci(),
    pagesonly = true,
)

deploydocs(
    repo = "github.com/PumasAI/SummaryTables.jl",
    target = "build",
    push_preview = true,
)
