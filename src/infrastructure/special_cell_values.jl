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

resolve_annotation(x, annotations) = x
function resolve_annotation(a::Annotated, annotations)
    ResolvedAnnotation(a.value, annotations[a.annotation])
end

function resolve_annotation(c::Concat, annotations)
    new_args = map(c.args) do arg
        resolve_annotation(arg, annotations)
    end
    Concat(new_args...)
end

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

struct RoundedFloat
    f::Float64
    round_digits::Int
    round_mode::Symbol
    trailing_zeros::Bool
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
