
# API {#API}
<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Annotated-Tuple{Any, Any}' href='#SummaryTables.Annotated-Tuple{Any, Any}'><span class="jlbinding">SummaryTables.Annotated</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
Annotated(value, annotation; label = AutoNumbering())
```


Create an `Annotated` object which will be given a footnote annotation in the `Table` where it is used. If the `label` keyword is `AutoNumbering()`, annotations will be given number labels from 1 to N in the order of their appearance. If it is `nothing`, no label will be shown. Any other `label` will be used directly as the footnote label.

Each unique label must be paired with a unique annotation, but the same combination can exist multiple times in a single table.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/special_cell_values.jl#L44-L55" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Cell' href='#SummaryTables.Cell'><span class="jlbinding">SummaryTables.Cell</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Cell(value, style::CellStyle)
Cell(value; [bold, italic, underline, halign, valign, border_bottom, indent_pt, merge, mergegroup])
```


Construct a `Cell` with value `value` and `CellStyle` `style`, which can also be created implicitly with keyword arguments. For explanations of the styling options, refer to `CellStyle`. A cell with value `nothing` is displayed as an empty cell (styles might still apply). The type of `value` can be anything.

Some types with special behavior are:
- `Multiline` for content broken over multiple lines in a cell. This object may not be used nested in other values, only as the top-level value.
  
- `Concat` for stringing together multiple values without having to interpolate them into a `String`, which keeps their own special behaviors intact.
  
- `Superscript` and `Subscript`
  
- `Annotated` for a value with an optional superscript label and a footnote annotation.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/cells.jl#L72-L86" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.CellStyle' href='#SummaryTables.CellStyle'><span class="jlbinding">SummaryTables.CellStyle</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
CellStyle(;
    bold::Bool = false,
    italic::Bool = false,
    underline::Bool = false,
    halign::Symbol = :center,
    valign::Symbol = :top,
    indent_pt::Float64 = 0.0,
    border_bottom::Bool = false,
    merge::Bool = false,
    mergegroup::UInt8 = 0,
)
```


Create a `CellStyle` object which determines the visual appearance of `Cell`s.

Keyword arguments:
- `bold` renders text `bold` if `true`.
  
- `italic` renders text `italic` if `true`.
  
- `underline` underlines text if `true`.
  
- `halign` determines the horizontal alignment within the cell, either `:left`, `:center` or `:right`.
  
- `valign` determines the vertical alignment within the cell, either `:top`, `:center` or `:bottom`.
  
- `indent_pt` adds left indentation in points to the cell text.
  
- `border_bottom` adds a bottom border to the cell if `true`.
  
- `merge` causes adjacent cells which are `==` equal to be rendered as a single merged cell.
  
- `mergegroup` is a number that can be used to differentiate between two otherwise equal adjacent groups of cells that should not be merged together.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/cells.jl#L1-L27" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Concat' href='#SummaryTables.Concat'><span class="jlbinding">SummaryTables.Concat</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Concat(args...)
```


Create a `Concat` object which can be used to concatenate the representations of multiple values in a single table cell while keeping the conversion semantics of each `arg` in `args` intact.

**Example**

```julia
Concat(
    "Some text and an ",
    Annotated("annotated", "Some annotation"),
    " value",
)
# will be rendered as "Some text and an annotated¹ value"
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/special_cell_values.jl#L13-L30" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Group' href='#SummaryTables.Group'><span class="jlbinding">SummaryTables.Group</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



Specifies one variable to group over and an associated name for display.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L1-L3" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.GroupKey' href='#SummaryTables.GroupKey'><span class="jlbinding">SummaryTables.GroupKey</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
GroupKey
```


Holds the group column names and values for one group of a dataset. This struct has only one field:
- `entries::Vector{Pair{Symbol,Any}}`: A vector of `column_name => group_value` pairs.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L108-L115" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.ListingPageMetadata' href='#SummaryTables.ListingPageMetadata'><span class="jlbinding">SummaryTables.ListingPageMetadata</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
ListingPageMetadata
```


Describes which row and column group sections of a full listing table are included in a given page. There are two fields:
- `rows::Vector{GroupKey}`
  
- `cols::Vector{GroupKey}`
  

Each `Vector{GroupKey}` holds all group keys that were relevant for pagination along that side of the listing table. A vector is empty if the table was not paginated along that side.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L122-L134" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Multiline' href='#SummaryTables.Multiline'><span class="jlbinding">SummaryTables.Multiline</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Multiline(args...)
```


Create a `Multiline` object which renders each `arg` on a separate line. A `Multiline` value may only be used as the top-level value of a cell, so `Cell(Multiline(...))` is allowed but `Cell(Concat(Multiline(...), ...))` is not.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/special_cell_values.jl#L1-L7" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Page' href='#SummaryTables.Page'><span class="jlbinding">SummaryTables.Page</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Page{M}
```


Represents one page of a `PaginatedTable`.

It has two public fields:
- `table::Table`: A part of the full table, created according to the chosen `Pagination`.
  
- `metadata::M`: Information about which part of the full table this page contains. This is different for each table function that takes a `Pagination` argument because each such function may use its own logic for how to split pages.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L82-L93" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.PaginatedTable' href='#SummaryTables.PaginatedTable'><span class="jlbinding">SummaryTables.PaginatedTable</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
PaginatedTable{M}
```


The return type for all table functions that take a `Pagination` argument to split the table into pages according to table-specific pagination rules.

This type only has one field:
- `pages::Vector{Page{M}}`: Each `Page` holds a table and metadata of type `M` which depends on the table function that creates the `PaginatedTable`.
  

To get the table of page 2, for a `PaginatedTable` stored in variable `p`, access `p.pages[2].table`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L157-L168" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Replace' href='#SummaryTables.Replace'><span class="jlbinding">SummaryTables.Replace</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Replace(f, with)
Replace(f; with)
```


This postprocessor replaces all cell values for which `f(value) === true` with the value `with`. If `with <: Function` then the new value will be `with(value)`, instead.

**Examples**

```
Replace(x -> x isa String, "A string was here")
Replace(x -> x isa String, uppercase)
Replace(x -> x isa Int && iseven(x), "An even Int was here")
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/tables.jl#L243-L258" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Styled' href='#SummaryTables.Styled'><span class="jlbinding">SummaryTables.Styled</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Styled(value; color, bold, italic, underline)
```


Create a `Styled` object wrapping `value` which renders `value` formatted according to these optional properties:
- `bold::Union{Nothing,Bool}`
  
- `italic::Union{Nothing,Bool}`
  
- `underline::Union{Nothing,Bool}`
  
- `color::Union{Nothing,String}` The text color as a hex RGB string like #FA03C7.  Note that you need to add `\usepackage{xcolor}` to use colored text in LaTeX.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/special_cell_values.jl#L168-L176" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Summary' href='#SummaryTables.Summary'><span class="jlbinding">SummaryTables.Summary</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



Stores the index of the grouping variable under which the summaries defined in `analyses` should be run. An index of `0` means that one summary block is appended after all columns or rows, an index of `1` means on summary block after each group from the first grouping key of rows or columns, and so on.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L28-L33" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.SummaryAnalysis' href='#SummaryTables.SummaryAnalysis'><span class="jlbinding">SummaryTables.SummaryAnalysis</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



Specifies one function to summarize the raw values of one group with, and an associated name for display.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L16-L19" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.Table-Tuple{Any}' href='#SummaryTables.Table-Tuple{Any}'><span class="jlbinding">SummaryTables.Table</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
function Table(cells;
    header = nothing,
    footer = nothing,
    round_digits = 3,
    round_mode = :auto,
    trailing_zeros = false,
    footnotes = [],
    postprocess = [],
    rowgaps = Pair{Int,Float64}[],
    colgaps = Pair{Int,Float64}[],
    linebreak_footnotes = true,
)
```


Create a `Table` which can be rendered in multiple formats, such as HTML or LaTeX.

**Arguments**
- `cells::AbstractMatrix{<:Cell}`: The matrix of `Cell`s that make up the table.
  

**Keyword arguments**
- `header`: The index of the last row of the header, `nothing` if no header is specified.
  
- `footer`: The index of the first row of the footer, `nothing` if no footer is specified.
  
- `footnotes`: A vector of objects printed as footnotes that are not derived from `Annotated` values and therefore don&#39;t get labels with counterparts inside the table.
  
- `round_digits = 3`: Float values will be rounded to this precision before printing.
  
- `round_mode = :auto`: How the float values are rounded, options are `:auto`, `:digits` or `:sigdigits`. If `round_mode === nothing`, no rounding will be applied and `round_digits` and `trailing_zeros` will have no effect.
  
- `trailing_zeros = false`: Controls if float values keep trailing zeros, for example `4.0` vs `4`.
  
- `postprocess = []`: A list of post-processors which will be applied left to right to the table before displaying the table.  A post-processor can either work element-wise or on the whole table object. See the `postprocess_table` and  `postprocess_cell` functions for defining custom postprocessors.
  
- `rowgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap   the size of `gap_pt` is added between the rows `index` and `index+1`.
  
- `colgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap   the size of `gap_pt` is added between the columns `index` and `index+1`.
  
- `linebreak_footnotes = true`: If `true`, each footnote and annotation starts on a separate line.
  

**Round mode**

Consider the numbers `0.006789`, `23.4567`, `456.789` or `12345.0`.

Here is how these numbers are formatted with the different available rounding modes:
- `:auto` rounds to `n` significant digits but doesn&#39;t zero out additional digits before the comma unlike `:sigdigits`. For example, `round_digits = 3` would result in `0.00679`, `23.5`, `457.0` or `12345.0`. Numbers at orders of magnitude &gt;= 6 or &lt;= -5 are displayed in exponential notation as in Julia.
  
- `:digits` rounds to `n` digits after the comma and shows possibly multiple trailing zeros. For example, `round_digits = 3` would result in `0.007`, `23.457` or `456.789` or `12345.000`. Numbers are never shown with exponential notation.
  
- `:sigdigits` rounds to `n` significant digits and zeros out additional digits before the comma unlike `:auto`. For example, `round_digits = 3` would result in `0.00679`, `23.5`, `457.0` or `12300.0`. Numbers at orders of magnitude &gt;= 6 or &lt;= -5 are displayed in exponential notation as in Julia.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/tables.jl#L28-L81" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.ReplaceMissing-Tuple{}' href='#SummaryTables.ReplaceMissing-Tuple{}'><span class="jlbinding">SummaryTables.ReplaceMissing</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
ReplaceMissing(; with = Annotated("-", "- No value"; label = NoLabel()))
```


This postprocessor replaces all `missing` cell values with the value in `with`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/tables.jl#L266-L270" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.auto_round-Tuple{Any}' href='#SummaryTables.auto_round-Tuple{Any}'><span class="jlbinding">SummaryTables.auto_round</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
auto_round(number; target_digits)
```


Rounds a floating point number to a target number of digits that are not leading zeros. For example, with 3 target digits, desirable numbers would be 123.0, 12.3, 1.23, 0.123, 0.0123 etc. Numbers larger than the number of digits are only rounded to the next integer (compare with `round(1234, sigdigits = 3)` which rounds to `1230.0`). Numbers are rounded to `target_digits` significant digits when the floored base 10 exponent is -5 and lower or 6 and higher, as these numbers print with `e` notation by default in Julia.

```
auto_round(        1234567, target_digits = 4) = 1.235e6
auto_round(       123456.7, target_digits = 4) = 123457.0
auto_round(       12345.67, target_digits = 4) = 12346.0
auto_round(       1234.567, target_digits = 4) = 1235.0
auto_round(       123.4567, target_digits = 4) = 123.5
auto_round(       12.34567, target_digits = 4) = 12.35
auto_round(       1.234567, target_digits = 4) = 1.235
auto_round(      0.1234567, target_digits = 4) = 0.1235
auto_round(     0.01234567, target_digits = 4) = 0.01235
auto_round(    0.001234567, target_digits = 4) = 0.001235
auto_round(   0.0001234567, target_digits = 4) = 0.0001235
auto_round(  0.00001234567, target_digits = 4) = 1.235e-5
auto_round( 0.000001234567, target_digits = 4) = 1.235e-6
auto_round(0.0000001234567, target_digits = 4) = 1.235e-7
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/renderers/utils.jl#L44-L70" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.listingtable' href='#SummaryTables.listingtable'><span class="jlbinding">SummaryTables.listingtable</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
listingtable(table, variable, [pagination];
    rows = [],
    cols = [],
    summarize_rows = [],
    summarize_cols = [],
    variable_header = true,
    table_kwargs...
)
```


Create a listing table `Table` from `table` which displays raw values from column `variable`.

**Arguments**
- `table`: Data source which must be convertible to a `DataFrames.DataFrame`.
  
- `variable`: Determines which variable&#39;s raw values are shown. Can either be a `Symbol` or `String` such as `:ColumnA`, or alternatively a `Pair` where the second element is the display name, such as `:ColumnA => "Column A"`.
  
- `pagination::Pagination`: If a pagination object is passed, the return type changes to `PaginatedTable`. The `Pagination` object may be created with keywords `rows` and/or `cols`. These must be set to `Int`s that determine how many group sections along each side are included in one page. These group sections are determined by the summary structure, because pagination never splits a listing table within rows or columns that are being summarized together. If `summarize_rows` or `summarize_cols` is empty or unset, each group along that side is its own section. If `summarize_rows` or `summarize_cols` has a group passed via the `column => ...` syntax, the group sections along that side are determined by `column`. If no such `column` is passed (i.e., the summary along that side applies to the all groups) there is only one section along that side, which means that this side cannot be paginated into more than one page.
  

**Keyword arguments**
- `rows = []`: Grouping structure along the rows. Should be a `Vector` where each element is a grouping variable, specified as a `Symbol` or `String` such as `:Column1`, or a `Pair`, where the first element is the symbol and the second a display name, such as `:Column1 => "Column 1"`. Specifying multiple grouping variables creates nested groups, with the last variable changing the fastest.
  
- `cols = []`: Grouping structure along the columns. Follows the same structure as `rows`.
  
- `summarize_rows = []`: Specifies functions to summarize `variable` with along the rows. Should be a `Vector`, where each entry is one separate summary. Each summary can be given as a `Function` such as `mean` or `maximum`, in which case the display name is the function&#39;s name. Alternatively, a display name can be given using the pair syntax, such as `mean => "Average"`. By default, one summary is computed over all groups. You can also pass `name => [...]` where name, either a `Symbol` or `String`, is a grouping column, to compute one summary for each level of that group.
  
- `summarize_cols = []`: Specifies functions to summarize `variable` with along the columns. Follows the same structure as `summarize_rows`.
  
- `variable_header = true`: Controls if the cell with the name of the summarized `variable` is shown. 
  
- `sort = true`: Sort the input table before grouping. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.
  

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

**Example**

```
using Statistics

tbl = [
    :Apples => [1, 2, 3, 4, 5, 6, 7, 8],
    :Batch => [1, 1, 1, 1, 2, 2, 2, 2],
    :Checked => [true, false, true, false, true, false, true, false],
    :Delivery => ['a', 'a', 'b', 'b', 'a', 'a', 'b', 'b'],
]

listingtable(
    tbl,
    :Apples => "Number of apples",
    rows = [:Batch, :Checked => "Checked for spots"],
    cols = [:Delivery],
    summarize_cols = [sum => "total"],
    summarize_rows = :Batch => [mean => "average", sum]
)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/listingtable.jl#L205-L268" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.overview_table-Tuple{Any}' href='#SummaryTables.overview_table-Tuple{Any}'><span class="jlbinding">SummaryTables.overview_table</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
overview_table(table)
```


Creates a `Table` that gives a summarized overview of the columns of `table`, intended to give a quick intuition of the dataset.

To render the graphs with LaTeX, you need to include `\usepackage{tikz}` in your preamble.

**Keyword arguments**
- `max_categories = 10`: Limit the number of categories listed individually for categorical columns, the rest will be lumped together.
  
- `label_metadata_key = "label"`: Key to look up column label metadata with.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/overview_table.jl#L1-L13" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.postprocess_cell' href='#SummaryTables.postprocess_cell'><span class="jlbinding">SummaryTables.postprocess_cell</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
postprocess_cell
```


Overload `postprocess_cell(c::Cell, postprocessor::YourPostProcessor)` to enable using `YourPostProcessor` as a cell postprocessor by passing it to the `postprocess` keyword argument of `Table`.

The function must always return a `Cell`. It will be applied on every cell of the table that is being postprocessed, all other table attributes will be left unmodified.

Use `postprocess_table` instead if you need to modify table attributes during postprocessing.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/tables.jl#L200-L213" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.postprocess_table' href='#SummaryTables.postprocess_table'><span class="jlbinding">SummaryTables.postprocess_table</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
postprocess_table
```


Overload `postprocess_table(t::Table, postprocessor::YourPostProcessor)` to enable using `YourPostProcessor` as a table postprocessor by passing it to the `postprocess` keyword argument of `Table`.

The function must always return a `Table`.

Use `postprocess_cell` instead if you do not need to modify table attributes during postprocessing but only individual cells.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/infrastructure/tables.jl#L186-L197" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.simple_table' href='#SummaryTables.simple_table'><span class="jlbinding">SummaryTables.simple_table</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
simple_table(table, [columns];
    halign = :center,
    subheaders = nothing,
    table_kwargs...
)
```


Create a simple `Table` displaying (a subset of) the raw columns from a `table`.

**Arguments**
- `table`: A Tables.jl compatible data source
  
- `columns`: A vector of column names to select from the table, with optional display names attached. A column name can be either a `Symbol` or a `String`. A different display name can be passed in using the `Pair` syntax where the display name can be any object SummaryTables knows how to render, for example `[:a, :b => "B", "c"]`.
  

**Keyword arguments**
- `halign = :center`: Either `:left`, `:right`, `:center` or a vector of these values with as many entries as there are columns to display.
  
- `subheaders = nothing`: To show subheaders, pass a vector of objects SummaryTables knows how to render, with as many entries as there are columns to display.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/simple_table.jl#L1-L23" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.summarytable-Tuple{Any, Any}' href='#SummaryTables.summarytable-Tuple{Any, Any}'><span class="jlbinding">SummaryTables.summarytable</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
summarytable(table, variable;
    rows = [],
    cols = [],
    summary = [],
    variable_header = true,
    celltable_kws...
)
```


Create a summary table `Table` from `table`, which summarizes values from column `variable`.

**Arguments**
- `table`: Data source which must be convertible to a `DataFrames.DataFrame`.
  
- `variable`: Determines which variable from `table` is summarized. Can either be a `Symbol` or `String` such as `:ColumnA`, or alternatively a `Pair` where the second element is the display name, such as `:ColumnA => "Column A"`.
  

**Keyword arguments**
- `rows = []`: Grouping structure along the rows. Should be a `Vector` where each element is a grouping variable, specified as a `Symbol` or `String` such as `:Column1`, or a `Pair`, where the first element is the symbol and the second a display name, such as `:Column1 => "Column 1"`. Specifying multiple grouping variables creates nested groups, with the last variable changing the fastest.
  
- `cols = []`: Grouping structure along the columns. Follows the same structure as `rows`.
  
- `summary = []`: Specifies functions to summarize `variable` with. Should be a `Vector`, where each entry is one separate summary. Each summary can be given as a `Function` such as `mean` or `maximum`, in which case the display name is the function&#39;s name. Alternatively, a display name can be given using the pair syntax, such as `mean => "Average"`. By default, one summary is computed over all groups. You can also pass `name => [...]` where name, either a `Symbol` or `String`, is a grouping column, to compute one summary for each level of that group.
  
- `variable_header = true`: Controls if the cell with the name of the summarized `variable` is shown.
  
- `sort = true`: Sort the input table before grouping. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.
  

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

**Example**

```
using Statistics

tbl = [
    :Apples => [1, 2, 3, 4, 5, 6, 7, 8],
    :Batch => [1, 1, 1, 1, 2, 2, 2, 2],
    :Delivery => ['a', 'a', 'b', 'b', 'a', 'a', 'b', 'b'],
]

summarytable(
    tbl,
    :Apples => "Number of apples",
    rows = [:Batch],
    cols = [:Delivery],
    summary = [length => "N", mean => "average", sum]
)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/summarytable.jl#L13-L62" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.table_one-Tuple{Any, Any}' href='#SummaryTables.table_one-Tuple{Any, Any}'><span class="jlbinding">SummaryTables.table_one</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
table_one(table, analyses; keywords...)
```


Construct a &quot;Table 1&quot; which summarises the patient baseline characteristics from the provided `table` dataset. This table is commonly used in biomedical research papers.

It can handle both continuous and categorical columns in `table` and summary statistics and hypothesis testing are able to be customised by the user. Tables can be stratified by one, or more, variables using the `groupby` keyword.

**Keywords**
- `groupby`: Which columns to stratify the dataset with, as a `Vector{Symbol}`.
  
- `nonnormal`: A vector of column names where hypothesis tests for the `:nonnormal` type are chosen.
  
- `minmax`: A vector of column names where hypothesis tests for the `:minmax` type are chosen.
  
- `tests`: A `NamedTuple` of hypothesis test types to use for `categorical`, `nonnormal`, `minmax`, and `normal` variables.
  
- `combine`: An object from `MultipleTesting` to use when combining p-values.
  
- `show_total`: Display the total column summary. Default is `true`.
  
- `group_totals`: A group `Symbol` or `String` or vector of symbols/strings specifying for which group levels totals should be added. Any group levels but the topmost can be chosen (the topmost being already handled by the `show_total` option). Default is `Symbol[]`.
  
- `total_name`: The name for all total columns. Default is `"Total"`.
  
- `show_n`: Display the number of rows for each group key next to its label.
  
- `show_pvalues`: Display the `P-Value` column. Default is `false`.
  
- `show_testnames`: Display the `Test` column. Default is `false`.
  
- `show_confints`: Display the `CI` column. Default is `false`.
  
- `sort`: Sort the input table before grouping. Default is `true`. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.
  

**Deprecated keywords**
- `show_overall`: Use `show_total` instead
  

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/table_one.jl#L214-L247" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.table_one-Tuple{Any}' href='#SummaryTables.table_one-Tuple{Any}'><span class="jlbinding">SummaryTables.table_one</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
table_one(table; kwargs...)
```


Create a `table_one` with with all columns from `table` except those used in the `groupby` keyword.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/table_functions/table_one.jl#L526-L530" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SummaryTables.to_docx-Tuple{Table}' href='#SummaryTables.to_docx-Tuple{Table}'><span class="jlbinding">SummaryTables.to_docx</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
to_docx(ct::Table)
```


Creates a `WriteDocx.Table` node for `Table` `ct` which can be inserted into a `WriteDocx` document.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/PumasAI/SummaryTables.jl/blob/646da8acc05f4648ad99713fc4d25d313a1b3d22/src/renderers/docx.jl#L5-L10" target="_blank" rel="noreferrer">source</a></Badge>

</details>

