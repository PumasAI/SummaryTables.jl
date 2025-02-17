using Documenter, SummaryTables

makedocs(
    sitename = "SummaryTables.jl",
    pages = [
        "index.md",
        "output.md",
        "Predefined Tables" => [
            "predefined_tables/simple_table.md",
            "predefined_tables/listingtable.md",
            "predefined_tables/summarytable.md",
            "predefined_tables/table_one.md",
        ],
        "Custom Tables" => [
            "custom_tables/table.md",
            "custom_tables/cell.md",
            "custom_tables/cellstyle.md",
        ],
    ]
)

deploydocs(
    repo = "github.com/PumasAI/SummaryTables.jl.git",
    push_preview = true,
)