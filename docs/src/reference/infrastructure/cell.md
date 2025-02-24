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
Table(cells; round_mode = :digits, round_digits = 5, trailing_zeros = true)
```

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
- `color::String` a hex color string like #FF0000

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
