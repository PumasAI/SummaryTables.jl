using SummaryTables
using SummaryTables: Table, SpannedCell, to_docx, CellStyle
using SummaryTables: WriteDocx
using SummaryTables: SortingError
const W = WriteDocx
using Test

using DataFrames
using Statistics
using ReferenceTests
using tectonic_jll
using Typst_jll
using ZipFile

# Wrapper type to dispatch to the right `show` implementations.
struct AsMIME{M}
    object
end
Base.show(io::IO, m::AsMIME{M}) where M = show(io, M(), m.object)
function Base.show(io::IO, m::AsMIME{M}) where M <: MIME"text/latex"
    print(io, raw"""
        \documentclass{article}
        \usepackage{threeparttable}
        \usepackage{multirow}
        \usepackage{booktabs}
        \usepackage{xcolor}
        \usepackage{tikz}
        \begin{document}
        """
    )
    show(io, M(), m.object)
    print(io, raw"\end{document}")
end
as_html(object) = AsMIME{MIME"text/html"}(object)
as_latex(object) = AsMIME{MIME"text/latex"}(object)
as_docx(object) = nothing
as_typst(object) = AsMIME{MIME"text/typst"}(object)

function run_reftest(table, path, func)
    path_full = joinpath(@__DIR__, path * extension(func))
    if func === as_docx
        s = @test_nowarn mktempdir() do dir
            tablenode = to_docx(table)
            doc = W.Document(
                W.Body([
                    W.Section([tablenode])
                ]),
                W.Styles([])
            )
            docfile = joinpath(dir, "test.docx")
            W.save(docfile, doc)
            buf = IOBuffer()
            r = ZipFile.Reader(docfile)
            for f in r.files
                println(buf, "#"^30, " ", replace(f.name, "\\" => "/"), " ", "#"^30)
                write(buf, read(f, String))
            end
            close(r)
            String(take!(buf))
        end
        @test_reference path_full s
    else
        @test_reference path_full func(table)
        if func === as_latex
            latex_render_test(path_full)
        end
        if func === as_typst
            typst_render_test(path_full)
        end
    end
end

function latex_render_test(filepath)
    mktempdir() do path
        texpath = joinpath(path, "input.tex")
        pdfpath = joinpath(path, "input.pdf")
        cp(filepath, texpath)
        stderr_path = joinpath(path, "stderr.txt")
        s = success(pipeline(`$(tectonic_jll.tectonic()) $texpath`, stderr = stderr_path))
        if !s
            error("Tectonic render failed\n" * read(stderr_path, String))
        end
        @test isfile(pdfpath)
    end
end

function typst_render_test(filepath)
    mktempdir() do path
        typ_path = joinpath(path, "input.typ")
        pdfpath = joinpath(path, "input.pdf")
        cp(filepath, typ_path)
        run(`$(typst()) compile $typ_path`)
        @test isfile(pdfpath)
    end
end

extension(f::typeof(as_html)) = ".txt"
extension(f::typeof(as_latex)) = ".latex.txt"
extension(f::typeof(as_docx)) = ".docx.txt"
extension(f::typeof(as_typst)) = ".typ.txt"

# This can be removed for `@test_throws` once CI only uses Julia 1.8 and up
macro test_throws_message(message::String, exp)
    quote
        threw_exception = false
        try
            $(esc(exp))
        catch e
            threw_exception = true
            @test occursin($message, e.msg) # Currently only works for ErrorException
        end
        @test threw_exception
    end
end

@testset "SummaryTables" begin
    df = DataFrame(
        value1 = 1:8,
        value2 = ["a", "b", "c", "a", "b", "c", "a", "b"],
        group1 = repeat(["a", "b"], inner = 4),
        group3 = repeat(repeat(["c", "d"], inner = 2), 2),
        group2 = repeat(["e", "f"], 4),
    )

    df2 = DataFrame(
        dose = repeat(["1 mg", "50 mg", "5 mg", "10 mg"], 3),
        id = repeat(["5", "50", "8", "10", "1", "80"], inner = 2),
        value = [1, 2, 3, 4, 2, 3, 4, 5, 5, 2, 1, 4],
    )

    unsortable_df = let
        parameters = repeat([
            Concat("T", Subscript("max")),
            Concat("C", Superscript("max")),
            Multiline("One Line", "Another Line")
        ], inner = 4)

        _df = DataFrame(;
            parameters,
            value = eachindex(parameters),
            group = repeat(1:4, 3),
            group2 = repeat(1:2, 6),
        )

        sort!(_df, [:group2, :group])
    end

    df_missing_groups = DataFrame(
        value = 1:6,
        A = ['c', 'c', 'c', 'b', 'b', 'a'],
        B = [4, 2, 8, 2, 4, 4]
    )

    @testset for func in [as_html, as_latex, as_docx, as_typst]
        reftest(t, path) = @testset "$path" begin
            run_reftest(t, path, func)
        end

        @testset "table_one" begin
            t = table_one(df, [:value1])
            reftest(t, "references/table_one/one_row")

            t = table_one(df, [:value1 => "Value 1"])
            reftest(t, "references/table_one/one_row_renamed")

            t = table_one(df, [:value1, :value2])
            reftest(t, "references/table_one/two_rows")

            t = table_one(df, [:value1, :value2], groupby = [:group1])
            reftest(t, "references/table_one/two_rows_one_group")

            t = table_one(df, [:value1, :value2], groupby = [:group1], show_overall = false) # deprecated
            reftest(t, "references/table_one/two_rows_one_group_show_overall_false")

            t = table_one(df, [:value1, :value2], groupby = [:group1], show_total = false)
            reftest(t, "references/table_one/two_rows_one_group_show_total_false")

            t = table_one(df, [:value1, :value2], groupby = [:group1, :group2])
            reftest(t, "references/table_one/two_rows_two_groups")

            t = table_one(df, [:value1], groupby = [:group1, :group2], show_pvalues = true)
            reftest(t, "references/table_one/one_row_two_groups_pvalues")

            t = table_one(df, [:value1], groupby = [:group1], show_pvalues = true, show_tests = true, show_confints = true)
            reftest(t, "references/table_one/one_row_one_group_pvalues_tests_confints")

            t = table_one(df, [:value1, :value2], groupby = [:group1, :group2], group_totals = [:group2])
            reftest(t, "references/table_one/group_totals_two_groups_one_total")

            t = table_one(df, [:value1, :value2], groupby = [:group1, :group2, :group3], group_totals = [:group3], show_n = true)
            reftest(t, "references/table_one/group_totals_three_groups_one_total_level_three")

            t = table_one(df, ["value1", "value2"], groupby = ["group1", "group2", "group3"], group_totals = "group2", show_n = true)
            reftest(t, "references/table_one/group_totals_three_groups_one_total_level_two")

            function summarizer(col)
                m = mean(col)
                s = std(col)
                (m => "Mean", s => "SD")
            end

            t = table_one(df, [:value1 => [mean, std => "SD"], :value1 => summarizer])
            reftest(t, "references/table_one/vector_and_function_arguments")

            t = table_one(df2, :value, groupby = :dose)
            reftest(t, "references/table_one/natural_sort_order")

            @test_throws SortingError t = table_one(unsortable_df, [:value], groupby = :parameters)
            t = table_one(unsortable_df, [:value], groupby = :parameters, sort = false)
            reftest(t, "references/table_one/sort_false")

            t = table_one(
                (;
                    empty = Union{Float64,Missing}[missing, missing, missing, 1, 2, 3],
                    group = [1, 1, 1, 2, 2, 2]
                ),
                [:empty],
                groupby = :group
            )
            reftest(t, "references/table_one/all_missing_group")

            data = (; x = [1, 2, 3, 4, 5, 6], y = ["A", "A", "B", "B", "B", "A"], z = ["C", "C", "C", "D", "D", "D"])
            t = table_one(data, :x, groupby = [:y, :z], sort = false)
            reftest(t, "references/table_one/nested_spans_bad_sort")

            data = (;
                category = ["a", "b", "c", "b", missing, "b", "c", "c"],
                group = [1, 1, 1, 1, 2, 2, 2, 2]
            )
            t = table_one(data, [:category], groupby = :group)
            reftest(t, "references/table_one/category_with_missing")

            data = (;
                value = 1:6,
                group1 = ["A", missing, "A", "B", "B", missing],
                group2 = ["D", missing, "D", "D", missing, missing],
            )
            t = table_one(data, [:value], groupby = [:group1, :group2], group_totals = :group2)
            reftest(t, "references/table_one/missing_as_a_group_factor")

            t = table_one(df)
            reftest(t, "references/table_one/single_arg")

            t = table_one(df, groupby = :group1)
            reftest(t, "references/table_one/single_arg_with_groupby")

            df_col_labels = DataFrame(A = 1:4, B = ["a", "b", "a", "b"])
            DataFrames.colmetadata!(df_col_labels, :A, "label", "Value A")
            DataFrames.colmetadata!(df_col_labels, :B, "label", "Value B")
            t = table_one(df_col_labels)
            reftest(t, "references/table_one/col_metadata_labels")

            # Test custom defaults for numeric and categorical analyses
            custom_numeric(col) = col -> (mean(skipmissing(col)) => "Mean",)
            custom_categorical(col) = col -> (length(unique(col)) => "N Unique",)
            SummaryTables.with_defaults(; table_one = (; numeric_default = custom_numeric, categorical_default = custom_categorical)) do
                t = table_one(df, [:value1, :group1])
                reftest(t, "references/table_one/custom_analysis_defaults")
            end

            # Test custom defaults passed via keywords (should produce same result)
            t = table_one(df, [:value1, :group1]; numeric_default = custom_numeric, categorical_default = custom_categorical)
            reftest(t, "references/table_one/custom_analysis_defaults")

            # Custom vector of functions like in normal interface
            t = table_one(df, [:value1, :group1]; numeric_default = [mean, std, minimum => "min"])
            reftest(t, "references/table_one/custom_analysis_defaults_vector_of_funcs")

            # Bools are categorical for table_one
            t = table_one((; bool = [true, false, true, true, missing]))
            reftest(t, "references/table_one/bool_as_categorical")
        end


        @testset "listingtable" begin
            @test_throws MethodError listingtable(df)

            @test_throws SummaryTables.TooManyRowsError listingtable(df, :value1)
            @test_throws SummaryTables.TooManyRowsError listingtable(df, :value2)
            @test_throws SummaryTables.TooManyRowsError listingtable(df, :value1, rows = [:group1])

            t = listingtable(df, :value1, rows = [:group1, :group2, :group3])
            reftest(t, "references/listingtable/rows_only")

            t = listingtable(df, :value1, cols = [:group1, :group2, :group3])
            reftest(t, "references/listingtable/cols_only")

            t = listingtable(df, :value1, rows = [:group1, :group2], cols = [:group3])
            reftest(t, "references/listingtable/two_rows_one_col")

            t = listingtable(df, :value1, rows = [:group1], cols = [:group2, :group3])
            reftest(t, "references/listingtable/one_row_two_cols")

            t = listingtable(df, :value1,
                rows = [:group1, :group2],
                cols = [:group3],
                summarize_rows = [mean]
            )
            reftest(t, "references/listingtable/summarize_end_rows")

            t = listingtable(df, :value1,
                rows = [:group1, :group2],
                cols = [:group3],
                summarize_rows = [mean, std]
            )
            reftest(t, "references/listingtable/summarize_end_rows_two_funcs")

            t = listingtable(df, :value1,
                rows = [:group1, :group2],
                cols = [:group3],
                summarize_rows = :group2 => [mean]
            )
            reftest(t, "references/listingtable/summarize_last_group_rows")

            t = listingtable(df, "value1",
                rows = ["group1", "group2"],
                cols = ["group3"],
                summarize_rows = "group1" => [mean]
            )
            reftest(t, "references/listingtable/summarize_first_group_rows")

            t = listingtable(df, :value1,
                cols = [:group1, :group2],
                rows = [:group3],
                summarize_cols = [mean, std]
            )
            reftest(t, "references/listingtable/summarize_end_cols_two_funcs")

            t = listingtable(df, :value1,
                cols = [:group1, :group2],
                rows = [:group3],
                summarize_cols = :group2 => [mean]
            )
            reftest(t, "references/listingtable/summarize_last_group_cols")

            t = listingtable(df, :value1,
                cols = [:group1, :group2],
                rows = [:group3],
                summarize_cols = :group1 => [mean]
            )
            reftest(t, "references/listingtable/summarize_first_group_cols")

            t = listingtable(df, :value1 => "Value 1",
                rows = [:group1 => "Group 1", :group2 => "Group 2"],
                cols = [:group3 => "Group 3"],
                summarize_rows = [mean => "Mean", minimum => "Minimum"]
            )
            reftest(t, "references/listingtable/renaming")

            t = listingtable(df, :value1 => "Value 1",
                rows = [:group1],
                cols = [:group2, :group3],
                variable_header = false,
            )
            reftest(t, "references/listingtable/no_variable_header")

            t = listingtable(df2, :value, rows = [:id, :dose])
            reftest(t, "references/listingtable/natural_sort_order")

            t = listingtable(df2, :value, rows = [:id, :dose], summarize_rows = [mean, mean], summarize_cols = [mean, mean])
            reftest(t, "references/listingtable/two_same_summarizers")

            @test_throws SortingError t = listingtable(unsortable_df, :value, rows = :parameters, cols = [:group2, :group])
            t = listingtable(unsortable_df, :value, cols = :parameters, rows = [:group2, :group], sort = false)
            reftest(t, "references/listingtable/sort_false")

            pt = listingtable(df, :value1, Pagination(rows = 1);
                rows = [:group1, :group2], cols = :group3)
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_rows=1_$i")
            end

            pt = listingtable(df, :value1, Pagination(rows = 2);
                rows = [:group1, :group2], cols = :group3)
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_rows=2_$i")
            end

            pt = listingtable(df, :value1, Pagination(cols = 1);
                cols = [:group1, :group2], rows = :group3)
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_cols=1_$i")
            end

            pt = listingtable(df, :value1, Pagination(cols = 2);
                cols = [:group1, :group2], rows = :group3)
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_cols=2_$i")
            end

            pt = listingtable(df, :value1, Pagination(rows = 1, cols = 2);
                cols = [:group1, :group2], rows = :group3)
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_rows=1_cols=2_$i")
            end

            if func === as_html
                reftest(pt, "references/paginated_table_interactive")
            end

            pt = listingtable(df, :value1, Pagination(rows = 1);
                rows = [:group1, :group2], cols = :group3, summarize_rows = [mean, std])
            @test length(pt.pages) == 1
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_rows=2_summarized_$i")
            end

            pt = listingtable(df, :value1, Pagination(rows = 1);
                rows = [:group1, :group2], cols = :group3, summarize_rows = :group2 => [mean, std])
            @test length(pt.pages) == 4
            for (i, page) in enumerate(pt.pages)
                reftest(page.table, "references/listingtable/pagination_rows=2_summarized_grouplevel_2_$i")
            end

            pt = listingtable(df, :value1, Pagination(rows = 1);
                rows = [:group1, :group2], cols = :group3, summarize_rows = :group1 => [mean, std])
            @test length(pt.pages) == 2
            for (i, page) in enumerate(pt.pages)
                reftest(t, "references/listingtable/pagination_rows=2_summarized_grouplevel_1_$i")
            end

            t = listingtable(df_missing_groups, :value, rows = :A, cols = :B)
            reftest(t, "references/listingtable/missing_groups")

            # Test label metadata
            df_with_labels = DataFrame(A = 1:4, B = ["a", "b", "a", "b"], C = ["x", "x", "y", "y"])
            DataFrames.colmetadata!(df_with_labels, :A, "label", "Value A")
            DataFrames.colmetadata!(df_with_labels, :B, "label", "Value B")
            DataFrames.colmetadata!(df_with_labels, :C, "label", "Group C")

            t = listingtable(df_with_labels, :A, rows = [:C], cols = [:B])
            reftest(t, "references/listingtable/label_metadata")

            # Manual labels should override metadata
            t = listingtable(df_with_labels, :A => "Custom A", rows = [:C => "Custom C"], cols = [:B])
            reftest(t, "references/listingtable/label_metadata_override")
        end

        @testset "summarytable" begin
            @test_throws ArgumentError("No summary analyses defined.") t = summarytable(df, :value1)

            t = summarytable(df, :value1, summary = [mean])
            reftest(t, "references/summarytable/no_group_one_summary")

            t = summarytable(df, :value1, summary = [mean, std => "SD"])
            reftest(t, "references/summarytable/no_group_two_summaries")

            t = summarytable(df, :value1, rows = [:group1 => "Group 1"], summary = [mean])
            reftest(t, "references/summarytable/one_rowgroup_one_summary")

            t = summarytable(df, :value1, rows = [:group1 => "Group 1"], summary = [mean, std])
            reftest(t, "references/summarytable/one_rowgroup_two_summaries")

            t = summarytable(df, :value1, rows = [:group1 => "Group 1"], cols = [:group2 => "Group 2"], summary = [mean])
            reftest(t, "references/summarytable/one_rowgroup_one_colgroup_one_summary")
            
            t = summarytable(df, :value1, rows = [:group1 => "Group 1"], cols = [:group2 => "Group 2"], summary = [mean, std])
            reftest(t, "references/summarytable/one_rowgroup_one_colgroup_two_summaries")

            t = summarytable(df, :value1, rows = [:group1 => "Group 1", :group2], cols = [:group3 => "Group 3"], summary = [mean, std])
            reftest(t, "references/summarytable/two_rowgroups_one_colgroup_two_summaries")

            t = summarytable(df, "value1", rows = ["group1" => "Group 1", "group2"], cols = ["group3" => "Group 3"], summary = [mean, std], variable_header = false)
            reftest(t, "references/summarytable/two_rowgroups_one_colgroup_two_summaries_no_header")  
            
            t = summarytable(df, :value1, summary = [mean, mean])
            reftest(t, "references/summarytable/two_same_summaries")  

            t = summarytable(df2, :value, rows = [:id, :dose], summary = [mean])
            reftest(t, "references/summarytable/natural_sort_order")

            @test_throws SortingError t = summarytable(unsortable_df, :value, rows = :parameters, cols = [:group2, :group], summary = [mean])
            t = summarytable(unsortable_df, :value, cols = :parameters, rows = [:group2, :group], summary = [mean], sort = false)
            reftest(t, "references/summarytable/sort_false")

            t = summarytable(df_missing_groups, :value, rows = :A, cols = :B, summary = [sum])
            reftest(t, "references/summarytable/missing_groups")

            df_with_labels = DataFrame(A = 1:4, B = ["a", "b", "a", "b"], C = ["x", "x", "y", "y"])
            DataFrames.colmetadata!(df_with_labels, :A, "label", "Value A")
            DataFrames.colmetadata!(df_with_labels, :B, "label", "Value B")
            DataFrames.colmetadata!(df_with_labels, :C, "label", "Group C")
            t = summarytable(df_with_labels, :A, rows = [:B, :C], summary = [only])
            reftest(t, "references/summarytable/column_label_metadata")
        end

        @testset "simple table" begin
            t = simple_table(df)
            reftest(t, "references/simple_table/no_args")

            t = simple_table(df, [:value1, :group3, :group1])
            reftest(t, "references/simple_table/three_cols")

            t = simple_table(df, [:value1, :group3, :group1]; halign = :left)
            reftest(t, "references/simple_table/three_cols_halign_left")

            t = simple_table(df, [:value1, :group3, :group1]; halign = [:left, :center, :right])
            reftest(t, "references/simple_table/three_cols_halign_left_center_right")

            t = simple_table(df, [:value1, :group3, :group1]; subheaders = ["Sub1", "Sub2", "Sub3"])
            reftest(t, "references/simple_table/three_cols_subheaders")
            
            t = simple_table(df, [:value1, :group3, :group1]; halign = [:left, :center, :right], subheaders = ["Sub1", "Sub2", "Sub3"])
            reftest(t, "references/simple_table/three_cols_subheaders_and_haligns")

            t = simple_table(df, ["value1", :group3 => "Group 3", :group1 => Annotated("Group 1", "is annotated")])
            reftest(t, "references/simple_table/three_cols_with_names")

            df_with_labels = DataFrame(A = 1:4, B = ["a", "b", "a", "b"], C = ["x", "x", "y", "y"])
            DataFrames.colmetadata!(df_with_labels, :A, "label", "Value A")
            DataFrames.colmetadata!(df_with_labels, :B, "label", "Value B")
            DataFrames.colmetadata!(df_with_labels, :C, "label", "Group C")
            t = simple_table(df_with_labels)
        end

        @testset "overview_table" begin
            _df = (;
                continuous = [missing; 1:99; 99],
                categorical = [missing; fill("A", 35); fill("B", 25); fill("C", 40)],
            )

            t = overview_table(_df)
            reftest(t, "references/overview_table/basic")

            _df = (;
                categorical = reduce(vcat, [fill(str, i) for (str, i) in zip(string.('A':'Z'), (1:26) .^ 2)])
            )
            t = overview_table(_df)
            reftest(t, "references/overview_table/categories_exceeded")

            t = overview_table(_df; max_categories = 5)
            reftest(t, "references/overview_table/max_categories_5")

            _df = DataFrame(a = [1, 2, 3], b = ["A", "B", "C"])
            DataFrames.colmetadata!(_df, :a, "label", "Label for a")
            DataFrames.colmetadata!(_df, :a, "other_label", "Other label for a")
            t = overview_table(_df)
            reftest(t, "references/overview_table/default_label_metadata_key")

            # Test deprecated label_metadata_key still works
            t = overview_table(_df; label_metadata_key = "other_label")
            reftest(t, "references/overview_table/other_label_metadata_key")

            _df_mis = DataFrame(floatmissing = Union{Float64,Missing}[missing, missing, missing], justmissing = [missing, missing, missing])
            t = overview_table(_df_mis)
            reftest(t, "references/overview_table/only_missings")
        end

        @testset "annotations" begin
            t = Table(
                [
                    SpannedCell(1, 1, Annotated("A", "Note 1")),
                    SpannedCell(1, 2, Annotated("B", "Note 2")),
                    SpannedCell(2, 1, Annotated("C", "Note 3")),
                    SpannedCell(2, 2, Annotated("D", "Note 1")),
                ],
                nothing,
                nothing,
            )
            reftest(t, "references/annotations/automatic_annotations")
            t = Table(
                [
                    SpannedCell(1, 1, Annotated("A", "Note 1", label = "X")),
                    SpannedCell(1, 2, Annotated("B", "Note 2", label = "Y")),
                    SpannedCell(2, 1, Annotated("C", "Note 3")),
                    SpannedCell(2, 2, Annotated("D", "Note 4")),
                ],
                nothing,
                nothing,
            )
            reftest(t, "references/annotations/manual_annotations")

            t = Table(
                [
                    SpannedCell(1, 1, Annotated("A", "Note 1", label = "A")),
                    SpannedCell(1, 2, Annotated("A", "Note 1", label = "B")),
                ],
                nothing,
                nothing,
            )
            if func !== as_docx # TODO needs logic rework for this backend
                @test_throws_message "Found the same annotation" show(devnull, func(t))
            end

            t = Table(
                [
                    SpannedCell(1, 1, Annotated("A", "Note 1", label = "A")),
                    SpannedCell(1, 2, Annotated("A", "Note 2", label = "A")),
                ],
                nothing,
                nothing,
            )
            if func !== as_docx # TODO needs logic rework for this backend
                @test_throws_message "Found the same label" show(devnull, func(t))
            end

            t = Table(
                [
                    SpannedCell(1, 1, Annotated(0.1235513245, "Note 1", label = "A")),
                ],
                nothing,
                nothing,
            )
            reftest(t, "references/annotations/annotated_float")
        end

        @testset "manual footnotes" begin
            for linebreak_footnotes in [true, false]
                t = Table(
                    [
                        SpannedCell(1, 1, "Cell 1"),
                        SpannedCell(1, 2, "Cell 2"),
                    ];
                    footnotes = ["First footnote.", "Second footnote."],
                    linebreak_footnotes,
                )
                reftest(t, "references/manual_footnotes/footnotes_linebreaks_$linebreak_footnotes")

                t = Table(
                    [
                        SpannedCell(1, 1, Annotated("Cell 1", "Note 1")),
                        SpannedCell(1, 2, "Cell 2"),
                    ];
                    footnotes = ["First footnote.", "Second footnote."],
                    linebreak_footnotes,
                )
                reftest(t, "references/manual_footnotes/footnotes_and_annotated_linebreaks_$linebreak_footnotes")
            end
        end

        @testset "Replace" begin
            t = Table(
                [
                    SpannedCell(1, 1, missing),
                    SpannedCell(1, 2, missing),
                    SpannedCell(2, 1, 1),
                    SpannedCell(2, 2, 2),
                ],
                nothing,
                nothing,
                postprocess = [ReplaceMissing()]
            )
            reftest(t, "references/replace/replacemissing_default")

            t = Table(
                [
                    SpannedCell(1, 1, missing),
                    SpannedCell(1, 2, nothing),
                    SpannedCell(2, 1, 1),
                    SpannedCell(2, 2, 2),
                ],
                nothing,
                nothing,
                postprocess = [ReplaceMissing(with = "???")]
            )
            reftest(t, "references/replace/replacemissing_custom")

            t = Table(
                [
                    SpannedCell(1, 1, missing),
                    SpannedCell(1, 2, nothing),
                    SpannedCell(2, 1, 1),
                    SpannedCell(2, 2, 2),
                ],
                nothing,
                nothing,
                postprocess = [Replace(x -> x isa Int, "an Int was here")]
            )
            reftest(t, "references/replace/replace_predicate_value")

            t = Table(
                [
                    SpannedCell(1, 1, missing),
                    SpannedCell(1, 2, nothing),
                    SpannedCell(2, 1, 1),
                    SpannedCell(2, 2, 2),
                ],
                nothing,
                nothing,
                postprocess = [Replace(x -> x isa Int, x -> x + 10)]
            )
            reftest(t, "references/replace/replace_predicate_function")
        end

        @testset "Global rounding" begin
            cells = [
                SpannedCell(1, 1, sqrt(2)),
                SpannedCell(1, 2, 12352131.000001),
                SpannedCell(2, 1, sqrt(11251231251243123)),
                SpannedCell(2, 2, sqrt(0.00000123124)),
                SpannedCell(3, 1, Concat(1.23456, " & ", 0.0012345)),
                SpannedCell(3, 2, Multiline(1.23456, 0.0012345)),
            ]
            t = Table(
                cells,
                nothing,
                nothing,
            )
            reftest(t, "references/global_rounding/default")

            t = Table(
                cells,
                nothing,
                nothing,
                round_mode = nothing,
            )
            reftest(t, "references/global_rounding/no_rounding")
            
            for round_mode in [:auto, :sigdigits, :digits]
                for trailing_zeros in [true, false]
                    for round_digits in [1, 3]
                        t = Table(
                            cells,
                            nothing,
                            nothing;
                            round_mode,
                            trailing_zeros,
                            round_digits
                        )
                        reftest(t, "references/global_rounding/$(round_mode)_$(trailing_zeros)_$(round_digits)")

                        SummaryTables.with_defaults(; round_mode, trailing_zeros, round_digits) do
                            t2 = Table(cells)
                            # same reftest, just via defaults
                            reftest(t, "references/global_rounding/$(round_mode)_$(trailing_zeros)_$(round_digits)")
                        end
                    end
                end
            end
        end

        @testset "Character escaping" begin
            cells = [
                SpannedCell(1, 1, "& % \$ # _ { } ~ ^ \\ < > \" ' @ `")
            ]
            t = Table(
                cells,
                nothing,
                nothing,
            )
            reftest(t, "references/character_escaping/problematic_characters")
        end

        @testset "Merged cells with special values" begin
            contents = [
                Multiline("A", "B"),
                Superscript("Sup"),
                Subscript("Sub"),
                Concat("A", "B"),
                Annotated("Label", "Annotation"),
            ]
            cells = Cell.(contents, merge = true)
            t = Table(hcat(cells, cells))
            reftest(t, "references/merged_cells/custom_datatypes")
        end

        @testset "Styles" begin
            cells = [
                SpannedCell(1, 1, "Row 1"),
                SpannedCell(2, 1, "Row 2"),
                SpannedCell(3, 1, "Row 3"),
                SpannedCell(1:3, 2, "top", CellStyle(valign = :top)),
                SpannedCell(1:3, 3, "center", CellStyle(valign = :center)),
                SpannedCell(1:3, 4, "bottom", CellStyle(valign = :bottom)),
            ]
            t = Table(
                cells,
                nothing,
                nothing,
            )
            reftest(t, "references/styles/valign")
        end

        @testset "Row and column gaps" begin
            if func !== as_docx # TODO needs logic rework for this backend
                t = Table([SpannedCell(1, 1, "Row 1")], rowgaps = [1 => 5.0])
                @test_throws_message "No row gaps allowed for a table with one row" show(devnull, func(t))
                t = Table([SpannedCell(1, 1, "Column 1")], colgaps = [1 => 5.0])
                @test_throws_message "No column gaps allowed for a table with one column" show(devnull, func(t))
                t = Table([SpannedCell(1, 1, "Row 1"), SpannedCell(2, 1, "Row 2")], rowgaps = [1 => 5.0, 2 => 5.0])
                @test_throws_message "A row gap index of 2 is invalid for a table with 2 rows" show(devnull, func(t))
                t = Table([SpannedCell(1, 1, "Column 1"), SpannedCell(1, 2, "Column 2")], colgaps = [1 => 5.0, 2 => 5.0])
                @test_throws_message "A column gap index of 2 is invalid for a table with 2 columns" show(devnull, func(t))
                t = Table([SpannedCell(1, 1, "Row 1"), SpannedCell(2, 1, "Row 2")], rowgaps = [0 => 5.0])
                @test_throws_message "A row gap index of 0 is invalid, must be at least 1" show(devnull, func(t))
                t = Table([SpannedCell(1, 1, "Column 1"), SpannedCell(1, 2, "Column 2")], colgaps = [0 => 5.0])
                @test_throws_message "A column gap index of 0 is invalid, must be at least 1" show(devnull, func(t))
            end
            t = Table([SpannedCell(i, j, "$i, $j") for i in 1:4 for j in 1:4], rowgaps = [1 => 4.0, 2 => 8.0], colgaps = [2 => 4.0, 3 => 8.0])
            reftest(t, "references/row_and_column_gaps/singlecell")
            t = Table([SpannedCell(2:4, 1, "Spanned rows"), SpannedCell(1, 2:4, "Spanned columns")], rowgaps = [1 => 4.0], colgaps = [2 => 4.0])
            reftest(t, "references/row_and_column_gaps/spanned_cells")
        end

        @testset "Styled" begin
            conc = Cell(
                Annotated(
                    Concat(Styled("Red", color = "#FF0000"), " and ", Styled("Blue", color = "#0000FF")),
                    Concat("This annotation should have ", Styled("italics"; italic=true)),
                    label = Styled("Orange", color = "#FFAA00", bold = true)
                )
            )
            all = Cell(Styled("Green, bold, italic, underlined", color = "#00CC00", bold = true, italic = true, underline = true))
            nested = Cell(Styled(SummaryTables.Concat(Styled("Nested red ", color = "#FF0000"), "and blue"), color = "#0000FF"))
            number = Cell(Styled(sin(1.4), color = "#ABCDEF"))
            tbl = Table([ 
                conc all; 
                nested number; 
            ];
                footnotes=[
                    Concat("This footnote should have ", Styled("bold"; bold=true))
                ]
            )
            reftest(tbl, "references/styled/example")
        end

        @testset "annotation label style" begin
            tbl = Table([Cell(Annotated("$row$col", "annotation $row$col")) for row in 1:4, col in 'A':'C'])
            for style in [:letters_lower, :letters_upper, :roman_lower, :roman_upper, :numbers]
                SummaryTables.with_defaults(; annotation_labels = style) do
                    reftest(tbl, "references/defaults/annotation_labels_$style")
                end
            end

            tbl = Table([Cell(Annotated("$row$col", "annotation $row$col")) for row in 1:1, col in 'A':'C'])
            SummaryTables.with_defaults(annotation_labels = ["*", "†", "‡"]) do
                reftest(tbl, "references/defaults/annotation_labels_custom")
            end

            SummaryTables.with_defaults(annotation_labels = ["*", "†"]) do
                @test_throws "provides 2 labels, but 3 labels are needed" repr("text/html", tbl)
            end
        end
    end
end


@testset "auto rounding" begin
    @test SummaryTables.auto_round(        1234567, target_digits = 4) == 1.235e6
    @test SummaryTables.auto_round(       123456.7, target_digits = 4) == 123457
    @test SummaryTables.auto_round(       12345.67, target_digits = 4) == 12346
    @test SummaryTables.auto_round(       1234.567, target_digits = 4) == 1235
    @test SummaryTables.auto_round(       123.4567, target_digits = 4) == 123.5
    @test SummaryTables.auto_round(       12.34567, target_digits = 4) == 12.35
    @test SummaryTables.auto_round(       1.234567, target_digits = 4) == 1.235
    @test SummaryTables.auto_round(      0.1234567, target_digits = 4) == 0.1235
    @test SummaryTables.auto_round(     0.01234567, target_digits = 4) == 0.01235
    @test SummaryTables.auto_round(    0.001234567, target_digits = 4) == 0.001235
    @test SummaryTables.auto_round(   0.0001234567, target_digits = 4) == 0.0001235
    @test SummaryTables.auto_round(  0.00001234567, target_digits = 4) == 1.235e-5
    @test SummaryTables.auto_round( 0.000001234567, target_digits = 4) == 1.235e-6
    @test SummaryTables.auto_round(0.0000001234567, target_digits = 4) == 1.235e-7

    @test SummaryTables.auto_round(0.1, target_digits = 4) == 0.1
    @test SummaryTables.auto_round(0.0, target_digits = 4) == 0
    @test SummaryTables.auto_round(1.0, target_digits = 4) == 1
end

@testset "Formatted float strings" begin
    RF = SummaryTables.RoundedFloat
    str(rf) = sprint(io -> SummaryTables._showas(io, MIME"text"(), rf))

    x = 0.006789
    
    @test str(RF(x, 3, :auto, true)) == "0.00679"
    @test str(RF(x, 3, :sigdigits, true)) == "0.00679"
    @test str(RF(x, 3, :digits, true)) == "0.007"

    @test str(RF(x, 2, :auto, true)) == "0.0068"
    @test str(RF(x, 2, :sigdigits, true)) == "0.0068"
    @test str(RF(x, 2, :digits, true)) == "0.01"

    x = 0.120

    @test str(RF(x, 3, :auto, true)) == "0.12"
    @test str(RF(x, 3, :sigdigits, true)) == "0.12"
    @test str(RF(x, 3, :digits, true)) == "0.120"

    @test str(RF(x, 3, :auto, false)) == "0.12"
    @test str(RF(x, 3, :sigdigits, false)) == "0.12"
    @test str(RF(x, 3, :digits, false)) == "0.12"

    x = 1.0

    @test str(RF(x, 3, :auto, true)) == "1.0"
    @test str(RF(x, 3, :sigdigits, true)) == "1.0"
    @test str(RF(x, 3, :digits, true)) == "1.000"

    @test str(RF(x, 3, :auto, false)) == "1"
    @test str(RF(x, 3, :sigdigits, false)) == "1"
    @test str(RF(x, 3, :digits, false)) == "1"

    x = 12345678.910

    @test str(RF(x, 3, :auto, true)) == "1.23e7"
    @test str(RF(x, 3, :sigdigits, true)) == "1.23e7"
    @test str(RF(x, 3, :digits, true)) == "12345678.910"

    @test str(RF(x, 3, :auto, false)) == "1.23e7"
    @test str(RF(x, 3, :sigdigits, false)) == "1.23e7"
    @test str(RF(x, 3, :digits, false)) == "12345678.91"
end

@testset "QuartoNotebookRunner/typst" begin
    t = table_one((; a = 1:3, b = ["A", "B", "C"]))
    qnr = String(repr("QuartoNotebookRunner/typst", t)) # `repr` returns binary if `istextmime(mime)` is not overloaded
    @test qnr == repr("text/typst", t)
end

@testset "Defaults" begin
    # Test that with_defaults works temporarily and doesn't affect subsequent code
    original_defaults = SummaryTables.defaults()
    
    # Test round_digits default change with with_defaults
    SummaryTables.with_defaults(round_digits = 5) do
        current_defaults = SummaryTables.defaults()
        @test current_defaults.round_digits == 5
        @test current_defaults.round_mode == original_defaults.round_mode  # other fields unchanged
        @test current_defaults.trailing_zeros == original_defaults.trailing_zeros
    end
    
    # After with_defaults scope, should be back to original
    after_defaults = SummaryTables.defaults()
    @test after_defaults.round_digits == original_defaults.round_digits
    @test after_defaults == original_defaults
    
    # Test multiple parameters with with_defaults
    SummaryTables.with_defaults(round_digits = 2, round_mode = :digits, trailing_zeros = true) do
        current_defaults = SummaryTables.defaults()
        @test current_defaults.round_digits == 2
        @test current_defaults.round_mode == :digits
        @test current_defaults.trailing_zeros == true
        @test current_defaults.linebreak_footnotes == original_defaults.linebreak_footnotes  # unchanged
    end
    
    # Test that defaults! works persistently within with_defaults scope
    SummaryTables.with_defaults(round_digits = 1) do
        # Change defaults with defaults!
        SummaryTables.defaults!(round_digits = 4, round_mode = :sigdigits)
        current_defaults = SummaryTables.defaults()
        @test current_defaults.round_digits == 4
        @test current_defaults.round_mode == :sigdigits
        
        # Another call to defaults! should overwrite
        SummaryTables.defaults!(round_digits = 6)
        current_defaults = SummaryTables.defaults()
        @test current_defaults.round_digits == 6
        @test current_defaults.round_mode == original_defaults.round_mode
    end
    
    # After with_defaults scope ends, should be back to original
    final_defaults = SummaryTables.defaults()
    @test final_defaults == original_defaults
    
    @test_throws MethodError SummaryTables.defaults!(a = "a", b = "b")
end
