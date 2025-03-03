# `overview_table`

## Synopsis

The `overview_table` table is intended to quickly give an overview of the columns that a dataset consists of. It displays different statistical summaries depending on the types of the columns, including bar graphs that give a quick intuition of the distribution of values. It is styled after R's `dfSummary` function from the [`summarytools`](https://cran.r-project.org/web/packages/summarytools/) package. 

```@example
using SummaryTables
using RDatasets

df = dataset("ggplot2", "diamonds")

overview_table(df)
```

## Keyword: `max_categories`

Only `n <= max_categories` categories per column will be listed individually, the rest will be lumped together. By default, only the 10 most frequent categories will be displayed.

```@example max_categories
using SummaryTables

data = (;
    letters = reduce(vcat, [fill(str, i) for (str, i) in zip(string.('A':'Z'), (1:26) .^ 2)])
)

t = overview_table(data)
```

We can reduce the number of categories by setting `max_categories = 5`:

```@example max_categories
t = overview_table(data; max_categories = 5)
```

## Keyword: `label_metadata_key`

If column label metadata is found, a label column is added to the output. This keyword determines which key to use for the lookup, the default is `"label"`.

```@example label_metadata_key
using SummaryTables
using DataFrames

data = DataFrame(
    letters = reduce(vcat, [fill(str, i) for (str, i) in zip(string.('A':'Z'), (1:26) .^ 2)])
)
DataFrames.colmetadata!(data, :letters, "label", "Letters of the alphabet")
DataFrames.colmetadata!(data, :letters, "spanish_label", "Letras del alfabeto")

t = overview_table(data)
```

We can pick the alternative label by specifying `label_metadata_key = "spanish_label"`:

```@example label_metadata_key
t = overview_table(data; label_metadata_key = "spanish_label")
```
