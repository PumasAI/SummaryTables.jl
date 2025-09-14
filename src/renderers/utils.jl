function _showas(io::IO, mime::MIME, value)
    if mime === MIME"text/plain"()
        return print(io, value)
    end
    fn(io::IO, ::MIME"text/html", value::AbstractString) = _str_html_escaped(io, value)
    fn(io::IO, ::MIME"text/html", value) = _str_html_escaped(io, repr(value))
    fn(io::IO, ::MIME"text/latex", value::AbstractString) = _str_latex_escaped(io, value)
    fn(io::IO, ::MIME"text/latex", value) = _str_latex_escaped(io, repr(value))
    fn(io::IO, ::MIME"text/typst", value::AbstractString) = _str_typst_escaped(io, value)
    fn(io::IO, ::MIME"text/typst", value) = _str_typst_escaped(io, repr(value))
    fn(io::IO, ::MIME, value) = print(io, value)
    return showable(mime, value) ? show(io, mime, value) : fn(io, mime, value)
end

function _showas(io::IO, m::MIME, r::RoundedFloat)
    f = r.f
    mode = r.round_mode
    digits = r.round_digits
    s = if mode === :auto
        string(auto_round(f, target_digits = digits))
    elseif mode === :sigdigits
        string(round(f, sigdigits = digits))
    elseif mode === :digits
        fmt = Printf.Format("%.$(digits)f")
        Printf.format(fmt, f)
    else
        error("Unknown round mode $mode")
    end
    if !r.trailing_zeros
        s = replace(s, r"^(\d+)$|^(\d+)\.0*$|^(\d+\.[1-9]*?)0*$" => s"\1\2\3")
    end
    _showas(io, m, s)
end
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