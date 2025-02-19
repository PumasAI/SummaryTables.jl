# Renderers

## HTML

In IDEs that support the `MIME"text/html"` or `MIME"juliavscode/html"` types, just `display`ing a `Table` will render it in HTML for you.
All examples in this documentation are rendered this way.
Alternatively, you can print HTML to any IO object via `show(io, MIME"text/html", table)`.

## LaTeX

You can print LaTeX code to any IO via `show(io, MIME"text/latex", table)`.
Keep in mind that the `threeparttable`, `multirow` and `booktabs` packages need to separately be included in your preamble due to the way LaTeX documents are structured.

```@example
using SummaryTables
using DataFrames
using tectonic_jll


mkpath(joinpath(@__DIR__, "..", "public"))

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

# render latex in a temp directory
mktempdir() do dir
    texfile = joinpath(dir, "main.tex")

    open(texfile, "w") do io
        # add the necessary packages in the preamble
        println(io, raw"""
            \documentclass{article}
            \usepackage{threeparttable}
            \usepackage{multirow}
            \usepackage{booktabs}
            \begin{document}
        """)

        # print the table as latex code
        show(io, MIME"text/latex"(), tbl)

        println(io, raw"\end{document}")
    end

    # render the tex file to pdf
    tectonic_jll.tectonic() do bin
        run(`$bin $texfile`)
    end

    cp(joinpath(dir, "main.pdf"), joinpath(@__DIR__, "..", "public", "example.pdf"))
end

nothing # hide
```

Download `example.pdf`:

```@raw html
<a href="/example.pdf" download><img src="/assets/icon_pdf.png" width="60" /></a>
```

## docx

To get docx output, you need to use the WriteDocx.jl package because this format is not plain-text like LaTeX or HTML.
The table node you get out of the `to_docx` function can be placed into
sections on the same level as paragraphs.

```@example
using SummaryTables
using DataFrames
import WriteDocx as W


mkpath(joinpath(@__DIR__, "..", "public"))

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

doc = W.Document(
            W.Body([
                W.Section([
                    SummaryTables.to_docx(tbl)
                ])
            ])
        )

W.save(joinpath(@__DIR__, "..", "public", "example.docx"), doc)

nothing # hide
```

Download `example.docx`:

```@raw html
<a href="/example.docx" download><img src="/assets/icon_docx.png" width="60" /></a>
```

## Typst

You can print [Typst](https://github.com/typst/typst) table code to any IO via `show(io, MIME"text/typst", table)`.
From SummaryTables v2.0 on, the Typst backend is using the native table functionality in Typst v0.11.
Previous versions used the [tablex](https://github.com/PgBiel/typst-tablex/) package.

```@example
using SummaryTables
using DataFrames
using Typst_jll


mkpath(joinpath(@__DIR__, "..", "public"))

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

# render latex in a temp directory
mktempdir() do dir
    typfile = joinpath(dir, "example.typ")

    open(typfile, "w") do io
        # print the table as latex code
        show(io, MIME"text/typst"(), tbl)
    end

    # render the tex file to pdf
    Typst_jll.typst() do bin
        run(`$bin compile $typfile`)
    end

    cp(joinpath(dir, "example.pdf"), joinpath(@__DIR__, "..", "public", "example_typst.pdf"))
end

nothing # hide
```

Download `example_typst.pdf`:

```@raw html
<a href="/example_typst.pdf" download><img src="/assets/icon_pdf.png" width="60" /></a>
```
