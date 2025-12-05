abstract type AbstractDefaults end

"" # otherwise field docstrings are not parsed
Base.@kwdef struct TableOneDefaults <: AbstractDefaults
    "Function f(col) that returns an analysis function for categorical columns."
    categorical_default = level_analyses
    "Function f(col) that returns an analysis function for numeric columns."
    numeric_default = default_numeric_analysis
end

"" # otherwise field docstrings are not parsed
Base.@kwdef struct Defaults <: AbstractDefaults
    "Rounding mode for floats, can be `:auto`, `:digits` or `:sigdigits`."
    round_mode::Symbol = :auto
    "Number of digits to target when rounding floats."
    round_digits::Int = 3
    "If `false`, removes trailing zeros when formatting floats."
    trailing_zeros::Bool = false
    "If `true`, each footnote is displayed on a separate line."
    linebreak_footnotes::Bool = true
    "An indexable collection or a `Symbol` that specifies a predefined collection which contains annotation labels. Predefined variants are `:numbers`, `:lowercase`, `:uppercase`, `:roman_lower` and `:roman_upper`."
    annotation_labels = :numbers
    "Key to look up column label metadata with. A value of `nothing` disables lookup."
    label_key::Union{Nothing,String} = "label"
    "Defaults for the `table_one` function"
    table_one::TableOneDefaults = TableOneDefaults()
end

# for giving defaults in a nested way like `with_defaults(; table_one = (; ...))`
Base.convert(A::Type{<:AbstractDefaults}, nt::NamedTuple) = A(; nt...)

struct Default end
const default = Default()

fallback(value::Default, default) = default
fallback(value, default) = value

function Base.show(io::IO, d::AbstractDefaults)
    inner = get(io, :inner, false)
    indent = get(io, :indent, 1)
    indentstr = "    " ^ indent
    indentstr_outer = "    " ^ (indent - 1)
    inner ? println(io, "(") : println(io, "$(nameof(typeof(d)))(")
    fnames = fieldnames(typeof(d))
    str_fnames = string.(fnames)
    nmax = maximum(length, str_fnames)
    for (strfield, field) in zip(str_fnames, fnames)
        val = getfield(d, field)
        if val isa AbstractDefaults
            print(io, indentstr, field, " = ")
            s = replace(repr(val, context = (:inner => true, :indent => indent + 1)), "\n" => "    \n")
            println(io, s)
        else
            print(io, indentstr, field, " " ^ (nmax - length(strfield)), " = ")
            show(io, getfield(d, field))
            println(io, ",")
        end
    end
    inner ? print(io, indentstr_outer, ")") : println(io, ")")
    return
end

const current_defaults = ScopedValues.ScopedValue((ReentrantLock(), Ref(Defaults())))

function _defaults_fielddocs()
    fnames = fieldnames(Defaults)
    def = Defaults()
    return join(["`$fname`: $(REPL.fielddoc(Defaults, fname)) Default = `$(repr(getfield(def, fname)))`" for fname in fnames], "\\\n")
end

"""
    defaults!(; kwargs...)

Changes the default settings (implemented via ScopedValues)
in the current dynamic scope.
A new scope is created with `with_defaults`, otherwise you are modifying
the global scope. This could be done, e.g., at the start of a script or notebook.

Mutation of the settings happens under lock and is therefore threadsafe.
However, you should use `with_defaults` instead if you intend to change
defaults only for some task without affecting other tasks.

The available settings are:

$(_defaults_fielddocs())
"""
function defaults!(; kwargs...)
    _lock, ref = current_defaults[]
    new_defaults = Defaults(; kwargs...)
    lock(_lock) do
        ref[] = new_defaults
    end
    return
end

function defaults()::Defaults
    _lock, ref = current_defaults[]
    return lock(_lock) do
        ref[]
    end
end

"""
    with_defaults(f; kwargs...)

Changes the default settings (implemented via ScopedValues)
in a new dynamic scope which is only active while function `f` runs.

If you intend to change the current global settings instead, use `defaults!`.

The available settings are:

$(_defaults_fielddocs())
"""
function with_defaults(f; kwargs...)
    return ScopedValues.with(f, current_defaults => (ReentrantLock(), Ref(Defaults(; kwargs...))))
end
