import{_ as e,c as n,o as s,az as i}from"./chunks/framework.BKUja_M7.js";const g=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/table.md","filePath":"reference/infrastructure/table.md","lastUpdated":null}'),a={name:"reference/infrastructure/table.md"};function l(d,t,r,h,p,k){return s(),n("div",null,t[0]||(t[0]=[i(`<h1 id="Table" tabindex="-1"><code>Table</code> <a class="header-anchor" href="#Table" aria-label="Permalink to &quot;\`Table\` {#Table}&quot;">​</a></h1><p>You can build custom tables using the <code>Table</code> type.</p><h2 id="Argument-1:-cells" tabindex="-1">Argument 1: <code>cells</code> <a class="header-anchor" href="#Argument-1:-cells" aria-label="Permalink to &quot;Argument 1: \`cells\` {#Argument-1:-cells}&quot;">​</a></h2><p>The table&#39;s content is given as an <code>AbstractMatrix</code> of <code>Cell</code>s:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-1dfd131e">
    <style>
        #st-1dfd131e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-1dfd131e tr {
            background-color: transparent;
            border: none;
        }
        #st-1dfd131e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-1dfd131e br {
            line-height: 0em;
            margin: 0;
        }
        #st-1dfd131e sub {
            line-height: 0;
        }
        #st-1dfd131e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-header" tabindex="-1">Keyword: <code>header</code> <a class="header-anchor" href="#Keyword:-header" aria-label="Permalink to &quot;Keyword: \`header\` {#Keyword:-header}&quot;">​</a></h2><p>You can pass an <code>Int</code> to mark the last row of the header section. A divider line is placed after this row.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-2f9c6fda">
    <style>
        #st-2f9c6fda {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-2f9c6fda tr {
            background-color: transparent;
            border: none;
        }
        #st-2f9c6fda tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-2f9c6fda br {
            line-height: 0em;
            margin: 0;
        }
        #st-2f9c6fda sub {
            line-height: 0;
        }
        #st-2f9c6fda sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-footer" tabindex="-1">Keyword: <code>footer</code> <a class="header-anchor" href="#Keyword:-footer" aria-label="Permalink to &quot;Keyword: \`footer\` {#Keyword:-footer}&quot;">​</a></h2><p>You can pass an <code>Int</code> to mark the first row of the footer section. A divider line is placed before this row.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-13049b9f">
    <style>
        #st-13049b9f {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-13049b9f tr {
            background-color: transparent;
            border: none;
        }
        #st-13049b9f tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-13049b9f br {
            line-height: 0em;
            margin: 0;
        }
        #st-13049b9f sub {
            line-height: 0;
        }
        #st-13049b9f sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
        <tr><td colspan="5" style="border-bottom:0.075em solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    </tfoot>
</table></div><h2 id="Keyword:-footnotes" tabindex="-1">Keyword: <code>footnotes</code> <a class="header-anchor" href="#Keyword:-footnotes" aria-label="Permalink to &quot;Keyword: \`footnotes\` {#Keyword:-footnotes}&quot;">​</a></h2><p>The <code>footnotes</code> keyword allows to add custom footnotes to the table which do not correspond to specific <a href="/SummaryTables.jl/v3/resources/api#SummaryTables.Annotated-Tuple{Any, Any}"><code>Annotated</code></a> values in the table.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Custom footnote 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Custom footnote 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-43b75a68">
    <style>
        #st-43b75a68 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-43b75a68 tr {
            background-color: transparent;
            border: none;
        }
        #st-43b75a68 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-43b75a68 br {
            line-height: 0em;
            margin: 0;
        }
        #st-43b75a68 sub {
            line-height: 0;
        }
        #st-43b75a68 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="5" style="font-size: 0.8em;text-align:left;">Custom footnote 1<br/>Custom footnote 2</td></tr>
</table></div><h2 id="Keyword:-rowgaps" tabindex="-1">Keyword: <code>rowgaps</code> <a class="header-anchor" href="#Keyword:-rowgaps" aria-label="Permalink to &quot;Keyword: \`rowgaps\` {#Keyword:-rowgaps}&quot;">​</a></h2><p>It can be beneficial for the readability of larger tables to add gaps between certain rows. These gaps can be passed as a <code>Vector</code> of <code>Pair</code>s where the first element is the index of the row gap and the second element is the gap size. The size is an <code>Em</code> or <code>Pt</code> length like <code>0.8em</code> or <code>8pt</code>, or a bare number interpreted as points. The <code>em</code> and <code>pt</code> unit constants are imported with <code>using SummaryTables: em, pt</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> em</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; rowgaps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em])</span></span></code></pre></div><div><table id="st-b652dd5c">
    <style>
        #st-b652dd5c {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-b652dd5c tr {
            background-color: transparent;
            border: none;
        }
        #st-b652dd5c tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-b652dd5c br {
            line-height: 0em;
            margin: 0;
        }
        #st-b652dd5c sub {
            line-height: 0;
        }
        #st-b652dd5c sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
        <td style="padding-bottom: 0.4em;text-align:center;">A3</td>
        <td style="padding-bottom: 0.4em;text-align:center;">B3</td>
        <td style="padding-bottom: 0.4em;text-align:center;">C3</td>
        <td style="padding-bottom: 0.4em;text-align:center;">D3</td>
        <td style="padding-bottom: 0.4em;text-align:center;">E3</td>
    </tr>
    <tr>
        <td style="padding-top: 0.4em;text-align:center;">A4</td>
        <td style="padding-top: 0.4em;text-align:center;">B4</td>
        <td style="padding-top: 0.4em;text-align:center;">C4</td>
        <td style="padding-top: 0.4em;text-align:center;">D4</td>
        <td style="padding-top: 0.4em;text-align:center;">E4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="text-align:center;">C5</td>
        <td style="text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
    </tr>
    <tr>
        <td style="padding-bottom: 0.4em;text-align:center;">A6</td>
        <td style="padding-bottom: 0.4em;text-align:center;">B6</td>
        <td style="padding-bottom: 0.4em;text-align:center;">C6</td>
        <td style="padding-bottom: 0.4em;text-align:center;">D6</td>
        <td style="padding-bottom: 0.4em;text-align:center;">E6</td>
    </tr>
    <tr>
        <td style="padding-top: 0.4em;text-align:center;">A7</td>
        <td style="padding-top: 0.4em;text-align:center;">B7</td>
        <td style="padding-top: 0.4em;text-align:center;">C7</td>
        <td style="padding-top: 0.4em;text-align:center;">D7</td>
        <td style="padding-top: 0.4em;text-align:center;">E7</td>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-colgaps" tabindex="-1">Keyword: <code>colgaps</code> <a class="header-anchor" href="#Keyword:-colgaps" aria-label="Permalink to &quot;Keyword: \`colgaps\` {#Keyword:-colgaps}&quot;">​</a></h2><p>It can be beneficial for the readability of larger tables to add gaps between certain columns. These gaps can be passed as a <code>Vector</code> of <code>Pair</code>s where the first element is the index of the column gap and the second element is the gap size, given like the <code>rowgaps</code> sizes above.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> em</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;I&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; colgaps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em])</span></span></code></pre></div><div><table id="st-96f9f250">
    <style>
        #st-96f9f250 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-96f9f250 tr {
            background-color: transparent;
            border: none;
        }
        #st-96f9f250 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-96f9f250 br {
            line-height: 0em;
            margin: 0;
        }
        #st-96f9f250 sub {
            line-height: 0;
        }
        #st-96f9f250 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="padding-right:0.4em;text-align:center;">C1</td>
        <td style="padding-left:0.4em;text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
        <td style="padding-right:0.4em;text-align:center;">F1</td>
        <td style="padding-left:0.4em;text-align:center;">G1</td>
        <td style="text-align:center;">H1</td>
        <td style="text-align:center;">I1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td style="text-align:center;">B2</td>
        <td style="padding-right:0.4em;text-align:center;">C2</td>
        <td style="padding-left:0.4em;text-align:center;">D2</td>
        <td style="text-align:center;">E2</td>
        <td style="padding-right:0.4em;text-align:center;">F2</td>
        <td style="padding-left:0.4em;text-align:center;">G2</td>
        <td style="text-align:center;">H2</td>
        <td style="text-align:center;">I2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">B3</td>
        <td style="padding-right:0.4em;text-align:center;">C3</td>
        <td style="padding-left:0.4em;text-align:center;">D3</td>
        <td style="text-align:center;">E3</td>
        <td style="padding-right:0.4em;text-align:center;">F3</td>
        <td style="padding-left:0.4em;text-align:center;">G3</td>
        <td style="text-align:center;">H3</td>
        <td style="text-align:center;">I3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="padding-right:0.4em;text-align:center;">C4</td>
        <td style="padding-left:0.4em;text-align:center;">D4</td>
        <td style="text-align:center;">E4</td>
        <td style="padding-right:0.4em;text-align:center;">F4</td>
        <td style="padding-left:0.4em;text-align:center;">G4</td>
        <td style="text-align:center;">H4</td>
        <td style="text-align:center;">I4</td>
    </tr>
    <tr>
        <td style="text-align:center;">A5</td>
        <td style="text-align:center;">B5</td>
        <td style="padding-right:0.4em;text-align:center;">C5</td>
        <td style="padding-left:0.4em;text-align:center;">D5</td>
        <td style="text-align:center;">E5</td>
        <td style="padding-right:0.4em;text-align:center;">F5</td>
        <td style="padding-left:0.4em;text-align:center;">G5</td>
        <td style="text-align:center;">H5</td>
        <td style="text-align:center;">I5</td>
    </tr>
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-linebreak_footnotes" tabindex="-1">Keyword: <code>linebreak_footnotes</code> <a class="header-anchor" href="#Keyword:-linebreak_footnotes" aria-label="Permalink to &quot;Keyword: \`linebreak_footnotes\` {#Keyword:-linebreak_footnotes}&quot;">​</a></h2><p>By default, footnotes are printed on a separate line each. They can be printed in a single paragraph by setting <code>linebreak_footnotes = false</code>.</p><p>This parameter can also be set as a <a href="/SummaryTables.jl/v3/reference/infrastructure/defaults#Global-Defaults">global default</a> to apply the setting across all tables.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;I&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 1.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 2.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><div><table id="st-2385e317">
    <style>
        #st-2385e317 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-2385e317 tr {
            background-color: transparent;
            border: none;
        }
        #st-2385e317 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-2385e317 br {
            line-height: 0em;
            margin: 0;
        }
        #st-2385e317 sub {
            line-height: 0;
        }
        #st-2385e317 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="9" style="font-size: 0.8em;text-align:left;">Footnote 1.<br/>Footnote 2.</td></tr>
</table></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 1.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Footnote 2.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], linebreak_footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-e048ee0b">
    <style>
        #st-e048ee0b {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-e048ee0b tr {
            background-color: transparent;
            border: none;
        }
        #st-e048ee0b tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e048ee0b br {
            line-height: 0em;
            margin: 0;
        }
        #st-e048ee0b sub {
            line-height: 0;
        }
        #st-e048ee0b sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="9" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="9" style="font-size: 0.8em;text-align:left;">Footnote 1.&nbsp;&nbsp;&nbsp;&nbsp;Footnote 2.</td></tr>
</table></div><h2 id="Keywords:-rule-widths-and-paddings" tabindex="-1">Keywords: rule widths and paddings <a class="header-anchor" href="#Keywords:-rule-widths-and-paddings" aria-label="Permalink to &quot;Keywords: rule widths and paddings {#Keywords:-rule-widths-and-paddings}&quot;">​</a></h2><p>The widths of the table&#39;s rules and the spacing around its cells can be set with these keywords, which are also available as <a href="/SummaryTables.jl/v3/reference/infrastructure/defaults#Global-Defaults">global defaults</a>:</p><ul><li><p><code>outer_rule_width</code> sets the width of the rules above and below the table.</p></li><li><p><code>inner_rule_width</code> sets the width of the rules below the header and above the footer.</p></li><li><p><code>cell_rule_width</code> sets the width of the rules drawn for cells with <code>border_bottom = true</code>.</p></li><li><p><code>column_padding</code> sets the horizontal space between adjacent columns.</p></li><li><p><code>row_padding</code> sets the vertical space between adjacent rows.</p></li></ul><p>Each takes a length, either relative to the font size as an <code>Em</code> like <code>0.1em</code>, or absolute as a <code>Pt</code> like <code>1pt</code>, and renders consistently across all backends. The <code>em</code> and <code>pt</code> unit constants are imported with <code>using SummaryTables: em, pt</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> em, pt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    outer_rule_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pt,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    inner_rule_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pt,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    column_padding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-e1256f22">
    <style>
        #st-e1256f22 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 1.5em 0.2em;
            line-height: 1.2em;
        }
        #st-e1256f22 tr {
            background-color: transparent;
            border: none;
        }
        #st-e1256f22 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-e1256f22 br {
            line-height: 0em;
            margin: 0;
        }
        #st-e1256f22 sub {
            line-height: 0;
        }
        #st-e1256f22 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 2pt solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
        <td style="text-align:center;">E1</td>
    </tr>
        <tr><td colspan="5" style="border-bottom:1pt solid currentColor;padding:0"></td></tr>    <tr>
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
    <tr><td colspan="5" style="border-bottom: 2pt solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-footnote_size" tabindex="-1">Keyword: <code>footnote_size</code> <a class="header-anchor" href="#Keyword:-footnote_size" aria-label="Permalink to &quot;Keyword: \`footnote_size\` {#Keyword:-footnote_size}&quot;">​</a></h2><p>Sets the font size of the footnotes and annotations, as an <code>Em</code> or <code>Pt</code> length.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A footnote.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], footnote_size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pt)</span></span></code></pre></div><div><table id="st-3403d0cd">
    <style>
        #st-3403d0cd {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-3403d0cd tr {
            background-color: transparent;
            border: none;
        }
        #st-3403d0cd tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-3403d0cd br {
            line-height: 0em;
            margin: 0;
        }
        #st-3403d0cd sub {
            line-height: 0;
        }
        #st-3403d0cd sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="5" style="font-size: 12pt;text-align:left;">A footnote.</td></tr>
</table></div><h2 id="Keyword:-footnote_halign" tabindex="-1">Keyword: <code>footnote_halign</code> <a class="header-anchor" href="#Keyword:-footnote_halign" aria-label="Permalink to &quot;Keyword: \`footnote_halign\` {#Keyword:-footnote_halign}&quot;">​</a></h2><p>Aligns the footnotes horizontally at the <code>:left</code> (the default), <code>:center</code> or <code>:right</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$col$row</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells; footnotes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A footnote.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], footnote_halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-eabb7105">
    <style>
        #st-eabb7105 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-eabb7105 tr {
            background-color: transparent;
            border: none;
        }
        #st-eabb7105 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-eabb7105 br {
            line-height: 0em;
            margin: 0;
        }
        #st-eabb7105 sub {
            line-height: 0;
        }
        #st-eabb7105 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
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
    <tr><td colspan="5" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="5" style="font-size: 0.8em;text-align:right;">A footnote.</td></tr>
</table></div>`,47)]))}const c=e(a,[["render",l]]);export{g as __pageData,c as default};
