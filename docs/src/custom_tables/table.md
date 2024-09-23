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

```@example linebreak_footnotes
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."])
```

```@example linebreak_footnotes
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."], linebreak_footnotes = false)
```

## Types of cell values

TODO: List the different options here

