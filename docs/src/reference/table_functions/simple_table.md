# `simple_table`

## Synopsis

`simple_table` creates a basic tabular display of raw data from a dataset. It allows users to select specific columns, optionally rename them, and control the alignment and appearance of subheaders.

### Example Usage

```@example simpletable
using SummaryTables

data = (
    id = 1:5,
    name = ["Alice", "Bob", "Charlie", "David", "Eve"],
    age = [34, 29, 42, 37, 25],
    score = [88, 92, 75, 80, 95]
)

simple_table(data)
```

```@example simpletable
simple_table(data, [:id => "Identifier", :name => "Full Name", :age => "Age (years)"])
```

## Argument 1: `table`

The first argument can be any object compatible with the `Tables.jl` API. Some common examples:

### `DataFrame`

```@example
using DataFrames
using SummaryTables

data = DataFrame(a = [1, 2, 3], b = ["x", "y", "z"])

simple_table(data)
```

### `NamedTuple` of `Vector`s

```@example
using SummaryTables

data = (; a = [1, 2, 3], b = ["x", "y", "z"])

simple_table(data)
```

### `Vector` of `NamedTuple`s

```@example
using SummaryTables

data = [(; a = 1, b = "x"), (; a = 2, b = "y"), (; a = 3, b = "z")]

simple_table(data)
```

## Keyword: `halign`

Controls the horizontal alignment of column contents. Accepts `:left`, `:right`, `:center`, or a vector of these values (one for each column).

```@example
using SummaryTables

data = (; value = 1:3, sin = sin.(1:3), cos = cos.(1:3))
simple_table(data, halign = :right, round_mode = :digits, trailing_zeros = true)
```

```@example
using SummaryTables

data = (; value = 1:3, sin = sin.(1:3), cos = cos.(1:3))
simple_table(data, halign = [:left, :right, :right], round_mode = :digits, trailing_zeros = true)
```

## Keyword: `subheaders`

Allows specifying subheaders for columns. These must be of the same length as the number of displayed columns.

```@example
using SummaryTables

data = (; value = 1:3, sin = sin.(1:3), cos = cos.(1:3))
simple_table(data, subheaders = ["Int64", "Float64", "Float64"], halign = :right)
```


