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
These gaps can be passed as a `Vector` of `Pair`s where the first element is the index of the row gap and the second element is the gap size.
The size is an `Em` or `Pt` length like `0.8em` or `8pt`, or a bare number interpreted as points.
The `em` and `pt` unit constants are imported with `using SummaryTables: em, pt`.

```@example
using SummaryTables
using SummaryTables: em

cells = [Cell("$col$row") for row in 1:9, col in 'A':'E']
Table(cells; rowgaps = [3 => 0.8em, 6 => 0.8em])
```

## Keyword: `colgaps`

It can be beneficial for the readability of larger tables to add gaps between certain columns.
These gaps can be passed as a `Vector` of `Pair`s where the first element is the index of the column gap and the second element is the gap size, given like the `rowgaps` sizes above.

```@example
using SummaryTables
using SummaryTables: em

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; colgaps = [3 => 0.8em, 6 => 0.8em])
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

## Keywords: rule widths and paddings

The widths of the table's rules and the spacing around its cells can be set with these keywords, which are also available as [global defaults](@ref "Global Defaults"):

- `outer_rule_width` sets the width of the rules above and below the table.
- `inner_rule_width` sets the width of the rules below the header and above the footer.
- `cell_rule_width` sets the width of the rules drawn for cells with `border_bottom = true`.
- `column_padding` sets the horizontal space between adjacent columns.
- `row_padding` sets the vertical space between adjacent rows.

Each takes a length, either relative to the font size as an `Em` like `0.1em`, or absolute as a `Pt` like `1pt`, and renders consistently across all backends.
The `em` and `pt` unit constants are imported with `using SummaryTables: em, pt`.

```@example
using SummaryTables
using SummaryTables: em, pt

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells;
    header = 1,
    outer_rule_width = 2pt,
    inner_rule_width = 1pt,
    column_padding = 1.5em,
)
```

## Keyword: `footnote_size`

Sets the font size of the footnotes and annotations, as an `Em` or `Pt` length.

```@example
using SummaryTables
using SummaryTables: pt

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells; footnotes = ["A footnote."], footnote_size = 12pt)
```

## Keyword: `footnote_halign`

Aligns the footnotes horizontally at the `:left` (the default), `:center` or `:right`.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'E']
Table(cells; footnotes = ["A footnote."], footnote_halign = :right)
```
