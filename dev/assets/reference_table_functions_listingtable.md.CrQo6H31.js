import{_ as s,c as i,o as n,az as a}from"./chunks/framework.CAkcY2eT.js";const o=JSON.parse('{"title":"listingtable","description":"","frontmatter":{},"headers":[],"relativePath":"reference/table_functions/listingtable.md","filePath":"reference/table_functions/listingtable.md","lastUpdated":null}'),e={name:"reference/table_functions/listingtable.md"};function l(h,t,d,p,r,k){return n(),i("div",null,t[0]||(t[0]=[a(`<h1 id="listingtable" tabindex="-1"><code>listingtable</code> <a class="header-anchor" href="#listingtable" aria-label="Permalink to &quot;\`listingtable\` {#listingtable}&quot;">​</a></h1><h2 id="Synopsis" tabindex="-1">Synopsis <a class="header-anchor" href="#Synopsis" aria-label="Permalink to &quot;Synopsis {#Synopsis}&quot;">​</a></h2><p>A listing table displays the raw data from one column of a source table, with optional summary sections interleaved between. The row and column structure of the listing table is defined by grouping columns from the source table. Each row of data has to have its own cell in the listing table, therefore the grouping applied along rows and columns must be exhaustive, i.e., no two rows may end up in the same group together.</p><p>Here is an example of a hypothetical clinical trial with drug concentration measurements of two participants with five time points each.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    concentration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :concentration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Concentration (ng/mL)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ID&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Time (hr)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summarize_rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;N&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-40d0bc42">
    <style>
        #st-40d0bc42 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-40d0bc42 tr {
            background-color: transparent;
            border: none;
        }
        #st-40d0bc42 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-40d0bc42 br {
            line-height: 0em;
            margin: 0;
        }
        #st-40d0bc42 sub {
            line-height: 0;
        }
        #st-40d0bc42 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="5" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Time (hr)</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">0</td>
        <td style="text-align:center;">0.5</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">ID</td>
        <td colspan="5" style="font-weight:bold;text-align:center;">Concentration (ng/mL)</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">1</td>
        <td style="text-align:center;">1.2</td>
        <td style="text-align:center;">4.5</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">1.5</td>
        <td style="text-align:center;">0.1</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">2</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.8</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">3.2</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.8</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.2</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">0.2</td>
    </tr>
    <tr>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">N</td>
        <td style="padding-top: 3.0pt;text-align:center;">2</td>
        <td style="padding-top: 3.0pt;text-align:center;">2</td>
        <td style="padding-top: 3.0pt;text-align:center;">2</td>
        <td style="padding-top: 3.0pt;text-align:center;">2</td>
        <td style="padding-top: 3.0pt;text-align:center;">2</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean</td>
        <td style="text-align:center;">1.5</td>
        <td style="text-align:center;">3.85</td>
        <td style="text-align:center;">1.9</td>
        <td style="text-align:center;">1.35</td>
        <td style="text-align:center;">0.15</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">0.424</td>
        <td style="text-align:center;">0.919</td>
        <td style="text-align:center;">0.141</td>
        <td style="text-align:center;">0.212</td>
        <td style="text-align:center;">0.0707</td>
    </tr>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Argument-1:-table" tabindex="-1">Argument 1: <code>table</code> <a class="header-anchor" href="#Argument-1:-table" aria-label="Permalink to &quot;Argument 1: \`table\` {#Argument-1:-table}&quot;">​</a></h2><p>The first argument can be any object that is a table compatible with the <code>Tables.jl</code> API. Here are some common examples:</p><h3 id="DataFrame" tabindex="-1"><code>DataFrame</code> <a class="header-anchor" href="#DataFrame" aria-label="Permalink to &quot;\`DataFrame\` {#DataFrame}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-f5b0c3dc">
    <style>
        #st-f5b0c3dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f5b0c3dc tr {
            background-color: transparent;
            border: none;
        }
        #st-f5b0c3dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f5b0c3dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-f5b0c3dc sub {
            line-height: 0;
        }
        #st-f5b0c3dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="NamedTuple-of-Vectors" tabindex="-1"><code>NamedTuple</code> of <code>Vector</code>s <a class="header-anchor" href="#NamedTuple-of-Vectors" aria-label="Permalink to &quot;\`NamedTuple\` of \`Vector\`s {#NamedTuple-of-Vectors}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-f5b0c3dc">
    <style>
        #st-f5b0c3dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f5b0c3dc tr {
            background-color: transparent;
            border: none;
        }
        #st-f5b0c3dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f5b0c3dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-f5b0c3dc sub {
            line-height: 0;
        }
        #st-f5b0c3dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="Vector-of-NamedTuples" tabindex="-1"><code>Vector</code> of <code>NamedTuple</code>s <a class="header-anchor" href="#Vector-of-NamedTuples" aria-label="Permalink to &quot;\`Vector\` of \`NamedTuple\`s {#Vector-of-NamedTuples}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-f5b0c3dc">
    <style>
        #st-f5b0c3dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f5b0c3dc tr {
            background-color: transparent;
            border: none;
        }
        #st-f5b0c3dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f5b0c3dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-f5b0c3dc sub {
            line-height: 0;
        }
        #st-f5b0c3dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Argument-2:-variable" tabindex="-1">Argument 2: <code>variable</code> <a class="header-anchor" href="#Argument-2:-variable" aria-label="Permalink to &quot;Argument 2: \`variable\` {#Argument-2:-variable}&quot;">​</a></h2><p>The second argument primarily selects the table column whose data should populate the cells of the listing table. The column name is specified with a <code>Symbol</code> or <code>String</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-306ee067">
    <style>
        #st-306ee067 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-306ee067 tr {
            background-color: transparent;
            border: none;
        }
        #st-306ee067 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-306ee067 br {
            line-height: 0em;
            margin: 0;
        }
        #st-306ee067 sub {
            line-height: 0;
        }
        #st-306ee067 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value1</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Here we choose to list column <code>:value2</code> instead:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-99688038">
    <style>
        #st-99688038 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-99688038 tr {
            background-color: transparent;
            border: none;
        }
        #st-99688038 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-99688038 br {
            line-height: 0em;
            margin: 0;
        }
        #st-99688038 sub {
            line-height: 0;
        }
        #st-99688038 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value2</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">10</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">11</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">12</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>By default, the variable name is used as the label as well. You can pass a different label as the second element of a <code>Pair</code> using the <code>=&gt;</code> operators. The label can be of any type (refer to <a href="/SummaryTables.jl/dev/reference/infrastructure/cell#Special-Cell-value-types">Special <code>Cell</code> value types</a> for a list).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-3dc84658">
    <style>
        #st-3dc84658 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-3dc84658 tr {
            background-color: transparent;
            border: none;
        }
        #st-3dc84658 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-3dc84658 br {
            line-height: 0em;
            margin: 0;
        }
        #st-3dc84658 sub {
            line-height: 0;
        }
        #st-3dc84658 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">Value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Optional-argument-3:-pagination" tabindex="-1">Optional argument 3: <code>pagination</code> <a class="header-anchor" href="#Optional-argument-3:-pagination" aria-label="Permalink to &quot;Optional argument 3: \`pagination\` {#Optional-argument-3:-pagination}&quot;">​</a></h2><p>A listing table can grow large, in which case it may make sense to split it into multiple pages. You can pass a <code>Pagination</code> object with <code>rows</code> and / or <code>cols</code> keyword arguments. The <code>Int</code> you pass to <code>rows</code> and / or <code>cols</code> determines how many &quot;sections&quot; of the table along that dimension are included in a single page. If there are no summary statistics, a &quot;section&quot; is a single row or column. If there are summary statistics, a &quot;section&quot; includes all the rows or columns that are summarized together (as it would not make sense to split summarized groups across multiple pages).</p><p>If the <code>pagination</code> argument is provided, the return type of <code>listingtable</code> changes to <code>PaginatedTable{ListingPageMetadata}</code>. This object has an interactive HTML representation for convenience the exact form of which should not be considered stable across SummaryTables versions. The <code>PaginatedTable</code> should be deconstructed into separate <code>Table</code>s when you want to include these in a document.</p><p>Here is an example listing table without pagination:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;K&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-20b6b663">
    <style>
        #st-20b6b663 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-20b6b663 tr {
            background-color: transparent;
            border: none;
        }
        #st-20b6b663 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-20b6b663 br {
            line-height: 0em;
            margin: 0;
        }
        #st-20b6b663 sub {
            line-height: 0;
        }
        #st-20b6b663 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="6" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="6" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="7" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:center;">26</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:center;">27</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:center;">28</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:center;">29</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:center;">25</td>
        <td style="text-align:center;">30</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>And here is the same table paginated into groups of 3 sections along the both the rows and columns. Note that there are only five rows in the original table, which is not divisible by 3, so two pages have only two rows.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;K&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><div>
<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==0 ? 'block' : 'none');
">Page 1</button>

<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==1 ? 'block' : 'none');
">Page 2</button>

<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==2 ? 'block' : 'none');
">Page 3</button>

<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==3 ? 'block' : 'none');
">Page 4</button>

<div>
<div style="display:block">
<h3>Page 1</h3>
<table id="st-69603a43">
    <style>
        #st-69603a43 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-69603a43 tr {
            background-color: transparent;
            border: none;
        }
        #st-69603a43 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-69603a43 br {
            line-height: 0em;
            margin: 0;
        }
        #st-69603a43 sub {
            line-height: 0;
        }
        #st-69603a43 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">11</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">12</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">13</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
<div style="display:none">
<h3>Page 2</h3>
<table id="st-0bddae9d">
    <style>
        #st-0bddae9d {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-0bddae9d tr {
            background-color: transparent;
            border: none;
        }
        #st-0bddae9d tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-0bddae9d br {
            line-height: 0em;
            margin: 0;
        }
        #st-0bddae9d sub {
            line-height: 0;
        }
        #st-0bddae9d sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:center;">26</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:center;">27</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:center;">28</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
<div style="display:none">
<h3>Page 3</h3>
<table id="st-af33416f">
    <style>
        #st-af33416f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-af33416f tr {
            background-color: transparent;
            border: none;
        }
        #st-af33416f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-af33416f br {
            line-height: 0em;
            margin: 0;
        }
        #st-af33416f sub {
            line-height: 0;
        }
        #st-af33416f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">14</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">15</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
<div style="display:none">
<h3>Page 4</h3>
<table id="st-2cfbe7f2">
    <style>
        #st-2cfbe7f2 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-2cfbe7f2 tr {
            background-color: transparent;
            border: none;
        }
        #st-2cfbe7f2 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-2cfbe7f2 br {
            line-height: 0em;
            margin: 0;
        }
        #st-2cfbe7f2 sub {
            line-height: 0;
        }
        #st-2cfbe7f2 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:center;">29</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:center;">25</td>
        <td style="text-align:center;">30</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
</div>
</div>
</div><p>We can also paginate only along the rows:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;K&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><div>
<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==0 ? 'block' : 'none');
">Page 1</button>

<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==1 ? 'block' : 'none');
">Page 2</button>

<div>
<div style="display:block">
<h3>Page 1</h3>
<table id="st-c2946644">
    <style>
        #st-c2946644 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-c2946644 tr {
            background-color: transparent;
            border: none;
        }
        #st-c2946644 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-c2946644 br {
            line-height: 0em;
            margin: 0;
        }
        #st-c2946644 sub {
            line-height: 0;
        }
        #st-c2946644 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="6" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="6" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="7" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:center;">26</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:center;">27</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:center;">28</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
<div style="display:none">
<h3>Page 2</h3>
<table id="st-099d0947">
    <style>
        #st-099d0947 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-099d0947 tr {
            background-color: transparent;
            border: none;
        }
        #st-099d0947 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-099d0947 br {
            line-height: 0em;
            margin: 0;
        }
        #st-099d0947 sub {
            line-height: 0;
        }
        #st-099d0947 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="6" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="6" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="7" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:center;">29</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:center;">25</td>
        <td style="text-align:center;">30</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
</div>
</div>
</div><p>Or only along the columns:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;K&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><div>
<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==0 ? 'block' : 'none');
">Page 1</button>

<button onclick="
    [...this.parentElement.querySelector('div').children].forEach((e,j) => e.style.display = j==1 ? 'block' : 'none');
">Page 2</button>

<div>
<div style="display:block">
<h3>Page 1</h3>
<table id="st-30ef6513">
    <style>
        #st-30ef6513 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-30ef6513 tr {
            background-color: transparent;
            border: none;
        }
        #st-30ef6513 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-30ef6513 br {
            line-height: 0em;
            margin: 0;
        }
        #st-30ef6513 sub {
            line-height: 0;
        }
        #st-30ef6513 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">11</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">12</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">13</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">14</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">15</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
<div style="display:none">
<h3>Page 2</h3>
<table id="st-a639e89e">
    <style>
        #st-a639e89e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a639e89e tr {
            background-color: transparent;
            border: none;
        }
        #st-a639e89e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a639e89e br {
            line-height: 0em;
            margin: 0;
        }
        #st-a639e89e sub {
            line-height: 0;
        }
        #st-a639e89e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;">K</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:center;">26</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:center;">27</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:center;">28</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:center;">29</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:center;">25</td>
        <td style="text-align:center;">30</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>
</div>
</div>
</div>
</div><h2 id="Keyword:-rows" tabindex="-1">Keyword: <code>rows</code> <a class="header-anchor" href="#Keyword:-rows" aria-label="Permalink to &quot;Keyword: \`rows\` {#Keyword:-rows}&quot;">​</a></h2><p>The <code>rows</code> keyword determines the grouping structure along the rows. It can either be a <code>Symbol</code> or <code>String</code> specifying a grouping column, a <code>Pair{Symbol,Any}</code> or <code>Pair{String,Any}</code> where the second element overrides the group&#39;s label, or a <code>Vector</code> with multiple groups of the aforementioned format.</p><p>This example uses a single group with default label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-72a7112e">
    <style>
        #st-72a7112e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-72a7112e tr {
            background-color: transparent;
            border: none;
        }
        #st-72a7112e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-72a7112e br {
            line-height: 0em;
            margin: 0;
        }
        #st-72a7112e sub {
            line-height: 0;
        }
        #st-72a7112e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group</td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="2" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>The label can be overridden using the <code>Pair</code> operator.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-aadb1c48">
    <style>
        #st-aadb1c48 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-aadb1c48 tr {
            background-color: transparent;
            border: none;
        }
        #st-aadb1c48 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-aadb1c48 br {
            line-height: 0em;
            margin: 0;
        }
        #st-aadb1c48 sub {
            line-height: 0;
        }
        #st-aadb1c48 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Group</td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="2" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-4d42d6e1">
    <style>
        #st-4d42d6e1 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-4d42d6e1 tr {
            background-color: transparent;
            border: none;
        }
        #st-4d42d6e1 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-4d42d6e1 br {
            line-height: 0em;
            margin: 0;
        }
        #st-4d42d6e1 sub {
            line-height: 0;
        }
        #st-4d42d6e1 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">Group 2</td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">F</td>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td rowspan="3" style="text-align:left;">G</td>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-cols" tabindex="-1">Keyword: <code>cols</code> <a class="header-anchor" href="#Keyword:-cols" aria-label="Permalink to &quot;Keyword: \`cols\` {#Keyword:-cols}&quot;">​</a></h2><p>The <code>cols</code> keyword determines the grouping structure along the columns. It can either be a <code>Symbol</code> or <code>String</code> specifying a grouping column, a <code>Pair{Symbol,Any}</code> or <code>Pair{String,Any}</code> where the second element overrides the group&#39;s label, or a <code>Vector</code> with multiple groups of the aforementioned format.</p><p>This example uses a single group with default label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-402eda06">
    <style>
        #st-402eda06 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-402eda06 tr {
            background-color: transparent;
            border: none;
        }
        #st-402eda06 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-402eda06 br {
            line-height: 0em;
            margin: 0;
        }
        #st-402eda06 sub {
            line-height: 0;
        }
        #st-402eda06 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td colspan="5" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td colspan="5" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>The label can be overridden using the <code>Pair</code> operator.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-37e10378">
    <style>
        #st-37e10378 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-37e10378 tr {
            background-color: transparent;
            border: none;
        }
        #st-37e10378 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-37e10378 br {
            line-height: 0em;
            margin: 0;
        }
        #st-37e10378 sub {
            line-height: 0;
        }
        #st-37e10378 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td colspan="5" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group</td>
    </tr>
    <tr>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td colspan="5" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-08463581">
    <style>
        #st-08463581 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-08463581 tr {
            background-color: transparent;
            border: none;
        }
        #st-08463581 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-08463581 br {
            line-height: 0em;
            margin: 0;
        }
        #st-08463581 sub {
            line-height: 0;
        }
        #st-08463581 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td colspan="5" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group1</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center;">F</td>
        <td colspan="3" style="text-align:center;">G</td>
    </tr>
    <tr>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group 2</td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group 2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td colspan="5" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-summarize_rows" tabindex="-1">Keyword: <code>summarize_rows</code> <a class="header-anchor" href="#Keyword:-summarize_rows" aria-label="Permalink to &quot;Keyword: \`summarize_rows\` {#Keyword:-summarize_rows}&quot;">​</a></h2><p>This keyword takes a list of aggregation functions which are used to summarize the listed variable along the rows. A summary function should take a vector of values (usually that will be numbers) and output one summary value. This value can be of any type that SummaryTables can show in a cell (refer to <a href="/SummaryTables.jl/dev/reference/infrastructure/cell#Special-Cell-value-types">Special <code>Cell</code> value types</a> for a list).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mean, std</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mean_sd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summarize_rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean_sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean (SD)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-4230fb5f">
    <style>
        #st-4230fb5f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-4230fb5f tr {
            background-color: transparent;
            border: none;
        }
        #st-4230fb5f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-4230fb5f br {
            line-height: 0em;
            margin: 0;
        }
        #st-4230fb5f sub {
            line-height: 0;
        }
        #st-4230fb5f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="4" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">19</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">20</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:center;">21</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">22</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">23</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">F</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">6</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">12</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">18</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">24</td>
    </tr>
    <tr>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">mean</td>
        <td style="padding-top: 3.0pt;text-align:center;">3.5</td>
        <td style="padding-top: 3.0pt;text-align:center;">9.5</td>
        <td style="padding-top: 3.0pt;text-align:center;">15.5</td>
        <td style="padding-top: 3.0pt;text-align:center;">21.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">1.87</td>
        <td style="text-align:center;">1.87</td>
        <td style="text-align:center;">1.87</td>
        <td style="text-align:center;">1.87</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">3.5 (1.87)</td>
        <td style="text-align:center;">9.5 (1.87)</td>
        <td style="text-align:center;">15.5 (1.87)</td>
        <td style="text-align:center;">21.5 (1.87)</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>By default, one summary will be calculated over all rows of a given column. You can also choose to compute one summary for each group of a row grouping column, which makes sense if there is more than one row grouping column.</p><p>In this example, one summary is computed for each level of the <code>group1</code> column.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mean, std</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mean_sd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summarize_rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean_sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean (SD)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-35ad1096">
    <style>
        #st-35ad1096 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-35ad1096 tr {
            background-color: transparent;
            border: none;
        }
        #st-35ad1096 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-35ad1096 br {
            line-height: 0em;
            margin: 0;
        }
        #st-35ad1096 sub {
            line-height: 0;
        }
        #st-35ad1096 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group3</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">group2</td>
        <td colspan="4" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="3" style="padding-bottom: 3.0pt;text-align:left;">X</td>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">19</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">23</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">C</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">3</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">9</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">15</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">21</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">mean</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">9</td>
        <td style="padding-top: 3.0pt;text-align:center;">15</td>
        <td style="padding-top: 3.0pt;text-align:center;">21</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Mean (SD)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">3 (2)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">9 (2)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">15 (2)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">21 (2)</td>
    </tr>
    <tr>
        <td rowspan="3" style="padding-bottom: 3.0pt;padding-top: 3.0pt;text-align:left;">Y</td>
        <td style="padding-top: 3.0pt;text-align:left;">A</td>
        <td style="padding-top: 3.0pt;text-align:center;">4</td>
        <td style="padding-top: 3.0pt;text-align:center;">10</td>
        <td style="padding-top: 3.0pt;text-align:center;">16</td>
        <td style="padding-top: 3.0pt;text-align:center;">22</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">20</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">C</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">6</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">12</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">18</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">24</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">mean</td>
        <td style="padding-top: 3.0pt;text-align:center;">4</td>
        <td style="padding-top: 3.0pt;text-align:center;">10</td>
        <td style="padding-top: 3.0pt;text-align:center;">16</td>
        <td style="padding-top: 3.0pt;text-align:center;">22</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">4 (2)</td>
        <td style="text-align:center;">10 (2)</td>
        <td style="text-align:center;">16 (2)</td>
        <td style="text-align:center;">22 (2)</td>
    </tr>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-summarize_cols" tabindex="-1">Keyword: <code>summarize_cols</code> <a class="header-anchor" href="#Keyword:-summarize_cols" aria-label="Permalink to &quot;Keyword: \`summarize_cols\` {#Keyword:-summarize_cols}&quot;">​</a></h2><p>This keyword takes a list of aggregation functions which are used to summarize the listed variable along the columns. A summary function should take a vector of values (usually that will be numbers) and output one summary value. This value can be of any type that SummaryTables can show in a cell (refer to <a href="/SummaryTables.jl/dev/reference/infrastructure/cell#Special-Cell-value-types">Special <code>Cell</code> value types</a> for a list).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mean, std</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mean_sd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summarize_cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean_sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean (SD)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-ac7fa56c">
    <style>
        #st-ac7fa56c {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-ac7fa56c tr {
            background-color: transparent;
            border: none;
        }
        #st-ac7fa56c tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-ac7fa56c br {
            line-height: 0em;
            margin: 0;
        }
        #st-ac7fa56c sub {
            line-height: 0;
        }
        #st-ac7fa56c sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">G</td>
        <td style="text-align:center;">H</td>
        <td style="text-align:center;">I</td>
        <td style="text-align:center;">J</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="4" style="font-weight:bold;text-align:center;">value</td>
        <td style="font-weight:bold;text-align:right;">mean</td>
        <td style="font-weight:bold;text-align:right;">SD</td>
        <td style="font-weight:bold;text-align:right;">Mean (SD)</td>
    </tr>
        <tr><td colspan="8" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:right;">10</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">10 (7.75)</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:right;">11</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">11 (7.75)</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:right;">12</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">12 (7.75)</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:right;">13</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">13 (7.75)</td>
    </tr>
    <tr>
        <td style="text-align:left;">E</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:right;">14</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">14 (7.75)</td>
    </tr>
    <tr>
        <td style="text-align:left;">F</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:right;">15</td>
        <td style="text-align:right;">7.75</td>
        <td style="text-align:right;">15 (7.75)</td>
    </tr>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>By default, one summary will be calculated over all columns of a given row. You can also choose to compute one summary for each group of a column grouping column, which makes sense if there is more than one column grouping column.</p><p>In this example, one summary is computed for each level of the <code>group1</code> column.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mean, std</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;H&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;J&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mean_sd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summarize_cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean_sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean (SD)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-7edaa26c">
    <style>
        #st-7edaa26c {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-7edaa26c tr {
            background-color: transparent;
            border: none;
        }
        #st-7edaa26c tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-7edaa26c br {
            line-height: 0em;
            margin: 0;
        }
        #st-7edaa26c sub {
            line-height: 0;
        }
        #st-7edaa26c sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="13" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group1</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group1</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="text-align:center;">X</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="text-align:center;">Y</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group3</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
        <td style="font-weight:bold;text-align:right;">mean</td>
        <td style="font-weight:bold;text-align:right;">SD</td>
        <td style="font-weight:bold;text-align:right;">Mean (SD)</td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
        <td style="font-weight:bold;text-align:right;">mean</td>
        <td style="font-weight:bold;text-align:right;">SD</td>
        <td style="font-weight:bold;text-align:right;">Mean (SD)</td>
    </tr>
        <tr><td colspan="13" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">G</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:right;">3</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">3 (2)</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:right;">4</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">4 (2)</td>
    </tr>
    <tr>
        <td style="text-align:left;">H</td>
        <td style="text-align:center;">7</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:right;">9</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">9 (2)</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">8</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:right;">10</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">10 (2)</td>
    </tr>
    <tr>
        <td style="text-align:left;">I</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">17</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:right;">15</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">15 (2)</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">18</td>
        <td style="text-align:right;">16</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">16 (2)</td>
    </tr>
    <tr>
        <td style="text-align:left;">J</td>
        <td style="text-align:center;">19</td>
        <td style="text-align:center;">23</td>
        <td style="text-align:center;">21</td>
        <td style="text-align:right;">21</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">21 (2)</td>
        <td style="text-align:center;">22</td>
        <td style="text-align:center;">20</td>
        <td style="text-align:center;">24</td>
        <td style="text-align:right;">22</td>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">22 (2)</td>
    </tr>
    <tr><td colspan="13" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-variable_header" tabindex="-1">Keyword: <code>variable_header</code> <a class="header-anchor" href="#Keyword:-variable_header" aria-label="Permalink to &quot;Keyword: \`variable_header\` {#Keyword:-variable_header}&quot;">​</a></h2><p>If you set <code>variable_header = false</code>, you can hide the header cell with the variable label, which makes the table layout a little more compact.</p><p>Here is a table with the header cell:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, variable_header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-f5b0c3dc">
    <style>
        #st-f5b0c3dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f5b0c3dc tr {
            background-color: transparent;
            border: none;
        }
        #st-f5b0c3dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f5b0c3dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-f5b0c3dc sub {
            line-height: 0;
        }
        #st-f5b0c3dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>And here is a table without it:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, variable_header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-1c6b2995">
    <style>
        #st-1c6b2995 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-1c6b2995 tr {
            background-color: transparent;
            border: none;
        }
        #st-1c6b2995 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-1c6b2995 br {
            line-height: 0em;
            margin: 0;
        }
        #st-1c6b2995 sub {
            line-height: 0;
        }
        #st-1c6b2995 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">B</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-sort" tabindex="-1">Keyword: <code>sort</code> <a class="header-anchor" href="#Keyword:-sort" aria-label="Permalink to &quot;Keyword: \`sort\` {#Keyword:-sort}&quot;">​</a></h2><p>By default, group entries are sorted. If you need to maintain the order of entries from your dataset, set <code>sort = false</code>.</p><p>Notice how in the following two examples, the group indices are <code>&quot;dos&quot;</code>, <code>&quot;tres&quot;</code>, <code>&quot;uno&quot;</code> when sorted, but <code>&quot;uno&quot;</code>, <code>&quot;dos&quot;</code>, <code>&quot;tres&quot;</code> when not sorted. If we want to preserve the natural order of these groups (&quot;uno&quot;, &quot;dos&quot;, &quot;tres&quot; meaning &quot;one&quot;, &quot;two&quot;, &quot;three&quot; in Spanish but having a different alphabetical order) we need to set <code>sort = false</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uno&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cuatro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cinco&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-a5897771">
    <style>
        #st-a5897771 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a5897771 tr {
            background-color: transparent;
            border: none;
        }
        #st-a5897771 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a5897771 br {
            line-height: 0em;
            margin: 0;
        }
        #st-a5897771 sub {
            line-height: 0;
        }
        #st-a5897771 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">cinco</td>
        <td style="text-align:center;">cuatro</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">dos</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">tres</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">5</td>
    </tr>
    <tr>
        <td style="text-align:left;">uno</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-e4d1a5ee">
    <style>
        #st-e4d1a5ee {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-e4d1a5ee tr {
            background-color: transparent;
            border: none;
        }
        #st-e4d1a5ee tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e4d1a5ee br {
            line-height: 0em;
            margin: 0;
        }
        #st-e4d1a5ee sub {
            line-height: 0;
        }
        #st-e4d1a5ee sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">cuatro</td>
        <td style="text-align:center;">cinco</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">uno</td>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:left;">dos</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="text-align:left;">tres</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">6</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>If you have multiple groups, <code>sort = false</code> can lead to splitting of higher-level groups if they are not correctly ordered in the source data.</p></div><p>Compare the following two tables. In the second one, the group &quot;A&quot; is split by &quot;B&quot; so the label appears twice.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-5e7fca9f">
    <style>
        #st-5e7fca9f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-5e7fca9f tr {
            background-color: transparent;
            border: none;
        }
        #st-5e7fca9f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-5e7fca9f br {
            line-height: 0em;
            margin: 0;
        }
        #st-5e7fca9f sub {
            line-height: 0;
        }
        #st-5e7fca9f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">group2</td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">listingtable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-b12e24d2">
    <style>
        #st-b12e24d2 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-b12e24d2 tr {
            background-color: transparent;
            border: none;
        }
        #st-b12e24d2 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-b12e24d2 br {
            line-height: 0em;
            margin: 0;
        }
        #st-b12e24d2 sub {
            line-height: 0;
        }
        #st-b12e24d2 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">group2</td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:left;">D</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div>`,101)]))}const E=s(e,[["render",l]]);export{o as __pageData,E as default};
