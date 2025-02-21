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

== simple_table

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

== summarytable

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

== Custom table

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

:::
