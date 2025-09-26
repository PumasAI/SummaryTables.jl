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
    ),
    pages = [
        "Home" => "index.md",
        "Reference" => [
            "Table Functions" => [
                "reference/table_functions/simple_table.md",
                "reference/table_functions/overview_table.md",
                "reference/table_functions/listingtable.md",
                "reference/table_functions/summarytable.md",
                "reference/table_functions/table_one.md",
            ],
            "Infrastructure" => [
                "reference/infrastructure/table.md",
                "reference/infrastructure/cell.md",
                "reference/infrastructure/cellstyle.md",
                "reference/infrastructure/defaults.md",
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

DocumenterVitepress.deploydocs(
    repo = "github.com/PumasAI/SummaryTables.jl",
    target = joinpath(@__DIR__, "build"),
    branch = "gh-pages",
    devbranch = "master",
    push_preview = true,
)
