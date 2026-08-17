function _showas(io::IO, mime::MIME, value)
    fn(io::IO, ::MIME"text/html", value::AbstractString) = _str_html_escaped(io, value)
    fn(io::IO, ::MIME"text/html", value) = _str_html_escaped(io, repr(value))
    fn(io::IO, ::MIME"text/latex", value::AbstractString) = _str_latex_escaped(io, value)
    fn(io::IO, ::MIME"text/latex", value) = _str_latex_escaped(io, repr(value))
    fn(io::IO, ::MIME"text/typst", value::AbstractString) = _str_typst_escaped(io, value)
    fn(io::IO, ::MIME"text/typst", value) = _str_typst_escaped(io, repr(value))
    fn(io::IO, ::MIME, value) = print(io, value)
    return showable(mime, value) ? show(io, mime, value) : fn(io, mime, value)
end
_showas(io::IO, m::MIME, r::FormattedFloat) = _showas(io, m, formatted_value(r))

function formatted_value(r::FormattedFloat)
    fmt = merge_formats(r.format, DEFAULT_NUMBER_FORMAT)
    f = r.f
    if !isfinite(f)
        return string(fmt.prefix, f, fmt.suffix)
    end
    x = f * fmt.scale
    comparator = ""
    if x < fmt.lower_limit
        x = fmt.lower_limit
        comparator = "<"
    elseif x > fmt.upper_limit
        x = fmt.upper_limit
        comparator = ">"
    end
    magnitude = ""
    magnitudes = magnitude_strings(fmt.magnitudes)
    if magnitudes !== nothing
        x, magnitude = scale_to_magnitude(x, magnitudes, fmt)
    end
    mantissa, exponent = format_mantissa_exponent(x, fmt)
    if exponent === nothing
        return string(fmt.prefix, comparator, mantissa, magnitude, fmt.suffix)
    elseif fmt.exponent_style === :x10
        return Concat(
            string(fmt.prefix, comparator, mantissa, " × 10"),
            Superscript(string(exponent)),
            string(magnitude, fmt.suffix),
        )
    end
    return string(fmt.prefix, comparator, mantissa, "e", exponent, magnitude, fmt.suffix)
end

function format_mantissa_exponent(x::Float64, fmt::NumberFormat)
    digits = fmt.digits
    trailing_zeros = resolve_trailing_zeros(fmt.trailing_zeros, fmt.mode)
    fmt.mode === :digits && return (fixed_string(x, digits, trailing_zeros), nothing)
    digits < 1 && throw(ArgumentError("digits must be 1 or more for mode $(repr(fmt.mode)), got $digits."))
    iszero(x) && return (fixed_string(x, digits - 1, trailing_zeros), nothing)

    rounded = Printf.format(Printf.Format("%.$(digits - 1)e"), x)
    i_e = findfirst('e', rounded)
    exponent = parse(Int, rounded[nextind(rounded, i_e):end])
    significant = parse(Float64, rounded)

    decimals = max(0, digits - 1 - exponent)
    plain = fmt.mode === :sigdigits ? significant : round(x, digits = decimals)
    mantissa = rounded[1:prevind(rounded, i_e)]
    if use_exponent(plain, fmt)
        return (trailing_zeros ? mantissa : strip_trailing_zeros(mantissa), exponent)
    end
    if fmt.mode === :sigdigits && decimals == 0
        # the placeholder zeros are appended rather than printed from `plain`, whose
        # exact decimal expansion is not all zeros once it exceeds 2^53
        return (string(replace(mantissa, "." => ""), "0"^(exponent - digits + 1)), nothing)
    end
    return (fixed_string(plain, decimals, trailing_zeros), nothing)
end

resolve_trailing_zeros(trailing_zeros::Bool, mode::Symbol) = trailing_zeros
resolve_trailing_zeros(::Symbol, mode::Symbol) = mode !== :auto

resolve_exponent_thresholds(thresholds::Tuple, mode::Symbol) = thresholds
resolve_exponent_thresholds(::Symbol, mode::Symbol) = mode === :sigdigits ? (-1, :digits) : (-4, 6)

function use_exponent(x::Float64, fmt::NumberFormat)
    lower, upper = resolve_exponent_thresholds(fmt.exponent_thresholds, fmt.mode)
    exponent = floor(Int, log10(abs(x)))
    below = lower !== nothing && exponent < lower
    above = upper !== nothing && exponent >= (upper === :digits ? fmt.digits : upper)
    return below || above
end

function fixed_string(x::Float64, decimals::Int, trailing_zeros::Bool)
    s = Printf.format(Printf.Format("%.$(decimals)f"), x)
    trailing_zeros || (s = strip_trailing_zeros(s))
    return replace(s, r"^-(0(\.0*)?)$" => s"\1")
end

function strip_trailing_zeros(s::String)
    occursin('.', s) || return s
    s = replace(s, r"(\.\d*?)0+$" => s"\1")
    return replace(s, r"\.$" => "")
end

magnitude_strings(s::Symbol) = s === :none ? nothing : s === :financial ? MAGNITUDES_FINANCIAL : MAGNITUDES_SI
magnitude_strings(v::Vector{String}) = v

function scale_to_magnitude(x::Float64, magnitudes::Vector{String}, fmt::NumberFormat)
    for i in 1:length(magnitudes)
        mantissa = x / 1000.0 ^ (i - 1)
        if abs(round_mantissa(mantissa, fmt)) < 1000
            return mantissa, magnitudes[i]
        end
    end
    return x, magnitudes[1]
end

round_mantissa(x::Float64, fmt::NumberFormat) =
    fmt.mode === :digits ? round(x, digits = fmt.digits) :
    fmt.mode === :sigdigits ? round(x, sigdigits = fmt.digits) :
    auto_round(x, target_digits = fmt.digits)
Base.show(io::IO, f::FormattedFloat) = _showas(io, MIME"text"(), f)

const SUPERSCRIPT_CHARS = Dict(
    '0' => '⁰', '1' => '¹', '2' => '²', '3' => '³', '4' => '⁴',
    '5' => '⁵', '6' => '⁶', '7' => '⁷', '8' => '⁸', '9' => '⁹',
    '+' => '⁺', '-' => '⁻',
)
const SUBSCRIPT_CHARS = Dict(
    '0' => '₀', '1' => '₁', '2' => '₂', '3' => '₃', '4' => '₄',
    '5' => '₅', '6' => '₆', '7' => '₇', '8' => '₈', '9' => '₉',
    '+' => '₊', '-' => '₋',
)

function print_script_fallback(io::IO, m::MIME, value, chars::Dict{Char,Char}, ascii_marker::Char)
    s = sprint(io -> _showas(io, m, value))
    if all(c -> haskey(chars, c), s)
        print(io, map(c -> chars[c], s))
    else
        print(io, ascii_marker, s)
    end
end

_showas(io::IO, m::MIME, s::Superscript) = print_script_fallback(io, m, s.super, SUPERSCRIPT_CHARS, '^')
_showas(io::IO, m::MIME, s::Subscript) = print_script_fallback(io, m, s.sub, SUBSCRIPT_CHARS, '_')

_showas(io::IO, m::MIME, c::CategoricalValue) = _showas(io, m, CategoricalArrays.DataAPI.unwrap(c))

function _showas(io::IO, m::MIME, c::Concat)
    for arg in c.args
        _showas(io, m, arg)
    end
end

format_value(x) = x

"""
    auto_round(number; target_digits)

Rounds a floating point number to a target number of digits that are not leading zeros.
For example, with 3 target digits, desirable numbers would be 123.0, 12.3, 1.23,
0.123, 0.0123 etc. Numbers larger than the number of digits are only rounded to the next integer
(compare with `round(1234, sigdigits = 3)` which rounds to `1230.0`).
Numbers are rounded to `target_digits` significant digits when the floored base 10
exponent is -5 and lower or 6 and higher.

```
auto_round(        1234567, target_digits = 4) = 1.235e6
auto_round(       123456.7, target_digits = 4) = 123457.0
auto_round(       12345.67, target_digits = 4) = 12346.0
auto_round(       1234.567, target_digits = 4) = 1235.0
auto_round(       123.4567, target_digits = 4) = 123.5
auto_round(       12.34567, target_digits = 4) = 12.35
auto_round(       1.234567, target_digits = 4) = 1.235
auto_round(      0.1234567, target_digits = 4) = 0.1235
auto_round(     0.01234567, target_digits = 4) = 0.01235
auto_round(    0.001234567, target_digits = 4) = 0.001235
auto_round(   0.0001234567, target_digits = 4) = 0.0001235
auto_round(  0.00001234567, target_digits = 4) = 1.235e-5
auto_round( 0.000001234567, target_digits = 4) = 1.235e-6
auto_round(0.0000001234567, target_digits = 4) = 1.235e-7
```
"""
function auto_round(number; target_digits::Int)
    !isfinite(number) && return number
    target_digits < 1 && throw(ArgumentError("target_digits needs to be 1 or more"))
    order_of_magnitude = number == 0 ? 0 : log10(abs(number))
    oom = floor(Int, order_of_magnitude)
    ndigits = max(0, -oom + target_digits - 1)
    if -5 < oom < 6
        round(number, digits = ndigits)
    else
        round(number, sigdigits = target_digits)
    end
end

natural_lt(x::AbstractString, y::AbstractString) = NaturalSort.natural(x, y)
natural_lt(x, y) = isless(x, y)

# the factor of the body font size that HTML and typst fall back to when `footnote_size` is unset
const DEFAULT_FOOTNOTE_SIZE = 0.8
# the baseline-to-baseline ratio LaTeX and CSS both apply without being told otherwise
const DEFAULT_LINE_HEIGHT = 1.2

footnote_font_size(ct::Table) =
    ct.footnote_size === nothing ? "$(DEFAULT_FOOTNOTE_SIZE)em" : "$(ct.footnote_size)pt"

# keeps float noise like 0.30000000000000004 out of the output
round_factor(x) = round(x; digits = 4)

function validate_rowgaps(rowgaps, nrows)
    nrows == 1 && !isempty(rowgaps) && error("No row gaps allowed for a table with one row.")
    for (m, _) in rowgaps
        if m < 1
            error("A row gap index of $m is invalid, must be at least 1.")
        end
        if m >= nrows
            error("A row gap index of $m is invalid for a table with $nrows rows. The maximum allowed is $(nrows - 1).")
        end
    end
end
function validate_colgaps(colgaps, ncols)
    ncols == 1 && !isempty(colgaps) && error("No column gaps allowed for a table with one column.")
    for (m, _) in colgaps
        if m < 1
            error("A column gap index of $m is invalid, must be at least 1.")
        end
        if m >= ncols
            error("A column gap index of $m is invalid for a table with $ncols columns. The maximum allowed is $(ncols - 1).")
        end
    end
end