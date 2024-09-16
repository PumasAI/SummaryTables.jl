module SummaryTables

#
# Imports and exports.
#

using Tables
using CategoricalArrays
using DataFrames
using Statistics

import EnumX
import HypothesisTests
import OrderedCollections
import MultipleTesting
import StatsBase
import Printf
import NaturalSort
import WriteDocx
import SHA

export table_one
export listingtable
export summarytable
export Cell
export CellStyle
export Table
export Annotated
export Concat
export Multiline
export Pagination
export ReplaceMissing
export Replace
export Superscript
export Subscript

const DEFAULT_ROWGAP = 6.0

include("cells.jl")
include("table_one.jl")
include("table.jl")
include("helpers.jl")
include("latex.jl")
include("html.jl")
include("docx.jl")
include("typst.jl")
include("makie.jl")

function __init__()
    @static if !isdefined(Base, :get_extension)
        @require Makie="ee78f7c6-11fb-53f2-987a-cfe4a2b5a57a" begin
            include("../ext/MakieExtension.jl")
        end
    end

    Base.Experimental.register_error_hint(MethodError) do io, exc, argtypes, kwargs
        if exc.f === makie_table!
            if isempty(methods(exc.f))
                print(io, "\n$(exc.f) has no methods, yet. Makie has to be loaded for the table extension to be activated. Run `using Makie`, `using CairoMakie`, `using GLMakie` or any other package that also loads Makie.")
            end
        end
    end
end


end # module
