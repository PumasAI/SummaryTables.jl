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
    linebreak_footnotes::Bool
end

function Table(cells, header, footer;
        round_digits = default,
        round_mode = default,
        trailing_zeros = default,
        footnotes = [],
        postprocess = [],
        rowgaps = Pair{Int,Float64}[],
        colgaps = Pair{Int,Float64}[],
        linebreak_footnotes = default,
    )
    defs = defaults()
    _round_digits = fallback(round_digits, defs.round_digits)
    _round_mode = fallback(round_mode, defs.round_mode)
    _trailing_zeros = fallback(trailing_zeros, defs.trailing_zeros)
    _linebreak_footnotes = fallback(linebreak_footnotes, defs.linebreak_footnotes)
    Table(cells, header, footer, footnotes, rowgaps, colgaps, postprocess, _round_digits, _round_mode, _trailing_zeros, _linebreak_footnotes)
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
        linebreak_footnotes = true,
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
- `linebreak_footnotes = true`: If `true`, each footnote and annotation starts on a separate line.

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
    Table(new_cl, ct.header, ct.footer, ct.footnotes, ct.rowgaps, ct.colgaps, [], ct.round_digits, ct.round_mode, ct.trailing_zeros, ct.linebreak_footnotes)
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

apply_rounder(x, r::Rounder) = x
apply_rounder(x::AbstractFloat, r::Rounder) = RoundedFloat(x, r.round_digits, r.round_mode, r.trailing_zeros)
apply_rounder(x::Concat, r::Rounder) = Concat(map(arg -> apply_rounder(arg, r), x.args)...)
apply_rounder(x::Multiline, r::Rounder) = Multiline(map(arg -> apply_rounder(arg, r), x.values)...)
apply_rounder(x::Annotated, r::Rounder) = Annotated(apply_rounder(x.value, r), x.annotation, x.label)
apply_rounder(x::Styled, r::Rounder) = Styled(apply_rounder(x.value, r), x.color, x.bold, x.italic, x.underline)

function postprocess_cell(cell::Cell, r::Rounder)
    Cell(apply_rounder(cell.value, r), cell.style)
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
