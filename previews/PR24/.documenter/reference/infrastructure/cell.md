
# `Cell` {#Cell}

## Argument 1: `value` {#Argument-1:-value}

This is the content of the `Cell`. How it is rendered is decided by the output format and what `show` methods are defined for the type of `value` and the respective output `MIME` type. If no output-specific `MIME` type has a `show` method, the fallback is always the generic text output.

The following are some types which receive special handling by SummaryTables.

### Special `Cell` value types {#Special-Cell-value-types}

#### Floating point numbers {#Floating-point-numbers}

Most tables display floating point numbers, however, the formatting of these numbers can vary. SummaryTables postprocesses every table in order to find unformatted floating point numbers. These are then given the default, table-wide, formatting.

```julia
using SummaryTables

cells = [
    Cell(1.23456) Cell(12.3456)
    Cell(0.123456) Cell(0.0123456)
]
Table(cells)
```

<div v-html="`&lt;table id=&quot;st-c261392e&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-c261392e {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-c261392e tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-c261392e tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-c261392e br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-c261392e sub {&#10;            line-height: 0;&#10;        }&#10;        #st-c261392e sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;1.23&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;12.3&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;0.123&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;0.0123&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

```julia
using SummaryTables

cells = [
    Cell(1.23456) Cell(12.3456)
    Cell(0.123456) Cell(0.0123456)
]
Table(cells; round_mode = :digits, round_digits = 5, trailing_zeros = true)
```

<div v-html="`&lt;table id=&quot;st-725f2e14&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-725f2e14 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-725f2e14 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-725f2e14 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-725f2e14 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-725f2e14 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-725f2e14 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;1.23456&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;12.34560&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;0.12346&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;0.01235&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Concat` {#Concat}

All the arguments of `Concat` are concatenated together in the final output. Note that this is usually preferrable to string-interpolating multiple values because you lose special handling of the value types (like floating point rounding behavior or special LaTeX formatting) if you turn them into strings.

```julia
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

<div v-html="`&lt;table id=&quot;st-3a40471f&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-3a40471f {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-3a40471f tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-3a40471f tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-3a40471f br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-3a40471f sub {&#10;            line-height: 0;&#10;        }&#10;        #st-3a40471f sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;Mean (SD) interpolated&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;8.857142857142858 (8.970852271450605)&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;Mean (SD) Concat&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;8.86 (8.97)&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Multiline` {#Multiline}

Use the `Multiline` type to force linebreaks between different values in a cell. A `Multiline` value may not be nested inside other values in a cell, it may only be the outermost value. All nested values retain their special behaviors, so using `Multiline` is preferred over hardcoding linebreaks in the specific output formats yourself.

```julia
using SummaryTables

cells = [
    Cell(Multiline("A1 a", "A1 b"))  Cell("B1")
    Cell("A2")                       Cell("B2")
]

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-6ddfd0bf&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-6ddfd0bf {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-6ddfd0bf tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-6ddfd0bf tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-6ddfd0bf br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-6ddfd0bf sub {&#10;            line-height: 0;&#10;        }&#10;        #st-6ddfd0bf sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A1 a&lt;br&gt;A1 b&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B1&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A2&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B2&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Annotated` {#Annotated}

To annotate elements in a table with footnotes, use the `Annotated` type. It takes an arbitrary `value` to annotate as well as an `annotation` which becomes a footnote in the table. You can also pass the `label` keyword if you don&#39;t want an auto-incrementing number as the label. You can also pass `label = nothing` if you want a footnote without label.

```julia
using SummaryTables

cells = [
    Cell(Annotated("A1", "This is the first cell"))             Cell("B1")
    Cell(Annotated("A2", "A custom label", label = "x"))        Cell("B2")
    Cell(Annotated("-", "- A missing value", label = nothing))  Cell("B3")
]

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-e536e547&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-e536e547 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-e536e547 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-e536e547 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-e536e547 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-e536e547 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-e536e547 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A1&lt;sup&gt;1&lt;/sup&gt;&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B1&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A2&lt;sup&gt;x&lt;/sup&gt;&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B2&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;-&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B3&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;font-size: 0.8em;&quot;&gt;&lt;sup&gt;1&lt;/sup&gt; This is the first cell&lt;br/&gt;&lt;sup&gt;x&lt;/sup&gt; A custom label&lt;br/&gt;- A missing value&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Superscript` {#Superscript}

Displays the wrapped value in superscript style. Use this instead of hardcoding output format specific commands.

```julia
using SummaryTables

cells = [
    Cell("Without superscript")  Cell(Concat("With ", Superscript("superscript")));
]

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-fbdfcb2f&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-fbdfcb2f {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-fbdfcb2f tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-fbdfcb2f tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-fbdfcb2f br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-fbdfcb2f sub {&#10;            line-height: 0;&#10;        }&#10;        #st-fbdfcb2f sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;Without superscript&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;With &lt;sup&gt;superscript&lt;/sup&gt;&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Subscript` {#Subscript}

Displays the wrapped value in subscript style. Use this instead of hardcoding output format specific commands.

```julia
using SummaryTables

cells = [
    Cell("Without subscript")  Cell(Concat("With ", Subscript("subscript")));
]

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-4e7c43a9&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-4e7c43a9 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-4e7c43a9 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-4e7c43a9 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-4e7c43a9 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-4e7c43a9 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-4e7c43a9 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;Without subscript&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;With &lt;sub&gt;subscript&lt;/sub&gt;&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

#### `Styled` {#Styled}

To apply font styles only to a rendered value and not the whole cell, use the `Styled` wrapper object. Together with `Concat` you can partially style a cell&#39;s content.

`Styled` takes the following optional keyword arguments:
- `bold::Bool`
  
- `italic::Bool`
  
- `underline::Bool`
  
- `color::String` a hex color string like #FF0000. Note that you need to add `\usepackage{xcolor}` to use colored text in LaTeX.
  

```julia
using SummaryTables

text = Styled("Italic text and a bold red number: ", italic = true)
number = Styled(sin(1.3), bold = true, color = "#FF0000")
together = Concat(text, number)
annotated = Annotated("Annotated", Styled("Styled footnote", color = "#00CC00"))
Table(Cell.([together annotated]))
```

<div v-html="`&lt;table id=&quot;st-eb67d372&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-eb67d372 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-eb67d372 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-eb67d372 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-eb67d372 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-eb67d372 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-eb67d372 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;&lt;span style=&quot;font-style:italic;&quot;&gt;Italic text and a bold red number: &lt;/span&gt;&lt;span style=&quot;font-weight:bold;color:rgb(255,0,0);&quot;&gt;0.964&lt;/span&gt;&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;Annotated&lt;sup&gt;1&lt;/sup&gt;&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;font-size: 0.8em;&quot;&gt;&lt;sup&gt;1&lt;/sup&gt; &lt;span style=&quot;color:rgb(0,204,0);&quot;&gt;Styled footnote&lt;/span&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Optional argument 2: `cellstyle` {#Optional-argument-2:-cellstyle}

You may pass the style settings of a `Cell` as a positional argument of type [`CellStyle`](/reference/infrastructure/cellstyle#CellStyle). It is usually more convenient, however, to use the keyword arguments to `Cell` instead.

```julia
using SummaryTables


Table([
    Cell("A1", CellStyle(bold = true))    Cell("B1", CellStyle(underline = true))
    Cell("A2", CellStyle(italic = true))  Cell("B2", CellStyle(indent_pt = 10))
])
```

<div v-html="`&lt;table id=&quot;st-53566267&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-53566267 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-53566267 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-53566267 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-53566267 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-53566267 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-53566267 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;font-weight:bold;text-align:center;&quot;&gt;A1&lt;/td&gt;&#10;        &lt;td style=&quot;text-decoration:underline;text-align:center;&quot;&gt;B1&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;font-style:italic;text-align:center;&quot;&gt;A2&lt;/td&gt;&#10;        &lt;td style=&quot;padding-left:10.0pt;text-align:center;&quot;&gt;B2&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>
