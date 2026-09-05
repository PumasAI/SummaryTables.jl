import{_ as i,c as a,o as t,az as n}from"./chunks/framework.CAkcY2eT.js";const E=JSON.parse('{"title":"Cell","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/cell.md","filePath":"reference/infrastructure/cell.md","lastUpdated":null}'),e={name:"reference/infrastructure/cell.md"};function l(h,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="Cell" tabindex="-1"><code>Cell</code> <a class="header-anchor" href="#Cell" aria-label="Permalink to &quot;\`Cell\` {#Cell}&quot;">​</a></h1><h2 id="Argument-1:-value" tabindex="-1">Argument 1: <code>value</code> <a class="header-anchor" href="#Argument-1:-value" aria-label="Permalink to &quot;Argument 1: \`value\` {#Argument-1:-value}&quot;">​</a></h2><p>This is the content of the <code>Cell</code>. How it is rendered is decided by the output format and what <code>show</code> methods are defined for the type of <code>value</code> and the respective output <code>MIME</code> type. If no output-specific <code>MIME</code> type has a <code>show</code> method, the fallback is always the generic text output.</p><p>The following are some types which receive special handling by SummaryTables.</p><h3 id="Special-Cell-value-types" tabindex="-1">Special <code>Cell</code> value types <a class="header-anchor" href="#Special-Cell-value-types" aria-label="Permalink to &quot;Special \`Cell\` value types {#Special-Cell-value-types}&quot;">​</a></h3><h4 id="Floating-point-numbers" tabindex="-1">Floating point numbers <a class="header-anchor" href="#Floating-point-numbers" aria-label="Permalink to &quot;Floating point numbers {#Floating-point-numbers}&quot;">​</a></h4><p>Most tables display floating point numbers, however, the formatting of these numbers can vary. SummaryTables postprocesses every table in order to find unformatted floating point numbers. These are then given the default, table-wide, formatting.</p><p>The formatting behavior is controlled by a <code>NumberFormat</code>, which can be passed to individual table functions via the <code>number_format</code> keyword or set as a <a href="/SummaryTables.jl/dev/reference/infrastructure/defaults#Global-Defaults">global default</a>. Refer to the <a href="/SummaryTables.jl/dev/resources/api#SummaryTables.NumberFormat"><code>NumberFormat</code></a> docstring for all available settings.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Before version 3.6, number formatting was controlled by the three separate keywords <code>round_mode</code>, <code>round_digits</code> and <code>trailing_zeros</code>. These were rolled into <code>NumberFormat</code> as the <code>mode</code>, <code>digits</code> and <code>trailing_zeros</code> settings. The old keywords continue to work, both on table functions and in the global defaults, but they cannot be combined with <code>number_format</code> in the same call.</p></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-a4242384">
    <style>
        #st-a4242384 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a4242384 tr {
            background-color: transparent;
            border: none;
        }
        #st-a4242384 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a4242384 br {
            line-height: 0em;
            margin: 0;
        }
        #st-a4242384 sub {
            line-height: 0;
        }
        #st-a4242384 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.23</td>
        <td style="text-align:center;">12.3</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.123</td>
        <td style="text-align:center;">0.0123</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; number_format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div><table id="st-280d4484">
    <style>
        #st-280d4484 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-280d4484 tr {
            background-color: transparent;
            border: none;
        }
        #st-280d4484 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-280d4484 br {
            line-height: 0em;
            margin: 0;
        }
        #st-280d4484 sub {
            line-height: 0;
        }
        #st-280d4484 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.23456</td>
        <td style="text-align:center;">12.34560</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.12346</td>
        <td style="text-align:center;">0.01235</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h5 id="NumberFormat" tabindex="-1">NumberFormat <a class="header-anchor" href="#NumberFormat" aria-label="Permalink to &quot;NumberFormat {#NumberFormat}&quot;">​</a></h5><p>To format numbers individually, call a <a href="/SummaryTables.jl/dev/resources/api#SummaryTables.NumberFormat"><code>NumberFormat</code></a> on them, which wraps them in an object carrying the formatting information. Any settings not specified in such a format are inherited from the table&#39;s <code>number_format</code>, which in turn inherits its unset settings from the package defaults.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fraction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scale </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, suffix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(magnitudes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :financial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">concentration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sigdigits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, suffix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; mol/L&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pvalue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lower_limit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fraction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.4567</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fraction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.891</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5432.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_230_000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">concentration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.34e-7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">concentration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5e-8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pvalue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pvalue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.00004</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-b2f39eb3">
    <style>
        #st-b2f39eb3 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-b2f39eb3 tr {
            background-color: transparent;
            border: none;
        }
        #st-b2f39eb3 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-b2f39eb3 br {
            line-height: 0em;
            margin: 0;
        }
        #st-b2f39eb3 sub {
            line-height: 0;
        }
        #st-b2f39eb3 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">46 %</td>
        <td style="text-align:center;">89 %</td>
    </tr>
    <tr>
        <td style="text-align:center;">5.43K</td>
        <td style="text-align:center;">1.23M</td>
    </tr>
    <tr>
        <td style="text-align:center;">2.34 × 10<sup>-7</sup> mol/L</td>
        <td style="text-align:center;">1.50 × 10<sup>-8</sup> mol/L</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.023</td>
        <td style="text-align:center;">&lt;0.001</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><p>In <code>simple_table</code>, a <code>NumberFormat</code> can be attached to a column with the pair syntax, and <code>listingtable</code> accepts a <code>NumberFormat</code> for its raw values via the <code>format</code> keyword. Anywhere a function is expected, for example for summary analyses in <code>listingtable</code> or <code>summarytable</code>, formats can be composed with the summary function instead, like <code>NumberFormat(digits = 2) ∘ mean</code>.</p><h5 id="Exponential-notation" tabindex="-1">Exponential notation <a class="header-anchor" href="#Exponential-notation" aria-label="Permalink to &quot;Exponential notation {#Exponential-notation}&quot;">​</a></h5><p>The <code>mode</code>s <code>:auto</code> and <code>:sigdigits</code> switch to exponential notation for numbers whose base 10 exponent lies outside of <code>exponent_thresholds</code>, and the default range depends on the mode. <code>:auto</code> uses <code>(-4, 6)</code>, the range in which Julia prints floats without an exponent. <code>:sigdigits</code> uses <code>(-1, :digits)</code>, where <code>:digits</code> stands for the <code>digits</code> setting, so that every digit that is displayed is a significant one. Outside of that range, plain notation needs placeholder zeros, and <code>1234</code> at 3 digits would have to be shown as <code>1230</code> where the final zero holds the units position without carrying any precision.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sigdigits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sigdigits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lenient </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NumberFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sigdigits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, exponent_thresholds </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12340</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:sigdigits&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(-4, 6)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(values)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(values)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sigdigits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(values)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lenient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(values))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-a6a76596">
    <style>
        #st-a6a76596 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a6a76596 tr {
            background-color: transparent;
            border: none;
        }
        #st-a6a76596 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a6a76596 br {
            line-height: 0em;
            margin: 0;
        }
        #st-a6a76596 sub {
            line-height: 0;
        }
        #st-a6a76596 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">Value</td>
        <td style="font-weight:bold;text-align:center;">:auto</td>
        <td style="font-weight:bold;text-align:center;">:sigdigits</td>
        <td style="font-weight:bold;text-align:center;">(-4, 6)</td>
    </tr>
    <tr>
        <td style="text-align:center;">12340.0</td>
        <td style="text-align:center;">12340</td>
        <td style="text-align:center;">1.23 × 10<sup>4</sup></td>
        <td style="text-align:center;">12300</td>
    </tr>
    <tr>
        <td style="text-align:center;">1234.0</td>
        <td style="text-align:center;">1234</td>
        <td style="text-align:center;">1.23 × 10<sup>3</sup></td>
        <td style="text-align:center;">1230</td>
    </tr>
    <tr>
        <td style="text-align:center;">123.4</td>
        <td style="text-align:center;">123</td>
        <td style="text-align:center;">123</td>
        <td style="text-align:center;">123</td>
    </tr>
    <tr>
        <td style="text-align:center;">12.34</td>
        <td style="text-align:center;">12.3</td>
        <td style="text-align:center;">12.3</td>
        <td style="text-align:center;">12.3</td>
    </tr>
    <tr>
        <td style="text-align:center;">1.234</td>
        <td style="text-align:center;">1.23</td>
        <td style="text-align:center;">1.23</td>
        <td style="text-align:center;">1.23</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.1234</td>
        <td style="text-align:center;">0.123</td>
        <td style="text-align:center;">0.123</td>
        <td style="text-align:center;">0.123</td>
    </tr>
    <tr>
        <td style="text-align:center;">0.01234</td>
        <td style="text-align:center;">0.0123</td>
        <td style="text-align:center;">1.23 × 10<sup>-2</sup></td>
        <td style="text-align:center;">0.0123</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-d9435e2b">
    <style>
        #st-d9435e2b {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-d9435e2b tr {
            background-color: transparent;
            border: none;
        }
        #st-d9435e2b tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-d9435e2b br {
            line-height: 0em;
            margin: 0;
        }
        #st-d9435e2b sub {
            line-height: 0;
        }
        #st-d9435e2b sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Mean (SD) interpolated</td>
        <td style="text-align:center;">8.857142857142858 (8.970852271450605)</td>
    </tr>
    <tr>
        <td style="text-align:center;">Mean (SD) Concat</td>
        <td style="text-align:center;">8.86 (8.97)</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Multiline" tabindex="-1"><code>Multiline</code> <a class="header-anchor" href="#Multiline" aria-label="Permalink to &quot;\`Multiline\` {#Multiline}&quot;">​</a></h4><p>Use the <code>Multiline</code> type to force linebreaks between different values in a cell. A <code>Multiline</code> value may not be nested inside other values in a cell, it may only be the outermost value. All nested values retain their special behaviors, so using <code>Multiline</code> is preferred over hardcoding linebreaks in the specific output formats yourself.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Multiline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1 a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1 b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)                       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-f5254de4">
    <style>
        #st-f5254de4 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f5254de4 tr {
            background-color: transparent;
            border: none;
        }
        #st-f5254de4 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f5254de4 br {
            line-height: 0em;
            margin: 0;
        }
        #st-f5254de4 sub {
            line-height: 0;
        }
        #st-f5254de4 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1 a<br>A1 b</td>
        <td style="text-align:center;">B1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Annotated" tabindex="-1"><code>Annotated</code> <a class="header-anchor" href="#Annotated" aria-label="Permalink to &quot;\`Annotated\` {#Annotated}&quot;">​</a></h4><p>To annotate elements in a table with footnotes, use the <code>Annotated</code> type. It takes an arbitrary <code>value</code> to annotate as well as an <code>annotation</code> which becomes a footnote in the table. You can also pass the <code>label</code> keyword if you don&#39;t want an auto-incrementing number as the label. You can also pass <code>label = nothing</code> if you want a footnote without label.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is the first cell&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))             </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A custom label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;- A missing value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-e97d5e7d">
    <style>
        #st-e97d5e7d {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-e97d5e7d tr {
            background-color: transparent;
            border: none;
        }
        #st-e97d5e7d tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e97d5e7d br {
            line-height: 0em;
            margin: 0;
        }
        #st-e97d5e7d sub {
            line-height: 0;
        }
        #st-e97d5e7d sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="2" style="font-size: 0.8em;text-align:left;"><sup>1</sup> This is the first cell<br/><sup>x</sup> A custom label<br/>- A missing value</td></tr>
</table></div><h4 id="Superscript" tabindex="-1"><code>Superscript</code> <a class="header-anchor" href="#Superscript" aria-label="Permalink to &quot;\`Superscript\` {#Superscript}&quot;">​</a></h4><p>Displays the wrapped value in superscript style. Use this instead of hardcoding output format specific commands.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Without superscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;With &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Superscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;superscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-9e7bee0f">
    <style>
        #st-9e7bee0f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-9e7bee0f tr {
            background-color: transparent;
            border: none;
        }
        #st-9e7bee0f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-9e7bee0f br {
            line-height: 0em;
            margin: 0;
        }
        #st-9e7bee0f sub {
            line-height: 0;
        }
        #st-9e7bee0f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Without superscript</td>
        <td style="text-align:center;">With <sup>superscript</sup></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Subscript" tabindex="-1"><code>Subscript</code> <a class="header-anchor" href="#Subscript" aria-label="Permalink to &quot;\`Subscript\` {#Subscript}&quot;">​</a></h4><p>Displays the wrapped value in subscript style. Use this instead of hardcoding output format specific commands.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Without subscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;With &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Subscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subscript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-7cc03b66">
    <style>
        #st-7cc03b66 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-7cc03b66 tr {
            background-color: transparent;
            border: none;
        }
        #st-7cc03b66 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-7cc03b66 br {
            line-height: 0em;
            margin: 0;
        }
        #st-7cc03b66 sub {
            line-height: 0;
        }
        #st-7cc03b66 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">Without subscript</td>
        <td style="text-align:center;">With <sub>subscript</sub></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h4 id="Styled" tabindex="-1"><code>Styled</code> <a class="header-anchor" href="#Styled" aria-label="Permalink to &quot;\`Styled\` {#Styled}&quot;">​</a></h4><p>To apply font styles only to a rendered value and not the whole cell, use the <code>Styled</code> wrapper object. Together with <code>Concat</code> you can partially style a cell&#39;s content.</p><p><code>Styled</code> takes the following optional keyword arguments:</p><ul><li><p><code>bold::Bool</code></p></li><li><p><code>italic::Bool</code></p></li><li><p><code>underline::Bool</code></p></li><li><p><code>color::String</code> a hex color string like #FF0000. Note that you need to add <code>\\usepackage{xcolor}</code> to use colored text in LaTeX.</p></li></ul><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Italic text and a bold red number: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#FF0000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">together </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text, number)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">annotated </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Annotated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Annotated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Styled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Styled footnote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#00CC00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.([together annotated]))</span></span></code></pre></div><div><table id="st-54578870">
    <style>
        #st-54578870 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-54578870 tr {
            background-color: transparent;
            border: none;
        }
        #st-54578870 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-54578870 br {
            line-height: 0em;
            margin: 0;
        }
        #st-54578870 sub {
            line-height: 0;
        }
        #st-54578870 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"><span style="font-style:italic;">Italic text and a bold red number: </span><span style="font-weight:bold;color:rgb(255,0,0);">0.964</span></td>
        <td style="text-align:center;">Annotated<sup>1</sup></td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="2" style="font-size: 0.8em;text-align:left;"><sup>1</sup> <span style="color:rgb(0,204,0);">Styled footnote</span></td></tr>
</table></div><h2 id="Optional-argument-2:-cellstyle" tabindex="-1">Optional argument 2: <code>cellstyle</code> <a class="header-anchor" href="#Optional-argument-2:-cellstyle" aria-label="Permalink to &quot;Optional argument 2: \`cellstyle\` {#Optional-argument-2:-cellstyle}&quot;">​</a></h2><p>You may pass the style settings of a <code>Cell</code> as a positional argument of type <a href="/SummaryTables.jl/dev/resources/api#SummaryTables.CellStyle"><code>CellStyle</code></a>. It is usually more convenient, however, to use the keyword arguments to <code>Cell</code> instead.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(underline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(indent_pt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-5e933b93">
    <style>
        #st-5e933b93 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-5e933b93 tr {
            background-color: transparent;
            border: none;
        }
        #st-5e933b93 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-5e933b93 br {
            line-height: 0em;
            margin: 0;
        }
        #st-5e933b93 sub {
            line-height: 0;
        }
        #st-5e933b93 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">A1</td>
        <td style="text-decoration:underline;text-align:center;">B1</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:center;">A2</td>
        <td style="padding-left:10pt;text-align:center;">B2</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div>`,52)]))}const g=i(e,[["render",l]]);export{E as __pageData,g as default};
