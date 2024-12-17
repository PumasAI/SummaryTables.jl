default_tests() = (
    categorical = HypothesisTests.ChisqTest,
    nonnormal = HypothesisTests.KruskalWallisTest,
    minmax = HypothesisTests.UnequalVarianceTTest,
    normal = HypothesisTests.UnequalVarianceTTest,
)

hformatter(num::Real) = num < 0.001 ? "<0.001" : string(round(num; digits = 3))
hformatter((a, b)::Tuple{<:Real,<:Real}; digits = 3) = "($(round(a; digits)), $(round(b; digits)))"
hformatter(::Tuple{Nothing,Nothing}) = ""
hformatter(::Vector) = "" # TODO
hformatter(other) = ""

## Categorical:

function htester(data::Matrix, test, combine)
    data = identity.(data)
    try
        if size(data) == (2, 2)
            a, c, b, d = data
            test = HypothesisTests.FisherExactTest
            return test, test(a, b, c, d)
        else
            return test, test(data)
        end
    catch _
        return nothing, nothing
    end
end

## Continuous:

function htester(data::Vector, test::Type{HypothesisTests.KruskalWallisTest}, combine)
    try
        return test, test(data...)
    catch _
        return nothing, nothing
    end
end

function htester(data::Vector, test, combine)
    try
        if length(data) > 2
            # test each unique pair of vectors from data
            results = [test(a, b) for (i, a) in pairs(data) for b in data[i+1:end]]
            pvalues = HypothesisTests.pvalue.(results)
            return test, MultipleTesting.combine(pvalues, combine)
        else
            return test, test(data...)
        end
    catch _
        return nothing, nothing
    end
end

## P-Values:

get_pvalue(n::Real) = n
get_pvalue(::Nothing) = nothing
get_pvalue(result) = HypothesisTests.pvalue(result)

## CI:

function get_confint(result)
    try
        return HypothesisTests.confint(result)
    catch _
        return nothing, nothing
    end
end
get_confint(::Real) = (nothing, nothing)
get_confint(::Nothing) = (nothing, nothing)

## Test name:

get_testname(test) = string(nameof(test))
get_testname(::Nothing) = ""

##

struct Analysis
    variable::Symbol
    func::Function
    name
end

function Analysis(s::Symbol, df::DataFrames.DataFrame)
    Analysis(s, default_analysis(df[!, s]), string(s))
end

function Analysis(p::Pair{<:Union{Symbol,String}, <:Any}, df::DataFrames.DataFrame)
    sym, rest = p
    Analysis(sym, rest, df)
end

function Analysis(sym::Symbol, name, df::DataFrames.DataFrame)
    Analysis(sym, default_analysis(df[!, sym]), name)
end

function Analysis(sym::Symbol, funcvec::AbstractVector, df::DataFrames.DataFrame)
    Analysis(sym, to_func(funcvec), df)
end

function Analysis(sym::Symbol, f::Function, df::DataFrames.DataFrame)
    Analysis(sym, f, string(sym))
end

function Analysis(s::Symbol, f::Function, name, df::DataFrames.DataFrame)
    Analysis(s, f, name)
end

function Analysis(sym::Symbol, p::Pair, df::DataFrames.DataFrame)
    funcs, name = p
    Analysis(sym, funcs, name, df)
end

function Analysis(sym::String, args...)
    Analysis(Symbol(sym), args...)
end

make_analyses(v::AbstractVector, df::DataFrame) = map(x -> Analysis(x, df), v)
make_analyses(x, df::DataFrame) = [Analysis(x, df)]

to_func(f::Function) = f
function to_func(v::AbstractVector)
    return function(col)
        result_name_pairs = map(v) do el
            f, name = func_and_name(el)
            f(col) => name
        end
        Tuple(result_name_pairs)
    end
end
func_and_name(p::Pair{<:Function, <:Any}) = p
func_and_name(f::Function) = f => string(f)

not_computable_annotation() = Annotated("NC", "NC - Not computable", label = nothing)

function guard_statistic(stat)
    function (vec)
        sm = skipmissing(vec)
        if isempty(sm)
            missing
        else
            stat(sm)
        end
    end
end

function default_analysis(v::AbstractVector{<:Union{Missing, <:Real}})

    anymissing = any(ismissing, v)

    function (col)
        allmissing = isempty(skipmissing(col))

        _mean = guard_statistic(mean)(col)
        _sd = guard_statistic(std)(col)
        mean_sd = if allmissing
            not_computable_annotation()
        else
            Concat(_mean, " (", _sd, ")")
        end
        _median = guard_statistic(median)(col)
        _min = guard_statistic(minimum)(col)
        _max = guard_statistic(maximum)(col)
        med_min_max = if allmissing
            not_computable_annotation()
        else
            Concat(_median, " [", _min, ", ", _max, "]")
        end
        
        if anymissing
            nm = count(ismissing, col)
            _mis = Concat(nm, " (", nm / length(col) * 100, "%)")
        end

        (
            mean_sd => "Mean (SD)",
            med_min_max => "Median [Min, Max]",
            (anymissing ? (_mis => "Missing",) : ())...
        )
    end
end

default_analysis(c::CategoricalArray) = level_analyses(c)
default_analysis(v::AbstractVector{<:Union{Missing, Bool}}) = level_analyses(v)
# by default we just count levels for all datatypes that are not known
default_analysis(v) = level_analyses(v)

function level_analyses(c)
    has_missing = any(ismissing, c) # if there's any missing, we report them for every col in c
    function (col)
        _levels = levels(c) # levels are computed for the whole column, not per group, so they are always exhaustive
        lvls = tuple(_levels...)
        cm = StatsBase.countmap(col)
        n = length(col)

        _entry(n_lvl) = Concat(n_lvl, " (", n_lvl / n * 100, "%)")

        entries = map(lvls) do lvl
            n_lvl = get(cm, lvl, 0)
            s = _entry(n_lvl)
            s => lvl
        end
        if has_missing
            n_missing = count(ismissing, col)
            entries = (entries..., _entry(n_missing) => "Missing")
        end
        return entries
    end
end

"""
    table_one(table, analyses; keywords...)

Construct a "Table 1" which summarises the patient baseline
characteristics from the provided `table` dataset. This table is commonly used
in biomedical research papers.

It can handle both continuous and categorical columns in `table` and summary
statistics and hypothesis testing are able to be customised by the user. Tables
can be stratified by one, or more, variables using the `groupby` keyword.

## Keywords

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

## Deprecated keywords

  - `show_overall`: Use `show_total` instead

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

"""
function table_one(
    table,
    analyses;
    groupby = [],
    show_total = true,
    show_overall = nothing, # deprecated in version 3
    group_totals = Symbol[],
    total_name = "Total",
    show_pvalues = false,
    show_tests = true,
    show_confints = false,
    show_n = false,
    compare_groups::Vector = [],
    nonnormal = [],
    minmax = [],
    tests = default_tests(),
    combine = MultipleTesting.Fisher(),
    sort = true,
    celltable_kws...
)

    df = DataFrames.DataFrame(table)

    groups = make_groups(groupby)
    n_groups = length(groups)

    if show_overall !== nothing
        @warn """`show_overall` has been deprecated, use `show_total` instead. You can change the identifier back from "Total" to "Overall" using the `total_name` keyword argument"""
        show_total = show_overall
    end
    show_total || n_groups > 0 || error("`show_total` can't be false if there are no groups.")

    _analyses = make_analyses(analyses, df)

    typedict = Dict(map(_analyses) do analysis
        type = if getproperty(df, analysis.variable) isa CategoricalVector
            :categorical
        elseif analysis.variable in nonnormal
            :nonnormal
        elseif analysis.variable in minmax
            :minmax
        else
            :normal
        end
        analysis.variable => type
    end)

    columns = Vector{Cell}[]

    groupsymbols = [g.symbol for g in groups]

    _group_totals(a::AbstractVector{<:Union{String,Symbol}}) = Symbol.(a)
    _group_totals(s::Symbol) = [s]
    _group_totals(s::String) = [Symbol(s)]
    group_totals = _group_totals(group_totals) 
    if !isempty(groupsymbols) && first(groupsymbols) in group_totals
        throw(ArgumentError("Cannot show totals for topmost group $(repr(first(groupsymbols))) as it would be equivalent to the `show_total` option. Grouping is $groupsymbols"))
    end

    other_syms = setdiff(group_totals, groupsymbols)
    if !isempty(other_syms)
        throw(ArgumentError("Invalid group symbols in `group_totals`: $other_syms. Grouping is $groupsymbols"))
    end
    
    if sort && !isempty(groupsymbols)
        try
            Base.sort!(df, groupsymbols, lt = natural_lt)
        catch e
            throw(SortingError())
        end
    end
    gdf = DataFrames.groupby(df, groupsymbols, sort = false)

    calculate_comparisons = length(gdf) >= 2 && show_pvalues
    if calculate_comparisons
        compare_groups = [make_testfunction(show_pvalues, show_tests, show_confints, typedict, merge(default_tests(), tests), combine); compare_groups]
    end

    rows_per_groups = map(1:n_groups) do k
        _gdf = DataFrames.groupby(df, groupsymbols[1:k], sort = false)
        DataFrames.combine(_gdf, nrow, ungroup = false)
    end

    funcvector = [a.variable => a.func for a in _analyses]
    df_analyses = DataFrames.combine(gdf, funcvector; ungroup = false)
    if show_total
        df_total = DataFrames.combine(df, funcvector)
    end
    group_total_indices = Base.sort(map(sym -> findfirst(==(sym), groupsymbols), group_totals))

    dfs_group_total = map(group_total_indices) do i
        DataFrames.groupby(df, groupsymbols[1:i-1], sort = false)
    end

    gdfs_group_total = map(dfs_group_total) do _gdf
        return DataFrames.combine(_gdf, funcvector, ungroup = false)
    end

    analysis_labels = map(n_groups+1:n_groups+length(_analyses)) do i_col
        col = df_analyses[1][!, i_col]
        x = only(col)
        if x isa Tuple
            map(last, x)
        else
            error("Expected a tuple")
        end
    end

    n_values_per_analysis = map(length, analysis_labels)

    header_offset = n_groups == 0 ? 2 : n_groups * 2 + 1

    ana_title_col = Cell[]
    for _ in 1:max(1, 2 * n_groups)
        push!(ana_title_col, Cell(nothing))
    end
    for (analysis, labels) in zip(_analyses, analysis_labels)
        push!(ana_title_col, Cell(analysis.name, tableone_variable_header()))
        for label in labels
            push!(ana_title_col, Cell(label, tableone_analysis_name()))
        end
    end
    push!(columns, ana_title_col)

    if show_total
        total_col = Cell[]
        for _ in 1:max(0, 2 * n_groups - 1)
            push!(total_col, Cell(nothing))
        end
        title = if show_n
            Multiline(total_name, "(n=$(nrow(df)))")
        else
            total_name
        end
        push!(total_col, Cell(title, tableone_column_header()))

        for col in eachcol(df_total)
            push!(total_col, Cell(nothing))
            for result in only(col)
                push!(total_col, Cell(result[1]))
            end
        end

        push!(columns, total_col)
    end

    # value => index dictionaries for each grouping level
    mergegroups = map(1:n_groups) do i
        Dict(reverse(t) for t in enumerate(unique(key[i] for key in keys(gdf))))
    end

    if n_groups > 0
        for (ikey, (key, ggdf)) in enumerate(pairs(df_analyses))

            function group_key_title(igroup)
                groupkey = ggdf[1, igroup]
                title = if show_n
                    nrows_gdf = rows_per_groups[igroup]
                    reduced_key = Tuple(key)[1:igroup]
                    nrows = only(nrows_gdf[reduced_key].nrow)
                    Multiline(groupkey, "(n=$nrows)")
                else
                    groupkey
                end
            end

            data_col = Cell[]
            if n_groups == 0
                push!(data_col, Cell(nothing))
            end
            for i in 1:n_groups
                # we assign merge groups according to the value in the parent group,
                # this way cells can never merge across their parent groups
                mergegroup = i == 1 ? 0 : mergegroups[i-1][key[i-1]]
                
                push!(data_col, Cell(groups[i].name, tableone_column_header_spanned(); merge = true, mergegroup))
                push!(data_col, Cell(group_key_title(i), tableone_column_header_key(); merge = true, mergegroup))
            end
            for icol in (n_groups+1):ncol(ggdf)
                push!(data_col, Cell(nothing))
                for result in ggdf[1, icol]
                    push!(data_col, Cell(result[1]))
                end
            end
            push!(columns, data_col)

            # go from smallest to largest group if there are multiple at this border
            for ii in length(group_total_indices):-1:1
                i_total_group = group_total_indices[ii]
                i_parent_group = i_total_group - 1
                next_key = length(df_analyses) == ikey ? nothing : keys(df_analyses)[ikey+1]

                n_subgroups = count(keys(df_analyses)) do _key
                    Tuple(_key)[1:i_parent_group] === Tuple(key)[1:i_parent_group]
                end
                # if a group has only 1 subgroup, the total would be the same as that one so we skip it
                n_subgroups == 1 && continue

                if next_key === nothing || key[i_parent_group] !== next_key[i_parent_group] || ikey == length(df_analyses)
                    group_total_col = Cell[]

                    for i in 1:i_total_group
                        # we assign merge groups according to the value in the parent group,
                        # this way cells can never merge across their parent groups
                        mergegroup = i == 1 ? 0 : mergegroups[i-1][key[i-1]]
                        push!(group_total_col, Cell(groups[i].name, tableone_column_header_spanned(); merge = true, mergegroup))
                        i < i_total_group && push!(group_total_col, Cell(group_key_title(i), tableone_column_header_key(); merge = true, mergegroup))
                    end

                    agg_key = Tuple(key)[1:i_total_group-1]
                    title = if show_n
                        Multiline(total_name, "(n=$(nrow(dfs_group_total[ii][agg_key])))")
                    else
                        total_name
                    end
                    push!(group_total_col, Cell(title))

                    for _ in 1:(2 * (n_groups-i_total_group))
                        push!(group_total_col, Cell(nothing))
                    end

                    gdf_group_total = gdfs_group_total[ii]
                    _gdf = gdf_group_total[agg_key]
                    for icol in i_total_group:ncol(_gdf)
                        push!(group_total_col, Cell(nothing))
                        for result in _gdf[1, icol]
                            push!(group_total_col, Cell(result[1]))
                        end
                    end

                    push!(columns, group_total_col)
                end
            end
        end
    end

    for comp in compare_groups
        # the logic here is much less clean than it could be because of the way
        # column names have to be passed via pairs, and it cannot be guaranteed from typing
        # that all are compatible, so it has to be runtime checked
        values = map(_analyses) do analysis
            val = comp(analysis.variable, [getproperty(g, analysis.variable) for g in gdf])
            @assert val isa Tuple && all(x -> x isa Pair, val) "A comparison function has to return a tuple of value => name pairs. Function $comp returned $val"
            val
        end

        nvalues = length(first(values))
        @assert all(==(nvalues), map(length, values)) "All comparison tuples must have the same length. Found\n$values"
        colnames = [map(last, v) for v in values]
        unique_colnames = unique(colnames)
        @assert length(unique_colnames) == 1 "All column names must be the same, found $colnames" 
        unique_colnames = only(unique_colnames)

        for i_comp in 1:length(unique_colnames)
            comp_col = Cell[]

            for _ in 1:(2 * n_groups - 1)
                push!(comp_col, Cell(nothing))
            end

            name = unique_colnames[i_comp]
            push!(comp_col, Cell(name, tableone_column_header()))

            for (j, val) in enumerate(values)
                value, _ = val[i_comp]
                push!(comp_col, Cell(value, tableone_body()))
                for _ in 1:n_values_per_analysis[j]
                    push!(comp_col, Cell(nothing))
                end
            end
            push!(columns, comp_col)
        end
    end

    cells = reduce(hcat, columns)
    Table(cells, header_offset-1, nothing; celltable_kws...)
end

"""
    table_one(table; kwargs...)

Create a `table_one` with with all columns from `table` except those used in the `groupby` keyword.
"""
function table_one(table; groupby = [], kwargs...)
    groups = make_groups(groupby)
    groupsyms = [g.symbol for g in groups]
    all_names = Tables.columnnames(table)
    all_names_but_groups = setdiff(all_names, groupsyms)
    return table_one(table, all_names_but_groups; groupby, kwargs...)
end

tableone_column_header() = CellStyle(halign = :center, bold = true)
tableone_column_header_spanned() = CellStyle(halign = :center, bold = true, border_bottom = true)
tableone_column_header_key() = CellStyle(; halign = :center)
tableone_variable_header() = CellStyle(bold = true, halign = :left)
tableone_body() = CellStyle()
tableone_analysis_name() = CellStyle(indent_pt = 12, halign = :left)

formatted(f::Function, s::String) = formatted((f), s)
function formatted(fs::Tuple, s::String)
    function (col)
        values = map(fs) do f
            f(col)
        end
        Printf.format(Printf.Format(s), values...)
    end
end

function make_testfunction(show_pvalues::Bool, show_tests::Bool, show_confint::Bool, typedict, testdict, combine)
    function testfunction(variable, cols)
        cols_nomissing = map(collect ∘ skipmissing, cols)
        variabletype = typedict[variable]
        test = testdict[variabletype]
        if variabletype === :categorical
            # concatenate the level counts into a matrix which Chi Square Test needs
            matrix = hcat([map(l -> count(==(l), col), levels(col)) for col in cols_nomissing]...)
            used_test, result = htester(matrix, test, combine)
        else
            used_test, result = htester(cols_nomissing, test, combine)
        end
        testname = get_testname(used_test)
        pvalue = hformatter(get_pvalue(result))
        confint = hformatter(get_confint(result))

        (
            (show_pvalues ? (pvalue => "P-Value",) : ())...,
            (show_tests ? (testname => "Test",) : ())...,
            (show_confint ? (confint => "CI",) : ())...,
        )
    end
end

