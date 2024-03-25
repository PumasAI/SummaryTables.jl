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

function Analysis(p::Pair{Symbol, <:Any}, df::DataFrames.DataFrame)
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
  - `tests`: a `NamedTuple` of hypothesis test types to use for `categorical`, `nonnormal`, `minmax`, and `normal` variables.
  - `combine`: an object from `MultipleTesting` to use when combining p-values.
  - `show_overall`: display the "Overall" column summary. Default is `true`.
  - `show_n`: Display the number of rows for each group key next to its label.
  - `show_pvalues`: display the `P-Value` column. Default is `false`.
  - `show_testnames`: display the `Test` column. Default is `false`.
  - `show_confints`: display the `CI` column. Default is `false`.
  - `sort`: Sort the input table before grouping. Default is `true`. Pre-sort as desired and set to `false` when you want to maintain a specific group order or are using non-sortable objects as group keys.

All other keywords are forwarded to the `Table` constructor, refer to its docstring for details.

"""
function table_one(
    table,
    analyses;
    groupby = [],
    show_overall = true,
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

    show_overall || n_groups > 0 || error("Overall can't be false if there are no groups.")

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

    cells = SpannedCell[]

    groupsymbols = [g.symbol for g in groups]
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

    rows_per_group = [nrow(g) for g in gdf]

    funcvector = [a.variable => a.func for a in _analyses]
    df_analyses = DataFrames.combine(gdf, funcvector; ungroup = false)
    if show_overall
        df_overall = DataFrames.combine(df, funcvector)
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
    analysis_offsets = [0; cumsum(1 .+ n_values_per_analysis)[1:end-1]]

    header_offset = n_groups == 0 ? 2 : n_groups * 2 + 1

    values_spans = nested_run_length_encodings(keys(gdf))
    all_spanranges = [spanranges(spans) for (values, spans) in values_spans]

    n_groupcols = n_groups == 0 ? 0 : maximum(x -> x.stop, all_spanranges[1])

    if show_overall
        coloffset = 1
        title = if show_n
            Multiline("Overall", "(n=$(nrow(df)))")
        else
            "Overall"
        end
        cell = SpannedCell(n_groups == 0 ? 1 : 2 * n_groups, 2, title, tableone_column_header())
        push!(cells, cell)
    else
        coloffset = 0
    end

    # add column headers for groups
    for i_groupkey in 1:n_groups
        headerspanranges = i_groupkey == 1 ? [1:length(keys(gdf))] : all_spanranges[i_groupkey-1]
        for headerspanrange in headerspanranges
            header_offset_range = headerspanrange .+ 1 .+ coloffset
            
            cell = SpannedCell(i_groupkey * 2 - 1, header_offset_range, groups[i_groupkey].name, tableone_column_header_spanned())
            push!(cells, cell)
        end
        values, _ = values_spans[i_groupkey]
        ranges = all_spanranges[i_groupkey]
        for (value, range) in zip(values, ranges)
            label_offset_range = range .+ 1 .+ coloffset
            n_entries = sum(rows_per_group[range])
            label = if show_n
                Multiline(format_value(value), "(n=$n_entries)")
            else
                format_value(value)
            end
            cell = SpannedCell(i_groupkey * 2, label_offset_range, label, tableone_column_header_key())
            push!(cells, cell)
        end
    end

    for (i_ana, analysis) in enumerate(_analyses)

        offset = header_offset + analysis_offsets[i_ana]
        cell = SpannedCell(offset, 1, analysis.name, tableone_variable_header())
        push!(cells, cell)

        for (i_func, funcname) in enumerate(analysis_labels[i_ana])
            cell = SpannedCell(offset + i_func, 1, funcname, tableone_analysis_name())
            push!(cells, cell)
        end

        if show_overall
            val = only(df_overall[!, i_ana])
            for i_func in 1:n_values_per_analysis[i_ana]
                cell = SpannedCell(offset + i_func, 2, val[i_func][1], tableone_body())
                push!(cells, cell)
            end
        end 
        
        if n_groups > 0          
            for (i_group, ggdf) in enumerate(df_analyses)
                val = only(ggdf[!, n_groups + i_ana])
                for i_func in 1:n_values_per_analysis[i_ana]
                    cell = SpannedCell(offset + i_func, coloffset + 1 + i_group, val[i_func][1], tableone_body())
                    push!(cells, cell)
                end
            end
        end
    end

    compcolumn_offset = n_groupcols + (show_overall ? 1 : 0) + 1
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

        # set column headers
        for (ival, name) in enumerate(only(unique_colnames))
            cell = SpannedCell(header_offset-1, compcolumn_offset+ival, name, tableone_column_header())
            push!(cells, cell)
        end

        for (j, val) in enumerate(values)
            # set column values
            for (ival, (value, _)) in enumerate(val)
                cell = SpannedCell(analysis_offsets[j] + header_offset, compcolumn_offset+ival, value, tableone_body())
                push!(cells, cell)
            end
        end
        compcolumn_offset += nvalues
    end

    Table(cells, header_offset-1, nothing; celltable_kws...)
end

tableone_column_header() = CellStyle(halign = :center, bold = true)
tableone_column_header_spanned() = CellStyle(halign = :center, bold = true, border_bottom = true)
tableone_column_header_key() = CellStyle(halign = :center)
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

