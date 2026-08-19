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

SummaryTables.defaults!(number_format = NumberFormat(mode = :digits, digits = 4))

numbers = [1.23456 2.3456; 34.56789 4.5000]
Table(Cell.(numbers))
```

Note that explicit settings override the defaults:

```@example defaults
Table(Cell.(numbers), number_format = NumberFormat(trailing_zeros = false))
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
SummaryTables.with_defaults(number_format = NumberFormat(mode = :sigdigits, digits = 4, trailing_zeros = false)) do
    numbers = [1.23456 2.3456; 34.56789 4.5000]
    Table(Cell.(numbers))
end
```


## Nested Defaults

Some settings only apply to one renderer or one table function, and are grouped in nested settings objects.
Pass them as named tuples, for example `docx = (; base_font_size = 12)` or `table_one = (; numeric_default = ...)`:

```@example defaults
using Statistics

SummaryTables.with_defaults(table_one = (; numeric_default = [mean, std])) do
    table_one((; a = [1.0, 2.0, 3.0, 4.0]))
end
```

### `docx`

Font sizes in SummaryTables are relative, so a table follows whatever body font size the surrounding document or style sheet sets.
That works in HTML, LaTeX and typst, which all have relative font metrics, but not in Word, which has none.
The docx renderer therefore resolves every relative size to an absolute one at render time, and it needs to know the body font size to resolve them against.

- `base_font_size = 10.0`: Font size in points of the body text of the Word document the table is embedded in. Set this to match your document, then relative settings like [`footnote_size`](@ref "Keyword: `footnote_size`"), [`indent`](@ref "Keyword: `indent`") and `Styled`'s `size` come out at the intended size in the docx output as well. This setting has no effect on the other renderers, which emit relative units and let the surrounding document resolve them.

Unlike the settings that a `Table` resolves when it is constructed, `base_font_size` is read while the table is rendered, so it has to be in scope around the rendering call and not only around the table construction:

```julia
node = SummaryTables.with_defaults(docx = (; base_font_size = 12)) do
    SummaryTables.to_docx(table)
end
```
