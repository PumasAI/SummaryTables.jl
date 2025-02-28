# `dfsummary`

## Synopsis

The `dfsummary` table is intended to quickly give an overview of the columns that a dataset consists of. It displays different statistical summaries depending on the types of the columns, including bar graphs that give a quick intuition of the distribution of values.

```@example
using SummaryTables
using RDatasets

df = dataset("ggplot2", "diamonds")

dfsummary(df)
```
