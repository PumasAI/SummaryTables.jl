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
include("listingtable.jl")
include("summarytable.jl")
include("helpers.jl")
include("latex.jl")
include("html.jl")
include("docx.jl")
include("typst.jl")

end # module
