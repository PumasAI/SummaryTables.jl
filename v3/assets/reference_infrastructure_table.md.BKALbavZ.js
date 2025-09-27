import{_ as e,c as n,o as s,az as i}from"./chunks/framework.BKUja_M7.js";const o=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/table.md","filePath":"reference/infrastructure/table.md","lastUpdated":null}'),a={name:"reference/infrastructure/table.md"};function l(d,t,r,h,p,g){return s(),n("div",null,t[0]||(t[0]=[i(`<h1 id="Table" tabindex="-1"><code>Table</code> <a class="header-anchor" href="#Table" aria-label="Permalink to &quot;\`Table\` {#Table}&quot;">​</a></h1><p>You can build custom tables using the <code>Table</code> type.</p><h2 id="Argument-1:-cells" tabindex="-1">Argument 1: <code>cells</code> <a class="header-anchor" href="#Argument-1:-cells" aria-label="Permalink to &quot;Argument 1: \`cells\` {#Argument-1:-cells}&quot;">​</a></h2><p>The table&#39;s content is given as an <code>AbstractMatrix</code> of <code>Cell</code>s:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-a67428ab">
    <style>
        #st-a67428ab {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a67428ab tr {
            background-color: transparent;
            border: none;
        }
        #st-a67428ab tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a67428ab br {
            line-height: 0em;
            margin: 0;
        }
        #st-a67428ab sub {
            line-height: 0;
        }
        #st-a67428ab sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-header" tabindex="-1">Keyword: <code>header</code> <a class="header-anchor" href="#Keyword:-header" aria-label="Permalink to &quot;Keyword: \`header\` {#Keyword:-header}&quot;">​</a></h2><p>You can pass an <code>Int</code> to mark the last row of the header section. A divider line is placed after this row.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-de7c448a">
    <style>
        #st-de7c448a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-de7c448a tr {
            background-color: transparent;
            border: none;
        }
        #st-de7c448a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-de7c448a br {
            line-height: 0em;
            margin: 0;
        }
        #st-de7c448a sub {
            line-height: 0;
        }
        #st-de7c448a sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-footer" tabindex="-1">Keyword: <code>footer</code> <a class="header-anchor" href="#Keyword:-footer" aria-label="Permalink to &quot;Keyword: \`footer\` {#Keyword:-footer}&quot;">​</a></h2><p>You can pass an <code>Int</code> to mark the first row of the footer section. A divider line is placed before this row.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-d94b254d">
    <style>
        #st-d94b254d {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-d94b254d tr {
            background-color: transparent;
            border: none;
        }
        #st-d94b254d tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-d94b254d br {
            line-height: 0em;
            margin: 0;
        }
        #st-d94b254d sub {
            line-height: 0;
        }
        #st-d94b254d sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
    </tr>
    <tfoot>
        <tr><td colspan="5" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    </tfoot>
</table></div><h2 id="Keyword:-footnotes" tabindex="-1">Keyword: <code>footnotes</code> <a class="header-anchor" href="#Keyword:-footnotes" aria-label="Permalink to &quot;Keyword: \`footnotes\` {#Keyword:-footnotes}&quot;">​</a></h2><p>The <code>footnotes</code> keyword allows to add custom footnotes to the table which do not correspond to specific <a href="/SummaryTables.jl/v3/reference/infrastructure/cell#Annotated"><code>Annotated</code></a> values in the table.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Custom footnote 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Custom footnote 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-08db099b">
    <style>
        #st-08db099b {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-08db099b tr {
            background-color: transparent;
            border: none;
        }
        #st-08db099b tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-08db099b br {
            line-height: 0em;
            margin: 0;
        }
        #st-08db099b sub {
            line-height: 0;
        }
        #st-08db099b sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="5" style="font-size: 0.8em;">Custom footnote 1<br/>Custom footnote 2</td></tr>
</table></div><h2 id="Keyword:-rowgaps" tabindex="-1">Keyword: <code>rowgaps</code> <a class="header-anchor" href="#Keyword:-rowgaps" aria-label="Permalink to &quot;Keyword: \`rowgaps\` {#Keyword:-rowgaps}&quot;">​</a></h2><p>It can be beneficial for the readability of larger tables to add gaps between certain rows. These gaps can be passed as a <code>Vector</code> of <code>Pair</code>s where the first element is the index of the row gap and the second element is the gap size in <code>pt</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; rowgaps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-9c65a86f">
    <style>
        #st-9c65a86f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-9c65a86f tr {
            background-color: transparent;
            border: none;
        }
        #st-9c65a86f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-9c65a86f br {
            line-height: 0em;
            margin: 0;
        }
        #st-9c65a86f sub {
            line-height: 0;
        }
        #st-9c65a86f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
    </tr>
    <tr>
        <td style="padding-bottom: 4.0pt;text-align:center;">A3</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">B3</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">C3</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">D3</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="padding-top: 4.0pt;text-align:center;">A4</td>
        <td style="padding-top: 4.0pt;text-align:center;">B4</td>
        <td style="padding-top: 4.0pt;text-align:center;">C4</td>
        <td style="padding-top: 4.0pt;text-align:center;">D4</td>
        <td style="padding-top: 4.0pt;text-align:center;">E4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr>
        <td style="padding-bottom: 4.0pt;text-align:center;">A6</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">B6</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">C6</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">D6</td>
        <td style="padding-bottom: 4.0pt;text-align:center;">E6</td>
    </tr>
    <tr>
        <td style="padding-top: 4.0pt;text-align:center;">A7</td>
        <td style="padding-top: 4.0pt;text-align:center;">B7</td>
        <td style="padding-top: 4.0pt;text-align:center;">C7</td>
        <td style="padding-top: 4.0pt;text-align:center;">D7</td>
        <td style="padding-top: 4.0pt;text-align:center;">E7</td>
    </tr>
    <tr>
        <td style="text-align:center;">A8</td>
        <td style="text-align:center;">B8</td>
        <td style="text-align:center;">C8</td>
        <td style="text-align:center;">D8</td>
        <td style="text-align:center;">E8</td>
    </tr>
    <tr>
        <td style="text-align:center;">A9</td>
        <td style="text-align:center;">B9</td>
        <td style="text-align:center;">C9</td>
        <td style="text-align:center;">D9</td>
        <td style="text-align:center;">E9</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-colgaps" tabindex="-1">Keyword: <code>colgaps</code> <a class="header-anchor" href="#Keyword:-colgaps" aria-label="Permalink to &quot;Keyword: \`colgaps\` {#Keyword:-colgaps}&quot;">​</a></h2><p>It can be beneficial for the readability of larger tables to add gaps between certain columns. These gaps can be passed as a <code>Vector</code> of <code>Pair</code>s where the first element is the index of the column gap and the second element is the gap size in <code>pt</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;I&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; colgaps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-eeeaebd1">
    <style>
        #st-eeeaebd1 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-eeeaebd1 tr {
            background-color: transparent;
            border: none;
        }
        #st-eeeaebd1 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-eeeaebd1 br {
            line-height: 0em;
            margin: 0;
        }
        #st-eeeaebd1 sub {
            line-height: 0;
        }
        #st-eeeaebd1 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="padding-right:4.0pt;text-align:center;">C1</td>
        <td style="padding-left:4.0pt;text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
        <td style="padding-right:4.0pt;text-align:center;">F1</td>
        <td style="padding-left:4.0pt;text-align:center;">G1</td>
        <td style="text-align:center;">H1</td>
        <td style="text-align:center;">I1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="padding-right:4.0pt;text-align:center;">C2</td>
        <td style="padding-left:4.0pt;text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
        <td style="padding-right:4.0pt;text-align:center;">F2</td>
        <td style="padding-left:4.0pt;text-align:center;">G2</td>
        <td style="text-align:center;">H2</td>
        <td style="text-align:center;">I2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="padding-right:4.0pt;text-align:center;">C3</td>
        <td style="padding-left:4.0pt;text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
        <td style="padding-right:4.0pt;text-align:center;">F3</td>
        <td style="padding-left:4.0pt;text-align:center;">G3</td>
        <td style="text-align:center;">H3</td>
        <td style="text-align:center;">I3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="padding-right:4.0pt;text-align:center;">C4</td>
        <td style="padding-left:4.0pt;text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
        <td style="padding-right:4.0pt;text-align:center;">F4</td>
        <td style="padding-left:4.0pt;text-align:center;">G4</td>
        <td style="text-align:center;">H4</td>
        <td style="text-align:center;">I4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="padding-right:4.0pt;text-align:center;">C5</td>
        <td style="padding-left:4.0pt;text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
        <td style="padding-right:4.0pt;text-align:center;">F5</td>
        <td style="padding-left:4.0pt;text-align:center;">G5</td>
        <td style="text-align:center;">H5</td>
        <td style="text-align:center;">I5</td>
    </tr>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-linebreak_footnotes" tabindex="-1">Keyword: <code>linebreak_footnotes</code> <a class="header-anchor" href="#Keyword:-linebreak_footnotes" aria-label="Permalink to &quot;Keyword: \`linebreak_footnotes\` {#Keyword:-linebreak_footnotes}&quot;">​</a></h2><p>By default, footnotes are printed on a separate line each. They can be printed in a single paragraph by setting <code>linebreak_footnotes = false</code>.</p><p>This parameter can also be set as a <a href="/SummaryTables.jl/v3/reference/infrastructure/defaults#Global-Defaults">global default</a> to apply the setting across all tables.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;I&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 1.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 2.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-68a24abe">
    <style>
        #st-68a24abe {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-68a24abe tr {
            background-color: transparent;
            border: none;
        }
        #st-68a24abe tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-68a24abe br {
            line-height: 0em;
            margin: 0;
        }
        #st-68a24abe sub {
            line-height: 0;
        }
        #st-68a24abe sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
        <td style="text-align:center;">F1</td>
        <td style="text-align:center;">G1</td>
        <td style="text-align:center;">H1</td>
        <td style="text-align:center;">I1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
        <td style="text-align:center;">F2</td>
        <td style="text-align:center;">G2</td>
        <td style="text-align:center;">H2</td>
        <td style="text-align:center;">I2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
        <td style="text-align:center;">F3</td>
        <td style="text-align:center;">G3</td>
        <td style="text-align:center;">H3</td>
        <td style="text-align:center;">I3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
        <td style="text-align:center;">F4</td>
        <td style="text-align:center;">G4</td>
        <td style="text-align:center;">H4</td>
        <td style="text-align:center;">I4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
        <td style="text-align:center;">F5</td>
        <td style="text-align:center;">G5</td>
        <td style="text-align:center;">H5</td>
        <td style="text-align:center;">I5</td>
    </tr>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="9" style="font-size: 0.8em;">Footnote 1.<br/>Footnote 2.</td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 1.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 2.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], linebreak_footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-1228ed59">
    <style>
        #st-1228ed59 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-1228ed59 tr {
            background-color: transparent;
            border: none;
        }
        #st-1228ed59 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-1228ed59 br {
            line-height: 0em;
            margin: 0;
        }
        #st-1228ed59 sub {
            line-height: 0;
        }
        #st-1228ed59 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
        <td style="text-align:center;">F1</td>
        <td style="text-align:center;">G1</td>
        <td style="text-align:center;">H1</td>
        <td style="text-align:center;">I1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="text-align:center;">C2</td>
        <td style="text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
        <td style="text-align:center;">F2</td>
        <td style="text-align:center;">G2</td>
        <td style="text-align:center;">H2</td>
        <td style="text-align:center;">I2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="text-align:center;">C3</td>
        <td style="text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
        <td style="text-align:center;">F3</td>
        <td style="text-align:center;">G3</td>
        <td style="text-align:center;">H3</td>
        <td style="text-align:center;">I3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
        <td style="text-align:center;">F4</td>
        <td style="text-align:center;">G4</td>
        <td style="text-align:center;">H4</td>
        <td style="text-align:center;">I4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
        <td style="text-align:center;">F5</td>
        <td style="text-align:center;">G5</td>
        <td style="text-align:center;">H5</td>
        <td style="text-align:center;">I5</td>
    </tr>
    <tr><td colspan="9" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="9" style="font-size: 0.8em;">Footnote 1.&nbsp;&nbsp;&nbsp;&nbsp;Footnote 2.</td></tr>
</table></div>`,33)]))}const c=e(a,[["render",l]]);export{o as __pageData,c as default};
