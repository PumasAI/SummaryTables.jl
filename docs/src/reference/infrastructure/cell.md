# `Cell`

## Argument 1: `value`

This is the content of the `Cell`.
How it is rendered is decided by the output format and what `show` methods are defined for the type of `value` and the respective output `MIME` type.
If no output-specific `MIME` type has a `show` method, the fallback is always the generic text output.

The following are some types which receive special handling by SummaryTables.

### Special `Cell` value types

#### Floating point numbers

Most tables display floating point numbers, however, the formatting of these numbers can vary.
SummaryTables postprocesses every table in order to find unformatted floating point numbers.
These are then given the default, table-wide, formatting.

The formatting behavior is controlled by a `NumberFormat`, which can be passed to
individual table functions via the `number_format` keyword or set as a
[global default](@ref "Global Defaults").
Refer to the [`NumberFormat`](@ref SummaryTables.NumberFormat) docstring for all available settings.

!!! note
    Before version 3.6, number formatting was controlled by the three separate keywords
    `round_mode`, `round_digits` and `trailing_zeros`. These were rolled into `NumberFormat`
    as the `mode`, `digits` and `trailing_zeros` settings. The old keywords continue to work,
    both on table functions and in the global defaults, but they cannot be combined with
    `number_format` in the same call.

```@example
using SummaryTables

cells = [
    Cell(1.23456) Cell(12.3456)
    Cell(0.123456) Cell(0.0123456)
]
Table(cells)
```

```@example
using SummaryTables

cells = [
    Cell(1.23456) Cell(12.3456)
    Cell(0.123456) Cell(0.0123456)
]
Table(cells; number_format = NumberFormat(mode = :digits, digits = 5, trailing_zeros = true))
```

##### NumberFormat

To format numbers individually, call a [`NumberFormat`](@ref SummaryTables.NumberFormat) on them, which wraps them
in an object carrying the formatting information.
Any settings not specified in such a format are inherited from the table's `number_format`,
which in turn inherits its unset settings from the package defaults.

```@example
using SummaryTables

fraction = NumberFormat(scale = 100, suffix = " %", digits = 2)
count = NumberFormat(magnitudes = :financial)
concentration = NumberFormat(suffix = " mol/L")
pvalue = NumberFormat(mode = :digits, digits = 3, lower_limit = 0.001)

cells = [
    Cell(fraction(0.4567)) Cell(fraction(0.891))
    Cell(count(5432.1))    Cell(count(1_230_000))
    Cell(concentration(2.34e-7)) Cell(concentration(1.5e-8))
    Cell(pvalue(0.0234)) Cell(pvalue(0.00004))
]
Table(cells)
```

In `simple_table`, a `NumberFormat` can be attached to a column with the pair syntax,
and `listingtable` accepts a `NumberFormat` for its raw values via the `format` keyword.
Anywhere a function is expected, for example for summary analyses in `listingtable` or
`summarytable`, formats can be composed with the summary function instead, like
`NumberFormat(digits = 2) ∘ mean`.

#### `Concat`

All the arguments of `Concat` are concatenated together in the final output.
Note that this is usually preferrable to string-interpolating multiple values because you lose special handling of the value types (like floating point rounding behavior or special LaTeX formatting) if you turn them into strings.

```@example
using SummaryTables
using Statistics

some_numbers = [1, 2, 4, 7, 8, 13, 27]
mu = mean(some_numbers)
sd = std(some_numbers)

cells = [
    Cell("Mean (SD) interpolated")  Cell("$mu ($sd)")
    Cell("Mean (SD) Concat")        Cell(Concat(mu, " (", sd, ")"))
]

Table(cells)
```

#### `Multiline`

Use the `Multiline` type to force linebreaks between different values in a cell.
A `Multiline` value may not be nested inside other values in a cell, it may only be the outermost value.
All nested values retain their special behaviors, so using `Multiline` is preferred over hardcoding linebreaks in the specific output formats yourself.

```@example
using SummaryTables

cells = [
    Cell(Multiline("A1 a", "A1 b"))  Cell("B1")
    Cell("A2")                       Cell("B2")
]

Table(cells)
```

#### `Annotated`

To annotate elements in a table with footnotes, use the `Annotated` type.
It takes an arbitrary `value` to annotate as well as an `annotation` which becomes a footnote in the table.
You can also pass the `label` keyword if you don't want an auto-incrementing number as the label.
You can also pass `label = nothing` if you want a footnote without label.

```@example
using SummaryTables

cells = [
    Cell(Annotated("A1", "This is the first cell"))             Cell("B1")
    Cell(Annotated("A2", "A custom label", label = "x"))        Cell("B2")
    Cell(Annotated("-", "- A missing value", label = nothing))  Cell("B3")
]

Table(cells)
```

#### `Superscript`

Displays the wrapped value in superscript style.
Use this instead of hardcoding output format specific commands.

```@example
using SummaryTables

cells = [
    Cell("Without superscript")  Cell(Concat("With ", Superscript("superscript")));
]

Table(cells)
```

#### `Subscript`

Displays the wrapped value in subscript style.
Use this instead of hardcoding output format specific commands.

```@example
using SummaryTables

cells = [
    Cell("Without subscript")  Cell(Concat("With ", Subscript("subscript")));
]

Table(cells)
```

#### `Styled`

To apply font styles only to a rendered value and not the whole cell, use the `Styled` wrapper object. Together with `Concat` you can partially style a cell's content.

`Styled` takes the following optional keyword arguments:
- `bold::Bool`
- `italic::Bool`
- `underline::Bool`
- `color::String` a hex color string like #FF0000. Note that you need to add `\usepackage{xcolor}` to use colored text in LaTeX.

```@example
using SummaryTables

text = Styled("Italic text and a bold red number: ", italic = true)
number = Styled(sin(1.3), bold = true, color = "#FF0000")
together = Concat(text, number)
annotated = Annotated("Annotated", Styled("Styled footnote", color = "#00CC00"))
Table(Cell.([together annotated]))
```

## Optional argument 2: `cellstyle`

You may pass the style settings of a `Cell` as a positional argument of type [`CellStyle`](@ref).
It is usually more convenient, however, to use the keyword arguments to `Cell` instead.

```@example
using SummaryTables


Table([
    Cell("A1", CellStyle(bold = true))    Cell("B1", CellStyle(underline = true))
    Cell("A2", CellStyle(italic = true))  Cell("B2", CellStyle(indent_pt = 10))
])
```
