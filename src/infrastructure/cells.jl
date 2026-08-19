"""
    CellStyle(;
        bold::Bool = false,
        italic::Bool = false,
        underline::Bool = false,
        halign::Symbol = :center,
        valign::Symbol = :top,
        indent::Float64 = 0.0,
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
- `indent` adds left indentation to the cell text as a factor of the font size, so `indent = 1.5` indents by one and a half times the font size. HTML, LaTeX and typst keep the factor relative so the indentation follows the surrounding font size, while docx resolves it against the `base_font_size` docx default.
- `border_bottom` adds a bottom border to the cell if `true`.
- `merge` causes adjacent cells which are `==` equal to be rendered as a single merged cell.
- `mergegroup` is a number that can be used to differentiate between two otherwise equal adjacent groups of cells that should not be merged together.

The deprecated `indent_pt` keyword indents by an absolute number of points instead, which does not adjust to the font size of the surrounding document. Use `indent` instead.
"""
struct CellStyle
    indent::Float64
    indent_pt::Float64
    bold::Bool
    italic::Bool
    underline::Bool
    border_bottom::Bool
    halign::Symbol
    valign::Symbol
    merge::Bool
    mergegroup::UInt8
end

function _deprecate_indent_pt(indent_pt, caller::Symbol)
    indent_pt === nothing && return 0.0
    Base.depwarn(
        "`indent_pt` is deprecated because an absolute indentation in points cannot follow the " *
        "font size of the document the table is embedded in. Use `indent` instead, which is a " *
        "factor of the font size, so `indent = 1.2` indents by 1.2 times the font size.",
        caller,
    )
    return Float64(indent_pt)
end

function CellStyle(;
        indent = 0.0,
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
    return CellStyle(indent, _deprecate_indent_pt(indent_pt, :CellStyle), bold, italic,
        underline, border_bottom, halign, valign, merge, mergegroup)
end

@eval function CellStyle(c::CellStyle; kwargs...)
    settings = values(kwargs)
    # the keyword constructor's deprecation path, which also maps `nothing` to the default
    if haskey(settings, :indent_pt)
        settings = merge(settings, (; indent_pt = _deprecate_indent_pt(settings.indent_pt, :CellStyle)))
    end
    Base.Cartesian.@ncall $(length(fieldnames(CellStyle))) CellStyle i -> begin
        name = $(fieldnames(CellStyle))[i]
        get(settings, name, getfield(c, name))
    end
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
