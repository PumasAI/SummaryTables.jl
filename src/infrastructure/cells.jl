"""
    CellStyle(;
        bold::Bool = false,
        italic::Bool = false,
        underline::Bool = false,
        halign::Symbol = :center,
        valign::Symbol = :top,
        indent = 0em,
        border_bottom::Bool = false,
        merge::Bool = false,
        mergegroup::UInt8 = 0,
    )

Create a `CellStyle` object which determines the visual appearance of `Cell`s.

Keyword arguments:

- `bold` renders text `bold` if `true`.
- `italic` renders text `italic` if `true`.
- `underline` underlines text if `true`.
- `halign` determines the horizontal alignment within the cell, either `:left`, `:center` or `:right`.
- `valign` determines the vertical alignment within the cell, either `:top`, `:center` or `:bottom`.
- `indent` adds left indentation to the cell text, as an `Em` length relative to the font size, for example `1.5em`, or an absolute `Pt` length, for example `12pt`. The deprecated `indent_pt` keyword sets the same thing as a bare number in points.
- `border_bottom` adds a bottom border to the cell if `true`.
- `merge` causes adjacent cells which are `==` equal to be rendered as a single merged cell.
- `mergegroup` is a number that can be used to differentiate between two otherwise equal adjacent groups of cells that should not be merged together.
"""
struct CellStyle
    indent::Length
    bold::Bool
    italic::Bool
    underline::Bool
    border_bottom::Bool
    halign::Symbol
    valign::Symbol
    merge::Bool
    mergegroup::UInt8
end

function CellStyle(;
        indent = nothing,
        indent_pt = nothing,
        bold = false,
        italic = false,
        underline = false,
        border_bottom = false,
        halign = :center,
        valign = :top,
        merge = false,
        mergegroup = 0,
    )
    CellStyle(
        resolve_indent(indent, indent_pt, Em(0.0)),
        bold, italic, underline, border_bottom, halign, valign, merge, UInt8(mergegroup),
    )
end

function CellStyle(c::CellStyle;
        indent = nothing,
        indent_pt = nothing,
        bold = nothing,
        italic = nothing,
        underline = nothing,
        border_bottom = nothing,
        halign = nothing,
        valign = nothing,
        merge = nothing,
        mergegroup = nothing,
    )
    keep(v, old) = v === nothing ? old : v
    CellStyle(
        resolve_indent(indent, indent_pt, c.indent),
        keep(bold, c.bold),
        keep(italic, c.italic),
        keep(underline, c.underline),
        keep(border_bottom, c.border_bottom),
        keep(halign, c.halign),
        keep(valign, c.valign),
        keep(merge, c.merge),
        keep(mergegroup === nothing ? nothing : UInt8(mergegroup), c.mergegroup),
    )
end

function resolve_indent(indent, indent_pt, fallback)
    if indent_pt !== nothing
        indent === nothing || error("Cannot set both `indent` and the deprecated `indent_pt`. Use only `indent`.")
        Base.depwarn("The `indent_pt` keyword is deprecated, use `indent = $(indent_pt)pt` instead (or an `Em` length like `1.5em`).", :CellStyle)
        return indent_pt * pt
    end
    indent === nothing ? fallback : indent
end

struct SpannedCell
    span::Tuple{UnitRange{Int64},UnitRange{Int64}}
    value
    style::CellStyle

    function SpannedCell(span::Tuple{UnitRange{Int64},UnitRange{Int64}}, value, style)
        rowstart = span[1].start
        colstart = span[2].start
        if rowstart < 1
            error("SpannedCell must not begin at a row lower than 1, but begins at row $(rowstart).")
        end
        if colstart < 1
            error("SpannedCell must not begin at a column lower than 1, but begins at column $(colstart).")
        end
        new(span, value, style)
    end
end

SpannedCell(rows::Union{Int,UnitRange{Int}}, cols::Union{Int,UnitRange{Int}}, value, style = CellStyle()) = SpannedCell((_to_range(rows), _to_range(cols)), value, style)
_to_range(i::Int) = i:i
_to_range(ur::UnitRange{Int}) = ur

# the old type never did anything, so now we just make any old use of this a no-op basically
const CellList = Vector{SpannedCell}

"""
    Cell(value, style::CellStyle)
    Cell(value; [bold, italic, underline, halign, valign, border_bottom, indent, merge, mergegroup])

Construct a `Cell` with value `value` and `CellStyle` `style`, which can also be created implicitly with keyword arguments.
For explanations of the styling options, refer to `CellStyle`.
A cell with value `nothing` is displayed as an empty cell (styles might still apply).
The type of `value` can be anything.

Some types with special behavior are:
  - `Multiline` for content broken over multiple lines in a cell. This object may not be used nested in other values, only as the top-level value.
  - `Concat` for stringing together multiple values without having to interpolate them into a `String`, which keeps their own special behaviors intact.
  - `Superscript` and `Subscript`
  - `Annotated` for a value with an optional superscript label and a footnote annotation.
"""
struct Cell
    value
    style::CellStyle
    Cell(value, style::CellStyle; kwargs...) = new(value, CellStyle(style; kwargs...))
end

Base.adjoint(c::Cell) = c # simplifies making row vectors out of column vectors of Cells with '

Cell(value; kwargs...) = Cell(value, CellStyle(; kwargs...))
Cell(cell::Cell; kwargs...) = Cell(cell.value, CellStyle(cell.style; kwargs...))
Cell(cell::Cell, value; kwargs...) = Cell(value, CellStyle(cell.style; kwargs...))

Base.broadcastable(c::Cell) = Ref(c)
@inline Base.getproperty(c::Cell, s::Symbol) = hasfield(Cell, s) ? getfield(c, s) : getproperty(c.style, s)
Base.propertynames(c::Cell) = (fieldnames(Cell)..., propertynames(c.style)...)
