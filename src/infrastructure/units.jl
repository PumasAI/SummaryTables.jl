"""
    Em(value::Float64)

A length as a multiple of the current font size, analogous to the `em` unit
in CSS and Typst. Construct via multiplication with the `em` constant, for
example `0.8em`.
"""
struct Em
    value::Float64
end

"""
    Pt(value::Float64)

An absolute length in points. Construct via multiplication with the `pt`
constant, for example `12pt`.
"""
struct Pt
    value::Float64
end

const Length = Union{Em,Pt}

const em = Em(1.0)
const pt = Pt(1.0)

Base.:*(x::Real, u::Em) = Em(x * u.value)
Base.:*(x::Real, u::Pt) = Pt(x * u.value)
Base.:/(l::Em, x::Real) = Em(l.value / x)
Base.:/(l::Pt, x::Real) = Pt(l.value / x)

length_string(l::Em) = string(shortest_float_repr(l.value), "em")
length_string(l::Pt) = string(shortest_float_repr(l.value), "pt")

shortest_float_repr(x::Float64) = isinteger(x) ? string(Int(x)) : string(x)

resolve_pt(l::Em, base_fontsize::Real) = l.value * base_fontsize
resolve_pt(l::Pt, base_fontsize::Real) = l.value

abstract type AbstractDefaults end

struct Default end
const default = Default()

fallback(value::Default, default) = default
fallback(value, default) = value

"" # otherwise field docstrings are not parsed
Base.@kwdef struct TableStyle
    "Width of the rules above and below the table."
    outer_rule_width::Length = 0.1em
    "Width of the rules below the header and above the footer."
    inner_rule_width::Length = 0.075em
    "Width of the rules drawn for cells with `border_bottom = true`."
    cell_rule_width::Length = 0.075em
    "Horizontal space between adjacent columns."
    column_padding::Length = 0.85em
    "Vertical space between adjacent rows."
    row_padding::Length = 0.2em
    "Font size of footnotes and annotations."
    footnote_size::Length = 0.8em
    "Horizontal alignment of the footnotes, either `:left`, `:center` or `:right`."
    footnote_halign::Symbol = :left
end

"""
    DocxDefaults(; base_fontsize = default)

Backend-specific defaults for the `docx` output. Because Word cannot express
font-relative lengths, a table's `Em` lengths are converted to absolute points
at export time relative to `base_fontsize`, a `Pt` length such as `12pt` that
should match the font size of the surrounding document.

Options left unset fall back to the `docx` default and finally to the
package default of `10pt`.
"""
struct DocxDefaults <: AbstractDefaults
    base_fontsize::Union{Default,Pt}
end
DocxDefaults(; base_fontsize = default) = DocxDefaults(base_fontsize)
DocxDefaults(base_fontsize::Real) = error("`DocxDefaults` `base_fontsize` must be a `Pt` length such as `$(base_fontsize)pt`, not a bare number.")
