"""
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
"""
Base.@kwdef struct CellStyle
    indent_pt::Float64 = 0.0
    bold::Bool = false
    italic::Bool = false
    underline::Bool = false
    border_bottom::Bool = false
    halign::Symbol = :center
    valign::Symbol = :top
    merge::Bool = false
    mergegroup::UInt8 = 0
end

@eval function CellStyle(c::CellStyle; kwargs...)
    Base.Cartesian.@ncall $(length(fieldnames(CellStyle))) CellStyle i -> begin
        name = $(fieldnames(CellStyle))[i]
        get(kwargs, name, getfield(c, name))
    end
end

struct SpannedCell
    span::Tuple{UnitRange{Int64},UnitRange{Int64}}
    value
    style::CellStyle

    function SpannedCell(span::Tuple{UnitRange{Int64},UnitRange{Int64}}, value, style)
        rowstart = span[1].start
        colstart = span[2].start
        if rowstart < 1
            error("SpannedCell must not begin at a row lower than 1, but begins at row $(rowstart).")
        end
        if colstart < 1
            error("SpannedCell must not begin at a column lower than 1, but begins at column $(colstart).")
        end
        new(span, value, style)
    end
end

SpannedCell(rows::Union{Int,UnitRange{Int}}, cols::Union{Int,UnitRange{Int}}, value, style = CellStyle()) = SpannedCell((_to_range(rows), _to_range(cols)), value, style)
_to_range(i::Int) = i:i
_to_range(ur::UnitRange{Int}) = ur

# the old type never did anything, so now we just make any old use of this a no-op basically
const CellList = Vector{SpannedCell}

"""
    Cell(value, style::CellStyle)
    Cell(value; [bold, italic, underline, halign, valign, border_bottom, indent_pt, merge, mergegroup])

Construct a `Cell` with value `value` and `CellStyle` `style`, which can also be created implicitly with keyword arguments.
For explanations of the styling options, refer to `CellStyle`.
A cell with value `nothing` is displayed as an empty cell (styles might still apply).
The type of `value` can be anything.

Some types with special behavior are:
  - `Multiline` for content broken over multiple lines in a cell. This object may not be used nested in other values, only as the top-level value.
  - `Concat` for stringing together multiple values without having to interpolate them into a `String`, which keeps their own special behaviors intact.
  - `Superscript` and `Subscript`
  - `Annotated` for a value with an optional superscript label and a footnote annotation.
"""
struct Cell
    value
    style::CellStyle
    Cell(value, style::CellStyle; kwargs...) = new(value, CellStyle(style; kwargs...))
end

Base.adjoint(c::Cell) = c # simplifies making row vectors out of column vectors of Cells with '

Cell(value; kwargs...) = Cell(value, CellStyle(; kwargs...))
Cell(cell::Cell; kwargs...) = Cell(cell.value, CellStyle(cell.style; kwargs...))
Cell(cell::Cell, value; kwargs...) = Cell(value, CellStyle(cell.style; kwargs...))

Base.broadcastable(c::Cell) = Ref(c)
@inline Base.getproperty(c::Cell, s::Symbol) = hasfield(Cell, s) ? getfield(c, s) : getproperty(c.style, s)
Base.propertynames(c::Cell) = (fieldnames(Cell)..., propertynames(c.style)...)

struct Table
    cells::Matrix{Cell}
    header::Union{Nothing, Int}
    footer::Union{Nothing, Int}
    footnotes::Vector{Any}
    rowgaps::Vector{Pair{Int,Float64}}
    colgaps::Vector{Pair{Int,Float64}}
    postprocess::Vector{Any}
    round_digits::Int
    round_mode::Union{Nothing,Symbol}
    trailing_zeros::Bool
end

function Table(cells, header, footer;
        round_digits = 3,
        round_mode = :auto,
        trailing_zeros = false,
        footnotes = [],
        postprocess = [],
        rowgaps = Pair{Int,Float64}[],
        colgaps = Pair{Int,Float64}[],
    )
    Table(cells, header, footer, footnotes, rowgaps, colgaps, postprocess, round_digits, round_mode, trailing_zeros)
end

"""
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
    )

Create a `Table` which can be rendered in multiple formats, such as HTML or LaTeX.

## Arguments
- `cells::AbstractMatrix{<:Cell}`: The matrix of `Cell`s that make up the table.

## Keyword arguments
- `header`: The index of the last row of the header, `nothing` if no header is specified.
- `footer`: The index of the first row of the footer, `nothing` if no footer is specified.
- `footnotes`: A vector of objects printed as footnotes that are not derived from `Annotated`
  values and therefore don't get labels with counterparts inside the table.
- `round_digits = 3`: Float values will be rounded to this precision before printing.
- `round_mode = :auto`: How the float values are rounded, options are `:auto`, `:digits` or `:sigdigits`.
  If `round_mode === nothing`, no rounding will be applied and `round_digits` and `trailing_zeros`
  will have no effect.
- `trailing_zeros = false`: Controls if float values keep trailing zeros, for example `4.0` vs `4`.
- `postprocess = []`: A list of post-processors which will be applied left to right to the table before displaying the table.
   A post-processor can either work element-wise or on the whole table object. See the `postprocess_table` and
   `postprocess_cell` functions for defining custom postprocessors.
- `rowgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap
    the size of `gap_pt` is added between the rows `index` and `index+1`.
- `colgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap
    the size of `gap_pt` is added between the columns `index` and `index+1`.

## Round mode

Consider the numbers `0.006789`, `23.4567`, `456.789` or `12345.0`.

Here is how these numbers are formatted with the different available rounding modes:

- `:auto` rounds to `n` significant digits but doesn't zero out additional digits before the comma unlike `:sigdigits`.
  For example, `round_digits = 3` would result in `0.00679`, `23.5`, `457.0` or `12345.0`.
  Numbers at orders of magnitude >= 6 or <= -5 are displayed in exponential notation as in Julia.
- `:digits` rounds to `n` digits after the comma and shows possibly multiple trailing zeros.
  For example, `round_digits = 3` would result in `0.007`, `23.457` or `456.789` or `12345.000`.
  Numbers are never shown with exponential notation.
- `:sigdigits` rounds to `n` significant digits and zeros out additional digits before the comma unlike `:auto`.
  For example, `round_digits = 3` would result in `0.00679`, `23.5`, `457.0` or `12300.0`.
  Numbers at orders of magnitude >= 6 or <= -5 are displayed in exponential notation as in Julia.
"""
Table(cells; header = nothing, footer = nothing, kwargs...) = Table(cells, header, footer; kwargs...)

# non-public-API method to keep old code working in the meantime
function Table(cells::AbstractVector{SpannedCell}, args...; kwargs...)
    sz = reduce(cells; init = (0, 0)) do sz, cell
        max.(sz, (cell.span[1].stop, cell.span[2].stop))
    end
    m = fill(Cell(nothing), sz...)
    visited = zeros(Bool, sz...)
    mergegroup = 0
    for cell in cells
        is_spanned = length(cell.span[1]) > 1 || length(cell.span[2]) > 1
        if is_spanned
            mergegroup = mod(mergegroup + 1, 255)
        end
        for row in cell.span[1]
            for col in cell.span[2]
                if visited[row, col]
                    error("Tried to fill cell $row,$col twice. First value was $(m[row, col].value) and second $(cell.value).")
                end
                visited[row, col] = true
                if is_spanned
                    m[row, col] = Cell(cell.value, CellStyle(cell.style; merge = true, mergegroup))
                else
                    m[row, col] = Cell(cell.value, cell.style)
                end
            end
        end
    end
    return Table(m, args...; kwargs...)
end

function to_spanned_cells(m::AbstractMatrix{<:Cell})
    cells = Vector{SpannedCell}()
    sizehint!(cells, length(m))
    visited = zeros(Bool, size(m))
    nrow, ncol = size(m)
    for row in 1:nrow
        for col in 1:ncol
            visited[row, col] && continue

            c = m[row, col]
            
            lastrow = row
            for _row in row+1:nrow
                if !visited[_row, col] && c.merge && m[_row, col] == c
                    lastrow = _row
                else
                    break
                end
            end
            lastcol = col
            for _col in col+1:ncol
                if !visited[row, _col] && c.merge && m[row, _col] == c
                    lastcol = _col
                else
                    break
                end
            end
            for _row in row+1:lastrow
                for _col in col+1:lastcol
                    _c = m[_row, _col]
                    if _c != c
                        error("Cell $c was detected to span over [$(row:lastrow),$(col:lastcol)] but at $_row,$_col the value was $_c. This is not allowed. Cells spanning multiple rows and columns must always span a full rectangle.")
                    end
                end
            end
            push!(cells, SpannedCell((row:lastrow,col:lastcol), c.value, c.style))
            visited[row:lastrow,col:lastcol] .= true
        end
    end
    return cells
end

"""
    Multiline(args...)

Create a `Multiline` object which renders each `arg` on a separate line.
A `Multiline` value may only be used as the top-level value of a cell, so
`Cell(Multiline(...))` is allowed but `Cell(Concat(Multiline(...), ...))` is not.
"""
struct Multiline
    values::Tuple
    Multiline(args...) = new(args)
end

"""
    Concat(args...)

Create a `Concat` object which can be used to concatenate the representations
of multiple values in a single table cell while keeping the conversion semantics
of each `arg` in `args` intact.

## Example

```julia
Concat(
    "Some text and an ",
    Annotated("annotated", "Some annotation"),
    " value",
)
# will be rendered as "Some text and an annotated¹ value"
```
"""
struct Concat
    args::Tuple
    Concat(args...) = new(args)
end

struct Annotated
    value
    annotation
    label
end

struct AutoNumbering end

"""
    Annotated(value, annotation; label = AutoNumbering())

Create an `Annotated` object which will be given a footnote annotation
in the `Table` where it is used.
If the `label` keyword is `AutoNumbering()`, annotations will be given number labels
from 1 to N in the order of their appearance. If it is `nothing`, no label will be
shown. Any other `label` will be used directly as the footnote label.

Each unique label must be paired with a unique annotation, but the same
combination can exist multiple times in a single table.
"""
Annotated(value, annotation; label = AutoNumbering()) = Annotated(value, annotation, label)

struct ResolvedAnnotation
    value
    label
end

# Signals that a given annotation should have no label.
# This is useful for cases where the value itself is the label
# for example when printing NA or - for a missing value.
# You would not want a superscript label for every one of those.
struct NoLabel end

function resolve_annotations(cells::AbstractVector{<:SpannedCell})
    annotations = collect_annotations(cells)

    k = 1
    for (annotation, label) in annotations
        if label === AutoNumbering()
            annotations[annotation] = k
            k += 1
        elseif label === nothing
            annotations[annotation] = NoLabel()
        end
    end

    labels = Set()
    for label in values(annotations)
        label === NoLabel() && continue
        label ∈ labels && error("Found the same label $(repr(label)) twice with different annotations.")
        push!(labels, label)
    end

    # put all non-integer labels (so all manual labels) behind the auto-incremented labels
    # the remaining order will be corresponding to the elements in the list
    annotations = OrderedCollections.OrderedDict(sort(collect(annotations), by = x -> !(last(x) isa Int)))

    cells = map(cells) do cell
        SpannedCell(cell.span, resolve_annotation(cell.value, annotations), cell.style)
    end

    return cells, annotations
end

function collect_annotations(cells)
    annotations = OrderedCollections.OrderedDict()
    for cell in cells
        collect_annotations!(annotations, cell.value)
    end
    return annotations
end

collect_annotations!(annotations, x) = nothing

function collect_annotations!(annotations, c::Concat)
    for arg in c.args
        collect_annotations!(annotations, arg)
    end
end

function collect_annotations!(annotations, x::Annotated)
    if haskey(annotations, x.annotation)
        if annotations[x.annotation] != x.label
            error("Found the same annotation $(repr(x.annotation)) with two different labels: $(repr(x.label)) and $(repr(annotations[x.annotation])).")
        end
    else
        annotations[x.annotation] = x.label
    end
    return
end

resolve_annotation(x, annotations) = x
function resolve_annotation(a::Annotated, annotations)
    ResolvedAnnotation(a.value, annotations[a.annotation])
end

function resolve_annotation(c::Concat, annotations)
    new_args = map(c.args) do arg
        resolve_annotation(arg, annotations)
    end
    Concat(new_args...)
end

function create_cell_matrix(cells)
    nrows = 0
    ncols = 0
    for cell in cells
        nrows = max(nrows, cell.span[1].stop)
        ncols = max(ncols, cell.span[2].stop)
    end
    matrix = zeros(Int, nrows, ncols)
    for (i, cell) in enumerate(cells)
        enter_cell!(matrix, cell, i)
    end
    matrix
end

function enter_cell!(matrix, cell, i)
    for row in cell.span[1], col in cell.span[2]
        v = matrix[row, col]
        if v == 0
            matrix[row, col] = i
        else
            error(
                """
                Can't place cell $i in [$row, $col] as cell $v is already there.
                Value of cell $i: $(cell.value)
                """
            )
        end
    end
end

"""
    postprocess_table

Overload `postprocess_table(t::Table, postprocessor::YourPostProcessor)`
to enable using `YourPostProcessor` as a table postprocessor by passing
it to the `postprocess` keyword argument of `Table`.

The function must always return a `Table`.

Use `postprocess_cell` instead if you do not need to modify table attributes
during postprocessing but only individual cells.
"""
function postprocess_table end

"""
    postprocess_cell

Overload `postprocess_cell(c::Cell, postprocessor::YourPostProcessor)`
to enable using `YourPostProcessor` as a cell postprocessor by passing
it to the `postprocess` keyword argument of `Table`.

The function must always return a `Cell`. It will be applied on every cell
of the table that is being postprocessed, all other table attributes will
be left unmodified.

Use `postprocess_table` instead if you need to modify table attributes
during postprocessing.
"""
function postprocess_cell end

function postprocess_cell(cell::Cell, any)
    error("""
    `postprocess_cell` is not implemented for postprocessor type `$(typeof(any))`.
    To use this object for postprocessing, either implement `postprocess_table(::Table, ::$(typeof(any)))` or
    `postprocess_cell(::Cell, ::$(typeof(any)))` for it.
    """)
end

function postprocess_table(ct::Table, any)
    new_cl = map(ct.cells) do cell
        new_cell = postprocess_cell(cell, any)
        if !(new_cell isa Cell)
            error("`postprocess_cell` called with `$(any)` returned an object of type `$(typeof(new_cell))` instead of `Cell`.")
        end
        return new_cell
    end
    Table(new_cl, ct.header, ct.footer, ct.footnotes, ct.rowgaps, ct.colgaps, [], ct.round_digits, ct.round_mode, ct.trailing_zeros)
end

function postprocess_table(ct::Table, v::AbstractVector)
    for postprocessor in v
        ct = postprocess_table(ct, postprocessor)
        !(ct isa Table) && error("Postprocessor $postprocessor caused `postprocess_table` not to return a `Table` but a `$(typeof(ct))`")
    end
    return ct
end

"""
    Replace(f, with)
    Replace(f; with)

This postprocessor replaces all cell values for which `f(value) === true`
with the value `with`.
If `with <: Function` then the new value will be `with(value)`, instead.

## Examples

```
Replace(x -> x isa String, "A string was here")
Replace(x -> x isa String, uppercase)
Replace(x -> x isa Int && iseven(x), "An even Int was here")
```
"""
struct Replace{F,W}
    f::F
    with::W
end

Replace(f; with) = Replace(f, with)

"""
    ReplaceMissing(; with = Annotated("-", "- No value"; label = NoLabel()))

This postprocessor replaces all `missing` cell values with the value in `with`.
"""
ReplaceMissing(; with = Annotated("-", "- No value"; label = NoLabel())) =
    Replace(ismissing, with)

function postprocess_cell(cell::Cell, r::Replace)
    matches = r.f(cell.value)
    if !(matches isa Bool)
        error("`Replace` predicate `$(r.f)` did not return a `Bool` but a value of type `$(typeof(matches))`.")
    end
    fn(_, with) = with
    fn(x, with::Function) = with(x)
    value = matches ? fn(cell.value, r.with) : cell.value
    return Cell(value, cell.style)
end

struct Rounder
    round_digits::Int
    round_mode::Symbol
    trailing_zeros::Bool
end
struct RoundedFloat
    f::Float64
    round_digits::Int
    round_mode::Symbol
    trailing_zeros::Bool
end

apply_rounder(x, r::Rounder) = x
apply_rounder(x::AbstractFloat, r::Rounder) = RoundedFloat(x, r.round_digits, r.round_mode, r.trailing_zeros)
apply_rounder(x::Concat, r::Rounder) = Concat(map(arg -> apply_rounder(arg, r), x.args)...)
apply_rounder(x::Multiline, r::Rounder) = Multiline(map(arg -> apply_rounder(arg, r), x.values)...)
apply_rounder(x::Annotated, r::Rounder) = Annotated(apply_rounder(x.value, r), x.annotation, x.label)

function postprocess_cell(cell::Cell, r::Rounder)
    Cell(apply_rounder(cell.value, r), cell.style)
end

struct Superscript
    super
end

struct Subscript
    sub
end

apply_rounder(x::Superscript, r::Rounder) = Superscript(apply_rounder(x.super, r))
apply_rounder(x::Subscript, r::Rounder) = Subscript(apply_rounder(x.sub, r))

function postprocess(ct::Table)
    # every table has float rounding / formatting applied as the very last step
    pp = ct.postprocess
    if ct.round_mode !== nothing
        rounder = Rounder(ct.round_digits, ct.round_mode, ct.trailing_zeros)
        pp = [ct.postprocess; rounder]
    end
    return postprocess_table(ct, pp)
end
