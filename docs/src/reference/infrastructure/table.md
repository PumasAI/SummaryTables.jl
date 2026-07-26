# `Table`

You can build custom tables using the `Table` type.

## Argument 1: `cells`

The table's content is given as an `AbstractMatrix` of `Cell`s:

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells)
```

## Keyword: `header`

You can pass an `Int` to mark the last row of the header section.
A divider line is placed after this row.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells; header = 1)
```

## Keyword: `footer`

You can pass an `Int` to mark the first row of the footer section.
A divider line is placed before this row.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells; footer = 5)
```

## Keyword: `footnotes`

The `footnotes` keyword allows to add custom footnotes to the table which do not correspond to specific [`Annotated`](@ref) values in the table.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells; footnotes = ["Custom footnote 1", "Custom footnote 2"])
```

## Keyword: `rowgaps`

It can be beneficial for the readability of larger tables to add gaps between certain rows.
These gaps can be passed as a `Vector` of `Pair`s where the first element is the index of the row gap and the second element is the gap size in `pt`.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:9, col in 'A':'E']
Table(cells; rowgaps = [3 => 8.0, 6 => 8.0])
```

## Keyword: `colgaps`

It can be beneficial for the readability of larger tables to add gaps between certain columns.
These gaps can be passed as a `Vector` of `Pair`s where the first element is the index of the column gap and the second element is the gap size in `pt`.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; colgaps = [3 => 8.0, 6 => 8.0])
```

## Keyword: `linebreak_footnotes`

By default, footnotes are printed on a separate line each.
They can be printed in a single paragraph by setting `linebreak_footnotes = false`.

This parameter can also be set as a [global default](@ref "Global Defaults") to apply the setting across all tables.

```@example linebreak_footnotes
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."])
```

```@example linebreak_footnotes
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."], linebreak_footnotes = false)
```

## Keyword: `merge_row_labels`

In DOCX output, row-group label cells are by default vertically merged across the rows they span. Word cannot page-break a merged region, so a group spanning more rows than fit on a page breaks awkwardly. Setting `merge_row_labels = false` keeps each row's label cell separate (the label stays in the group's first row, with the remaining rows in that group left blank), so the table can break cleanly across pages. This option only affects DOCX output.

This parameter can also be set as a [global default](@ref "Global Defaults") to apply the setting across all tables.

Row-group label cells only arise from grouped tables such as [`summarytable`](@ref), so the option is shown there instead of with a raw `Cell`/`Table` example:

```@example merge_row_labels
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:8,
    group1 = repeat(["a", "b"], inner = 4),
    group2 = repeat(["c", "d"], 4),
)

summarytable(data, :value, rows = [:group1, :group2], summary = [mean], merge_row_labels = false)
```
