### A Pluto.jl notebook ###
# v0.19.9

using Markdown
using InteractiveUtils

# ╔═╡ 60f82c0a-744f-11ec-0d68-75c165356df4
begin
	import Pkg
	Pkg.activate(@__DIR__)
	Pkg.develop(path = joinpath(@__DIR__, ".."))
	# Pkg.instantiate()
	using Revise
	using SummaryTables
	using DataFrames
	using Statistics
	using RDatasets
	using StatsBase
	using CategoricalArrays
end

# ╔═╡ 53a5fad9-23e6-4ab3-8887-df9b97a2987e
md"""
# SummaryTables Examples
"""

# ╔═╡ d10208df-31f4-4000-8d00-34dfe70bc696
md"""
We will be using the following data set for all our examples.
"""

# ╔═╡ e23ed278-e0f4-4ba8-a61a-b07cab283db2
lung = let
	lung = dataset("survival", "lung")
	lung.Sex = categorical(lung.Sex)
	lung.Sex = recode(lung.Sex, 1 => "m", 2 => "f")
	lung.AgeGroup = ifelse.(lung.Age .> median(lung.Age), "older", "younger")
	lung.Status = categorical(lung.Status)
	lung.Status = recode(lung.Status, 1 => "censored", 2 => "dead")
	lung
end

# ╔═╡ 4dda7e45-32e2-4312-94db-d77829097c7b
md"""
`SummaryTables` exports three main functions:
- `table_one`
- `listingtable`
- `summarytable`

We will start with `table_one`, which creates a table where columns from the dataset are summarized in rows, while those statistics can be stratified or grouped by splitting into several columns.
"""

# ╔═╡ ac1c5a5f-aa1a-497b-a847-7095c77bda56
md"""
## `table_one`
"""

# ╔═╡ 1e00647c-ab09-4910-90c7-9f06a679acab
macro docblock(sym)
	quote
		md = @doc($(esc(sym)))
		Markdown.parse("!!! docs\n$(replace(string(md), r"^"m => "    ")))\n")
	end
end

# ╔═╡ 437be826-795b-4f9e-a600-c9b76b43bca3
@docblock table_one

# ╔═╡ 9c12afea-b763-455e-9d25-e86b9f5371c2
md"""
We start by summarizing a single variable, `:Age`. By default, for a numerical column, two rows of summary statistics with mean, standard deviation, median and min/max are generated.
"""

# ╔═╡ b43471fb-f7a3-4085-8382-e05163a0f089
table_one(lung, :Age)

# ╔═╡ 072af7fd-0fca-44b0-80d8-0c2ee43d17f9
md"""
Let's add another variable, `:Chol`. For this, we pass a `Vector` of `Symbol`s:
"""

# ╔═╡ 2b48d4b3-866a-4cf6-81e3-6bf9a3d51355
table_one(lung, [:Age, :WtLoss])

# ╔═╡ 235086e3-624a-4fd0-be09-795ab7020d55
md"""
You can see that this variable has another row called `Missing`, which is there because the `:WtLoss` column contained missing values.

`:WtLoss` is hard to read, so we can rename the variable using Julia's pair syntax `=>`, which is often used to pass values that belong together as one object.
"""

# ╔═╡ 7356c9f1-aaa8-427f-ba7f-53affd1cbe97
table_one(lung, [:Age, :WtLoss => "Weight Loss"])

# ╔═╡ 6a48c1a7-a6bc-4707-9ed3-b1ca7b81a8f0
md"""
Let's add one more variable with categorical data, the column `:Sex`. You can see that the summary statistic is a count and percentage this time:
"""

# ╔═╡ f3faef4f-bff4-47d2-811c-502258f397c2
table_one(lung, [:Age, :WtLoss => "Weight Loss", :Sex])

# ╔═╡ 50bee2c2-4a2a-47c3-9016-f5f3a19acf7e
md"""
We can stratify or split the columns by one or several variables.
"""

# ╔═╡ 4892bfe7-6f7a-4fa9-b82d-d950f2d71762
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = :Status
)

# ╔═╡ 452e78fc-a0e0-4365-aba3-f6e988ee515f
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = [:AgeGroup => "Age Group", :Status]
)

# ╔═╡ 7badf545-48b9-40b9-af9e-17f65191b366
md"""
To understand the counts of "f" and "m" better in relation to their groups, we can display group sizes with the keyword argument `show_n`.
"""

# ╔═╡ 5ad31a44-0c79-4377-88f0-6bed926d7e67
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = [:AgeGroup => "Age Group", :Status],
	show_n = true,
)

# ╔═╡ 69ecf7b4-0d9d-4e51-9b3f-121bc30da9c8
md"""
We can also compute simple group difference statistics across the groups we have stratified by. For this purpose, set the keyword argument `show_pvalues` to `true`:
"""

# ╔═╡ 185ebb32-388d-4f9b-8bbb-c2718422d7a7
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = [:AgeGroup => "Age Group"],
	show_n = true,
	show_pvalues = true,
)

# ╔═╡ b7e5fe3f-67d2-4c45-8a62-283fedc19f5b
md"""
To hide the test name column, set `show_tests = false`.
"""

# ╔═╡ b5e17a11-2c26-49b4-8129-a187a07262be
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = [:AgeGroup => "Age Group"],
	show_n = true,
	show_pvalues = true,
	show_tests = false,
)

# ╔═╡ 67ae5d07-b39c-42aa-8e59-f42111f1ec51
md"""
You can also hide the "Overall" column by setting `show_overall = false`.
"""

# ╔═╡ 9a479c06-b51c-4d23-93fc-c4d6b2e1972f
table_one(
	lung,
	[:Age, :WtLoss => "Weight Loss", :Sex],
	groupby = [:AgeGroup => "Age Group"],
	show_n = true,
	show_pvalues = true,
	show_tests = false,
	show_overall = false,
)

# ╔═╡ 89d3fb2f-8d64-4670-81ad-053b7d8528ba
md"""
If you want to specify summary statistics yourself, you can calculate them using a function that takes a column and returns a tuple of `value => name` pairs.
"""

# ╔═╡ 07f33391-ddf2-4770-8466-03443321bc46
begin
	function summarizer(col)
		q25, med, q75 = StatsBase.quantile(col, [0.25, 0.5, 0.75])
		(med => "Median", "$q25 / $q75" => "Q25 / Q75")
	end
	
	table_one(
		lung,
		[:Age => summarizer]
	)
end

# ╔═╡ e7d8b5b3-7514-4738-bc38-43b827e1d486
md"""
# `listingtable`
"""

# ╔═╡ b55522ac-973b-47e7-94a6-fe600a93aa1e
@docblock listingtable

# ╔═╡ e9d7d981-1211-49e3-8ce1-0272248d7437
md"""
The `listingtable` function is meant to display raw values from one variable for datasets that are split by multiple groups across rows and columns, with optional summaries across a chosen grouping level.

To show this function with the `lung` dataset, we remove some data so for the remaining grouping factors there is just one value for each grouping combination.

If we don't reduce the data, we get an error that there are too many rows for one group:
"""

# ╔═╡ 6b619eeb-7259-4ecd-ad39-f5444eb5b7c7
listingtable(
	lung,
	:Time,
	rows = [:AgeGroup, :Sex],
	cols = :Status
)

# ╔═╡ 267d3eea-e4d6-40e4-879d-0a3bb3a524ae
lung_reduced = unique(lung, [:Sex, :AgeGroup, :Status])

# ╔═╡ 68351238-b4ae-45ca-a3fc-dd9e6c255459
listingtable(
	lung_reduced,
	:Time,
	rows = [:AgeGroup, :Sex],
	cols = :Status
)

# ╔═╡ 2b1fb668-1cb1-470c-9a61-fc441e0455b5
md"""
We can rename columns with the pair syntax:
"""

# ╔═╡ aa037656-add6-48e6-84be-70b4b039977f
listingtable(
	lung_reduced,
	:Time => "Survival time in days",
	rows = [:AgeGroup => "Age group", :Sex],
	cols = :Status
)

# ╔═╡ 93e7c1e0-971f-4689-a169-d31a646e261b
md"""
Now we can summarize the data across groups. By default, the summaries are applied across all groups at once:
"""

# ╔═╡ 9afee474-66e1-413f-801a-5acc88c29097
listingtable(
	lung_reduced,
	:Time => "Survival time in days",
	rows = [:AgeGroup => "Age group", :Sex],
	cols = :Status,
	summarize_rows = [mean, std],
	summarize_cols = [sum],
)

# ╔═╡ b4a761b7-dcab-46bf-bfcd-8308dab5fbe0
md"""
The summary functions can also be renamed using the pair syntax.
"""

# ╔═╡ 2ef759ee-3fba-498a-bea9-225e010ffebc
listingtable(
	lung_reduced,
	:Time => "Survival time in days",
	rows = [:AgeGroup => "Age group", :Sex],
	cols = :Status,
	summarize_rows = [mean => "Mean", std => "SD"],
	summarize_cols = [sum => "Overall"],
)

# ╔═╡ 847bcc9c-6d6d-4c5e-86ba-4bfca36517ce
md"""
If you want separate summaries for each subgroup of a grouping variable, you can pass this grouping variable in a pair together with the summary functions. Here we summarize the rows once for each age group (`summarize_cols` works similarly):
"""

# ╔═╡ bdc37172-74e9-4847-b0e4-bd46584b2e2d
listingtable(
	lung_reduced,
	:Time => "Survival time in days",
	rows = [:AgeGroup => "Age group", :Sex],
	cols = :Status,
	summarize_rows = :AgeGroup => [mean => "Mean", std => "SD"],
	summarize_cols = [sum => "Overall"],
)

# ╔═╡ c9d5468c-df98-4fd2-9d16-a8d8638e980e
md"""
You can choose not to show the name of the raw value variable, in case it is already clear from context, using the keyword argument `variable_header = false`:
"""

# ╔═╡ 5e95cb18-0e5b-4c57-b383-b2d66cb81be9
listingtable(
	lung_reduced,
	:Time => "Survival time in days",
	rows = [:AgeGroup => "Age group", :Sex],
	cols = :Status,
	summarize_rows = :AgeGroup => [mean => "Mean", std => "SD"],
	summarize_cols = [sum => "Overall"],
	variable_header = false,
)

# ╔═╡ a9afc1bc-1de5-4544-9e16-9d93f0b31d67
md"""
## `summarytable`

The function `summarytable` is somewhat similar in structure to `listingtable` in that only one variable is analysed, but without showing the raw values. You can pass a vector of analysis functions to the keyword argument `summary`, and group rows and columns with the `rows` and `cols` keywords. The set of summaries is applied to each group.

A first basic example summarizes without grouping:
"""

# ╔═╡ 332d00be-a34f-4cd6-8dc8-2f63ef7895ea
summarytable(
	lung,
	:Time,
	summary = [mean, std]
)

# ╔═╡ cd387c02-d1c8-481c-9df3-c922b6184879
md"""
We can add a row grouping factor and rename the summary functions:
"""

# ╔═╡ 96f48319-f29c-4e8a-a56f-04a4e5d2d27a
summarytable(
	lung,
	:Time,
	rows = [:AgeGroup => "Age Group"],
	summary = [mean => "Mean", std => "SD"]
)

# ╔═╡ 2a1caf28-7537-4ff2-a6f5-2d9695a58009
md"""
We can add another row grouping factor, a column factor, and number of samples as well:
"""

# ╔═╡ 31319e94-8945-410d-b493-13a028138493
summarytable(
	lung,
	:Time,
	rows = [:AgeGroup => "Age Group", :Sex],
	cols = [:Status],
	summary = [length => "N", mean => "Mean", std => "SD"]
)

# ╔═╡ 5f16d3e3-35e9-46a8-bcbb-d5412be8b486
md"""
## Annotations
"""

# ╔═╡ 1ff7bbb4-1d3c-4250-a80a-7e31af8f3a46
md"""
SummaryTables.jl exports the `Annotated` type.
Whenever a table cell contains a value of this type, the table will get a footnote with an automatic or manually defined label attached to the value wrapped inside the `Annotated`.
"""

# ╔═╡ 2e7cdb76-19ac-435d-a5e2-6d7c790721d7
summarytable(
	lung,
	:Time => Annotated("Time", "Time was measured using a stopwatch."),
	rows = [:AgeGroup => "Age Group", :Sex],
	cols = [:Status],
	summary = [length => "N", mean => "Mean", std => "SD"]
)

# ╔═╡ 44ac2295-5b5f-472d-84d4-03ebbe424564
md"""
You can also pass a label manually using the `label` keyword argument:
"""

# ╔═╡ 62ff0490-f2e7-45e8-aac3-039b48d55d3b
summarytable(
	lung,
	:Time => Annotated("Time", "Time was measured using a stopwatch.", label = "T"),
	rows = [:AgeGroup => "Age Group", :Sex],
	cols = [:Status],
	summary = [length => "N", mean => "Mean", std => "SD"]
)

# ╔═╡ 77a8297c-04f6-4821-8cd8-763d5acd2c35
md"""
Any cell in the final table can contain an `Annotated` value.
You can also use the `Concat` type if you need to construct cell content from multiple parts, where a specific part should carry the annotation.
"""

# ╔═╡ 4755a90c-7c5b-44f1-a212-5e12517c2680
function length_with_annotation(x)
	l = length(x)
	l == 12 ? Annotated(l, "This value deserves special attention.", label = "X") : l
end

# ╔═╡ 134a201a-9048-489e-82a3-48992023c5d0
summarytable(
	lung,
	:Time => Concat(
		Annotated("Time", "Time was measured using a stopwatch.", label = "T"),
		" (hours)"
	),
	rows = [:AgeGroup => "Age Group", :Sex],
	cols = [:Status],
	summary = [length_with_annotation => "N", mean => "Mean", std => "SD"]
)

# ╔═╡ ff8e167c-b388-42aa-b4db-d96f868ac860
md"""
# Appendix

Packages used:
"""

# ╔═╡ Cell order:
# ╟─53a5fad9-23e6-4ab3-8887-df9b97a2987e
# ╟─d10208df-31f4-4000-8d00-34dfe70bc696
# ╠═e23ed278-e0f4-4ba8-a61a-b07cab283db2
# ╟─4dda7e45-32e2-4312-94db-d77829097c7b
# ╟─ac1c5a5f-aa1a-497b-a847-7095c77bda56
# ╟─1e00647c-ab09-4910-90c7-9f06a679acab
# ╠═437be826-795b-4f9e-a600-c9b76b43bca3
# ╟─9c12afea-b763-455e-9d25-e86b9f5371c2
# ╠═b43471fb-f7a3-4085-8382-e05163a0f089
# ╟─072af7fd-0fca-44b0-80d8-0c2ee43d17f9
# ╠═2b48d4b3-866a-4cf6-81e3-6bf9a3d51355
# ╟─235086e3-624a-4fd0-be09-795ab7020d55
# ╠═7356c9f1-aaa8-427f-ba7f-53affd1cbe97
# ╟─6a48c1a7-a6bc-4707-9ed3-b1ca7b81a8f0
# ╠═f3faef4f-bff4-47d2-811c-502258f397c2
# ╟─50bee2c2-4a2a-47c3-9016-f5f3a19acf7e
# ╠═4892bfe7-6f7a-4fa9-b82d-d950f2d71762
# ╠═452e78fc-a0e0-4365-aba3-f6e988ee515f
# ╟─7badf545-48b9-40b9-af9e-17f65191b366
# ╠═5ad31a44-0c79-4377-88f0-6bed926d7e67
# ╟─69ecf7b4-0d9d-4e51-9b3f-121bc30da9c8
# ╠═185ebb32-388d-4f9b-8bbb-c2718422d7a7
# ╟─b7e5fe3f-67d2-4c45-8a62-283fedc19f5b
# ╠═b5e17a11-2c26-49b4-8129-a187a07262be
# ╟─67ae5d07-b39c-42aa-8e59-f42111f1ec51
# ╠═9a479c06-b51c-4d23-93fc-c4d6b2e1972f
# ╟─89d3fb2f-8d64-4670-81ad-053b7d8528ba
# ╠═07f33391-ddf2-4770-8466-03443321bc46
# ╟─e7d8b5b3-7514-4738-bc38-43b827e1d486
# ╠═b55522ac-973b-47e7-94a6-fe600a93aa1e
# ╠═e9d7d981-1211-49e3-8ce1-0272248d7437
# ╠═6b619eeb-7259-4ecd-ad39-f5444eb5b7c7
# ╠═267d3eea-e4d6-40e4-879d-0a3bb3a524ae
# ╠═68351238-b4ae-45ca-a3fc-dd9e6c255459
# ╟─2b1fb668-1cb1-470c-9a61-fc441e0455b5
# ╠═aa037656-add6-48e6-84be-70b4b039977f
# ╟─93e7c1e0-971f-4689-a169-d31a646e261b
# ╠═9afee474-66e1-413f-801a-5acc88c29097
# ╟─b4a761b7-dcab-46bf-bfcd-8308dab5fbe0
# ╠═2ef759ee-3fba-498a-bea9-225e010ffebc
# ╟─847bcc9c-6d6d-4c5e-86ba-4bfca36517ce
# ╠═bdc37172-74e9-4847-b0e4-bd46584b2e2d
# ╟─c9d5468c-df98-4fd2-9d16-a8d8638e980e
# ╠═5e95cb18-0e5b-4c57-b383-b2d66cb81be9
# ╟─a9afc1bc-1de5-4544-9e16-9d93f0b31d67
# ╠═332d00be-a34f-4cd6-8dc8-2f63ef7895ea
# ╟─cd387c02-d1c8-481c-9df3-c922b6184879
# ╠═96f48319-f29c-4e8a-a56f-04a4e5d2d27a
# ╟─2a1caf28-7537-4ff2-a6f5-2d9695a58009
# ╠═31319e94-8945-410d-b493-13a028138493
# ╟─5f16d3e3-35e9-46a8-bcbb-d5412be8b486
# ╟─1ff7bbb4-1d3c-4250-a80a-7e31af8f3a46
# ╠═2e7cdb76-19ac-435d-a5e2-6d7c790721d7
# ╟─44ac2295-5b5f-472d-84d4-03ebbe424564
# ╠═62ff0490-f2e7-45e8-aac3-039b48d55d3b
# ╟─77a8297c-04f6-4821-8cd8-763d5acd2c35
# ╠═4755a90c-7c5b-44f1-a212-5e12517c2680
# ╠═134a201a-9048-489e-82a3-48992023c5d0
# ╟─ff8e167c-b388-42aa-b4db-d96f868ac860
# ╠═60f82c0a-744f-11ec-0d68-75c165356df4
