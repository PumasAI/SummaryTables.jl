# Changelog

## [Unreleased]

- Added ability to show "Overall" statistics for subgroups in `table_one` [#30](https://github.com/PumasAI/SummaryTables.jl/pull/30).

## [2.0.2] - 2024-09-16

- Fixed issue where cells would not merge if they stored a `Multiline` value [#29](https://github.com/PumasAI/SummaryTables.jl/pull/29).

## [2.0.1] - 2024-09-16

- Fixed incorrect order of column group keys in `summarytable` and `listingtable` when some row/col group combinations were missing [#25](https://github.com/PumasAI/SummaryTables.jl/pull/25).

## [2.0.0] - 2024-05-03

- **Breaking** Changed generated Typst code to use the native table functionality available starting with Typst v0.11. Visual output should not change.

[Unreleased]: https://github.com/PumasAI/SummaryTables.jl/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/PumasAI/SummaryTables.jl/compare/v1.0.0...v2.0.0