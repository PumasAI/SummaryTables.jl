# Changelog

## Unreleased

- Fixed `overview_table` in the presence of all-missing columns [#91](https://github.com/PumasAI/SummaryTables.jl/pull/91).

## 3.3.0 - 2025-03-12

- Added the `overview_table` function which creates a quick summary of all columns from a tabular data source, styled after the `dfSummary` function from R's `summarytools` package [#85](https://github.com/PumasAI/SummaryTables.jl/pull/85).

## 3.2.0 - 2025-02-24

- Added `Styled` struct for partial styling of text within a cell, including bold, italic, underline and text color. Note that you need to add `\usepackage{xcolor}` to use colored text in LaTeX. [#84](https://github.com/PumasAI/SummaryTables.jl/pull/84).

## 3.1.0 - 2025-02-20

- Added `header` function to typst output such that the header section can repeat after page breaks [#79](https://github.com/PumasAI/SummaryTables.jl/pull/79).
- Added `simple_table` function for the display of raw tabular data [#76](https://github.com/PumasAI/SummaryTables.jl/pull/76).
- Changed html output to use a unique id instead of a class for the table so that SummaryTables' CSS takes priority over class-based settings from Documenter and others. This fixes the look of SummaryTables within Documenter dark mode, for example [#77](https://github.com/PumasAI/SummaryTables.jl/pull/77).

## 3.0.3 - 2025-01-31

- Added `show` method for `MIME"QuartoNotebookRunner/typst"` to support typst directly in the native quarto julia engine [#69](https://github.com/PumasAI/SummaryTables.jl/pull/69).
- Allowed `String`s as column identifiers in addition to `Symbol`s [#63](https://github.com/PumasAI/SummaryTables.jl/pull/63).
- Made HTML tables dark mode compatible by reusing foreground color for the lines [#62](https://github.com/PumasAI/SummaryTables.jl/pull/62).

## 3.0.2 - 2024-11-27

- Added extra escape characters to Typst [#54](https://github.com/PumasAI/SummaryTables.jl/pull/54).

## 3.0.1 - 2024-10-24

- Added single-argument method to `table_one` which summarizes all columns in the passed table except those used for grouping [#48](https://github.com/PumasAI/SummaryTables.jl/pull/48).
- Fixed issue with using `missing` as a group in `table_one`. This PR also removes redundant group totals if there's just one subgroup to do a total over [#47](https://github.com/PumasAI/SummaryTables.jl/pull/47).

## 3.0.0 - 2024-09-23

- **Breaking** Footnotes are by default separated with linebreaks now. This can be changed by setting the new `Table` option `linebreak_footnotes = false` [#34](https://github.com/PumasAI/SummaryTables.jl/pull/34).
- **Breaking** Changed `show_overall` keyword of `table_one` to `show_total`. The name of all total columns was changed from `"Overall"` to `"Total"` as well but this can be changed using the new `total_name` keyword.
- Added ability to show "Total" statistics for subgroups in `table_one` [#30](https://github.com/PumasAI/SummaryTables.jl/pull/30).
- Fixed tagging of header rows in docx output, such that the header section is now repeated across pages as expected [#32](https://github.com/PumasAI/SummaryTables.jl/pull/32).

## 2.0.2 - 2024-09-16

- Fixed issue where cells would not merge if they stored a `Multiline` value [#29](https://github.com/PumasAI/SummaryTables.jl/pull/29).

## 2.0.1 - 2024-09-16

- Fixed incorrect order of column group keys in `summarytable` and `listingtable` when some row/col group combinations were missing [#25](https://github.com/PumasAI/SummaryTables.jl/pull/25).

## 2.0.0 - 2024-05-03

- **Breaking** Changed generated Typst code to use the native table functionality available starting with Typst v0.11. Visual output should not change.
