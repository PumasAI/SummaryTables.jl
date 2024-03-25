# SummaryTables

SummaryTables is focused on creating tables for publications in LaTeX, docx and HTML formats.
It offers both convenient predefined table functions that are inspired by common table formats in the pharma space, as well as an API to create completely custom tables.

It deliberately uses an opinionated, limited styling API so that styling can be as consistent as possible across the different backends.

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