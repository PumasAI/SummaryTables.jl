import{_ as s,c as i,o as n,az as a}from"./chunks/framework.CAkcY2eT.js";const o=JSON.parse('{"title":"summarytable","description":"","frontmatter":{},"headers":[],"relativePath":"reference/table_functions/summarytable.md","filePath":"reference/table_functions/summarytable.md","lastUpdated":null}'),e={name:"reference/table_functions/summarytable.md"};function l(h,t,d,r,p,k){return n(),i("div",null,t[0]||(t[0]=[a(`<h1 id="summarytable" tabindex="-1"><code>summarytable</code> <a class="header-anchor" href="#summarytable" aria-label="Permalink to &quot;\`summarytable\` {#summarytable}&quot;">​</a></h1><h2 id="Synopsis" tabindex="-1">Synopsis <a class="header-anchor" href="#Synopsis" aria-label="Permalink to &quot;Synopsis {#Synopsis}&quot;">​</a></h2><p>A summary table summarizes the raw data from one column of a source table for different groups defined by grouping columns. It is similar to a <a href="/SummaryTables.jl/dev/reference/table_functions/listingtable#listingtable"><code>listingtable</code></a> without the raw values.</p><p>Here is an example of a hypothetical clinical trial with drug concentration measurements of two participants with five time points each.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    concentration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :concentration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Concentration (ng/mL)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Time (hr)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;N&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-8a17bea4">
    <style>
        #st-8a17bea4 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-8a17bea4 tr {
            background-color: transparent;
            border: none;
        }
        #st-8a17bea4 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-8a17bea4 br {
            line-height: 0em;
            margin: 0;
        }
        #st-8a17bea4 sub {
            line-height: 0;
        }
        #st-8a17bea4 sup {
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
        <td style="text-align:center;"></td>
        <td colspan="5" style="font-weight:bold;text-align:center;">Concentration (ng/mL)</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">N</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-cca70cdb">
    <style>
        #st-cca70cdb {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-cca70cdb tr {
            background-color: transparent;
            border: none;
        }
        #st-cca70cdb tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-cca70cdb br {
            line-height: 0em;
            margin: 0;
        }
        #st-cca70cdb sub {
            line-height: 0;
        }
        #st-cca70cdb sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="NamedTuple-of-Vectors" tabindex="-1"><code>NamedTuple</code> of <code>Vector</code>s <a class="header-anchor" href="#NamedTuple-of-Vectors" aria-label="Permalink to &quot;\`NamedTuple\` of \`Vector\`s {#NamedTuple-of-Vectors}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-cca70cdb">
    <style>
        #st-cca70cdb {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-cca70cdb tr {
            background-color: transparent;
            border: none;
        }
        #st-cca70cdb tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-cca70cdb br {
            line-height: 0em;
            margin: 0;
        }
        #st-cca70cdb sub {
            line-height: 0;
        }
        #st-cca70cdb sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="Vector-of-NamedTuples" tabindex="-1"><code>Vector</code> of <code>NamedTuple</code>s <a class="header-anchor" href="#Vector-of-NamedTuples" aria-label="Permalink to &quot;\`Vector\` of \`NamedTuple\`s {#Vector-of-NamedTuples}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-cca70cdb">
    <style>
        #st-cca70cdb {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-cca70cdb tr {
            background-color: transparent;
            border: none;
        }
        #st-cca70cdb tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-cca70cdb br {
            line-height: 0em;
            margin: 0;
        }
        #st-cca70cdb sub {
            line-height: 0;
        }
        #st-cca70cdb sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Argument-2:-variable" tabindex="-1">Argument 2: <code>variable</code> <a class="header-anchor" href="#Argument-2:-variable" aria-label="Permalink to &quot;Argument 2: \`variable\` {#Argument-2:-variable}&quot;">​</a></h2><p>The second argument primarily selects the table column whose data should populate the cells of the summary table. The column name is specified with a <code>Symbol</code> or <code>String</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-6d5d573e">
    <style>
        #st-6d5d573e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-6d5d573e tr {
            background-color: transparent;
            border: none;
        }
        #st-6d5d573e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-6d5d573e br {
            line-height: 0em;
            margin: 0;
        }
        #st-6d5d573e sub {
            line-height: 0;
        }
        #st-6d5d573e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value1</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Here we choose to list column <code>:value2</code> instead:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-4b4b2fcf">
    <style>
        #st-4b4b2fcf {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-4b4b2fcf tr {
            background-color: transparent;
            border: none;
        }
        #st-4b4b2fcf tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-4b4b2fcf br {
            line-height: 0em;
            margin: 0;
        }
        #st-4b4b2fcf sub {
            line-height: 0;
        }
        #st-4b4b2fcf sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value2</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">8.5</td>
        <td style="text-align:center;">9.5</td>
        <td style="text-align:center;">10.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>By default, the variable name is used as the label as well. You can pass a different label as the second element of a <code>Pair</code> using the <code>=&gt;</code> operators. The label can be of any type (refer to <a href="/SummaryTables.jl/dev/reference/infrastructure/cell#Special-Cell-value-types">Special <code>Cell</code> value types</a> for a list).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-7fd42d6a">
    <style>
        #st-7fd42d6a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-7fd42d6a tr {
            background-color: transparent;
            border: none;
        }
        #st-7fd42d6a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-7fd42d6a br {
            line-height: 0em;
            margin: 0;
        }
        #st-7fd42d6a sub {
            line-height: 0;
        }
        #st-7fd42d6a sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">Value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-rows" tabindex="-1">Keyword: <code>rows</code> <a class="header-anchor" href="#Keyword:-rows" aria-label="Permalink to &quot;Keyword: \`rows\` {#Keyword:-rows}&quot;">​</a></h2><p>The <code>rows</code> keyword determines the grouping structure along the rows. It can either be a <code>Symbol</code> or <code>String</code> specifying a grouping column, a <code>Pair{Symbol,Any}</code> or <code>Pair{String,Any}</code> where the second element overrides the group&#39;s label, or a <code>Vector</code> with multiple groups of the aforementioned format.</p><p>This example uses a single group with default label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-31ada1e2">
    <style>
        #st-31ada1e2 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-31ada1e2 tr {
            background-color: transparent;
            border: none;
        }
        #st-31ada1e2 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-31ada1e2 br {
            line-height: 0em;
            margin: 0;
        }
        #st-31ada1e2 sub {
            line-height: 0;
        }
        #st-31ada1e2 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group</td>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>The label can be overridden using the <code>Pair</code> operator.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-da7197dc">
    <style>
        #st-da7197dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-da7197dc tr {
            background-color: transparent;
            border: none;
        }
        #st-da7197dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-da7197dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-da7197dc sub {
            line-height: 0;
        }
        #st-da7197dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Group</td>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-89d6dc68">
    <style>
        #st-89d6dc68 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-89d6dc68 tr {
            background-color: transparent;
            border: none;
        }
        #st-89d6dc68 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-89d6dc68 br {
            line-height: 0em;
            margin: 0;
        }
        #st-89d6dc68 sub {
            line-height: 0;
        }
        #st-89d6dc68 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">Group 2</td>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="6" style="text-align:left;">A</td>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">E</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="6" style="text-align:left;">B</td>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">8.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">9.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">E</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">10.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-cols" tabindex="-1">Keyword: <code>cols</code> <a class="header-anchor" href="#Keyword:-cols" aria-label="Permalink to &quot;Keyword: \`cols\` {#Keyword:-cols}&quot;">​</a></h2><p>The <code>cols</code> keyword determines the grouping structure along the columns. It can either be a <code>Symbol</code> or <code>String</code> specifying a grouping column, a <code>Pair{Symbol,Any}</code> or <code>Pair{String,Any}</code> where the second element overrides the group&#39;s label, or a <code>Vector</code> with multiple groups of the aforementioned format.</p><p>This example uses a single group with default label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-cca70cdb">
    <style>
        #st-cca70cdb {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-cca70cdb tr {
            background-color: transparent;
            border: none;
        }
        #st-cca70cdb tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-cca70cdb br {
            line-height: 0em;
            margin: 0;
        }
        #st-cca70cdb sub {
            line-height: 0;
        }
        #st-cca70cdb sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>The label can be overridden using the <code>Pair</code> operator.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-1de9ee66">
    <style>
        #st-1de9ee66 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-1de9ee66 tr {
            background-color: transparent;
            border: none;
        }
        #st-1de9ee66 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-1de9ee66 br {
            line-height: 0em;
            margin: 0;
        }
        #st-1de9ee66 sub {
            line-height: 0;
        }
        #st-1de9ee66 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">A</td>
        <td style="text-align:center;">B</td>
        <td style="text-align:center;">C</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Multiple groups are possible as well, in that case you get a nested display where the last group changes the fastest.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-9ea81bf8">
    <style>
        #st-9ea81bf8 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-9ea81bf8 tr {
            background-color: transparent;
            border: none;
        }
        #st-9ea81bf8 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-9ea81bf8 br {
            line-height: 0em;
            margin: 0;
        }
        #st-9ea81bf8 sub {
            line-height: 0;
        }
        #st-9ea81bf8 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="6" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group1</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="text-align:center;">A</td>
        <td colspan="3" style="text-align:center;">B</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group 2</td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Group 2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
        <td style="text-align:center;">C</td>
        <td style="text-align:center;">D</td>
        <td style="text-align:center;">E</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td colspan="6" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="7" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2.5</td>
        <td style="text-align:center;">3.5</td>
        <td style="text-align:center;">4.5</td>
        <td style="text-align:center;">8.5</td>
        <td style="text-align:center;">9.5</td>
        <td style="text-align:center;">10.5</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
        <td style="text-align:center;">2.12</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-summary" tabindex="-1">Keyword: <code>summary</code> <a class="header-anchor" href="#Keyword:-summary" aria-label="Permalink to &quot;Keyword: \`summary\` {#Keyword:-summary}&quot;">​</a></h2><p>This keyword takes a list of aggregation functions which are used to summarize the chosen variable. A summary function should take a vector of values (usually that will be numbers) and output one summary value. This value can be of any type that SummaryTables can show in a cell (refer to <a href="/SummaryTables.jl/dev/reference/infrastructure/cell#Special-Cell-value-types">Special <code>Cell</code> value types</a> for a list).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mean_sd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        std </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mean_sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mean (SD)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-cda6afdb">
    <style>
        #st-cda6afdb {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-cda6afdb tr {
            background-color: transparent;
            border: none;
        }
        #st-cda6afdb tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-cda6afdb br {
            line-height: 0em;
            margin: 0;
        }
        #st-cda6afdb sub {
            line-height: 0;
        }
        #st-cda6afdb sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">E</td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="3" style="text-align:left;">A</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">19</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">3 (2.83)</td>
        <td style="text-align:center;">11 (2.83)</td>
        <td style="text-align:center;">19 (2.83)</td>
    </tr>
    <tr>
        <td rowspan="3" style="text-align:left;">B</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">20</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">4 (2.83)</td>
        <td style="text-align:center;">12 (2.83)</td>
        <td style="text-align:center;">20 (2.83)</td>
    </tr>
    <tr>
        <td rowspan="3" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">21</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">5 (2.83)</td>
        <td style="text-align:center;">13 (2.83)</td>
        <td style="text-align:center;">21 (2.83)</td>
    </tr>
    <tr>
        <td rowspan="3" style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">22</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">SD</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">6 (2.83)</td>
        <td style="text-align:center;">14 (2.83)</td>
        <td style="text-align:center;">22 (2.83)</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-variable_header" tabindex="-1">Keyword: <code>variable_header</code> <a class="header-anchor" href="#Keyword:-variable_header" aria-label="Permalink to &quot;Keyword: \`variable_header\` {#Keyword:-variable_header}&quot;">​</a></h2><p>If you set <code>variable_header = false</code>, you can hide the header cell with the variable label, which makes the table layout a little more compact.</p><p>Here is a table with the header cell:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-db936fc0">
    <style>
        #st-db936fc0 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-db936fc0 tr {
            background-color: transparent;
            border: none;
        }
        #st-db936fc0 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-db936fc0 br {
            line-height: 0em;
            margin: 0;
        }
        #st-db936fc0 sub {
            line-height: 0;
        }
        #st-db936fc0 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">E</td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">19</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">20</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">21</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">22</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>And here is a table without it:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variable_header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-e4097b7c">
    <style>
        #st-e4097b7c {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-e4097b7c tr {
            background-color: transparent;
            border: none;
        }
        #st-e4097b7c tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e4097b7c br {
            line-height: 0em;
            margin: 0;
        }
        #st-e4097b7c sub {
            line-height: 0;
        }
        #st-e4097b7c sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">E</td>
        <td style="text-align:center;">F</td>
        <td style="text-align:center;">G</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">11</td>
        <td style="text-align:center;">19</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">12</td>
        <td style="text-align:center;">20</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">13</td>
        <td style="text-align:center;">21</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">6</td>
        <td style="text-align:center;">14</td>
        <td style="text-align:center;">22</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
        <td style="text-align:center;">2.83</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-sort" tabindex="-1">Keyword: <code>sort</code> <a class="header-anchor" href="#Keyword:-sort" aria-label="Permalink to &quot;Keyword: \`sort\` {#Keyword:-sort}&quot;">​</a></h2><p>By default, group entries are sorted. If you need to maintain the order of entries from your dataset, set <code>sort = false</code>.</p><p>Notice how in the following two examples, the group indices are <code>&quot;dos&quot;</code>, <code>&quot;tres&quot;</code>, <code>&quot;uno&quot;</code> when sorted, but <code>&quot;uno&quot;</code>, <code>&quot;dos&quot;</code>, <code>&quot;tres&quot;</code> when not sorted. If we want to preserve the natural order of these groups (&quot;uno&quot;, &quot;dos&quot;, &quot;tres&quot; meaning &quot;one&quot;, &quot;two&quot;, &quot;three&quot; in Spanish but having a different alphabetical order) we need to set <code>sort = false</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uno&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cuatro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cinco&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std])</span></span></code></pre></div><div><table id="st-215bc3ef">
    <style>
        #st-215bc3ef {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-215bc3ef tr {
            background-color: transparent;
            border: none;
        }
        #st-215bc3ef tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-215bc3ef br {
            line-height: 0em;
            margin: 0;
        }
        #st-215bc3ef sub {
            line-height: 0;
        }
        #st-215bc3ef sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">cinco</td>
        <td style="text-align:center;">cuatro</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">dos</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">10</td>
        <td style="text-align:center;">9</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">tres</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">16</td>
        <td style="text-align:center;">15</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">uno</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cols </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean, std], sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-d8bd56dc">
    <style>
        #st-d8bd56dc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-d8bd56dc tr {
            background-color: transparent;
            border: none;
        }
        #st-d8bd56dc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-d8bd56dc br {
            line-height: 0em;
            margin: 0;
        }
        #st-d8bd56dc sub {
            line-height: 0;
        }
        #st-d8bd56dc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">group2</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">cuatro</td>
        <td style="text-align:center;">cinco</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">uno</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">dos</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">9</td>
        <td style="text-align:center;">10</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">tres</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">15</td>
        <td style="text-align:center;">16</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">std</td>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>If you have multiple groups, <code>sort = false</code> can lead to splitting of higher-level groups if they are not correctly ordered in the source data.</p></div><p>Compare the following two tables. In the second one, the group &quot;A&quot; is split by &quot;B&quot; so the label appears twice.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean])</span></span></code></pre></div><div><table id="st-bfa35f1f">
    <style>
        #st-bfa35f1f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-bfa35f1f tr {
            background-color: transparent;
            border: none;
        }
        #st-bfa35f1f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-bfa35f1f br {
            line-height: 0em;
            margin: 0;
        }
        #st-bfa35f1f sub {
            line-height: 0;
        }
        #st-bfa35f1f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">group2</td>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="2" style="text-align:left;">A</td>
        <td style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    group2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summarytable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rows </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:group2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mean], sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-ee657416">
    <style>
        #st-ee657416 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-ee657416 tr {
            background-color: transparent;
            border: none;
        }
        #st-ee657416 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-ee657416 br {
            line-height: 0em;
            margin: 0;
        }
        #st-ee657416 sub {
            line-height: 0;
        }
        #st-ee657416 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">group1</td>
        <td style="font-weight:bold;text-align:left;">group2</td>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">value</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td rowspan="2" style="text-align:left;">B</td>
        <td style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">2</td>
    </tr>
    <tr>
        <td style="text-align:left;">C</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:left;">A</td>
        <td style="text-align:left;">D</td>
        <td style="font-weight:bold;text-align:left;">mean</td>
        <td style="text-align:center;">4</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div>`,74)]))}const E=s(e,[["render",l]]);export{o as __pageData,E as default};
