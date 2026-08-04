"""
    Multiline(args...)

Create a `Multiline` object which renders each `arg` on a separate line.
A `Multiline` value may only be used as the top-level value of a cell, so
`Cell(Multiline(...))` is allowed but `Cell(Concat(Multiline(...), ...))` is not.
"""
struct Multiline
    values::Tuple
    Multiline(args...) = new(args)
end

"""
    Concat(args...)

Create a `Concat` object which can be used to concatenate the representations
of multiple values in a single table cell while keeping the conversion semantics
of each `arg` in `args` intact.

## Example

```julia
Concat(
    "Some text and an ",
    Annotated("annotated", "Some annotation"),
    " value",
)
# will be rendered as "Some text and an annotated¹ value"
```
"""
struct Concat
    args::Tuple
    Concat(args...) = new(args)
end

struct Annotated
    value
    annotation
    label
end

struct AutoNumbering end

"""
    Annotated(value, annotation; label = AutoNumbering())

Create an `Annotated` object which will be given a footnote annotation
in the `Table` where it is used.
If the `label` keyword is `AutoNumbering()`, annotations will be given number labels
from 1 to N in the order of their appearance. If it is `nothing`, no label will be
shown. Any other `label` will be used directly as the footnote label.

Each unique label must be paired with a unique annotation, but the same
combination can exist multiple times in a single table.
"""
Annotated(value, annotation; label = AutoNumbering()) = Annotated(value, annotation, label)

struct ResolvedAnnotation
    value
    label
end

# Signals that a given annotation should have no label.
# This is useful for cases where the value itself is the label
# for example when printing NA or - for a missing value.
# You would not want a superscript label for every one of those.
struct NoLabel end

function resolve_annotations(cells::AbstractVector{<:SpannedCell})
    annotations = collect_annotations(cells)

    _annotation_labels = defaults().annotation_labels
    annotation_labels = get_annotation_labels(_annotation_labels)

    k = 1
    for (annotation, label) in annotations
        if label === AutoNumbering()
            if k > length(annotation_labels)
                error("Not enough annotation labels available. The current setting is `annotation_labels = $(repr(_annotation_labels))` which provides $(length(annotation_labels)) labels, but $(k) labels are needed.")
            end
            annotations[annotation] = annotation_labels[k]
            k += 1
        elseif label === nothing
            annotations[annotation] = NoLabel()
        end
    end

    labels = Set()
    for label in values(annotations)
        label === NoLabel() && continue
        label ∈ labels && error("Found the same label $(repr(label)) twice with different annotations.")
        push!(labels, label)
    end

    # put all non-integer labels (so all manual labels) behind the auto-incremented labels
    # the remaining order will be corresponding to the elements in the list
    annotations = OrderedCollections.OrderedDict(sort(collect(annotations), by = x -> !(last(x) isa Int)))

    cells = map(cells) do cell
        SpannedCell(cell.span, resolve_annotation(cell.value, annotations), cell.style)
    end

    return cells, annotations
end

function collect_annotations(cells)
    annotations = OrderedCollections.OrderedDict()
    for cell in cells
        collect_annotations!(annotations, cell.value)
    end
    return annotations
end

collect_annotations!(annotations, x) = nothing

function collect_annotations!(annotations, c::Concat)
    for arg in c.args
        collect_annotations!(annotations, arg)
    end
end

function collect_annotations!(annotations, x::Annotated)
    if haskey(annotations, x.annotation)
        if annotations[x.annotation] != x.label
            error("Found the same annotation $(repr(x.annotation)) with two different labels: $(repr(x.label)) and $(repr(annotations[x.annotation])).")
        end
    else
        annotations[x.annotation] = x.label
    end
    return
end

resolve_annotation(x, annotations) = recursive_replace(x, y -> y isa Annotated, a -> ResolvedAnnotation(a.value, annotations[a.annotation]))

function get_annotation_labels(s::Symbol)
    if s === :numbers
        1:typemax(Int)
    elseif s === :letters_lower
        LETTERS_LOWER
    elseif s === :letters_upper
        LETTERS_UPPER
    elseif s === :roman_lower
        ROMAN_LOWER
    elseif s === :roman_upper
        ROMAN_UPPER
    else
        error("Invalid annotation label identifier $(repr(s)), valid options are :numbers, :letters_lower, :letters_upper, :roman_lower, :roman_upper")
    end
end

get_annotation_labels(x) = x

const LETTERS_LOWER = string.('a':'z')
const LETTERS_UPPER = string.('A':'Z')
const ROMAN_LOWER = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx", "xxi", "xxii", "xxiii", "xxiv", "xxv", "xxvi", "xxvii", "xxviii", "xxix", "xxx"]
const ROMAN_UPPER = uppercase.(ROMAN_LOWER)

struct Superscript
    super
end

struct Subscript
    sub
end

const MAGNITUDES_FINANCIAL = ["", "K", "M", "B", "T"]
const MAGNITUDES_SI = [" ", " k", " M", " G", " T", " P", " E"]

"""
    NumberFormat(; kwargs...)

Create a `NumberFormat` which controls how numbers are rendered.

A `NumberFormat` can be used in several ways:

- Passed to the `number_format` keyword of `Table` or any table function forwarding
  its keywords to `Table`, where it applies to every floating point number in the
  table that is not already wrapped in a more specific format.
- Called like a function on a value, which wraps the value such that it renders
  according to the format, for example `NumberFormat(digits = 2)(1.234)`.
  Floats and integers are wrapped, all other values are returned unchanged, and
  wrapper types like `Concat` or `Annotated` are recursed into.
- Attached to a column in `simple_table` via the pair syntax, or passed to the
  `format` keyword of `listingtable`.

Every setting is `nothing` by default, which means it inherits its value from the
next level up: a format applied to a value inherits unset settings from the table's
`number_format`, which in turn inherits from the global defaults (see `defaults!`)
and finally from the package defaults listed below.

## Settings

- `digits`: How many digits to round to, interpreted according to `mode`. Package default `3`.
- `mode`: The rounding mode, one of `:auto`, `:digits` or `:sigdigits`. Package default `:auto`.
  - `:auto` rounds to `digits` significant digits but never rounds away digits before
    the decimal point, so at 3 digits `1234` stays `1234` instead of becoming `1230`.
  - `:digits` rounds to `digits` digits after the decimal point and never uses
    exponential notation.
  - `:sigdigits` rounds to `digits` significant digits.
  Outside of `exponent_thresholds`, `:auto` and `:sigdigits` switch to exponential notation.
- `trailing_zeros`: Whether numbers are padded with zeros up to the precision given by
  `digits`, for example `1.50` vs `1.5` at 3 significant digits. `:auto` means `false`
  for `mode = :auto` and `true` for `:digits` and `:sigdigits`, so the exact modes display
  exactly the requested precision while `:auto` stays compact. Package default `:auto`.
- `prefix`: A string printed before the number. Package default `""`.
- `suffix`: A string printed after the number and after any magnitude suffix.
  Package default `""`.
- `scale`: A factor the number is multiplied with before rounding, for example `100`
  for fractions displayed as percentages. Package default `1`.
- `lower_limit`: Numbers smaller than this limit are displayed as the limit itself preceded
  by `<`, for example `<0.001` for p-values. The comparison applies after `scale`.
  Package default `-Inf`.
- `upper_limit`: Numbers larger than this limit are displayed as the limit itself preceded
  by `>`, for example `>0.9`. The comparison applies after `scale`. Package default `Inf`.
- `magnitudes`: If not `:none`, large numbers are scaled by powers of 1000 and suffixed
  with a magnitude string, like `5.4k` or `1.2M`. Available presets are `:financial`
  (`$(repr(MAGNITUDES_FINANCIAL))`) and `:si` (`$(repr(MAGNITUDES_SI))`).
  A custom `Vector{String}` may also be passed, where the first entry belongs to 10^0,
  the second to 10^3, and so on. Each entry contains its own separator to the number,
  which is why the `:si` entries start with a space. Numbers too large for the last
  entry fall back to exponential notation. The rounding settings apply to the scaled
  mantissa, so for example `:auto`'s preservation of pre-decimal digits refers to the
  digits of the mantissa, not those of the original number. Package default `:none`.
- `exponent_style`: How exponential notation is rendered, either `:e` like `1.5e6` or
  `:x10` like `1.5 × 10⁶`, which uses proper superscript rendering in each output format.
  Package default `:x10`.
- `exponent_thresholds`: The range `(lower, upper)` of base 10 exponents that are displayed
  plainly, so plain notation is used when a value's exponent `e` fulfills `lower <= e < upper`
  and exponential notation otherwise. `mode = :digits` never uses exponential notation and
  ignores this setting. The upper threshold may also be `:digits`, which stands for the
  `digits` setting. With `(-1, :digits)`, every displayed digit is a significant one, because
  plain notation outside that range needs placeholder zeros before or after the decimal point.
  Either threshold may be `nothing`, which switches exponential notation off on that side.
  Package default `(-4, 6)`, matching the range in which Julia prints floats without an
  exponent.

## Examples

```jldoctest
julia> fmt(values; kwargs...) = println(join(NumberFormat(; kwargs...).(values), "  "));

julia> fmt([0.4567, 1.23456, 123.456], digits = 2)
0.46  1.2  123

julia> fmt([0.4, 0.44444], mode = :digits, digits = 2)
0.40  0.44

julia> fmt([1.5, 0.7, 1234.0], mode = :sigdigits, digits = 3)
1.50  0.700  1230

julia> fmt([1.5, 0.7, 1234.0], mode = :sigdigits, digits = 3, trailing_zeros = false)
1.5  0.7  1230

julia> fmt([1234.0, 0.0234], mode = :sigdigits, digits = 3, exponent_thresholds = (-1, :digits))
1.23 × 10³  2.34 × 10⁻²

julia> fmt([0.4567, 0.891], scale = 100, suffix = " %")
45.7 %  89.1 %

julia> fmt([0.0004, 0.0234, 0.7], mode = :digits, digits = 3, lower_limit = 0.001)
<0.001  0.023  0.700

julia> fmt([999.0, 5432.1, 1_230_000], magnitudes = :financial)
999  5.43K  1.23M

julia> fmt([512, 1_230_000], magnitudes = :si, suffix = "B")
512 B  1.23 MB

julia> fmt([1.5, 1.5e18])
1.5  1.5 × 10¹⁸

julia> fmt([1.5, 1.5e18], exponent_style = :e)
1.5  1.5e18
```
"""
struct NumberFormat
    digits::Union{Nothing,Int}
    mode::Union{Nothing,Symbol}
    trailing_zeros::Union{Nothing,Bool,Symbol}
    prefix::Union{Nothing,String}
    suffix::Union{Nothing,String}
    scale::Union{Nothing,Float64}
    lower_limit::Union{Nothing,Float64}
    upper_limit::Union{Nothing,Float64}
    magnitudes::Union{Nothing,Symbol,Vector{String}}
    exponent_style::Union{Nothing,Symbol}
    exponent_thresholds::Union{Nothing,Tuple{Union{Nothing,Int},Union{Nothing,Int,Symbol}}}
end

function NumberFormat(;
        digits = nothing,
        mode = nothing,
        trailing_zeros = nothing,
        prefix = nothing,
        suffix = nothing,
        scale = nothing,
        lower_limit = nothing,
        upper_limit = nothing,
        magnitudes = nothing,
        exponent_style = nothing,
        exponent_thresholds = nothing,
    )
    if mode !== nothing && mode ∉ (:auto, :digits, :sigdigits)
        throw(ArgumentError("Invalid mode $(repr(mode)), valid options are :auto, :digits and :sigdigits."))
    end
    if digits !== nothing && digits < 0
        throw(ArgumentError("digits must not be negative, got $digits."))
    end
    if exponent_style !== nothing && exponent_style ∉ (:e, :x10)
        throw(ArgumentError("Invalid exponent_style $(repr(exponent_style)), valid options are :e and :x10."))
    end
    return NumberFormat(
        digits,
        mode,
        validate_trailing_zeros(trailing_zeros),
        prefix === nothing ? nothing : String(prefix),
        suffix === nothing ? nothing : String(suffix),
        scale === nothing ? nothing : Float64(scale),
        lower_limit === nothing ? nothing : Float64(lower_limit),
        upper_limit === nothing ? nothing : Float64(upper_limit),
        validate_magnitudes(magnitudes),
        exponent_style,
        validate_exponent_thresholds(exponent_thresholds),
    )
end

validate_trailing_zeros(::Nothing) = nothing
validate_trailing_zeros(b::Bool) = b
function validate_trailing_zeros(x)
    x === :auto && return x
    throw(ArgumentError("Invalid trailing_zeros $(repr(x)), valid options are true, false and :auto, which means false for `mode = :auto` and true for the other modes."))
end

validate_exponent_thresholds(::Nothing) = nothing
function validate_exponent_thresholds(thresholds)
    length(thresholds) == 2 || throw(ArgumentError("exponent_thresholds needs a lower and an upper threshold, got $(repr(thresholds))."))
    lower, upper = thresholds
    lower === nothing || lower isa Integer || throw(ArgumentError("The lower exponent threshold must be an integer or `nothing`, got $(repr(lower))."))
    upper === nothing || upper === :digits || upper isa Integer || throw(ArgumentError("The upper exponent threshold must be an integer, `:digits` or `nothing`, got $(repr(upper))."))
    if lower isa Integer && upper isa Integer && upper <= lower
        throw(ArgumentError("The upper exponent threshold must be larger than the lower threshold, got $(repr(thresholds))."))
    end
    return (lower === nothing ? nothing : Int(lower), upper isa Integer ? Int(upper) : upper)
end

validate_magnitudes(::Nothing) = nothing
function validate_magnitudes(s::Symbol)
    if s ∉ (:none, :financial, :si)
        throw(ArgumentError("Invalid magnitudes preset $(repr(s)), valid options are :none, :financial and :si, or a custom vector of strings where the first entry belongs to 10^0."))
    end
    return s
end
function validate_magnitudes(v::AbstractVector)
    isempty(v) && throw(ArgumentError("A custom magnitudes vector must not be empty, it needs at least the entry for 10^0."))
    return convert(Vector{String}, v)
end

const DEFAULT_NUMBER_FORMAT = NumberFormat(
    digits = 3,
    mode = :auto,
    trailing_zeros = :auto,
    prefix = "",
    suffix = "",
    scale = 1.0,
    lower_limit = -Inf,
    upper_limit = Inf,
    magnitudes = :none,
    exponent_style = :x10,
    exponent_thresholds = (-4, 6),
)

function Base.show(io::IO, fmt::NumberFormat)
    print(io, "NumberFormat(")
    is_first = true
    for name in fieldnames(NumberFormat)
        value = getfield(fmt, name)
        value === nothing && continue
        is_first || print(io, ", ")
        is_first = false
        print(io, name, " = ", repr(value))
    end
    print(io, ")")
end

function merge_formats(inner::NumberFormat, outer::NumberFormat)
    merged = map(fieldnames(NumberFormat)) do name
        inner_value = getfield(inner, name)
        inner_value === nothing ? getfield(outer, name) : inner_value
    end
    return NumberFormat(merged...)
end

struct FormattedFloat
    f::Float64
    format::NumberFormat
end

struct Color
    rgb::NTuple{3,Float64}
end

function Color(hex::String)
    @assert length(hex) == 7 && hex[1] == '#' "Hex string must be in the format \"#RRGGBB\""

    r = parse(Int, hex[2:3], base=16) / 255
    g = parse(Int, hex[4:5], base=16) / 255
    b = parse(Int, hex[6:7], base=16) / 255

    Color((r, g, b))
end

"""
    Styled(value; color, bold, italic, underline)

Create a `Styled` object wrapping `value` which renders `value` formatted according to these optional properties:
- `bold::Union{Nothing,Bool}`
- `italic::Union{Nothing,Bool}`
- `underline::Union{Nothing,Bool}`
- `color::Union{Nothing,String}` The text color as a hex RGB string like #FA03C7.  Note that you need to add `\\usepackage{xcolor}` to use colored text in LaTeX.
"""
struct Styled
    value
    color::Union{Nothing,Color}
    bold::Union{Nothing,Bool}
    italic::Union{Nothing,Bool}
    underline::Union{Nothing,Bool}
end

function Styled(
    value;
    color = nothing,
    bold = nothing,
    italic = nothing,
    underline = nothing,
)
    Styled(value, color === nothing ? nothing : Color(color), bold, italic, underline)
end
