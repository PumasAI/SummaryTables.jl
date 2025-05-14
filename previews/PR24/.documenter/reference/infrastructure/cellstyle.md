
# `CellStyle` {#CellStyle}

## Keyword: `bold` {#Keyword:-bold}

Makes the text in the cell bold.

```julia
using SummaryTables

cells = reshape([
    Cell("Some text in bold", bold = true),
], :, 1)

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-e090cfb7&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-e090cfb7 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-e090cfb7 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-e090cfb7 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-e090cfb7 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-e090cfb7 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-e090cfb7 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;font-weight:bold;text-align:center;&quot;&gt;Some text in bold&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `italic` {#Keyword:-italic}

Makes the text in the cell italic.

```julia
using SummaryTables

cells = reshape([
    Cell("Some text in italic", italic = true),
], :, 1)

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-65e3c12a&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-65e3c12a {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-65e3c12a tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-65e3c12a tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-65e3c12a br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-65e3c12a sub {&#10;            line-height: 0;&#10;        }&#10;        #st-65e3c12a sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;font-style:italic;text-align:center;&quot;&gt;Some text in italic&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `underline` {#Keyword:-underline}

Underlines the text in the cell.

```julia
using SummaryTables

cells = reshape([
    Cell(Multiline("Some", "text", "that is", "underlined"), underline = true),
], :, 1)

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-6778676a&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-6778676a {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-6778676a tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-6778676a tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-6778676a br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-6778676a sub {&#10;            line-height: 0;&#10;        }&#10;        #st-6778676a sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-decoration:underline;text-align:center;&quot;&gt;Some&lt;br&gt;text&lt;br&gt;that is&lt;br&gt;underlined&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `halign` {#Keyword:-halign}

Aligns the cell content horizontally either at the `:left`, the `:center` or the `:right`.

```julia
using SummaryTables

cells = reshape([
    Cell("A wide cell"),
    Cell(":left", halign = :left),
    Cell(":center", halign = :center),
    Cell(":right", halign = :right),
], :, 1)

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-02370731&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-02370731 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-02370731 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-02370731 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-02370731 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-02370731 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-02370731 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A wide cell&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:left;&quot;&gt;:left&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;:center&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:right;&quot;&gt;:right&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;1&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `valign` {#Keyword:-valign}

Aligns the cell content vertically either at the `:top`, the `:center` or the `:bottom`.

```julia
using SummaryTables

cells = reshape([
    Cell(Multiline("A", "tall", "cell")),
    Cell(":top", valign = :top),
    Cell(":center", valign = :center),
    Cell(":bottom", valign = :bottom),
], 1, :)

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-5c0a2140&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-5c0a2140 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-5c0a2140 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-5c0a2140 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-5c0a2140 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-5c0a2140 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-5c0a2140 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A&lt;br&gt;tall&lt;br&gt;cell&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;:top&lt;/td&gt;&#10;        &lt;td style=&quot;vertical-align:middle;text-align:center;&quot;&gt;:center&lt;/td&gt;&#10;        &lt;td style=&quot;vertical-align:bottom;text-align:center;&quot;&gt;:bottom&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `indent_pt` {#Keyword:-indent_pt}

Indents the content of the cell on the left by the given number of `pt` units. This can be used to give hierarchical structure to adjacent rows.

```julia
using SummaryTables

C(value; kwargs...) = Cell(value; halign = :left, kwargs...)

cells = [
    C("Group A")  C("Group B")
    C("Subgroup A", indent_pt = 6)  C("Subgroup B", indent_pt = 6)
    C("Subgroup A", indent_pt = 6)  C("Subgroup B", indent_pt = 6)
]

Table(cells)
```

<div v-html="`&lt;table id=&quot;st-1998d7f9&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-1998d7f9 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-1998d7f9 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-1998d7f9 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-1998d7f9 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-1998d7f9 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-1998d7f9 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:left;&quot;&gt;Group A&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:left;&quot;&gt;Group B&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;padding-left:6.0pt;text-align:left;&quot;&gt;Subgroup A&lt;/td&gt;&#10;        &lt;td style=&quot;padding-left:6.0pt;text-align:left;&quot;&gt;Subgroup B&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;padding-left:6.0pt;text-align:left;&quot;&gt;Subgroup A&lt;/td&gt;&#10;        &lt;td style=&quot;padding-left:6.0pt;text-align:left;&quot;&gt;Subgroup B&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `border_bottom` {#Keyword:-border_bottom}

Adds a border at the bottom of the cell. This option is meant for horizontally merged cells functioning as subheaders.

```julia
using SummaryTables

header_cell = Cell("header", border_bottom = true, merge = true)

cells = [
    header_cell   header_cell
    Cell("body")  Cell("body")
]
Table(cells)
```

<div v-html="`&lt;table id=&quot;st-1b0d2ee8&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-1b0d2ee8 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-1b0d2ee8 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-1b0d2ee8 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-1b0d2ee8 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-1b0d2ee8 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-1b0d2ee8 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td colspan=&quot;2&quot; style=&quot;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;&quot;&gt;header&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;body&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;body&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;2&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `merge` {#Keyword:-merge}

All adjacent cells that are `==` equal to each other and have `merge = true` will be rendered as one merged cell.

```julia
using SummaryTables

merged_cell = Cell("merged", valign = :center, merge = true)

cells = [
    Cell("A1")  Cell("B1")   Cell("C1")   Cell("D1")
    Cell("A2")  merged_cell  merged_cell  Cell("D2")
    Cell("A3")  merged_cell  merged_cell  Cell("D3")
    Cell("A4")  Cell("B4")   Cell("C4")   Cell("D4")
]
Table(cells)
```

<div v-html="`&lt;table id=&quot;st-13cbfd21&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-13cbfd21 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-13cbfd21 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-13cbfd21 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-13cbfd21 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-13cbfd21 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-13cbfd21 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;C1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D1&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A2&lt;/td&gt;&#10;        &lt;td rowspan=&quot;2&quot; colspan=&quot;2&quot; style=&quot;vertical-align:middle;text-align:center;&quot;&gt;merged&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D2&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A3&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D3&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;C4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D4&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>

## Keyword: `mergegroup` {#Keyword:-mergegroup}

Because adjacent cells that are `==` equal to each other are merged when `merge = true` is set, you can optionally set the `mergegroup` keyword of adjacent cells to a different value to avoid merging them even if their values are otherwise equal.

```julia
using SummaryTables

merged_cell_1 = Cell("merged", valign = :center, merge = true, mergegroup = 1)
merged_cell_2 = Cell("merged", valign = :center, merge = true, mergegroup = 2)

cells = [
    Cell("A1")  Cell("B1")     Cell("C1")     Cell("D1")
    Cell("A2")  merged_cell_1  merged_cell_2  Cell("D2")
    Cell("A3")  merged_cell_1  merged_cell_2  Cell("D3")
    Cell("A4")  Cell("B4")     Cell("C4")     Cell("D4")
]
Table(cells)
```

<div v-html="`&lt;table id=&quot;st-91df8148&quot;&gt;&#10;    &lt;style&gt;&#10;        #st-91df8148 {&#10;            border: none;&#10;            margin: 0 auto;&#10;            padding: 0.25rem;&#10;            border-collapse: separate;&#10;            border-spacing: 0.85em 0.2em;&#10;            line-height: 1.2em;&#10;        }&#10;        #st-91df8148 tr {&#10;            background-color: transparent;&#10;            border: none;&#10;        }&#10;        #st-91df8148 tr td {&#10;            vertical-align: top;&#10;            padding: 0;&#10;            border: none;&#10;            background-color: transparent;&#10;        }&#10;        #st-91df8148 br {&#10;            line-height: 0em;&#10;            margin: 0;&#10;        }&#10;        #st-91df8148 sub {&#10;            line-height: 0;&#10;        }&#10;        #st-91df8148 sup {&#10;            line-height: 0;&#10;        }&#10;    &lt;/style&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;C1&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D1&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A2&lt;/td&gt;&#10;        &lt;td rowspan=&quot;2&quot; style=&quot;vertical-align:middle;text-align:center;&quot;&gt;merged&lt;/td&gt;&#10;        &lt;td rowspan=&quot;2&quot; style=&quot;vertical-align:middle;text-align:center;&quot;&gt;merged&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D2&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A3&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D3&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;A4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;B4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;C4&lt;/td&gt;&#10;        &lt;td style=&quot;text-align:center;&quot;&gt;D4&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;    &lt;tr&gt;&lt;td colspan=&quot;4&quot; style=&quot;border-bottom: 1.5px solid currentColor; padding: 0&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&#10;&lt;/table&gt;`"></div>
