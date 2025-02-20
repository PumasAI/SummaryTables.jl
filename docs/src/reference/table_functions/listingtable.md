# `listingtable`

## Synopsis

A listing table displays the raw data from one column of a source table, with optional summary sections interleaved between.
The row and column structure of the listing table is defined by grouping columns from the source table.
Each row of data has to have its own cell in the listing table, therefore the grouping applied along rows and columns must be exhaustive, i.e., no two rows may end up in the same group together.

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

listingtable(
    data,
    :concentration => "Concentration (ng/mL)",
    rows = :id => "ID",
    cols = :time => "Time (hr)",
    summarize_rows = [
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

data = DataFrame(value = 1:6, group1 = repeat(["A", "B", "C"], 2), group2 = repeat(["D", "E"], inner = 3))

listingtable(data, :value, rows = :group1, cols = :group2)
```

### `NamedTuple` of `Vector`s

```@example
using SummaryTables

data = (; value = 1:6, group1 = repeat(["A", "B", "C"], 2), group2 = repeat(["D", "E"], inner = 3))

listingtable(data, :value, rows = :group1, cols = :group2)
```

### `Vector` of `NamedTuple`s

```@example
using SummaryTables

data = [
    (value = 1, group1 = "A", group2 = "D")
    (value = 2, group1 = "B", group2 = "D")
    (value = 3, group1 = "C", group2 = "D")
    (value = 4, group1 = "A", group2 = "E")
    (value = 5, group1 = "B", group2 = "E")
    (value = 6, group1 = "C", group2 = "E")
]

listingtable(data, :value, rows = :group1, cols = :group2)
```

## Argument 2: `variable`

The second argument primarily selects the table column whose data should populate the cells of the listing table.
The column name is specified with a `Symbol` or `String`:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group1 = repeat(["A", "B", "C"], 2),
    group2 = repeat(["D", "E"], inner = 3)
)

listingtable(data, :value1, rows = :group1, cols = :group2)
```

Here we choose to list column `:value2` instead:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group1 = repeat(["A", "B", "C"], 2),
    group2 = repeat(["D", "E"], inner = 3)
)

listingtable(data, :value2, rows = :group1, cols = :group2)
```

By default, the variable name is used as the label as well.
You can pass a different label as the second element of a `Pair` using the `=>` operators.
The label can be of any type (refer to [Special `Cell` value types](@ref) for a list).

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value1 = 1:6,
    value2 = 7:12,
    group1 = repeat(["A", "B", "C"], 2),
    group2 = repeat(["D", "E"], inner = 3)
)

listingtable(data, :value1 => "Value", rows = :group1, cols = :group2)
```

## Optional argument 3: `pagination`

A listing table can grow large, in which case it may make sense to split it into multiple pages.
You can pass a `Pagination` object with `rows` and / or `cols` keyword arguments.
The `Int` you pass to `rows` and / or `cols` determines how many "sections" of the table along that dimension are included in a single page.
If there are no summary statistics, a "section" is a single row or column.
If there are summary statistics, a "section" includes all the rows or columns that are summarized together (as it would not make sense to split summarized groups across multiple pages).

If the `pagination` argument is provided, the return type of `listingtable` changes to `PaginatedTable{ListingPageMetadata}`.
This object has an interactive HTML representation for convenience the exact form of which should not be considered stable across SummaryTables versions.
The `PaginatedTable` should be deconstructed into separate `Table`s when you want to include these in a document.

Here is an example listing table without pagination:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:30,
    group1 = repeat(["A", "B", "C", "D", "E"], 6),
    group2 = repeat(["F", "G", "H", "I", "J", "K"], inner = 5)
)

listingtable(data, :value, rows = :group1, cols = :group2)
```

And here is the same table paginated into groups of 3 sections along the both the rows and columns.
Note that there are only five rows in the original table, which is not divisible by 3, so two pages have only two rows.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:30,
    group1 = repeat(["A", "B", "C", "D", "E"], 6),
    group2 = repeat(["F", "G", "H", "I", "J", "K"], inner = 5)
)

listingtable(data, :value, Pagination(rows = 3, cols = 3), rows = :group1, cols = :group2)
```

We can also paginate only along the rows:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:30,
    group1 = repeat(["A", "B", "C", "D", "E"], 6),
    group2 = repeat(["F", "G", "H", "I", "J", "K"], inner = 5)
)

listingtable(data, :value, Pagination(rows = 3), rows = :group1, cols = :group2)
```

Or only along the columns:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:30,
    group1 = repeat(["A", "B", "C", "D", "E"], 6),
    group2 = repeat(["F", "G", "H", "I", "J", "K"], inner = 5)
)

listingtable(data, :value, Pagination(cols = 3), rows = :group1, cols = :group2)
```

## Keyword: `rows`

The `rows` keyword determines the grouping structure along the rows.
It can either be a `Symbol` or `String` specifying a grouping column, a `Pair{Symbol,Any}` or `Pair{String,Any}` where the second element overrides the group's label, or a `Vector` with multiple groups of the aforementioned format.

This example uses a single group with default label.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, rows = :group)
```

The label can be overridden using the `Pair` operator.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, rows = :group => "Group")
```

Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group1 = ["F", "F", "G", "G", "G"],
    group2 = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, rows = [:group1, :group2 => "Group 2"])
```

## Keyword: `cols`

The `cols` keyword determines the grouping structure along the columns.
It can either be a `Symbol` or `String` specifying a grouping column, a `Pair{Symbol,Any}` or `Pair{String,Any}` where the second element overrides the group's label, or a `Vector` with multiple groups of the aforementioned format.

This example uses a single group with default label.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, cols = :group)
```

The label can be overridden using the `Pair` operator.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, cols = :group => "Group")
```

Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:5,
    group1 = ["F", "F", "G", "G", "G"],
    group2 = ["A", "B", "C", "D", "E"],
)

listingtable(data, :value, cols = [:group1, :group2 => "Group 2"])
```


## Keyword: `summarize_rows`

This keyword takes a list of aggregation functions which are used to summarize the listed variable along the rows.
A summary function should take a vector of values (usually that will be numbers) and output one summary value.
This value can be of any type that SummaryTables can show in a cell (refer to [Special `Cell` value types](@ref) for a list).

```@example
using DataFrames
using SummaryTables
using Statistics: mean, std

data = DataFrame(
    value = 1:24,
    group1 = repeat(["A", "B", "C", "D", "E", "F"], 4),
    group2 = repeat(["G", "H", "I", "J"], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

listingtable(data,
    :value,
    rows = :group1,
    cols = :group2,
    summarize_rows = [
        mean,
        std => "SD",
        mean_sd => "Mean (SD)",
    ]
)
```

By default, one summary will be calculated over all rows of a given column.
You can also choose to compute one summary for each group of a row grouping column, which makes sense if there is more than one row grouping column.

In this example, one summary is computed for each level of the `group1` column.

```@example
using DataFrames
using SummaryTables
using Statistics: mean, std

data = DataFrame(
    value = 1:24,
    group1 = repeat(["X", "Y"], 12),
    group2 = repeat(["A", "B", "C"], 8),
    group3 = repeat(["G", "H", "I", "J"], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

listingtable(data,
    :value,
    rows = [:group1, :group2],
    cols = :group3,
    summarize_rows = :group1 => [
        mean,
        std => "SD",
        mean_sd => "Mean (SD)",
    ]
)
```

## Keyword: `summarize_cols`

This keyword takes a list of aggregation functions which are used to summarize the listed variable along the columns.
A summary function should take a vector of values (usually that will be numbers) and output one summary value.
This value can be of any type that SummaryTables can show in a cell (refer to [Special `Cell` value types](@ref) for a list).

```@example
using DataFrames
using SummaryTables
using Statistics: mean, std

data = DataFrame(
    value = 1:24,
    group1 = repeat(["A", "B", "C", "D", "E", "F"], 4),
    group2 = repeat(["G", "H", "I", "J"], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

listingtable(data,
    :value,
    rows = :group1,
    cols = :group2,
    summarize_cols = [
        mean,
        std => "SD",
        mean_sd => "Mean (SD)",
    ]
)
```

By default, one summary will be calculated over all columns of a given row.
You can also choose to compute one summary for each group of a column grouping column, which makes sense if there is more than one column grouping column.

In this example, one summary is computed for each level of the `group1` column.

```@example
using DataFrames
using SummaryTables
using Statistics: mean, std

data = DataFrame(
    value = 1:24,
    group1 = repeat(["X", "Y"], 12),
    group2 = repeat(["A", "B", "C"], 8),
    group3 = repeat(["G", "H", "I", "J"], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

listingtable(data,
    :value,
    cols = [:group1, :group2],
    rows = :group3,
    summarize_cols = :group1 => [
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

data = DataFrame(
    value = 1:6,
    group1 = repeat(["A", "B", "C"], 2),
    group2 = repeat(["D", "E"], inner = 3)
)

listingtable(data, :value, rows = :group1, cols = :group2, variable_header = true)
```

And here is a table without it:

```@example
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:6,
    group1 = repeat(["A", "B", "C"], 2),
    group2 = repeat(["D", "E"], inner = 3)
)

listingtable(data, :value, rows = :group1, cols = :group2, variable_header = false)
```


## Keyword: `sort`

By default, group entries are sorted.
If you need to maintain the order of entries from your dataset, set `sort = false`.

Notice how in the following two examples, the group indices are `"dos"`, `"tres"`, `"uno"` when sorted, but `"uno"`, `"dos"`, `"tres"` when not sorted.
If we want to preserve the natural order of these groups ("uno", "dos", "tres" meaning "one", "two", "three" in Spanish but having a different alphabetical order) we need to set `sort = false`.

```@example sort
using DataFrames
using SummaryTables

data = DataFrame(
    value = 1:6,
    group1 = repeat(["uno", "dos", "tres"], inner = 2),
    group2 = repeat(["cuatro", "cinco"], 3),
)

listingtable(data, :value, rows = :group1, cols = :group2)
```

```@example sort
listingtable(data, :value, rows = :group1, cols = :group2, sort = false)
```

!!! warning
    If you have multiple groups, `sort = false` can lead to splitting of higher-level groups if they are not correctly ordered in the source data.

Compare the following two tables.
In the second one, the group "A" is split by "B" so the label appears twice.

```@example bad_sort
using SummaryTables
using DataFrames

data = DataFrame(
    value = 1:4,
    group1 = ["A", "B", "B", "A"],
    group2 = ["C", "D", "C", "D"],
)

listingtable(data, :value, rows = [:group1, :group2])
```

```@example bad_sort
data = DataFrame(
    value = 1:4,
    group1 = ["A", "B", "B", "A"],
    group2 = ["C", "D", "C", "D"],
)

listingtable(data, :value, rows = [:group1, :group2], sort = false)
```
