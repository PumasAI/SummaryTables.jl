# `summarytable`

## Synopsis

A summary table summarizes the raw data from one column of a source table for different groups defined by grouping columns.
It is similar to a [`listingtable`](@ref) without the raw values.

Here is an example of a hypothetical clinical trial with drug concentration measurements of two participants with five time points each.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    concentration = [1.2, 4.5, 2.0, 1.5, 0.1, 1.8, 3.2, 1.8, 1.2, 0.2],
    id = repeat([1, 2], inner = 5),
    time = repeat([0, 0.5, 1, 2, 3], 2)
)

summarytable(
    data,
    :concentration => "Concentration (ng/mL)",
    cols = :time => "Time (hr)",
    summary = [
        length => "N",
        mean => "Mean",
        std => "SD",
    ]
)
```

## Argument 1: `table`

The first argument can be any object that is a table compatible with the `Tables.jl` API.
Here are some common examples:

### `DataFrame`

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:6,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value, cols = :group, summary = [mean, std])
```

### `NamedTuple` of `Vector`s

```@example
using SummaryTables
using Statistics

data = (; value = 1:6, group = repeat(["A", "B", "C"], 2))

summarytable(data, :value, cols = :group, summary = [mean, std])
```

### `Vector` of `NamedTuple`s

```@example
using SummaryTables
using Statistics

data = [
    (value = 1, group = "A")
    (value = 2, group = "B")
    (value = 3, group = "C")
    (value = 4, group = "A")
    (value = 5, group = "B")
    (value = 6, group = "C")
]

summarytable(data, :value, cols = :group, summary = [mean, std])
```

## Argument 2: `variable`

The second argument primarily selects the table column whose data should populate the cells of the summary table.
The column name is specified with a `Symbol` or `String`:

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value1, cols = :group, summary = [mean, std])
```

Here we choose to list column `:value2` instead:

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value2, cols = :group, summary = [mean, std])
```

By default, the variable name is used as the label as well.
You can pass a different label as the second element of a `Pair` using the `=>` operators.
The label can be of any type (refer to [Types of cell values](@ref) for a list).

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value1 => "Value", cols = :group, summary = [mean, std])
```

## Keyword: `rows`

The `rows` keyword determines the grouping structure along the rows.
It can either be a `Symbol` or `String` specifying a grouping column, a `Pair{Symbol,Any}` or `Pair{String,Any}` where the second element overrides the group's label, or a `Vector` with multiple groups of the aforementioned format.

This example uses a single group with default label.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:6,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value, rows = :group, summary = [mean, std])
```

The label can be overridden using the `Pair` operator.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:6,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value, rows = :group => "Group", summary = [mean, std])
```

Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:12,
    group1 = repeat(["A", "B"], inner = 6),
    group2 = repeat(["C", "D", "E"], 4),
)

summarytable(data, :value, rows = [:group1, :group2 => "Group 2"], summary = [mean, std])
```

## Keyword: `cols`

The `cols` keyword determines the grouping structure along the columns.
It can either be a `Symbol` or `String` specifying a grouping column, a `Pair{Symbol,Any}` or `Pair{String,Any}` where the second element overrides the group's label, or a `Vector` with multiple groups of the aforementioned format.

This example uses a single group with default label.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:6,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value, cols = :group, summary = [mean, std])
```

The label can be overridden using the `Pair` operator.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:6,
    group = repeat(["A", "B", "C"], 2),
)

summarytable(data, :value, cols = :group => "Group", summary = [mean, std])
```

Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:12,
    group1 = repeat(["A", "B"], inner = 6),
    group2 = repeat(["C", "D", "E"], 4),
)

summarytable(data, :value, cols = [:group1, :group2 => "Group 2"], summary = [mean, std])
```


## Keyword: `summary`

This keyword takes a list of aggregation functions which are used to summarize the chosen variable.
A summary function should take a vector of values (usually that will be numbers) and output one summary value.
This value can be of any type that SummaryTables can show in a cell (refer to [Types of cell values](@ref) for a list).

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:24,
    group1 = repeat(["A", "B", "C", "D"], 6),
    group2 = repeat(["E", "F", "G"], inner = 8),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

summarytable(
    data,
    :value,
    rows = :group1,
    cols = :group2,
    summary = [
        mean,
        std => "SD",
        mean_sd => "Mean (SD)",
    ]
)
```

## Keyword: `variable_header`

If you set `variable_header = false`, you can hide the header cell with the variable label, which makes the table layout a little more compact.

Here is a table with the header cell:

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:24,
    group1 = repeat(["A", "B", "C", "D"], 6),
    group2 = repeat(["E", "F", "G"], inner = 8),
)

summarytable(
    data,
    :value,
    rows = :group1,
    cols = :group2,
    summary = [mean, std],
)
```

And here is a table without it:

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:24,
    group1 = repeat(["A", "B", "C", "D"], 6),
    group2 = repeat(["E", "F", "G"], inner = 8),
)

summarytable(
    data,
    :value,
    rows = :group1,
    cols = :group2,
    summary = [mean, std],
    variable_header = false,
)
```


## Keyword: `sort`

By default, group entries are sorted.
If you need to maintain the order of entries from your dataset, set `sort = false`.

Notice how in the following two examples, the group indices are `"dos"`, `"tres"`, `"uno"` when sorted, but `"uno"`, `"dos"`, `"tres"` when not sorted.
If we want to preserve the natural order of these groups ("uno", "dos", "tres" meaning "one", "two", "three" in Spanish but having a different alphabetical order) we need to set `sort = false`.

```@example sort
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    value = 1:18,
    group1 = repeat(["uno", "dos", "tres"], inner = 6),
    group2 = repeat(["cuatro", "cinco"], 9),
)

summarytable(data, :value, rows = :group1, cols = :group2, summary = [mean, std])
```

```@example sort
summarytable(data, :value, rows = :group1, cols = :group2, summary = [mean, std], sort = false)
```

!!! warning
    If you have multiple groups, `sort = false` can lead to splitting of higher-level groups if they are not correctly ordered in the source data.

Compare the following two tables.
In the second one, the group "A" is split by "B" so the label appears twice.

```@example bad_sort
using SummaryTables
using DataFrames
using Statistics

data = DataFrame(
    value = 1:4,
    group1 = ["A", "B", "B", "A"],
    group2 = ["C", "D", "C", "D"],
)

summarytable(data, :value, rows = [:group1, :group2], summary = [mean])
```

```@example bad_sort
data = DataFrame(
    value = 1:4,
    group1 = ["A", "B", "B", "A"],
    group2 = ["C", "D", "C", "D"],
)

summarytable(data, :value, rows = [:group1, :group2], summary = [mean], sort = false)
```
