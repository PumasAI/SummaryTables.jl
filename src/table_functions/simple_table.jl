"""
    simple_table(table, [columns];
        halign = :center,
        subheaders = nothing,
        table_kwargs...
    )

Create a simple `Table` displaying (a subset of) the raw columns from a `table`.

## Arguments
- `table`: A Tables.jl compatible data source
- `columns`: A vector of column names to select from the table, with optional display names
  and number formats attached.
  A column name can be either a `Symbol` or a `String`. A different display name can be passed in using
  the `Pair` syntax where the display name can be any object SummaryTables
  knows how to render, for example `[:a, :b => "B", "c"]`.
  A `NumberFormat` can be attached to a column with the same syntax, either directly like
  `:a => NumberFormat(digits = 2)` or followed by a display name like
  `:a => NumberFormat(digits = 2) => "A"`, and applies to all floats and integers in that column.

Column labels can be automatically retrieved from the table's column metadata using the key specified by the `label_key` default (which is `"label"` unless changed via `defaults!` or `with_defaults`). Manual names provided via the pair syntax (e.g., `:column => "Custom Name"`) take precedence over metadata labels.

## Keyword arguments

- `halign = :center`: Either `:left`, `:right`, `:center` or a vector of these values with as many entries as
  there are columns to display.
- `subheaders = nothing`: To show subheaders, pass a vector of objects SummaryTables
  knows how to render, with as many entries as there are columns to display.
"""
function simple_table(table, columns = nothing; halign = :center, subheaders = nothing, kwargs...)
    df = DataFrames.DataFrame(table)
    return _simple_table(df, columns; halign, subheaders, kwargs...)
end

function _simple_table(table::DataFrames.DataFrame, columns; halign, subheaders, kwargs...)
    df = DataFrames.DataFrame(table)

    _colsymbol(s::Symbol) = s
    _colsymbol(s::AbstractString) = Symbol(s)
    _colsymbol(p::Pair) = Symbol(p[1])

    _pairname(col, name) = name
    _pairname(col, format::NumberFormat) = get_column_label(df, Symbol(col))
    _pairname(col, p::Pair) = p[2]

    _colname(p::Pair) = _pairname(p[1], p[2])
    _colname(s::Union{Symbol,AbstractString}) = get_column_label(df, Symbol(s))

    _pairformat(x) = nothing
    _pairformat(format::NumberFormat) = format
    _pairformat(p::Pair) = p[1] isa NumberFormat ? p[1] :
        error("Expected a `NumberFormat` as the first element of the pair $(repr(p)), got a value of type `$(typeof(p[1]))`. The display name comes second, like `:column => NumberFormat(...) => \"Name\"`.")

    _colformat(x) = nothing
    _colformat(p::Pair) = _pairformat(p[2])

    _colsymbols(::Nothing)::Vector{Symbol} = propertynames(df)
    _colsymbols(v::AbstractVector)::Vector{Symbol} = map(_colsymbol, v)

    _colnames(::Nothing) = _colnames(_colsymbols(nothing))
    _colnames(v::AbstractVector) = map(_colname, v)

    _colformats(::Nothing) = fill(nothing, length(_colsymbols(nothing)))
    _colformats(v::AbstractVector) = map(_colformat, v)

    colsymbols = _colsymbols(columns)
    colnames = _colnames(columns)
    colformats = _colformats(columns)

    df = select(df, colsymbols)
    ncols = DataFrames.ncol(df)

    _assert_length(vec, kind) = length(vec) == ncols || error("Mismatched length of $kind: Table has $ncols columns and $kind has $(length(vec)) entries")

    _haligns(s::Symbol)::Vector{Symbol} = fill(s, ncols)
    _haligns(ss::AbstractVector{Symbol})::Vector{Symbol} = ss
    haligns = _haligns(halign)
    _assert_length(haligns, "halign")

    _formatted(col, ::Nothing) = col
    _formatted(col, format::NumberFormat) = format.(col)

    header = [Cell(colname, bold = true, halign = haligns[i]) for (i, colname) in enumerate(colnames)]
    body = reduce(hcat, [Cell.(_formatted(col, colformats[i]); halign = haligns[i]) for (i, col) in enumerate(eachcol(df))])

    _subheader(::Nothing) = nothing
    _subheader(v::AbstractVector) = [Cell(x; italic = true, halign = haligns[i]) for (i, x) in enumerate(v)]
    subheader = _subheader(subheaders)
    subheader !== nothing && _assert_length(subheader, "subheaders")

    cells = if subheader !== nothing
        [header'; subheader'; body]
    else
        [header'; body]
    end

    table = Table(cells; header = subheader === nothing ? 1 : 2, kwargs...)
end