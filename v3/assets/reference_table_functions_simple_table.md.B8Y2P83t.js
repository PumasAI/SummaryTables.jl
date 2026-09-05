import{_ as t,c as i,o as n,az as a}from"./chunks/framework.BKUja_M7.js";const o=JSON.parse('{"title":"simple_table","description":"","frontmatter":{},"headers":[],"relativePath":"reference/table_functions/simple_table.md","filePath":"reference/table_functions/simple_table.md","lastUpdated":null}'),e={name:"reference/table_functions/simple_table.md"};function l(h,s,r,d,p,k){return n(),i("div",null,s[0]||(s[0]=[a(`<h1 id="simple_table" tabindex="-1"><code>simple_table</code> <a class="header-anchor" href="#simple_table" aria-label="Permalink to &quot;\`simple_table\` {#simple_table}&quot;">​</a></h1><h2 id="Synopsis" tabindex="-1">Synopsis <a class="header-anchor" href="#Synopsis" aria-label="Permalink to &quot;Synopsis {#Synopsis}&quot;">​</a></h2><p><code>simple_table</code> creates a basic tabular display of raw data from a dataset. It allows users to select specific columns, optionally rename them, and control the alignment and appearance of subheaders.</p><h3 id="Example-Usage" tabindex="-1">Example Usage <a class="header-anchor" href="#Example-Usage" aria-label="Permalink to &quot;Example Usage {#Example-Usage}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;David&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Eve&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">88</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">92</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">75</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">95</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-21d26e51">
    <style>
        #st-21d26e51 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-21d26e51 tr {
            background-color: transparent;
            border: none;
        }
        #st-21d26e51 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-21d26e51 br {
            line-height: 0em;
            margin: 0;
        }
        #st-21d26e51 sub {
            line-height: 0;
        }
        #st-21d26e51 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">id</td>
        <td style="font-weight:bold;text-align:center;">name</td>
        <td style="font-weight:bold;text-align:center;">age</td>
        <td style="font-weight:bold;text-align:center;">score</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">Alice</td>
        <td style="text-align:center;">34</td>
        <td style="text-align:center;">88</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">Bob</td>
        <td style="text-align:center;">29</td>
        <td style="text-align:center;">92</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">Charlie</td>
        <td style="text-align:center;">42</td>
        <td style="text-align:center;">75</td>
    </tr>
    <tr>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">David</td>
        <td style="text-align:center;">37</td>
        <td style="text-align:center;">80</td>
    </tr>
    <tr>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">Eve</td>
        <td style="text-align:center;">25</td>
        <td style="text-align:center;">95</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Identifier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Full Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Age (years)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-8ed1acdc">
    <style>
        #st-8ed1acdc {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-8ed1acdc tr {
            background-color: transparent;
            border: none;
        }
        #st-8ed1acdc tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-8ed1acdc br {
            line-height: 0em;
            margin: 0;
        }
        #st-8ed1acdc sub {
            line-height: 0;
        }
        #st-8ed1acdc sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">Identifier</td>
        <td style="font-weight:bold;text-align:center;">Full Name</td>
        <td style="font-weight:bold;text-align:center;">Age (years)</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">Alice</td>
        <td style="text-align:center;">34</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">Bob</td>
        <td style="text-align:center;">29</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">Charlie</td>
        <td style="text-align:center;">42</td>
    </tr>
    <tr>
        <td style="text-align:center;">4</td>
        <td style="text-align:center;">David</td>
        <td style="text-align:center;">37</td>
    </tr>
    <tr>
        <td style="text-align:center;">5</td>
        <td style="text-align:center;">Eve</td>
        <td style="text-align:center;">25</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Argument-1:-table" tabindex="-1">Argument 1: <code>table</code> <a class="header-anchor" href="#Argument-1:-table" aria-label="Permalink to &quot;Argument 1: \`table\` {#Argument-1:-table}&quot;">​</a></h2><p>The first argument can be any object compatible with the <code>Tables.jl</code> API. Some common examples:</p><h3 id="DataFrame" tabindex="-1"><code>DataFrame</code> <a class="header-anchor" href="#DataFrame" aria-label="Permalink to &quot;\`DataFrame\` {#DataFrame}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-207af01a">
    <style>
        #st-207af01a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-207af01a tr {
            background-color: transparent;
            border: none;
        }
        #st-207af01a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-207af01a br {
            line-height: 0em;
            margin: 0;
        }
        #st-207af01a sub {
            line-height: 0;
        }
        #st-207af01a sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">a</td>
        <td style="font-weight:bold;text-align:center;">b</td>
    </tr>
        <tr><td colspan="2" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">x</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">y</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">z</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="NamedTuple-of-Vectors" tabindex="-1"><code>NamedTuple</code> of <code>Vector</code>s <a class="header-anchor" href="#NamedTuple-of-Vectors" aria-label="Permalink to &quot;\`NamedTuple\` of \`Vector\`s {#NamedTuple-of-Vectors}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-207af01a">
    <style>
        #st-207af01a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-207af01a tr {
            background-color: transparent;
            border: none;
        }
        #st-207af01a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-207af01a br {
            line-height: 0em;
            margin: 0;
        }
        #st-207af01a sub {
            line-height: 0;
        }
        #st-207af01a sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">a</td>
        <td style="font-weight:bold;text-align:center;">b</td>
    </tr>
        <tr><td colspan="2" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">x</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">y</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">z</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h3 id="Vector-of-NamedTuples" tabindex="-1"><code>Vector</code> of <code>NamedTuple</code>s <a class="header-anchor" href="#Vector-of-NamedTuples" aria-label="Permalink to &quot;\`Vector\` of \`NamedTuple\`s {#Vector-of-NamedTuples}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [(; a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (; a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (; a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-207af01a">
    <style>
        #st-207af01a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-207af01a tr {
            background-color: transparent;
            border: none;
        }
        #st-207af01a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-207af01a br {
            line-height: 0em;
            margin: 0;
        }
        #st-207af01a sub {
            line-height: 0;
        }
        #st-207af01a sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">a</td>
        <td style="font-weight:bold;text-align:center;">b</td>
    </tr>
        <tr><td colspan="2" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">x</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">y</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">z</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Argument-2:-columns" tabindex="-1">Argument 2: <code>columns</code> <a class="header-anchor" href="#Argument-2:-columns" aria-label="Permalink to &quot;Argument 2: \`columns\` {#Argument-2:-columns}&quot;">​</a></h2><p>The optional second argument selects the columns to display. Each entry is a column name (<code>Symbol</code> or <code>String</code>), optionally paired with a display name, a <code>NumberFormat</code>, or both.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fraction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.789</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_230_000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ID&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :fraction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scale </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, suffix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Fraction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(magnitudes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :financial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-7148588e">
    <style>
        #st-7148588e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-7148588e tr {
            background-color: transparent;
            border: none;
        }
        #st-7148588e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-7148588e br {
            line-height: 0em;
            margin: 0;
        }
        #st-7148588e sub {
            line-height: 0;
        }
        #st-7148588e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">ID</td>
        <td style="font-weight:bold;text-align:center;">Fraction</td>
        <td style="font-weight:bold;text-align:center;">count</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">1</td>
        <td style="text-align:center;">12.3 %</td>
        <td style="text-align:center;">1.2K</td>
    </tr>
    <tr>
        <td style="text-align:center;">2</td>
        <td style="text-align:center;">45.6 %</td>
        <td style="text-align:center;">55K</td>
    </tr>
    <tr>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">78.9 %</td>
        <td style="text-align:center;">1.23M</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-halign" tabindex="-1">Keyword: <code>halign</code> <a class="header-anchor" href="#Keyword:-halign" aria-label="Permalink to &quot;Keyword: \`halign\` {#Keyword:-halign}&quot;">​</a></h2><p>Controls the horizontal alignment of column contents. Accepts <code>:left</code>, <code>:right</code>, <code>:center</code>, or a vector of these values (one for each column).</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), cos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, number_format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div><table id="st-7fd21c6c">
    <style>
        #st-7fd21c6c {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-7fd21c6c tr {
            background-color: transparent;
            border: none;
        }
        #st-7fd21c6c tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-7fd21c6c br {
            line-height: 0em;
            margin: 0;
        }
        #st-7fd21c6c sub {
            line-height: 0;
        }
        #st-7fd21c6c sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:right;">value</td>
        <td style="font-weight:bold;text-align:right;">sin</td>
        <td style="font-weight:bold;text-align:right;">cos</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:right;">1</td>
        <td style="text-align:right;">0.841</td>
        <td style="text-align:right;">0.540</td>
    </tr>
    <tr>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">0.909</td>
        <td style="text-align:right;">-0.416</td>
    </tr>
    <tr>
        <td style="text-align:right;">3</td>
        <td style="text-align:right;">0.141</td>
        <td style="text-align:right;">-0.990</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), cos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], number_format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div><table id="st-9864f220">
    <style>
        #st-9864f220 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-9864f220 tr {
            background-color: transparent;
            border: none;
        }
        #st-9864f220 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-9864f220 br {
            line-height: 0em;
            margin: 0;
        }
        #st-9864f220 sub {
            line-height: 0;
        }
        #st-9864f220 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">value</td>
        <td style="font-weight:bold;text-align:right;">sin</td>
        <td style="font-weight:bold;text-align:right;">cos</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">1</td>
        <td style="text-align:right;">0.841</td>
        <td style="text-align:right;">0.540</td>
    </tr>
    <tr>
        <td style="text-align:left;">2</td>
        <td style="text-align:right;">0.909</td>
        <td style="text-align:right;">-0.416</td>
    </tr>
    <tr>
        <td style="text-align:left;">3</td>
        <td style="text-align:right;">0.141</td>
        <td style="text-align:right;">-0.990</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-subheaders" tabindex="-1">Keyword: <code>subheaders</code> <a class="header-anchor" href="#Keyword:-subheaders" aria-label="Permalink to &quot;Keyword: \`subheaders\` {#Keyword:-subheaders}&quot;">​</a></h2><p>Allows specifying subheaders for columns. These must be of the same length as the number of displayed columns.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), cos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, subheaders </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Int64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Float64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Float64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-ea748cf1">
    <style>
        #st-ea748cf1 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-ea748cf1 tr {
            background-color: transparent;
            border: none;
        }
        #st-ea748cf1 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-ea748cf1 br {
            line-height: 0em;
            margin: 0;
        }
        #st-ea748cf1 sub {
            line-height: 0;
        }
        #st-ea748cf1 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:right;">value</td>
        <td style="font-weight:bold;text-align:right;">sin</td>
        <td style="font-weight:bold;text-align:right;">cos</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:right;">Int64</td>
        <td style="font-style:italic;text-align:right;">Float64</td>
        <td style="font-style:italic;text-align:right;">Float64</td>
    </tr>
        <tr><td colspan="3" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:right;">1</td>
        <td style="text-align:right;">0.841</td>
        <td style="text-align:right;">0.54</td>
    </tr>
    <tr>
        <td style="text-align:right;">2</td>
        <td style="text-align:right;">0.909</td>
        <td style="text-align:right;">-0.416</td>
    </tr>
    <tr>
        <td style="text-align:right;">3</td>
        <td style="text-align:right;">0.141</td>
        <td style="text-align:right;">-0.99</td>
    </tr>
    <tr><td colspan="3" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div>`,33)]))}const E=t(e,[["render",l]]);export{o as __pageData,E as default};
