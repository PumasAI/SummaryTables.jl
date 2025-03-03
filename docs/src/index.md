````@raw html
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: SummaryTables
  text:
  tagline: Publication-ready tables for Julia - in HTML, docx, LaTeX and Typst
  image:
    src: logo.png
    alt: SummaryTables
  actions:
    - theme: alt
      text: View on Github
      link: https://github.com/PumasAI/SummaryTables.jl
---
````

# SummaryTables

SummaryTables is focused on creating tables for publications in HTML, docx, LaTeX and Typst formats.
It offers both convenient predefined table functions that are inspired by common table formats in the pharma space, as well as an API to create completely custom tables.

It deliberately uses an opinionated, limited styling API so that styling can be as consistent as possible across the different backends.

## Installation

SummaryTables is registered in the General Registry and can be installed as usual:

```julia
using Pkg
Pkg.install("SummaryTables")
```

## Examples

:::tabs

== Custom table

Completely customizable [Table](@ref)s can be built from scratch as a matrix of [Cell](@ref)s with a little styling metadata.

```@example
using SummaryTables

categories = ["Deciduous", "Deciduous", "Evergreen", "Evergreen", "Evergreen"]
species = ["Beech", "Oak", "Fir", "Spruce", "Pine"]
fake_data = [
    "35m" "40m" "38m" "27m" "29m"
    "10k" "12k" "18k" "9k" "7k"
    "500yr" "800yr" "600yr" "700yr" "400yr"
    "80\$" "150\$" "40\$" "70\$" "50\$"
]
labels = ["", "", "Size", Annotated("Water consumption", "Liters per year"), "Age", "Value"]

body = [
    Cell.(categories, bold = true, merge = true, border_bottom = true)';
    Cell.(species)';
    Cell.(fake_data)
]

Table(hcat(
    Cell.(labels, italic = true, halign = :right),
    body
), header = 2)
```

== simple_table

The [simple_table](@ref) is a quick way to render standard tabular data sources.

```@example
using SummaryTables
using DataFrames

data = DataFrame(
    sex = ["m", "m", "m", "m", "f", "f", "f", "f", "f", "f"],
    age = [27, 45, 34, 85, 55, 44, 24, 29, 37, 76],
    blood_type = ["A", "0", "B", "B", "B", "A", "0", "A", "A", "B"],
    smoker = [true, false, false, false, true, true, true, false, false, false],
)

simple_table(
    data,
    [:age => "Age (years)", :sex => "Sex", :smoker => "Smoker", :blood_type => "Blood Type"],
    halign = [:left, :right, :right, :right],
)
```

== table_one

The [table_one](@ref) function is often used to describe properties of groups in a population.

```@example
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

== listingtable

The [listingtable](@ref) lists all raw values from a table column in a matrix-like arrangement, with possibly nested groups and groupwise summaries.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    concentration = sin.(1:24) .+ 2,
    compound = repeat(["Ibuprofen", "Paracetamol"], 12),
    dosage = repeat(["High", "Medium", "Low"], 8),
    time = repeat([0, 0.25, 0.5, 1], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

listingtable(
    data,
    :concentration => "Concentration (ng/mL)",
    rows = [:compound => "Compound", :dosage => "Dosage"],
    cols = :time => "Time (hr)",
    summarize_rows = :compound => [
        length => "N",
        median => "Median",
        mean_sd => "Mean (SD)",
    ]
)
```

== summarytable

The [summarytable](@ref) is the little brother of `listingtable` and omits the raw values but has similar grouping functionality.

```@example
using DataFrames
using SummaryTables
using Statistics

data = DataFrame(
    concentration = sin.(1:24) .+ 2,
    compound = repeat(["Ibuprofen", "Paracetamol"], 12),
    dosage = repeat(["High", "Medium", "Low"], 8),
    time = repeat([0, 0.25, 0.5, 1], inner = 6),
)

mean_sd(values) = Concat(mean(values), " (", std(values), ")")

summarytable(
    data,
    :concentration => "Concentration (ng/mL)",
    rows = [:compound => "Compound"],
    cols = :time => "Time (hr)",
    summary = [
        length => "N",
        median => "Median",
        mean_sd => "Mean (SD)",
    ]
)
```

== overview_table

The [overview_table](@ref) is intended for a quick glance over the different columns making up a dataset.

```@example
using SummaryTables
using RDatasets

df = dataset("ggplot2", "diamonds")[!, 1:7]

overview_table(df)
```

:::
