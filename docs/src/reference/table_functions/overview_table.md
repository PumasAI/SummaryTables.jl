# `overview_table`

## Synopsis

The `overview_table` table is intended to quickly give an overview of the columns that a dataset consists of. It displays different statistical summaries depending on the types of the columns, including bar graphs that give a quick intuition of the distribution of values. It is styled after R's `dfSummary` function from the [`summarytools`](https://cran.r-project.org/web/packages/summarytools/) package. 

```@example
using SummaryTables
using RDatasets

df = dataset("ggplot2", "diamonds")

overview_table(df)
```
