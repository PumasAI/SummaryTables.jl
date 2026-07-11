import{_ as i,c as a,o as n,az as t}from"./chunks/framework.BKUja_M7.js";const E=JSON.parse('{"title":"Cell","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/cell.md","filePath":"reference/infrastructure/cell.md","lastUpdated":null}'),e={name:"reference/infrastructure/cell.md"};function l(h,s,p,r,k,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="Cell" tabindex="-1"><code>Cell</code> <a class="header-anchor" href="#Cell" aria-label="Permalink to &quot;\`Cell\` {#Cell}&quot;">​</a></h1><h2 id="Argument-1:-value" tabindex="-1">Argument 1: <code>value</code> <a class="header-anchor" href="#Argument-1:-value" aria-label="Permalink to &quot;Argument 1: \`value\` {#Argument-1:-value}&quot;">​</a></h2><p>This is the content of the <code>Cell</code>. How it is rendered is decided by the output format and what <code>show</code> methods are defined for the type of <code>value</code> and the respective output <code>MIME</code> type. If no output-specific <code>MIME</code> type has a <code>show</code> method, the fallback is always the generic text output.</p><p>The following are some types which receive special handling by SummaryTables.</p><h3 id="Special-Cell-value-types" tabindex="-1">Special <code>Cell</code> value types <a class="header-anchor" href="#Special-Cell-value-types" aria-label="Permalink to &quot;Special \`Cell\` value types {#Special-Cell-value-types}&quot;">​</a></h3><h4 id="Floating-point-numbers" tabindex="-1">Floating point numbers <a class="header-anchor" href="#Floating-point-numbers" aria-label="Permalink to &quot;Floating point numbers {#Floating-point-numbers}&quot;">​</a></h4><p>Most tables display floating point numbers, however, the formatting of these numbers can vary. SummaryTables postprocesses every table in order to find unformatted floating point numbers. These are then given the default, table-wide, formatting.</p><p>The formatting behavior is controlled by the <code>round_mode</code>, <code>round_digits</code>, and <code>trailing_zeros</code> parameters. These can be set as <a href="/SummaryTables.jl/v3/reference/infrastructure/defaults#Global-Defaults">global defaults</a> or passed as arguments to individual table functions.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-c261392e">
    <style>
        #st-c261392e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-c261392e tr {
            background-color: transparent;
            border: none;
        }
        #st-c261392e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-c261392e br {
            line-height: 0em;
            margin: 0;
        }
        #st-c261392e sub {
            line-height: 0;
        }
        #st-c261392e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.23</td>
        <td style="text-align:center;">12.3</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.123</td>
        <td style="text-align:center;">0.0123</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; round_mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, round_digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, trailing_zeros </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-725f2e14">
    <style>
        #st-725f2e14 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-725f2e14 tr {
            background-color: transparent;
            border: none;
        }
        #st-725f2e14 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-725f2e14 br {
            line-height: 0em;
            margin: 0;
        }
        #st-725f2e14 sub {
            line-height: 0;
        }
        #st-725f2e14 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.23456</td>
        <td style="text-align:center;">12.34560</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.12346</td>
        <td style="text-align:center;">0.01235</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Concat" tabindex="-1"><code>Concat</code> <a class="header-anchor" href="#Concat" aria-label="Permalink to &quot;\`Concat\` {#Concat}&quot;">​</a></h4><p>All the arguments of <code>Concat</code> are concatenated together in the final output. Note that this is usually preferrable to string-interpolating multiple values because you lose special handling of the value types (like floating point rounding behavior or special LaTeX formatting) if you turn them into strings.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">some_numbers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(some_numbers)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(some_numbers)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mean (SD) interpolated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$mu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$sd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mean (SD) Concat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mu, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; (&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sd, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-3a40471f">
    <style>
        #st-3a40471f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-3a40471f tr {
            background-color: transparent;
            border: none;
        }
        #st-3a40471f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-3a40471f br {
            line-height: 0em;
            margin: 0;
        }
        #st-3a40471f sub {
            line-height: 0;
        }
        #st-3a40471f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Mean (SD) interpolated</td>
        <td style="text-align:center;">8.857142857142858 (8.970852271450605)</td>
    </tr>
    <tr>
        <td style="text-align:center;">Mean (SD) Concat</td>
        <td style="text-align:center;">8.86 (8.97)</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Multiline" tabindex="-1"><code>Multiline</code> <a class="header-anchor" href="#Multiline" aria-label="Permalink to &quot;\`Multiline\` {#Multiline}&quot;">​</a></h4><p>Use the <code>Multiline</code> type to force linebreaks between different values in a cell. A <code>Multiline</code> value may not be nested inside other values in a cell, it may only be the outermost value. All nested values retain their special behaviors, so using <code>Multiline</code> is preferred over hardcoding linebreaks in the specific output formats yourself.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Multiline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1 a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1 b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)                       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-6ddfd0bf">
    <style>
        #st-6ddfd0bf {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-6ddfd0bf tr {
            background-color: transparent;
            border: none;
        }
        #st-6ddfd0bf tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-6ddfd0bf br {
            line-height: 0em;
            margin: 0;
        }
        #st-6ddfd0bf sub {
            line-height: 0;
        }
        #st-6ddfd0bf sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1 a<br>A1 b</td>
        <td style="text-align:center;">B1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Annotated" tabindex="-1"><code>Annotated</code> <a class="header-anchor" href="#Annotated" aria-label="Permalink to &quot;\`Annotated\` {#Annotated}&quot;">​</a></h4><p>To annotate elements in a table with footnotes, use the <code>Annotated</code> type. It takes an arbitrary <code>value</code> to annotate as well as an <code>annotation</code> which becomes a footnote in the table. You can also pass the <code>label</code> keyword if you don&#39;t want an auto-incrementing number as the label. You can also pass <code>label = nothing</code> if you want a footnote without label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is the first cell&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))             </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A custom label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;- A missing value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-e536e547">
    <style>
        #st-e536e547 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-e536e547 tr {
            background-color: transparent;
            border: none;
        }
        #st-e536e547 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e536e547 br {
            line-height: 0em;
            margin: 0;
        }
        #st-e536e547 sub {
            line-height: 0;
        }
        #st-e536e547 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1<sup>1</sup></td>
        <td style="text-align:center;">B1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2<sup>x</sup></td>
        <td style="text-align:center;">B2</td>
    </tr>
    <tr>
        <td style="text-align:center;">-</td>
        <td style="text-align:center;">B3</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="2" style="font-size: 0.8em;"><sup>1</sup> This is the first cell<br/><sup>x</sup> A custom label<br/>- A missing value</td></tr>
</table></div><h4 id="Superscript" tabindex="-1"><code>Superscript</code> <a class="header-anchor" href="#Superscript" aria-label="Permalink to &quot;\`Superscript\` {#Superscript}&quot;">​</a></h4><p>Displays the wrapped value in superscript style. Use this instead of hardcoding output format specific commands.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Without superscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;With &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Superscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;superscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-fbdfcb2f">
    <style>
        #st-fbdfcb2f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-fbdfcb2f tr {
            background-color: transparent;
            border: none;
        }
        #st-fbdfcb2f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-fbdfcb2f br {
            line-height: 0em;
            margin: 0;
        }
        #st-fbdfcb2f sub {
            line-height: 0;
        }
        #st-fbdfcb2f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Without superscript</td>
        <td style="text-align:center;">With <sup>superscript</sup></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Subscript" tabindex="-1"><code>Subscript</code> <a class="header-anchor" href="#Subscript" aria-label="Permalink to &quot;\`Subscript\` {#Subscript}&quot;">​</a></h4><p>Displays the wrapped value in subscript style. Use this instead of hardcoding output format specific commands.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Without subscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;With &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Subscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-4e7c43a9">
    <style>
        #st-4e7c43a9 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-4e7c43a9 tr {
            background-color: transparent;
            border: none;
        }
        #st-4e7c43a9 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-4e7c43a9 br {
            line-height: 0em;
            margin: 0;
        }
        #st-4e7c43a9 sub {
            line-height: 0;
        }
        #st-4e7c43a9 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Without subscript</td>
        <td style="text-align:center;">With <sub>subscript</sub></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Styled" tabindex="-1"><code>Styled</code> <a class="header-anchor" href="#Styled" aria-label="Permalink to &quot;\`Styled\` {#Styled}&quot;">​</a></h4><p>To apply font styles only to a rendered value and not the whole cell, use the <code>Styled</code> wrapper object. Together with <code>Concat</code> you can partially style a cell&#39;s content.</p><p><code>Styled</code> takes the following optional keyword arguments:</p><ul><li><p><code>bold::Bool</code></p></li><li><p><code>italic::Bool</code></p></li><li><p><code>underline::Bool</code></p></li><li><p><code>color::String</code> a hex color string like #FF0000. Note that you need to add <code>\\usepackage{xcolor}</code> to use colored text in LaTeX.</p></li></ul><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Italic text and a bold red number: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#FF0000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">together </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text, number)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">annotated </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Annotated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Styled footnote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#00CC00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.([together annotated]))</span></span></code></pre></div><div><table id="st-eb67d372">
    <style>
        #st-eb67d372 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-eb67d372 tr {
            background-color: transparent;
            border: none;
        }
        #st-eb67d372 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-eb67d372 br {
            line-height: 0em;
            margin: 0;
        }
        #st-eb67d372 sub {
            line-height: 0;
        }
        #st-eb67d372 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"><span style="font-style:italic;">Italic text and a bold red number: </span><span style="font-weight:bold;color:rgb(255,0,0);">0.964</span></td>
        <td style="text-align:center;">Annotated<sup>1</sup></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="2" style="font-size: 0.8em;"><sup>1</sup> <span style="color:rgb(0,204,0);">Styled footnote</span></td></tr>
</table></div><h2 id="Optional-argument-2:-cellstyle" tabindex="-1">Optional argument 2: <code>cellstyle</code> <a class="header-anchor" href="#Optional-argument-2:-cellstyle" aria-label="Permalink to &quot;Optional argument 2: \`cellstyle\` {#Optional-argument-2:-cellstyle}&quot;">​</a></h2><p>You may pass the style settings of a <code>Cell</code> as a positional argument of type <a href="/SummaryTables.jl/v3/reference/infrastructure/cellstyle#CellStyle"><code>CellStyle</code></a>. It is usually more convenient, however, to use the keyword arguments to <code>Cell</code> instead.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(underline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(indent_pt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-53566267">
    <style>
        #st-53566267 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-53566267 tr {
            background-color: transparent;
            border: none;
        }
        #st-53566267 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-53566267 br {
            line-height: 0em;
            margin: 0;
        }
        #st-53566267 sub {
            line-height: 0;
        }
        #st-53566267 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">A1</td>
        <td style="text-decoration:underline;text-align:center;">B1</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:center;">A2</td>
        <td style="padding-left:10.0pt;text-align:center;">B2</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div>`,42)]))}const g=i(e,[["render",l]]);export{E as __pageData,g as default};
