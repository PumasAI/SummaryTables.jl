# `table_one`

## Synopsis

"Table 1" is a common term for the first table in a paper that summarizes demographic and other individual data of the population that is being studied.
In general terms, it is a table where different columns from the source table are summarized separately, stacked along the rows.
The types of analysis can be chosen manually, or will be selected given the column types.
Optionally, there can be grouping applied along the columns as well.

In this example, several variables of a hypothetical population are analyzed split by sex.

```@example table_one_intro
using SummaryTables
using DataFrames

data = DataFrame(
    sex = ["m", "m", "m", "m", "f", "f", "f", "f", "f", "f"],
    age = [27, 45, 34, 85, 55, 44, 24, 29, 37, 76],
    blood_type = ["A", "0", "B", "B", "B", "A", "0", "A", "A", "B"],
    smoker = [true, false, false, false, true, true, true, false, false, false],
)

table_one(
    data,
    [:age => "Age (years)", :blood_type => "Blood type", :smoker => "Smoker"],
    groupby = :sex => "Sex",
    show_n = true
)
```

You can also omit the second argument as a shortcut when you quickly want to summarize all columns of your dataset. The columns in `groupby` are excluded automatically:

```@example table_one_intro
table_one(
    data,
    groupby = :blood_type,
)
```

## Argument 1: `table`

The first argument can be any object that is a table compatible with the `Tables.jl` API.
Here are some common examples:

### `DataFrame`

```@example
using DataFrames
using SummaryTables

data = DataFrame(x = [1, 2, 3], y = ["4", "5", "6"])

table_one(data, [:x, :y])
```

### `NamedTuple` of `Vector`s

```@example
using SummaryTables

data = (; x = [1, 2, 3], y = ["4", "5", "6"])

table_one(data, [:x, :y])
```

### `Vector` of `NamedTuple`s

```@example
using SummaryTables

data = [(; x = 1, y = "4"), (; x = 2, y = "5"), (; x = 3, y = "6")]

table_one(data, [:x, :y])
```

## Optional argument 2: `analyses`

The second argument takes a vector specifying analyses, with one entry for each "row section" of the resulting table.
If only one analysis is passed, the vector can be omitted.
Each analysis can have up to three parts: the variable, the analysis function and the label.

For convenience, if the `analyses` argument is omitted, it is equivalent to passing `Tables.columnnames(table)` except that all columns referenced in `groupby` are filtered out.

The variable is passed as a `Symbol` or `String`, corresponding to a column in the input data, and must always be specified.
The other two parts are optional.

If you specify only variables, the analysis functions are chosen automatically based on the columns, and the labels are equal to the variable names.
Number variables show the mean, standard deviation, median, minimum and maximum.
String variables or other non-numeric variables show counts and percentages of each element type. 

```@example
using SummaryTables

data = (; x = [1, 2, 3], y = ["a", "b", "a"])

table_one(data, [:x, :y])
```

In the next example, we rename the `x` variable by passing a `String` in a `Pair`.

```@example
using SummaryTables

data = (; x = [1, 2, 3], y = ["a", "b", "a"])

table_one(data, [:x => "Variable X", :y])
```

Labels can be any type except `<:Function` (that type signals that an analysis function has been passed).
One example of a non-string label is `Concat` in conjunction with `Superscript`.

```@example
using SummaryTables

data = (; x = [1, 2, 3], y = ["a", "b", "a"])

table_one(data, [:x => Concat("X", Superscript("with superscript")), :y])
```

Any object which is a subtype of `Function` is assumed to be an analysis function.
An analysis function takes a data column as input and returns a `Tuple` where each entry corresponds to one analysis row.
Each of these rows consists of a `Pair` where the left side is the analysis result and the right side the label.
Here's an example of a custom number column analysis function.
Note the use of `Concat` to build content out of multiple parts.
This is preferred to interpolating into a string because interpolation destroys the original objects and takes away the possibility for automatic rounding or other special post-processing or display behavior.

```@example
using SummaryTables
using Statistics

data = (; x = [1, 2, 3])

function custom_analysis(column)
    (
        minimum(column) => "Minimum",
        maximum(column) => "Maximum",
        Concat(mean(column), " (", std(column), ")") => "Mean (SD)",
    )
end

table_one(data, :x => custom_analysis)
```

Finally, all three parts, variable, analysis function and label can be combined as well:

```@example
using SummaryTables
using Statistics

data = (; x = [1, 2, 3])

function custom_analysis(column)
    (
        minimum(column) => "Minimum",
        maximum(column) => "Maximum",
        Concat(mean(column), " (", std(column), ")") => "Mean (SD)",
    )
end

table_one(data, :x => custom_analysis => "Variable X")
```

## Keyword: `groupby`

The `groupby` keyword takes a vector of column name symbols with optional labels.
If there is only one grouping column, the vector can be omitted.
Each analysis is then computed separately for each group.

```@example
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["a", "a", "a", "b", "b", "b"])

table_one(data, :x, groupby = :y)
```

In this example, we rename the grouping column:

```@example
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["a", "a", "a", "b", "b", "b"])

table_one(data, :x, groupby = :y => "Column Y")
```

If there are multiple grouping columns, they are shown in a nested fashion, with the first group at the highest level:

```@example
using SummaryTables

data = (;
    x = [1, 2, 3, 4, 5, 6],
    y = ["a", "a", "b", "b", "c", "c"],
    z = ["d", "e", "d", "e", "d", "e"],
)

table_one(data, :x, groupby = [:y, :z => "Column Z"])
```

## Keyword: `show_n`

When `show_n` is set to `true`, the size of each group is shown under its name.

```@example
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["a", "a", "a", "a", "b", "b"])

table_one(data, :x, groupby = :y, show_n = true)
```

## Keyword: `show_total`

When `show_total` is set to `false`, the column summarizing all groups together is hidden.
Use this only when `groupby` is set, otherwise the resulting table will be empty.

```@example
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["a", "a", "a", "a", "b", "b"])

table_one(data, :x, groupby = :y, show_total = false)
```

## Keyword: `total_name`

The object that will be used to identify total columns. Can be of any value that SummaryTables knows how to display.

```@example
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["a", "a", "a", "a", "b", "b"])

table_one(data, :x, groupby = :y, total_name = "Overall")
```

## Keyword: `group_totals`

A `Symbol` or `String`, or a `Vector{Symbol}` or `Vector{String}` specifying one or multiple groups for which to add subtotals. All but the topmost group can be chosen here as the topmost group is handled by `show_total` already.

```@example
using SummaryTables

data = (; x = 1:12, y = repeat(["a", "b"], 6), z = repeat(["c", "d"], inner = 6))

table_one(data, :x, groupby = [:y, :z], group_totals = :z)
```

This example shows multiple-level group totals. In order not to make the resulting table too wide, the topmost factor `q` just has one level which would otherwise be redundant.

```@example
using SummaryTables

data = (; x = 1:12, y = repeat(["a", "b"], 6), z = repeat(["c", "d"], inner = 6), q = repeat(["e"], 12))

table_one(data, :x, groupby = [:q, :y, :z], group_totals = [:y, :z])
```

## Keyword: `sort`

By default, group entries are sorted.
If you need to maintain the order of entries from your dataset, set `sort = false`.

Notice how in the following two examples, the group indices are `"dos"`, `"tres"`, `"uno"` when sorted, but `"uno"`, `"dos"`, `"tres"` when not sorted.
If we want to preserve the natural order of these groups ("uno", "dos", "tres" meaning "one", "two", "three" in Spanish but having a different alphabetical order) we need to set `sort = false`.

```@example sort
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["uno", "uno", "dos", "dos", "tres", "tres"])

table_one(data, :x, groupby = :y)
```

```@example sort
table_one(data, :x, groupby = :y, sort = false)
```

!!! warning
    If you have multiple groups, `sort = false` can lead to splitting of higher-level groups if they are not correctly ordered in the source data.

Compare the following two tables.
In the second one, the group "A" is split by "B" so the label appears twice.

```@example bad_sort
using SummaryTables

data = (; x = [1, 2, 3, 4, 5, 6], y = ["A", "A", "B", "B", "B", "A"], z = ["C", "C", "C", "D", "D", "D"])

table_one(data, :x, groupby = [:y, :z])
```

```@example bad_sort
table_one(data, :x, groupby = [:y, :z], sort = false)
```

## Keyword: `numeric_default`

In a table with many numerical columns, usually all columns are analyzed with the same set of functions. Instead of manually pairing each column with that analysis function in the `analyses` positional argument, one can also change the `numeric_default` parameter. This can also be set globally via `defaults!(table_one = (; numeric_default = ...)).

This parameter can be set to the same "vector of functions" argument as the positional argument `analyses`. In that case, each function is simply evaluated on each column.

```@example
using SummaryTables
using Statistics

data = (; x = 1:5, y = 1:2:10, z = 1:3:15)

table_one(data; numeric_default = [mean, std])
```

If there's missing data, the standard statistical functions all return missing and it can be better to use wrapped versions that skip missings.

```@example numeric_default
using SummaryTables
using Statistics

data = (; x = 1:5, y = [1:2:8; missing], z = Union{Float64,Missing}[missing for _ in 1:5])

function n_missings(col)
    n = count(ismissing, col)
    Concat(n, " (", n / length(col) * 100, "%)")
end

function guarded(f)
    function (col)
        if all(ismissing, col)
            Annotated("-", "- No data", label = nothing)
        else
            f(skipmissing(col))
        end
    end
end

table_one(data; numeric_default = [
    guarded(mean) => "Mean",
    guarded(std) => "SD",
    n_missings => "Missings"
])
```

In the example above, column `x` has no missings, therefore one could avoid showing that row. However, that means the set of analysis functions has to differ depending on whether a given column has missings or not. That level of customization is not possible with the simple vector syntax.

For such logic, you can pass a function `f` to `numeric_default`. Calling `f(col)` should return a function which is the actual analysis function you want to use for that specific column. This way, we can set up an analysis that only includes the missings row if there are any. This is what the default of `table_one` does as well. Note that the column passed to `f` at first is the _whole_ column, before grouping, while the column passed to the analysis function is after grouping. Each group's analyses must return the same set of rows, so whether to include a missings row or not has to be decided initially, given the full column.

```@example
using SummaryTables
using Statistics

data = (; x = 1:5, y = [1:2:8; missing], z = Union{Float64,Missing}[missing for _ in 1:5])

function custom_analysis(whole_col)
    has_missings = any(ismissing, whole_col)

    function actual_analysis(col) # here col is possibly a grouped part of whole_col
        (
            guarded(mean)(col) => "Mean",
            guarded(std)(col) => "SD",
            # only include Missings row if there are any missings
            if has_missings
                (count(ismissing, col) => "Missings",)
            else
                ()
            end...
        )
    end
end

# we could set this analysis globally if we want to use it across a notebook, for example
SummaryTables.defaults!(table_one = (; numeric_default = custom_analysis))

table_one(data)
result = table_one(data) # hide
SummaryTables.defaults!() # hide
result # hide
```

## Keyword: `categorical_default`

The `categorical_default` parameter works exactly like the `numeric_default` parameter, only that it is applied to categorical columns (all columns that are not numeric, with `Bool`s counting as categorical).
