struct SummaryTable
    gdf::DataFrames.GroupedDataFrame
    variable::Variable
    row_keys::Vector{<:Tuple}
    col_keys::Vector{<:Tuple}
    rows::Vector{Group}
    columns::Vector{Group}
    summary::Summary
    gdf_summary::DataFrames.GroupedDataFrame
end


"""
    summarytable(table, variable;
        rows = [],
        cols = [],
        summary = [],
        variable_header = true,
        celltable_kws...
    )

Create a summary table `Table` from `table`, which summarizes values from column `variable`.

## Arguments
- `table`: Data source which must be convertible to a `DataFrames.DataFrame`.
- `variable`: Determines which variable from `table` is summarized. Can either be a `Symbol` or `String` such as `:ColumnA`, or alternatively a `Pair` where the second element is the display name, such as `:ColumnA => "Column A"`.

## Keyword arguments
- `rows = []`: Grouping structure along the rows. Should be a `Vector` where each element is a grouping variable, specified as a `Symbol` or `String` such as `:Column1`, or a `Pair`, where the first element is the symbol and the second a display name, such as `:Column1 => "Column 1"`. Specifying multiple grouping variables creates nested groups, with the last variable changing the fastest.
- `cols = []`: Grouping structure along the columns. Follows the same structure as `rows`.
- `summary = []`: Specifies functions to summarize `variable` with.
  Should be a `Vector`, where each entry is one separate summary.
  Each summary can be given as a `Function` such as `mean` or `maximum`, in which case the display name is the function's name.
  Alternatively, a display name can be given using the pair syntax, such as `mean => "Average"`.
  By default, one summary is computed over all groups.
  You can also pass `name => [...]` where name, either a `Symbol` or `String`, is a grouping column, to compute one summary for each level of that group.
- `variable_header = true`: Controls if the cell with the name of the summarized `variable` is shown.
- `sort = true`: Sort the input table before grouping. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.


All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

## Example

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
"""
function summarytable(
    table, variable;
    rows = [],
    cols = [],
    summary = [],
    variable_header = true,
    celltable_kws...
)

    df = DataFrames.DataFrame(table)

    var = Variable(variable)

    rowgroups = make_groups(rows)
    colgroups = make_groups(cols)

    rowsymbols = [r.symbol for r in rowgroups]
    _summary = Summary(summary, rowsymbols)

    if isempty(_summary.analyses)
        throw(ArgumentError("No summary analyses defined."))
    end

    _summarytable(df, var, rowgroups, colgroups, _summary; variable_header, celltable_kws...)
end

function _summarytable(
        df::DataFrames.DataFrame,
        variable::Variable,
        rowgroups::Vector{Group},
        colgroups::Vector{Group},
        summary::Summary;
        variable_header::Bool,
        sort = true,
        celltable_kws...)

    rowsymbols = [r.symbol for r in rowgroups]
    colsymbols = [c.symbol for c in colgroups]

    groups = vcat(rowsymbols, colsymbols)

    # remove unneeded columns from the dataframe
    used_columns = [variable.symbol; rowsymbols; colsymbols]



    _df = DataFrames.select(df, used_columns)
    if !isempty(groups) && sort
        try
            Base.sort!(_df, groups, lt = natural_lt)
        catch e
            throw(SortingError())
        end
    end

    gdf = DataFrames.groupby(_df, groups, sort = false)

    gdf_summary = DataFrames.combine(
        DataFrames.groupby(_df, groups),
        [variable.symbol => a.func => "____$i" for (i, a) in enumerate(summary.analyses)]...,
        ungroup = false
    )

    gdf_rows = DataFrames.groupby(_df, rowsymbols; sort = sort ? (; lt = natural_lt) : false)
    row_keys = Tuple.(keys(gdf_rows))
    gdf_cols = DataFrames.groupby(_df, colsymbols; sort = sort ? (; lt = natural_lt) : false)
    col_keys = Tuple.(keys(gdf_cols))

    st = SummaryTable(
        gdf,
        variable,
        row_keys,
        col_keys,
        rowgroups,
        colgroups,
        summary,
        gdf_summary,
    )

    cl, i_header = get_cells(st; variable_header)
    Table(cl, i_header, nothing; celltable_kws...)
end


function get_cells(l::SummaryTable; variable_header::Bool)
    cells = SpannedCell[]

    n_row_summaries = length(l.summary.analyses)

    n_rowgroups = length(l.rows)
    n_colgroups = length(l.columns)

    colheader_offset = if n_colgroups == 0 && n_rowgroups > 0
        1
    else
        2 * n_colgroups + (variable_header ? 1 : 0)
    end

    rowheader_offset = n_rowgroups + 1

    # group headers for row groups
    for (i_rowgroup, rowgroup) in enumerate(l.rows)
        cell = SpannedCell(colheader_offset, i_rowgroup, rowgroup.name, summarytable_row_header())
        push!(cells, cell)
    end

    # variable headers on top of each column part
    if variable_header
        colrange = rowheader_offset .+ (1:length(l.col_keys))
        cell = SpannedCell(colheader_offset, colrange, l.variable.name, summarytable_column_header())
        push!(cells, cell)
    end

    values_spans_cols = nested_run_length_encodings(l.col_keys)
    all_spanranges_cols = [spanranges(spans) for (values, spans) in values_spans_cols]

    # column headers on top of each column part
    for i_colgroupkey in 1:n_colgroups
        headerspanranges = i_colgroupkey == 1 ? [1:length(l.col_keys)] : all_spanranges_cols[i_colgroupkey-1]
        for headerspanrange in headerspanranges
            header_offset_range = headerspanrange .+ rowheader_offset
            class = length(headerspanrange) > 1 ? summarytable_column_header_spanned() : summarytable_column_header()
            cell = SpannedCell(i_colgroupkey * 2 - 1, header_offset_range, l.columns[i_colgroupkey].name, class)
            push!(cells, cell)
        end
        values, _ = values_spans_cols[i_colgroupkey]
        ranges = all_spanranges_cols[i_colgroupkey]
        for (value, range) in zip(values, ranges)
            label_offset_range = range .+ rowheader_offset
            cell = SpannedCell(i_colgroupkey * 2, label_offset_range, format_value(value), summarytable_body())
            push!(cells, cell)
        end
    end

    values_spans_rows = nested_run_length_encodings(l.row_keys)
    all_spanranges_rows = [spanranges(spans) for (values, spans) in values_spans_rows]

    for (i_rowkey, rowkey) in enumerate(l.row_keys)
        rowgroupoffset = (i_rowkey - 1) * n_row_summaries
        rowoffset = rowgroupoffset + colheader_offset

        # row group keys to the left
        for i_rowgroupkey in 1:n_rowgroups
            # show key only once per span
            spanranges = all_spanranges_rows[i_rowgroupkey]
            ith_span = findfirst(spanrange -> first(spanrange) == i_rowkey, spanranges)
            if ith_span === nothing
                continue
            end
            spanrange = spanranges[ith_span]
            range = 1:n_row_summaries * length(spanrange)
            offset_range = range .+ rowoffset
            key = rowkey[i_rowgroupkey]
            cell = SpannedCell(offset_range, i_rowgroupkey, format_value(key), summarytable_row_key())
            push!(cells, cell)
        end

        # row analysis headers to the right of each row key
        for (i_rowsumm, summ_ana) in enumerate(l.summary.analyses)
            summ_rowoffset = rowoffset + 1
            push!(cells, SpannedCell(
                summ_rowoffset + i_rowsumm - 1,
                n_rowgroups + 1,
                summ_ana.name,
                summarytable_analysis_header()
            ))
        end

        # populate row analysis cells
        for i_rowsumm in eachindex(l.summary.analyses)

            summ_rowoffset = rowoffset

            for (i_col, colkey) in enumerate(l.col_keys)
                summkey = (rowkey..., colkey...)
                datacol_index = length(summkey) + i_rowsumm

                data = get(l.gdf_summary, summkey, nothing)
                if data === nothing
                    value = ""
                else
                    value = only(data[!, datacol_index])
                end

                cell = SpannedCell(
                    summ_rowoffset + i_rowsumm,
                    rowheader_offset + i_col,
                    format_value(value),
                    summarytable_body()
                )
                push!(cells, cell)
            end
        end
    end

    cells, colheader_offset
end

summarytable_column_header() = CellStyle(halign = :center, bold = true)
summarytable_column_header_spanned() = CellStyle(halign = :center, bold = true, border_bottom = true)
summarytable_analysis_header() = CellStyle(halign = :left, bold = true)
summarytable_body() = CellStyle()
summarytable_row_header() = CellStyle(halign = :left, bold = true)
summarytable_row_key() = CellStyle(halign = :left)
