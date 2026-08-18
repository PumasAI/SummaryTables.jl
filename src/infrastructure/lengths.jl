"""
    Length

A length with a part relative to the font size and an absolute part in points.
Build one with [`Relative`](@ref) or [`Points`](@ref) instead of calling this directly.
"""
struct Length
    em::Float64
    pt::Float64
end

function _length_number(x, name)
    if !(x isa Real) || !isfinite(x) || x < 0
        error("`$name` needs a finite, non-negative number, got `$(repr(x))`.")
    end
    return Float64(x)
end

"""
    SummaryTables.Relative(factor)

A length relative to the font size, so `Relative(0.5)` is half the font size.

Relative lengths keep their proportion to the text when the document the table is embedded
in changes its font size, which is why they are preferred over [`Points`](@ref).
HTML, LaTeX and typst express them directly, while the docx renderer resolves them against
the `base_font_size` docx default because Word has no relative font metrics.
"""
Relative(factor) = Length(_length_number(factor, "Relative"), 0.0)

"""
    SummaryTables.Points(size)

An absolute length in points, which does not adjust to the font size of the document the
table is embedded in. Prefer [`Relative`](@ref) unless you specifically need a fixed size.
"""
Points(size) = Length(0.0, _length_number(size, "Points"))

Base.:*(factor::Real, l::Length) = Length(factor * l.em, factor * l.pt)
Base.:*(l::Length, factor::Real) = factor * l
Base.:+(a::Length, b::Length) = Length(a.em + b.em, a.pt + b.pt)
Base.zero(::Type{Length}) = Length(0.0, 0.0)
Base.iszero(l::Length) = iszero(l.em) && iszero(l.pt)
# a length is a scalar, so `indices .=> Relative(0.6)` broadcasts it over the indices
Base.broadcastable(l::Length) = Ref(l)

function Base.show(io::IO, l::Length)
    iszero(l.pt) && return print(io, "Relative(", l.em, ")")
    iszero(l.em) && return print(io, "Points(", l.pt, ")")
    print(io, "Relative(", l.em, ") + Points(", l.pt, ")")
end
