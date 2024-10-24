# Changelog

## Unreleased

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
