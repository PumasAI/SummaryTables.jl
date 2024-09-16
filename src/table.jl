"""
Specifies one variable to group over and an associated name for display.
"""
struct Group
    symbol::Symbol
    name
end

Group(s::Symbol) = Group(s, string(s))
Group(p::Pair{Symbol, <:Any}) = Group(p[1], p[2])
make_groups(v::AbstractVector) = map(Group, v)
make_groups(x) = [Group(x)]

"""
Specifies one function to summarize the raw values of one group with,
and an associated name for display.
"""
struct SummaryAnalysis
    func
    name
end

SummaryAnalysis(p::Pair{<:Function, <:Any}) = SummaryAnalysis(p[1], p[2])
SummaryAnalysis(f::Function) = SummaryAnalysis(f, string(f))

"""
Stores the index of the grouping variable under which the summaries defined in
`analyses` should be run. An index of `0` means that one summary block is appended
after all columns or rows, an index of `1` means on summary block after each group
from the first grouping key of rows or columns, and so on.
"""
struct Summary
    groupindex::Int
    analyses::Vector{SummaryAnalysis}
end

function Summary(p::Pair{Symbol, <:Vector}, symbols)
    sym = p[1]
    summary_index = findfirst(==(sym), symbols)
    if summary_index === nothing
        error("Summary variable :$(sym) is not a grouping variable.")
    end
    Summary(summary_index, SummaryAnalysis.(p[2]))
end

function Summary(v::Vector, _)
    summary_index = 0
    Summary(summary_index, SummaryAnalysis.(v))
end

# The variable that is used to populate the raw-value cells.
struct Variable
    symbol::Symbol
    name
end

Variable(s::Symbol) = Variable(s, string(s))
Variable(p::Pair{Symbol, <:Any}) = Variable(p[1], p[2])

struct ListingTable
    gdf::DataFrames.GroupedDataFrame
    variable::Variable
    row_keys::Vector{<:Tuple}
    col_keys::Vector{<:Tuple}
    rows::Vector{Group}
    columns::Vector{Group}
    rowsummary::Summary
    gdf_rowsummary::DataFrames.GroupedDataFrame
    colsummary::Summary
    gdf_colsummary::DataFrames.GroupedDataFrame
end

struct Pagination{T<:NamedTuple}
    options::T
end
Pagination(; kwargs...) = Pagination(NamedTuple(sort(collect(pairs(kwargs)), by = first)))

"""
    Page{M}

Represents one page of a `PaginatedTable`.

It has two public fields:

- `table::Table`: A part of the full table, created according to the chosen `Pagination`.
- `metadata::M`: Information about which part of the full table this page contains. This is different for each
  table function that takes a `Pagination` argument because each such function may use its own logic
  for how to split pages.
"""
struct Page{M}
    metadata::M
    table::Table
end

function Base.show(io::IO, M::MIME"text/plain", p::Page)
    indent = " " ^ get(io, :indent, 0)
    i_page = get(io, :i_page, nothing)
    print(io, indent, "Page")
    i_page !== nothing && print(io, " $i_page")
    println(io)
    show(IOContext(io, :indent => get(io, :indent, 0) + 2), M, p.metadata)
end

"""
    GroupKey

Holds the group column names and values for one group of a dataset.
This struct has only one field:

- `entries::Vector{Pair{Symbol,Any}}`: A vector of `column_name => group_value` pairs.
"""
struct GroupKey
    entries::Vector{Pair{Symbol,Any}}
end

GroupKey(g::DataFrames.GroupKey) = GroupKey(collect(pairs(g)))

"""
    ListingPageMetadata

Describes which row and column group sections of a full listing table
are included in a given page. There are two fields:

- `rows::Vector{GroupKey}`
- `cols::Vector{GroupKey}`

Each `Vector{GroupKey}` holds all group keys that were relevant for pagination
along that side of the listing table. A vector is empty if the table was not
paginated along that side.
"""
Base.@kwdef struct ListingPageMetadata
    rows::Vector{GroupKey} = []
    cols::Vector{GroupKey} = []
end

function Base.show(io::IO, M::MIME"text/plain", p::ListingPageMetadata)
    indent = " " ^ get(io, :indent, 0)
    println(io, indent, "ListingPageMetadata")
    print(io, indent, "  rows:")
    isempty(p.rows) && print(io, " no pagination")
    for r in p.rows
        print(io, "\n    ", indent,)
        print(io, "[", join(("$key => $value" for (key, value) in r.entries), ", "), "]")
    end
    print(io, "\n", indent, "  cols:")
    isempty(p.cols) && print(io, " no pagination")
    for c in p.cols
        print(io, "\n    ", indent)
        print(io, "[", join(("$key => $value" for (key, value) in c.entries), ", "), "]")
    end
end

"""
    PaginatedTable{M}

The return type for all table functions that take a `Pagination` argument to split the table
into pages according to table-specific pagination rules.

This type only has one field:

- `pages::Vector{Page{M}}`: Each `Page` holds a table and metadata of type `M` which depends on the table function that creates the `PaginatedTable`.

To get the table of page 2, for a `PaginatedTable` stored in variable `p`, access `p.pages[2].table`.
"""
struct PaginatedTable{M}
    pages::Vector{Page{M}}
end

function Base.show(io::IO, M::MIME"text/plain", p::PaginatedTable)
    len = length(p.pages)
    print(io, "PaginatedTable with $(len) page$(len == 1 ? "" : "s")")
    for (i, page) in enumerate(p.pages)
        print(io, "\n")
        show(IOContext(io, :indent => 2, :i_page => i), M, page)
    end
end

# a basic interactive display of the different pages in the PaginatedTable, which is much
# nicer than just having the textual overview that you get printed out in the REPL
function Base.show(io::IO, M::Union{MIME"text/html",MIME"juliavscode/html"}, p::PaginatedTable)
    println(io, "<div>")
    println(io, """
    <script>
    function showPaginatedPage(el, index){
        const container = el.parentElement.querySelector('div');
        for (var i = 0; i<container.children.length; i++){
            container.children[i].style.display = i == index ? 'block' : 'none';
        }
    }
    </script>
    """)
    for i in 1:length(p.pages)
        println(io, """
        <button onclick="showPaginatedPage(this, $(i-1))">
        Page $i
        </button>
        """)
    end
    println(io, "<div>")
    for (i, page) in enumerate(p.pages)
        println(io, "<div style=\"display:$(i == 1 ? "block" : "none")\">")
        println(io, "<h3>Page $i</h3>")
        show(io, M, page.table)
        println(io, "\n</div>")
    end
    println(io, "</div>")
    println(io, "</div>")
    return
end

"""
    listingtable(table, variable, [pagination];
        rows = [],
        cols = [],
        summarize_rows = [],
        summarize_cols = [],
        variable_header = true,
        table_kwargs...
    )

Create a listing table `Table` from `table` which displays raw values from column `variable`.

## Arguments
- `table`: Data source which must be convertible to a `DataFrames.DataFrame`.
- `variable`: Determines which variable's raw values are shown. Can either be a `Symbol` such as `:ColumnA`, or alternatively a `Pair` where the second element is the display name, such as `:ColumnA => "Column A"`.
- `pagination::Pagination`: If a pagination object is passed, the return type changes to `PaginatedTable`.
  The `Pagination` object may be created with keywords `rows` and/or `cols`.
  These must be set to `Int`s that determine how many group sections along each side are included in one page.
  These group sections are determined by the summary structure, because pagination never splits a listing table
  within rows or columns that are being summarized together.
  If `summarize_rows` or `summarize_cols` is empty or unset, each group along that side is its own section.
  If `summarize_rows` or `summarize_cols` has a group passed via the `column => ...` syntax, the group sections
  along that side are determined by `column`. If no such `column` is passed (i.e., the summary
  along that side applies to the all groups) there is only one section along that side, which means
  that this side cannot be paginated into more than one page.


## Keyword arguments
- `rows = []`: Grouping structure along the rows. Should be a `Vector` where each element is a grouping variable, specified as a `Symbol` such as `:Column1`, or a `Pair`, where the first element is the symbol and the second a display name, such as `:Column1 => "Column 1"`. Specifying multiple grouping variables creates nested groups, with the last variable changing the fastest.
- `cols = []`: Grouping structure along the columns. Follows the same structure as `rows`.
- `summarize_rows = []`: Specifies functions to summarize `variable` with along the rows.
  Should be a `Vector`, where each entry is one separate summary.
  Each summary can be given as a `Function` such as `mean` or `maximum`, in which case the display name is the function's name.
  Alternatively, a display name can be given using the pair syntax, such as `mean => "Average"`.
  By default, one summary is computed over all groups.
  You can also pass `Symbol => [...]` where `Symbol` is a grouping column, to compute one summary for each level of that group.
- `summarize_cols = []`: Specifies functions to summarize `variable` with along the columns. Follows the same structure as `summarize_rows`.
- `variable_header = true`: Controls if the cell with the name of the summarized `variable` is shown. 
- `sort = true`: Sort the input table before grouping. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

## Example

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
    summarize_cols = [sum => "overall"],
    summarize_rows = :Batch => [mean => "average", sum]
)
```
"""
function listingtable(table, variable, pagination::Union{Nothing,Pagination} = nothing; rows = [],
    cols = [],
    summarize_rows = [],
    summarize_cols = [],
    variable_header = true,
    sort = true,
    table_kwargs...)

    
    df = DataFrames.DataFrame(table)
    
    var = Variable(variable)
    
    rowgroups = make_groups(rows)
    colgroups = make_groups(cols)
    
    rowsymbols = [r.symbol for r in rowgroups]
    rowsummary = Summary(summarize_rows, rowsymbols)
    
    colsymbols = [c.symbol for c in colgroups]
    colsummary = Summary(summarize_cols, colsymbols)
    
    if pagination === nothing
        return _listingtable(df, var, rowgroups, colgroups, rowsummary, colsummary; variable_header, sort, table_kwargs...)
    else
        sd = setdiff(keys(pagination.options), [:rows, :cols])
        if !isempty(sd)
            throw(ArgumentError("`listingtable` only accepts `rows` and `cols` as pagination arguments. Found $(join(sd, ", ", " and "))"))
        end

        paginate_cols = get(pagination.options, :cols, nothing)
        paginate_rows = get(pagination.options, :rows, nothing)
    
        paginated_colgroupers = colsymbols[1:(isempty(colsummary.analyses) ? end : colsummary.groupindex)]
        paginated_rowgroupers = rowsymbols[1:(isempty(rowsummary.analyses) ? end : rowsummary.groupindex)]

        pages = Page{ListingPageMetadata}[]
        rowgrouped = DataFrames.groupby(df, paginated_rowgroupers; sort)
        rowgroup_indices = 1:length(rowgrouped)
        for r_indices in Iterators.partition(rowgroup_indices, something(paginate_rows, length(rowgroup_indices)))
            colgrouped = DataFrames.groupby(DataFrame(rowgrouped[r_indices]), paginated_colgroupers; sort)
            colgroup_indices = 1:length(colgrouped)
            for c_indices in Iterators.partition(colgroup_indices, something(paginate_cols, length(colgroup_indices)))
                t = _listingtable(DataFrame(colgrouped[c_indices]), var, rowgroups, colgroups, rowsummary, colsummary; variable_header, sort, table_kwargs...)
                push!(pages, Page(
                    ListingPageMetadata(
                        cols = paginate_cols === nothing ? GroupKey[] : GroupKey.(keys(colgrouped)[c_indices]),
                        rows = paginate_rows === nothing ? GroupKey[] : GroupKey.(keys(rowgrouped)[r_indices]),
                    ),
                    t,
                ))
            end
        end
        return PaginatedTable(pages)
    end
end

struct TooManyRowsError <: Exception
    msg::String
end
Base.show(io::IO, t::TooManyRowsError) = print(io, "TooManyRowsError: ", t.msg)

struct SortingError <: Exception end

function Base.showerror(io::IO, ::SortingError)
    print(io, """
    Sorting the input dataframe for grouping failed.
    This can happen when a column contains special objects intended for table formatting which are not sortable, for example `Concat`, `Multiline`, `Subscript` or `Superscript`.
    Consider pre-sorting your dataframe and retrying with `sort = false`.
    Note that group keys will appear in the order they are present in the dataframe, so usually you should sort in the same order that the groups are given to the table function.
    """)
end

function _listingtable(
        df::DataFrames.DataFrame,
        variable::Variable,
        rowgroups::Vector{Group},
        colgroups::Vector{Group},
        rowsummary::Summary,
        colsummary::Summary;
        variable_header::Bool,
        sort::Bool,
        celltable_kws...)

    rowsymbols = [r.symbol for r in rowgroups]
    colsymbols = [c.symbol for c in colgroups]

    groups = vcat(rowsymbols, colsymbols)

    # remove unneeded columns from the dataframe
    used_columns = [variable.symbol; rowsymbols; colsymbols]
    if sort && !isempty(groups)
        try
            df = Base.sort(df, groups, lt = natural_lt)
        catch e
            throw(SortingError())
        end
    end

    gdf = DataFrames.groupby(df, groups, sort = false)

    for group in gdf
        if size(group, 1) > 1
            nonuniform_columns = filter(names(df, DataFrames.Not(used_columns))) do name
                length(Set((getproperty(group, name)))) > 1
            end
            throw(TooManyRowsError("""
            Found a group which has more than one value. This is not allowed, only one value of "$(variable.symbol)" per table cell may exist.

            $(repr(DataFrames.select(group, used_columns), context = :limit => true))

            Filter your dataset or use additional row or column grouping factors.

            $(!isempty(nonuniform_columns) ?
                "The following columns in the dataset are not uniform in this group and could potentially be used: $nonuniform_columns." :
                "There are no other non-uniform columns in this dataset.")
            """))
        end
    end

    rowsummary_groups = vcat(rowsymbols[1:rowsummary.groupindex], colsymbols)
    gdf_rowsummary = DataFrames.combine(
        DataFrames.groupby(df, rowsummary_groups),
        [variable.symbol => a.func => "____$i" for (i, a) in enumerate(rowsummary.analyses)]...,
        ungroup = false
    )

    colsummary_groups = vcat(rowsymbols, colsymbols[1:colsummary.groupindex])
    gdf_colsummary = DataFrames.combine(
        DataFrames.groupby(df, colsummary_groups),
        [variable.symbol => a.func => "____$i" for (i, a) in enumerate(colsummary.analyses)]...,
        ungroup = false
    )

    gdf_rows = DataFrames.groupby(df, rowsymbols, sort = false)
    row_keys = Tuple.(keys(gdf_rows))
    gdf_cols = DataFrames.groupby(df, colsymbols, sort = false)
    col_keys = Tuple.(keys(gdf_cols))

    lt = ListingTable(
        gdf,
        variable,
        row_keys,
        col_keys,
        rowgroups,
        colgroups,
        rowsummary,
        gdf_rowsummary,
        colsummary,
        gdf_colsummary,
    )

    cl, i_header, rowgap_indices = get_cells(lt; variable_header)
    Table(cl, i_header, nothing; rowgaps = rowgap_indices .=> DEFAULT_ROWGAP, celltable_kws...)
end

function get_cells(l::ListingTable; variable_header::Bool)
    cells = SpannedCell[]

    row_summaryindex = l.rowsummary.groupindex
    col_summaryindex = l.colsummary.groupindex

    rowparts = partition(l.row_keys, by = x -> x[1:row_summaryindex])
    colparts = partition(l.col_keys, by = x -> x[1:col_summaryindex])

    lengths_rowparts = map(length, rowparts)
    cumsum_lengths_rowparts = cumsum(lengths_rowparts)
    n_row_summaries = length(l.rowsummary.analyses)

    lengths_colparts = map(length, colparts)
    cumsum_lengths_colparts = cumsum(lengths_colparts)
    n_col_summaries = length(l.colsummary.analyses)

    n_rowgroups = length(l.rows)
    n_colgroups = length(l.columns)

    colheader_offset = 2 * n_colgroups + (variable_header ? 1 : 0)
    rowheader_offset = n_rowgroups

    rowgap_indices = Int[]

    # group headers for row groups
    for (i_rowgroup, rowgroup) in enumerate(l.rows)
        cell = SpannedCell(colheader_offset, i_rowgroup, rowgroup.name, listingtable_row_header())
        push!(cells, cell)
    end

    for (i_colpart, colpart) in enumerate(colparts)
        coloffset = rowheader_offset +
            (i_colpart == 1 ? 0 : cumsum_lengths_colparts[i_colpart-1]) +
            (i_colpart-1) * n_col_summaries
        colrange = coloffset .+ (1:length(colpart))

        # variable headers on top of each column part
        if variable_header
            cell = SpannedCell(colheader_offset, colrange, l.variable.name, listingtable_variable_header())
            push!(cells, cell)
        end

        values_spans = nested_run_length_encodings(colpart)
        all_spanranges = [spanranges(spans) for (values, spans) in values_spans]

        # column headers on top of each column part
        for i_colgroupkey in 1:n_colgroups
            headerspanranges = i_colgroupkey == 1 ? [1:length(colpart)] : all_spanranges[i_colgroupkey-1]
            for headerspanrange in headerspanranges
                header_offset_range = headerspanrange .+ coloffset
                class = length(headerspanrange) > 1 ? listingtable_column_header_spanned() : listingtable_column_header()
                cell = SpannedCell(i_colgroupkey * 2 - 1, header_offset_range, l.columns[i_colgroupkey].name, class)
                push!(cells, cell)
            end
            values, _ = values_spans[i_colgroupkey]
            ranges = all_spanranges[i_colgroupkey]
            for (value, range) in zip(values, ranges)
                label_offset_range = range .+ coloffset
                cell = SpannedCell(i_colgroupkey * 2, label_offset_range, format_value(value), listingtable_column_header_key())
                push!(cells, cell)
            end
        end

        # column analysis headers after each column part
        for (i_colsumm, summ_ana) in enumerate(l.colsummary.analyses)
            summ_coloffset = coloffset + length(colpart)

            push!(cells, SpannedCell(
                colheader_offset,
                summ_coloffset + i_colsumm,
                summ_ana.name,
                listingtable_column_analysis_header()
            ))
        end
    end

    for (i_rowpart, rowpart) in enumerate(rowparts)
        rowgroupoffset = i_rowpart == 1 ? 0 : cumsum_lengths_rowparts[i_rowpart-1]
        rowsummoffset = (i_rowpart - 1) * n_row_summaries
        rowoffset = rowgroupoffset + rowsummoffset + colheader_offset

        all_rowspans = nested_run_length_encodings(rowpart)

        # row groups to the left of each row part
        for i_rowgroupkey in 1:n_rowgroups
            values, spans = all_rowspans[i_rowgroupkey]
            ranges = spanranges(spans)
            for (value, range) in zip(values, ranges)
                offset_range = range .+ rowoffset
                cell = SpannedCell(offset_range, i_rowgroupkey, format_value(value), listingtable_row_key())
                push!(cells, cell)
            end
        end

        summ_rowoffset = rowoffset + length(rowpart)
        if !isempty(l.rowsummary.analyses)
            push!(rowgap_indices, summ_rowoffset)
            if i_rowpart < length(rowparts)
                push!(rowgap_indices, summ_rowoffset + length(l.rowsummary.analyses))
            end
        end

        # row analysis headers below each row part
        for (i_rowsumm, summ_ana) in enumerate(l.rowsummary.analyses)
            push!(cells, SpannedCell(
                summ_rowoffset + i_rowsumm,
                n_rowgroups,
                summ_ana.name,
                listingtable_row_analysis_header()
            ))
        end

        # this loop goes over each block of rowparts x colparts
        for (i_colpart, colpart) in enumerate(colparts)

            colgroupoffset = i_colpart == 1 ? 0 : cumsum_lengths_colparts[i_colpart-1]
            colsummoffset = (i_colpart - 1) * n_col_summaries
            coloffset = colgroupoffset + colsummoffset + rowheader_offset

            # populate raw value cells for the current block
            for (i_row, rowkey) in enumerate(rowpart)
                for (i_col, colkey) in enumerate(colpart)
                    fullkey = (rowkey..., colkey...)
                    data = get(l.gdf, fullkey, nothing)

                    if data === nothing
                        value = ""
                    else
                        value = only(getproperty(data, l.variable.symbol))
                    end
                    row = rowoffset + i_row
                    col = coloffset + i_col
                    cell = SpannedCell(row, col, format_value(value), listingtable_body())
                    push!(cells, cell)
                end
            end

            # populate row analysis cells for the current block
            for i_rowsumm in eachindex(l.rowsummary.analyses)

                summ_rowoffset = rowoffset + length(rowpart)

                for (i_col, colkey) in enumerate(colpart)
                    partial_rowkey = first(rowpart)[1:row_summaryindex]
                    summkey = (partial_rowkey..., colkey...)
                    datacol_index = length(summkey) + i_rowsumm

                    data = get(l.gdf_rowsummary, summkey, nothing)
                    if data === nothing
                        value = ""
                    else
                        value = only(data[!, datacol_index])
                    end

                    cell = SpannedCell(
                        summ_rowoffset + i_rowsumm,
                        coloffset + i_col,
                        format_value(value),
                        listingtable_row_analysis_body()
                    )
                    push!(cells, cell)
                end
            end

            # populate column analysis cells for the current block
            for i_colsumm in eachindex(l.colsummary.analyses)

                summ_coloffset = coloffset + length(colpart)

                for (i_row, rowkey) in enumerate(rowpart)
                    partial_colkey = first(colpart)[1:col_summaryindex]
                    summkey = (rowkey..., partial_colkey...)
                    datacol_index = length(summkey) + i_colsumm

                    data = get(l.gdf_colsummary, summkey, nothing)
                    if data === nothing
                        value = ""
                    else
                        value = only(data[!, datacol_index])
                    end

                    cell = SpannedCell(
                        rowoffset + i_row,
                        summ_coloffset + i_colsumm,
                        format_value(value),
                        listingtable_column_analysis_body()
                    )
                    push!(cells, cell)
                end
            end
        end
    end

    cells, colheader_offset, rowgap_indices
end

listingtable_row_header() = CellStyle(halign = :left, bold = true)
listingtable_variable_header() = CellStyle(bold = true)
listingtable_row_key() = CellStyle(halign = :left)
listingtable_body() = CellStyle()
listingtable_column_header() = CellStyle(bold = true)
listingtable_column_header_spanned() = CellStyle(border_bottom = true, bold = true)
listingtable_column_header_key() = CellStyle()
listingtable_row_analysis_header() = CellStyle(halign = :left, bold = true)
listingtable_row_analysis_body() = CellStyle()
listingtable_column_analysis_header() = CellStyle(halign = :right, bold = true)
listingtable_column_analysis_body() = CellStyle(halign = :right)

function nested_run_length_encodings(gdf_keys)
    n_entries = length(gdf_keys)
    n_levels = length(first(gdf_keys))
    spans = Tuple{Vector{Any},Vector{Int}}[]
    for level in 1:n_levels
        keys = Any[]
        lengths = Int[]

        prev_key = first(gdf_keys)[level]
        current_length = 1

        starts_of_previous_level = level == 1 ? Int[] : cumsum([1; spans[level-1][2][1:end-1]])

        for (i, entrykeys) in zip(2:length(gdf_keys), gdf_keys[2:end])
            key = entrykeys[level]
            is_previous_level_start = i in starts_of_previous_level
            if !is_previous_level_start && key == prev_key
                current_length += 1
            else
                push!(lengths, current_length)
                push!(keys, prev_key)
                current_length = 1
            end
            prev_key = key
        end
        push!(lengths, current_length)
        push!(keys, prev_key)
        push!(spans, (keys, lengths))
    end
    return spans
end

function spanranges(spans)
    start = 1
    stop = 0
    map(spans) do span
        stop = start + span - 1
        range = start:stop
        start += span
        return range
    end
end

# split a collection into parts where each element in a part `isequal` for `by(element)`
function partition(collection; by)
    parts = Vector{eltype(collection)}[]
    part = eltype(collection)[]
    for element in collection
        if isempty(part)
            push!(part, element)
        else
            if isequal(by(last(part)), by(element))
                push!(part, element)
            else
                push!(parts, part)
                part = eltype(collection)[element]
            end
        end
    end
    push!(parts, part)
    parts
end

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
- `variable`: Determines which variable from `table` is summarized. Can either be a `Symbol` such as `:ColumnA`, or alternatively a `Pair` where the second element is the display name, such as `:ColumnA => "Column A"`.

## Keyword arguments
- `rows = []`: Grouping structure along the rows. Should be a `Vector` where each element is a grouping variable, specified as a `Symbol` such as `:Column1`, or a `Pair`, where the first element is the symbol and the second a display name, such as `:Column1 => "Column 1"`. Specifying multiple grouping variables creates nested groups, with the last variable changing the fastest.
- `cols = []`: Grouping structure along the columns. Follows the same structure as `rows`.
- `summary = []`: Specifies functions to summarize `variable` with.
  Should be a `Vector`, where each entry is one separate summary.
  Each summary can be given as a `Function` such as `mean` or `maximum`, in which case the display name is the function's name.
  Alternatively, a display name can be given using the pair syntax, such as `mean => "Average"`.
  By default, one summary is computed over all groups.
  You can also pass `Symbol => [...]` where `Symbol` is a grouping column, to compute one summary for each level of that group.
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

