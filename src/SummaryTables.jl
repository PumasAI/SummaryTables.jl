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

export simple_table
export dfsummary
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
export Styled

const DEFAULT_ROWGAP = 6.0

include("infrastructure/cells.jl")
include("infrastructure/special_cell_values.jl")
include("infrastructure/tables.jl")

include("table_functions/simple_table.jl")
include("table_functions/dfsummary.jl")
include("table_functions/table_one.jl")
include("table_functions/listingtable.jl")
include("table_functions/summarytable.jl")

include("renderers/utils.jl")
include("renderers/latex.jl")
include("renderers/html.jl")
include("renderers/docx.jl")
include("renderers/typst.jl")

end # module
