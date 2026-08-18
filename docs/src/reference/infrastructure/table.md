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

Sizes are given as `SummaryTables.Relative(factor)`, a factor of the font size, so the gaps keep their proportion to the text when the document the table is embedded in changes its font size.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:9, col in 'A':'E']
Table(cells; rowgaps = [3 => SummaryTables.Relative(0.8), 6 => SummaryTables.Relative(0.8)])
```

For a gap that stays the same size regardless of the font size, use `SummaryTables.Points(size)` instead.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:9, col in 'A':'E']
Table(cells; rowgaps = [3 => SummaryTables.Points(8), 6 => SummaryTables.Points(8)])
```

!!! warning "Deprecated: plain numbers"
    A plain number like `rowgaps = [3 => 8.0]` is taken as `Points(8.0)` and warns.
    Pass `Relative` or `Points` explicitly instead. To convert, divide the old point value by the font size you were assuming, so `8.0` at a 10pt body font size becomes `Relative(0.8)`.

## Keyword: `colgaps`

It can be beneficial for the readability of larger tables to add gaps between certain columns.
These gaps take the same sizes as [`rowgaps`](@ref "Keyword: `rowgaps`"), but the index refers to the column gap.

```@example
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; colgaps = [3 => SummaryTables.Relative(0.8), 6 => SummaryTables.Relative(0.8)])
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

## Keyword: `footnote_size`

Each renderer prints footnotes and annotations at its own built-in size, which is a factor of the body font size (0.8 in HTML, typst and docx, `\footnotesize` in LaTeX).
Set `footnote_size` to a different factor to override this, so `footnote_size = 0.5` prints them at half the size of the table body.

Sizes stay relative on purpose. HTML, LaTeX and typst emit them as such, so a table keeps following whatever body font size the surrounding document or stylesheet sets.
Word is the exception: it has no relative font metrics, so the docx renderer resolves the factor to an absolute size at render time using the [`base_font_size` docx default](@ref "Global Defaults"), which should match the body font size of the document you embed the table in.

This parameter can also be set as a [global default](@ref "Global Defaults") to apply the setting across all tables.

```@example footnote_style
using SummaryTables

cells = [Cell("$col$row") for row in 1:5, col in 'A':'I']
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."], footnote_size = 0.5)
```

## Keyword: `footnote_halign`

Footnotes are left-aligned by default. Pass `:center` or `:right` to `footnote_halign` to align them differently.

This parameter can also be set as a [global default](@ref "Global Defaults") to apply the setting across all tables.

```@example footnote_style
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."], footnote_halign = :center)
```

## Keyword: `footnote_line_height`

The `footnote_line_height` keyword sets the baseline-to-baseline distance of the footnote lines as a factor of the footnote font size, so `2` gives double spacing.
Left at `nothing`, each renderer keeps its built-in line spacing.

Only LaTeX with a `footnote_size` set applies the factor exactly, the other renderers approximate it.
Typst has no line height setting, so the factor becomes a `par` leading via an assumed cap height, which means it cannot go tighter than the cap height itself.
Docx has none either, so the spacing applies to the line breaks between footnotes, but not within a single footnote that wraps and not to the last footnote.
LaTeX without a `footnote_size` scales `\footnotesize`, whose own line spacing is close to but not exactly the factor assumed here.

This parameter can also be set as a [global default](@ref "Global Defaults") to apply the setting across all tables.

```@example footnote_style
Table(cells; footnotes = ["Footnote 1.", "Footnote 2."], footnote_line_height = 2)
```
