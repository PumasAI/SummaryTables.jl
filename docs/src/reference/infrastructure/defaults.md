# Global Defaults

SummaryTables provides a global defaults system that allows you to set default values for commonly used formatting parameters across all table functions. This feature is particularly useful when you want to maintain consistent formatting throughout a document or application without having to specify the same parameters repeatedly.

The system provides two public functions: [`SummaryTables.defaults!`](@ref) for setting global defaults and [`SummaryTables.with_defaults`](@ref) for temporary scoped changes.

```@docs; canonical=false
SummaryTables.defaults!
```

## Persistent Defaults

Use `SummaryTables.defaults!` to change the global default settings that will apply to all subsequently created tables:

```@example defaults
using SummaryTables

SummaryTables.defaults!(round_mode = :digits, round_digits = 4, trailing_zeros = true)

numbers = [1.23456 2.3456; 34.56789 4.5000]
Table(Cell.(numbers))
```

Note that explicit settings override the defaults:

```@example defaults
Table(Cell.(numbers), trailing_zeros = false)
```

The `defaults!` function does not selectively update but it applies the keywords on top of SummaryTables's own defaults. To reset to the package defaults, you therefore specify no keywords.

```@example defaults
SummaryTables.defaults!()

Table(Cell.(numbers))
```

## Temporary Scoped Defaults

Use `SummaryTables.with_defaults` to temporarily change default settings for a specific block of code without affecting the global settings. This is implemented via ScopedValues.jl, so you can use `with_defaults` in multiple separate tasks without interference between them. Within a `with_defaults` block you can again modify settings using `defaults!` and these changes will persist until the scope ends.

```@example defaults
# Use different defaults temporarily
SummaryTables.with_defaults(round_mode = :sigdigits, round_digits = 4, trailing_zeros = false) do
    numbers = [1.23456 2.3456; 3.456789 4.5678]
    Table(Cells.(numbers))
end
```

