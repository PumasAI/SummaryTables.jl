struct Table
    cells::Matrix{Cell}
    header::Union{Nothing, Int}
    footer::Union{Nothing, Int}
    footnotes::Vector{Any}
    rowgaps::Vector{Pair{Int,Float64}}
    colgaps::Vector{Pair{Int,Float64}}
    postprocess::Vector{Any}
    number_format::Union{Nothing,NumberFormat}
    linebreak_footnotes::Bool
end

function Table(cells, header, footer;
        round_digits = default,
        round_mode = default,
        trailing_zeros = default,
        number_format = default,
        footnotes = [],
        postprocess = [],
        rowgaps = Pair{Int,Float64}[],
        colgaps = Pair{Int,Float64}[],
        linebreak_footnotes = default,
    )
    defs = defaults()
    _number_format = resolve_number_format(number_format, round_digits, round_mode, trailing_zeros, defs)
    _linebreak_footnotes = fallback(linebreak_footnotes, defs.linebreak_footnotes)
    Table(cells, header, footer, footnotes, rowgaps, colgaps, postprocess, _number_format, _linebreak_footnotes)
end

function resolve_number_format(number_format, round_digits, round_mode, trailing_zeros, defs)
    separate_kwargs_passed = !(round_digits isa Default) || !(round_mode isa Default) || !(trailing_zeros isa Default)
    defaults_format = defs.number_format isa Default ?
        NumberFormat(digits = defs.round_digits, mode = defs.round_mode, trailing_zeros = defs.trailing_zeros) :
        defs.number_format
    if !(number_format isa Default)
        if separate_kwargs_passed
            error("Cannot pass `number_format` together with any of `round_digits`, `round_mode` and `trailing_zeros`. Either use only `number_format` or only the separate keywords.")
        end
        if !(number_format isa Union{Nothing,NumberFormat})
            error("`number_format` must be a `NumberFormat` or `nothing`, got a value of type `$(typeof(number_format))`.")
        end
        (number_format === nothing || defaults_format === nothing) && return number_format
        return merge_formats(number_format, defaults_format)
    end
    if separate_kwargs_passed
        !(round_mode isa Default) && round_mode === nothing && return nothing
        separate_format = NumberFormat(
            digits = round_digits isa Default ? nothing : round_digits,
            mode = round_mode isa Default ? nothing : round_mode,
            trailing_zeros = trailing_zeros isa Default ? nothing : trailing_zeros,
        )
        defaults_format === nothing && return separate_format
        return merge_formats(separate_format, defaults_format)
    end
    return defaults_format
end

"""
    function Table(cells;
        header = nothing,
        footer = nothing,
        number_format = NumberFormat(),
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
- `number_format = NumberFormat()`: A `NumberFormat` that is applied to every floating point
  number in the table which is not already wrapped in a more specific format. Settings that
  are unset in cell-level formats are inherited from this format, and settings unset here are
  inherited first from the global defaults and then from the package defaults. Refer to the
  `NumberFormat` docstring for the available settings.
  Passing `number_format = nothing` disables number formatting entirely, so floats
  appear exactly the way Julia prints them, for example `1.0607182119320439e8`.
  Instead of `number_format`, the number formatting settings `round_digits`, `round_mode` and
  `trailing_zeros` may also be passed as separate keywords, matching the `digits`, `mode` and
  `trailing_zeros` settings of `NumberFormat`, with `round_mode = nothing` disabling formatting.
  Mixing the separate keywords with `number_format` is an error.
- `postprocess = []`: A list of post-processors which will be applied left to right to the table before displaying the table.
   A post-processor can either work element-wise or on the whole table object. See the `postprocess_table` and
   `postprocess_cell` functions for defining custom postprocessors.
- `rowgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap
    the size of `gap_pt` is added between the rows `index` and `index+1`.
- `colgaps = Pair{Int,Float64}[]`: A list of pairs `index => gap_pt`. For each pair, a visual gap
    the size of `gap_pt` is added between the columns `index` and `index+1`.
- `linebreak_footnotes = true`: If `true`, each footnote and annotation starts on a separate line.
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
    Table(new_cl, ct.header, ct.footer, ct.footnotes, ct.rowgaps, ct.colgaps, [], ct.number_format, ct.linebreak_footnotes)
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
    Replace(f; with, recursive = false)

This postprocessor replaces all cell values for which `f(value) === true`
with the value `with`.
If `with <: Function` then the new value will be `with(value)`, instead.

If `recursive`, the replacer recurses into SummaryTables' own wrapper types `Concat`, `Multiline`, etc.

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
    recursive::Bool # step into SummaryTables wrapper objects
end

Replace(f, with) = Replace(f, with, false)
Replace(f; with, recursive = false) = Replace(f, with, recursive)

"""
    ReplaceMissing(; with = Annotated("-", "- No value"; label = NoLabel()))

This postprocessor replaces all `missing` cell values with the value in `with` while recursing into SummaryTables' own wrapper types `Concat`, `Multiline`, etc.
"""
ReplaceMissing(; with = Annotated("-", "- No value"; label = NoLabel()), recursive = true) =
    Replace(ismissing, with, recursive)

function postprocess_cell(cell::Cell, r::Replace)
    value = if r.recursive
        recursive_replace(cell.value, r.f, r.with)
    else
        matches = r.f(cell.value)
        if !(matches isa Bool)
            error("`Replace` predicate `$(r.f)` did not return a `Bool` but a value of type `$(typeof(matches))`.")
        end
        fn(_, with) = with
        fn(x, with::Function) = with(x)
        matches ? fn(cell.value, r.with) : cell.value
    end
    return Cell(value, cell.style)
end

recursive_replace(value::Concat, f, with) = Concat(map(x -> recursive_replace(x, f, with), value.args)...)
recursive_replace(value::Multiline, f, with) = Multiline(map(x -> recursive_replace(x, f, with), value.values)...)
recursive_replace(x::Styled, f, with) = Styled(recursive_replace(x.value, f, with), x.color, x.bold, x.italic, x.underline)
recursive_replace(x::Superscript, f, with) = Superscript(recursive_replace(x.super, f, with))
recursive_replace(x::Subscript, f, with) = Subscript(recursive_replace(x.sub, f, with))
function recursive_replace(x, f, with)
    matches = f(x)
    if !(matches isa Bool)
        error("`Replace` predicate `$(f)` did not return a `Bool` but a value of type `$(typeof(matches))`.")
    end
    fn(_, with) = with
    fn(x, with::Function) = with(x)
    return matches ? fn(x, with) : x
end


apply_format(x, fmt::NumberFormat, floats_only::Bool) = x
apply_format(x::AbstractFloat, fmt::NumberFormat, floats_only::Bool) = FormattedFloat(Float64(x), fmt)
apply_format(x::Integer, fmt::NumberFormat, floats_only::Bool) = floats_only ? x : FormattedFloat(Float64(x), fmt)
apply_format(x::Bool, fmt::NumberFormat, floats_only::Bool) = x
apply_format(x::FormattedFloat, fmt::NumberFormat, floats_only::Bool) = FormattedFloat(x.f, merge_formats(x.format, fmt))
apply_format(x::Concat, fmt::NumberFormat, floats_only::Bool) = Concat(map(arg -> apply_format(arg, fmt, floats_only), x.args)...)
apply_format(x::Multiline, fmt::NumberFormat, floats_only::Bool) = Multiline(map(arg -> apply_format(arg, fmt, floats_only), x.values)...)
apply_format(x::Annotated, fmt::NumberFormat, floats_only::Bool) = Annotated(apply_format(x.value, fmt, floats_only), x.annotation, x.label)
apply_format(x::Styled, fmt::NumberFormat, floats_only::Bool) = Styled(apply_format(x.value, fmt, floats_only), x.color, x.bold, x.italic, x.underline)
apply_format(x::Superscript, fmt::NumberFormat, floats_only::Bool) = Superscript(apply_format(x.super, fmt, floats_only))
apply_format(x::Subscript, fmt::NumberFormat, floats_only::Bool) = Subscript(apply_format(x.sub, fmt, floats_only))

(fmt::NumberFormat)(x) = apply_format(x, fmt, false)

function postprocess_cell(cell::Cell, fmt::NumberFormat)
    Cell(apply_format(cell.value, fmt, true), cell.style)
end

function postprocess(ct::Table)
    # every table has float formatting applied as the very last step
    pp = ct.postprocess
    if ct.number_format !== nothing
        pp = [ct.postprocess; ct.number_format]
    end
    return postprocess_table(ct, pp)
end
