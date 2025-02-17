"""
    simple_table(table, [columns];
        halign = :center,
        subheaders = nothing,
        table_kwargs...
    )

Create a simple `Table` displaying (a subset of) the raw columns from a `table`.

## Arguments
- `table`: A Tables.jl compatible data source
- `columns`: A vector of column names to select from the table, with optional display names attached.
  A column name can be either a `Symbol` or a `String`. A different display name can be passed in using
  the `Pair` syntax where the display name can be any object SummaryTables
  knows how to render, for example `[:a, :b => "B", "c"]`.

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

    _colname(p::Pair) = p[2]
    _colname(s::Union{Symbol,AbstractString}) = string(s)

    _colsymbols(::Nothing)::Vector{Symbol} = propertynames(df)
    _colsymbols(v::AbstractVector)::Vector{Symbol} = map(_colsymbol, v)

    _colnames(::Nothing) = _colnames(_colsymbols(nothing))
    _colnames(v::AbstractVector) = map(_colname, v)

    colsymbols = _colsymbols(columns)
    colnames = _colnames(columns)

    df = select(df, colsymbols)
    ncols = DataFrames.ncol(df)

    _assert_length(vec, kind) = length(vec) == ncols || error("Mismatched length of $kind: Table has $ncols columns and $kind has $(length(vec)) entries")

    _haligns(s::Symbol)::Vector{Symbol} = fill(s, ncols)
    _haligns(ss::AbstractVector{Symbol})::Vector{Symbol} = ss
    haligns = _haligns(halign)
    _assert_length(haligns, "halign")

    header = [Cell(colname, bold = true, halign = haligns[i]) for (i, colname) in enumerate(colnames)]
    body = reduce(hcat, [Cell.(col; halign = haligns[i]) for (i, col) in enumerate(eachcol(df))])

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