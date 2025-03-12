import{_ as a,c as t,o,az as r}from"./chunks/framework.DB-8trG8.js";const m=JSON.parse('{"title":"Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"resources/changelog.md","filePath":"resources/changelog.md","lastUpdated":null}'),l={name:"resources/changelog.md"};function s(i,e,n,u,d,h){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h1><h2 id="unreleased" tabindex="-1">Unreleased <a class="header-anchor" href="#unreleased" aria-label="Permalink to &quot;Unreleased&quot;">​</a></h2><h2 id="3.3.0-2025-03-12" tabindex="-1">3.3.0 - 2025-03-12 <a class="header-anchor" href="#3.3.0-2025-03-12" aria-label="Permalink to &quot;3.3.0 - 2025-03-12 {#3.3.0-2025-03-12}&quot;">​</a></h2><ul><li>Added the <code>overview_table</code> function which creates a quick summary of all columns from a tabular data source, styled after the <code>dfSummary</code> function from R&#39;s <code>summarytools</code> package <a href="https://github.com/PumasAI/SummaryTables.jl/pull/85" target="_blank" rel="noreferrer">#85</a>.</li></ul><h2 id="3.2.0-2025-02-24" tabindex="-1">3.2.0 - 2025-02-24 <a class="header-anchor" href="#3.2.0-2025-02-24" aria-label="Permalink to &quot;3.2.0 - 2025-02-24 {#3.2.0-2025-02-24}&quot;">​</a></h2><ul><li>Added <code>Styled</code> struct for partial styling of text within a cell, including bold, italic, underline and text color. Note that you need to add <code>\\usepackage{xcolor}</code> to use colored text in LaTeX. <a href="https://github.com/PumasAI/SummaryTables.jl/pull/84" target="_blank" rel="noreferrer">#84</a>.</li></ul><h2 id="3.1.0-2025-02-20" tabindex="-1">3.1.0 - 2025-02-20 <a class="header-anchor" href="#3.1.0-2025-02-20" aria-label="Permalink to &quot;3.1.0 - 2025-02-20 {#3.1.0-2025-02-20}&quot;">​</a></h2><ul><li><p>Added <code>header</code> function to typst output such that the header section can repeat after page breaks <a href="https://github.com/PumasAI/SummaryTables.jl/pull/79" target="_blank" rel="noreferrer">#79</a>.</p></li><li><p>Added <code>simple_table</code> function for the display of raw tabular data <a href="https://github.com/PumasAI/SummaryTables.jl/pull/76" target="_blank" rel="noreferrer">#76</a>.</p></li><li><p>Changed html output to use a unique id instead of a class for the table so that SummaryTables&#39; CSS takes priority over class-based settings from Documenter and others. This fixes the look of SummaryTables within Documenter dark mode, for example <a href="https://github.com/PumasAI/SummaryTables.jl/pull/77" target="_blank" rel="noreferrer">#77</a>.</p></li></ul><h2 id="3.0.3-2025-01-31" tabindex="-1">3.0.3 - 2025-01-31 <a class="header-anchor" href="#3.0.3-2025-01-31" aria-label="Permalink to &quot;3.0.3 - 2025-01-31 {#3.0.3-2025-01-31}&quot;">​</a></h2><ul><li><p>Added <code>show</code> method for <code>MIME&quot;QuartoNotebookRunner/typst&quot;</code> to support typst directly in the native quarto julia engine <a href="https://github.com/PumasAI/SummaryTables.jl/pull/69" target="_blank" rel="noreferrer">#69</a>.</p></li><li><p>Allowed <code>String</code>s as column identifiers in addition to <code>Symbol</code>s <a href="https://github.com/PumasAI/SummaryTables.jl/pull/63" target="_blank" rel="noreferrer">#63</a>.</p></li><li><p>Made HTML tables dark mode compatible by reusing foreground color for the lines <a href="https://github.com/PumasAI/SummaryTables.jl/pull/62" target="_blank" rel="noreferrer">#62</a>.</p></li></ul><h2 id="3.0.2-2024-11-27" tabindex="-1">3.0.2 - 2024-11-27 <a class="header-anchor" href="#3.0.2-2024-11-27" aria-label="Permalink to &quot;3.0.2 - 2024-11-27 {#3.0.2-2024-11-27}&quot;">​</a></h2><ul><li>Added extra escape characters to Typst <a href="https://github.com/PumasAI/SummaryTables.jl/pull/54" target="_blank" rel="noreferrer">#54</a>.</li></ul><h2 id="3.0.1-2024-10-24" tabindex="-1">3.0.1 - 2024-10-24 <a class="header-anchor" href="#3.0.1-2024-10-24" aria-label="Permalink to &quot;3.0.1 - 2024-10-24 {#3.0.1-2024-10-24}&quot;">​</a></h2><ul><li><p>Added single-argument method to <code>table_one</code> which summarizes all columns in the passed table except those used for grouping <a href="https://github.com/PumasAI/SummaryTables.jl/pull/48" target="_blank" rel="noreferrer">#48</a>.</p></li><li><p>Fixed issue with using <code>missing</code> as a group in <code>table_one</code>. This PR also removes redundant group totals if there&#39;s just one subgroup to do a total over <a href="https://github.com/PumasAI/SummaryTables.jl/pull/47" target="_blank" rel="noreferrer">#47</a>.</p></li></ul><h2 id="3.0.0-2024-09-23" tabindex="-1">3.0.0 - 2024-09-23 <a class="header-anchor" href="#3.0.0-2024-09-23" aria-label="Permalink to &quot;3.0.0 - 2024-09-23 {#3.0.0-2024-09-23}&quot;">​</a></h2><ul><li><p><strong>Breaking</strong> Footnotes are by default separated with linebreaks now. This can be changed by setting the new <code>Table</code> option <code>linebreak_footnotes = false</code> <a href="https://github.com/PumasAI/SummaryTables.jl/pull/34" target="_blank" rel="noreferrer">#34</a>.</p></li><li><p><strong>Breaking</strong> Changed <code>show_overall</code> keyword of <code>table_one</code> to <code>show_total</code>. The name of all total columns was changed from <code>&quot;Overall&quot;</code> to <code>&quot;Total&quot;</code> as well but this can be changed using the new <code>total_name</code> keyword.</p></li><li><p>Added ability to show &quot;Total&quot; statistics for subgroups in <code>table_one</code> <a href="https://github.com/PumasAI/SummaryTables.jl/pull/30" target="_blank" rel="noreferrer">#30</a>.</p></li><li><p>Fixed tagging of header rows in docx output, such that the header section is now repeated across pages as expected <a href="https://github.com/PumasAI/SummaryTables.jl/pull/32" target="_blank" rel="noreferrer">#32</a>.</p></li></ul><h2 id="2.0.2-2024-09-16" tabindex="-1">2.0.2 - 2024-09-16 <a class="header-anchor" href="#2.0.2-2024-09-16" aria-label="Permalink to &quot;2.0.2 - 2024-09-16 {#2.0.2-2024-09-16}&quot;">​</a></h2><ul><li>Fixed issue where cells would not merge if they stored a <code>Multiline</code> value <a href="https://github.com/PumasAI/SummaryTables.jl/pull/29" target="_blank" rel="noreferrer">#29</a>.</li></ul><h2 id="2.0.1-2024-09-16" tabindex="-1">2.0.1 - 2024-09-16 <a class="header-anchor" href="#2.0.1-2024-09-16" aria-label="Permalink to &quot;2.0.1 - 2024-09-16 {#2.0.1-2024-09-16}&quot;">​</a></h2><ul><li>Fixed incorrect order of column group keys in <code>summarytable</code> and <code>listingtable</code> when some row/col group combinations were missing <a href="https://github.com/PumasAI/SummaryTables.jl/pull/25" target="_blank" rel="noreferrer">#25</a>.</li></ul><h2 id="2.0.0-2024-05-03" tabindex="-1">2.0.0 - 2024-05-03 <a class="header-anchor" href="#2.0.0-2024-05-03" aria-label="Permalink to &quot;2.0.0 - 2024-05-03 {#2.0.0-2024-05-03}&quot;">​</a></h2><ul><li><strong>Breaking</strong> Changed generated Typst code to use the native table functionality available starting with Typst v0.11. Visual output should not change.</li></ul>',22)]))}const b=a(l,[["render",s]]);export{m as __pageData,b as default};
