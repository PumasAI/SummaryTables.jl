# `CellStyle`

## Keyword: `bold`

Makes the text in the cell bold.

```@example
using SummaryTables

cells = reshape([
    Cell("Some text in bold", bold = true),
], :, 1)

Table(cells)
```

## Keyword: `italic`

Makes the text in the cell italic.

```@example
using SummaryTables

cells = reshape([
    Cell("Some text in italic", italic = true),
], :, 1)

Table(cells)
```

## Keyword: `underline`

Underlines the text in the cell.

```@example
using SummaryTables

cells = reshape([
    Cell(Multiline("Some", "text", "that is", "underlined"), underline = true),
], :, 1)

Table(cells)
```

## Keyword: `halign`

Aligns the cell content horizontally either at the `:left`, the `:center` or the `:right`.

```@example
using SummaryTables

cells = reshape([
    Cell("A wide cell"),
    Cell(":left", halign = :left),
    Cell(":center", halign = :center),
    Cell(":right", halign = :right),
], :, 1)

Table(cells)
```

## Keyword: `valign`

Aligns the cell content vertically either at the `:top`, the `:center` or the `:bottom`.

```@example
using SummaryTables

cells = reshape([
    Cell(Multiline("A", "tall", "cell")),
    Cell(":top", valign = :top),
    Cell(":center", valign = :center),
    Cell(":bottom", valign = :bottom),
], 1, :)

Table(cells)
```

## Keyword: `indent`

Indents the content of the cell on the left by a factor of the font size, so `indent = 1.5` indents by one and a half times the font size.
This can be used to give hierarchical structure to adjacent rows.

The indentation is relative so that it keeps its proportion to the text when the surrounding document changes its font size.
HTML, LaTeX and typst emit it as a relative length, while docx resolves it against the [`base_font_size` docx default](@ref "Global Defaults") because Word has no relative font metrics.

```@example
using SummaryTables

C(value; kwargs...) = Cell(value; halign = :left, kwargs...)

cells = [
    C("Group A")  C("Group B")
    C("Subgroup A", indent = 0.6)  C("Subgroup B", indent = 0.6)
    C("Subgroup A", indent = 0.6)  C("Subgroup B", indent = 0.6)
]

Table(cells)
```

!!! warning "Deprecated: `indent_pt`"
    The `indent_pt` keyword indents by an absolute number of points, which cannot follow the font size of the document the table is embedded in.
    It still works but is deprecated, use `indent` instead.
    To convert, divide the old point value by the font size you were assuming, so `indent_pt = 12` at a 10pt body font size becomes `indent = 1.2`.

## Keyword: `border_bottom`

Adds a border at the bottom of the cell.
This option is meant for horizontally merged cells functioning as subheaders.

```@example
using SummaryTables

header_cell = Cell("header", border_bottom = true, merge = true)

cells = [
    header_cell   header_cell
    Cell("body")  Cell("body")
]
Table(cells)
```

## Keyword: `merge`

All adjacent cells that are `==` equal to each other and have `merge = true` will be rendered as one merged cell.

```@example
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



## Keyword: `mergegroup`

Because adjacent cells that are `==` equal to each other are merged when `merge = true` is set, you can optionally
set the `mergegroup` keyword of adjacent cells to a different value to avoid merging them even if their values are otherwise equal.

```@example
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

