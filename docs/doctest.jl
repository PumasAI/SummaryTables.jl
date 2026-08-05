using Documenter, SummaryTables

DocMeta.setdocmeta!(
    SummaryTables,
    :DocTestSetup,
    :(using SummaryTables);
    recursive = true,
)

fix = "--fix" in ARGS

doctest(SummaryTables; fix, manual = false)
