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
    s = format_rounded(x, fmt.mode, fmt.digits)
    if !fmt.trailing_zeros
        s = strip_trailing_zeros(s)
    end
    i_e = findfirst('e', s)
    if fmt.exponent_style === :x10 && i_e !== nothing
        mantissa = s[1:prevind(s, i_e)]
        exponent = s[nextind(s, i_e):end]
        return Concat(
            string(fmt.prefix, comparator, mantissa, " × 10"),
            Superscript(exponent),
            string(magnitude, fmt.suffix),
        )
    end
    return string(fmt.prefix, comparator, s, magnitude, fmt.suffix)
end

function format_rounded(x::Float64, mode::Symbol, digits::Int)
    if mode === :auto
        string(auto_round(x, target_digits = digits))
    elseif mode === :sigdigits
        string(round(x, sigdigits = digits))
    elseif mode === :digits
        Printf.format(Printf.Format("%.$(digits)f"), x)
    else
        error("Unknown round mode $mode")
    end
end

function strip_trailing_zeros(s::String)
    i_e = findfirst('e', s)
    if i_e !== nothing
        return string(strip_trailing_zeros(s[1:prevind(s, i_e)]), s[i_e:end])
    end
    occursin('.', s) || return s
    s = replace(s, r"(\.\d*?)0+$" => s"\1")
    s = replace(s, r"\.$" => "")
    return s == "-0" ? "0" : s
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
exponent is -5 and lower or 6 and higher, as these numbers print with `e` notation by default in Julia.

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
        # this relies on Base printing e notation >= 6 and <= -5
        round(number, sigdigits = target_digits)
    end
end

natural_lt(x::AbstractString, y::AbstractString) = NaturalSort.natural(x, y)
natural_lt(x, y) = isless(x, y)

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