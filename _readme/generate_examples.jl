using SummaryTables
using Typst_jll
using DataFrames
using Statistics

function save_svg(tbl, svgfile)
    mktempdir() do dir
        cd(dir) do
            open("input.typ", "w") do io
                println(io, """
                #set page(margin: 3pt, width: auto, height: auto, fill: white)
                #set text(12pt)
                """)
                show(io, MIME"text/typst"(), tbl)
            end
            run(`$(Typst_jll.typst()) compile input.typ output.svg`)
        end
        mv(joinpath(dir, "output.svg"), svgfile, force = true)
    end
    return
end

data = DataFrame(
    sex = ["m", "m", "m", "m", "f", "f", "f", "f", "f", "f"],
    age = [27, 45, 34, 85, 55, 44, 24, 29, 37, 76],
    blood_type = ["A", "0", "B", "B", "B", "A", "0", "A", "A", "B"],
    smoker = [true, false, false, false, true, true, true, false, false, false],
)

tbl = table_one(
    data,
    [:age => "Age (years)", :blood_type => "Blood type", :smoker => "Smoker"],
    groupby = :sex => "Sex",
    show_n = true
)

save_svg(tbl, joinpath(@__DIR__, "table_one.svg"))

data = DataFrame(
    concentration = [1.2, 4.5, 2.0, 1.5, 0.1, 1.8, 3.2, 1.8, 1.2, 0.2,
        1.7, 4.2, 1.0, 0.9, 0.3, 1.7, 3.7, 1.2, 1.0, 0.2],
    id = repeat([1, 2, 3, 4], inner = 5),
    dose = repeat([100, 200], inner = 10),
    time = repeat([0, 0.5, 1, 2, 3], 4)
)

tbl = listingtable(
    data,
    :concentration => "Concentration (ng/mL)",
    rows = [:dose => "Dose (mg)", :id => "ID"],
    cols = :time => "Time (hr)",
    summarize_rows = :dose => [
        length => "N",
        mean => "Mean",
        std => "SD",
    ]
)

save_svg(tbl, joinpath(@__DIR__, "listingtable.svg"))

##

categories = ["Deciduous", "Deciduous", "Evergreen", "Evergreen", "Evergreen"]
species = ["Beech", "Oak", "Fir", "Spruce", "Pine"]
data = rand(4, 5)
labels = ["", "", "Size", Annotated("Water consumption", "Liters per year"), "Age", "Value"]

body = [
    Cell.(categories, bold = true, merge = true, border_bottom = true)';
    Cell.(species)';
    Cell.(data)
]

tbl = Table(hcat(
    Cell.(labels, italic = true, halign = :right),
    body
))

save_svg(tbl, joinpath(@__DIR__, "custom_table.svg"))


