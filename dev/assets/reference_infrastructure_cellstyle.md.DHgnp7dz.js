import{_ as i,c as a,o as n,az as t}from"./chunks/framework.CAkcY2eT.js";const o=JSON.parse('{"title":"CellStyle","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/cellstyle.md","filePath":"reference/infrastructure/cellstyle.md","lastUpdated":null}'),e={name:"reference/infrastructure/cellstyle.md"};function l(h,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="CellStyle" tabindex="-1"><code>CellStyle</code> <a class="header-anchor" href="#CellStyle" aria-label="Permalink to &quot;\`CellStyle\` {#CellStyle}&quot;">​</a></h1><h2 id="Keyword:-bold" tabindex="-1">Keyword: <code>bold</code> <a class="header-anchor" href="#Keyword:-bold" aria-label="Permalink to &quot;Keyword: \`bold\` {#Keyword:-bold}&quot;">​</a></h2><p>Makes the text in the cell bold.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some text in bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], :, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-5016fbca">
    <style>
        #st-5016fbca {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-5016fbca tr {
            background-color: transparent;
            border: none;
        }
        #st-5016fbca tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-5016fbca br {
            line-height: 0em;
            margin: 0;
        }
        #st-5016fbca sub {
            line-height: 0;
        }
        #st-5016fbca sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:center;">Some text in bold</td>
    </tr>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-italic" tabindex="-1">Keyword: <code>italic</code> <a class="header-anchor" href="#Keyword:-italic" aria-label="Permalink to &quot;Keyword: \`italic\` {#Keyword:-italic}&quot;">​</a></h2><p>Makes the text in the cell italic.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some text in italic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], :, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-6fdb7460">
    <style>
        #st-6fdb7460 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-6fdb7460 tr {
            background-color: transparent;
            border: none;
        }
        #st-6fdb7460 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-6fdb7460 br {
            line-height: 0em;
            margin: 0;
        }
        #st-6fdb7460 sub {
            line-height: 0;
        }
        #st-6fdb7460 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-style:italic;text-align:center;">Some text in italic</td>
    </tr>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-underline" tabindex="-1">Keyword: <code>underline</code> <a class="header-anchor" href="#Keyword:-underline" aria-label="Permalink to &quot;Keyword: \`underline\` {#Keyword:-underline}&quot;">​</a></h2><p>Underlines the text in the cell.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Multiline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;that is&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;underlined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), underline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], :, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-fc36496d">
    <style>
        #st-fc36496d {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-fc36496d tr {
            background-color: transparent;
            border: none;
        }
        #st-fc36496d tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-fc36496d br {
            line-height: 0em;
            margin: 0;
        }
        #st-fc36496d sub {
            line-height: 0;
        }
        #st-fc36496d sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-decoration:underline;text-align:center;">Some<br>text<br>that is<br>underlined</td>
    </tr>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-halign" tabindex="-1">Keyword: <code>halign</code> <a class="header-anchor" href="#Keyword:-halign" aria-label="Permalink to &quot;Keyword: \`halign\` {#Keyword:-halign}&quot;">​</a></h2><p>Aligns the cell content horizontally either at the <code>:left</code>, the <code>:center</code> or the <code>:right</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A wide cell&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:center&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:right&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], :, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-2a6a502b">
    <style>
        #st-2a6a502b {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-2a6a502b tr {
            background-color: transparent;
            border: none;
        }
        #st-2a6a502b tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-2a6a502b br {
            line-height: 0em;
            margin: 0;
        }
        #st-2a6a502b sub {
            line-height: 0;
        }
        #st-2a6a502b sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A wide cell</td>
    </tr>
    <tr>
        <td style="text-align:left;">:left</td>
    </tr>
    <tr>
        <td style="text-align:center;">:center</td>
    </tr>
    <tr>
        <td style="text-align:right;">:right</td>
    </tr>
    <tr><td colspan="1" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-valign" tabindex="-1">Keyword: <code>valign</code> <a class="header-anchor" href="#Keyword:-valign" aria-label="Permalink to &quot;Keyword: \`valign\` {#Keyword:-valign}&quot;">​</a></h2><p>Aligns the cell content vertically either at the <code>:top</code>, the <code>:center</code> or the <code>:bottom</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Multiline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tall&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cell&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:top&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:center&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:bottom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-5585e2b5">
    <style>
        #st-5585e2b5 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-5585e2b5 tr {
            background-color: transparent;
            border: none;
        }
        #st-5585e2b5 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-5585e2b5 br {
            line-height: 0em;
            margin: 0;
        }
        #st-5585e2b5 sub {
            line-height: 0;
        }
        #st-5585e2b5 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A<br>tall<br>cell</td>
        <td style="text-align:center;">:top</td>
        <td style="vertical-align:middle;text-align:center;">:center</td>
        <td style="vertical-align:bottom;text-align:center;">:bottom</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-indent" tabindex="-1">Keyword: <code>indent</code> <a class="header-anchor" href="#Keyword:-indent" aria-label="Permalink to &quot;Keyword: \`indent\` {#Keyword:-indent}&quot;">​</a></h2><p>Indents the content of the cell on the left. This can be used to give hierarchical structure to adjacent rows. The indentation is given as an <code>Em</code> length relative to the font size, for example <code>1em</code>, or as an absolute <code>Pt</code> length, for example <code>6pt</code>. The <code>em</code> and <code>pt</code> unit constants are imported with <code>using SummaryTables: em, pt</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> em</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value; halign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Group A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Group B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Subgroup A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, indent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Subgroup B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, indent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Subgroup A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, indent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Subgroup B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, indent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">em)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-bf15be0e">
    <style>
        #st-bf15be0e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-bf15be0e tr {
            background-color: transparent;
            border: none;
        }
        #st-bf15be0e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-bf15be0e br {
            line-height: 0em;
            margin: 0;
        }
        #st-bf15be0e sub {
            line-height: 0;
        }
        #st-bf15be0e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:left;">Group A</td>
        <td style="text-align:left;">Group B</td>
    </tr>
    <tr>
        <td style="padding-left:1em;text-align:left;">Subgroup A</td>
        <td style="padding-left:1em;text-align:left;">Subgroup B</td>
    </tr>
    <tr>
        <td style="padding-left:1em;text-align:left;">Subgroup A</td>
        <td style="padding-left:1em;text-align:left;">Subgroup B</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><p>The deprecated <code>indent_pt</code> keyword sets the same indentation as a bare number in points.</p><h2 id="Keyword:-border_bottom" tabindex="-1">Keyword: <code>border_bottom</code> <a class="header-anchor" href="#Keyword:-border_bottom" aria-label="Permalink to &quot;Keyword: \`border_bottom\` {#Keyword:-border_bottom}&quot;">​</a></h2><p>Adds a border at the bottom of the cell. This option is meant for horizontally merged cells functioning as subheaders.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">header_cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, border_bottom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, merge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    header_cell   header_cell</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-8da86704">
    <style>
        #st-8da86704 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-8da86704 tr {
            background-color: transparent;
            border: none;
        }
        #st-8da86704 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-8da86704 br {
            line-height: 0em;
            margin: 0;
        }
        #st-8da86704 sub {
            line-height: 0;
        }
        #st-8da86704 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td colspan="2" style="border-bottom:0.075em solid currentColor; padding-bottom: 0.25em;text-align:center;">header</td>
    </tr>
    <tr>
        <td style="text-align:center;">body</td>
        <td style="text-align:center;">body</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-merge" tabindex="-1">Keyword: <code>merge</code> <a class="header-anchor" href="#Keyword:-merge" aria-label="Permalink to &quot;Keyword: \`merge\` {#Keyword:-merge}&quot;">​</a></h2><p>All adjacent cells that are <code>==</code> equal to each other and have <code>merge = true</code> will be rendered as one merged cell.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">merged_cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;merged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, merge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  merged_cell  merged_cell  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  merged_cell  merged_cell  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-8e728fa9">
    <style>
        #st-8e728fa9 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-8e728fa9 tr {
            background-color: transparent;
            border: none;
        }
        #st-8e728fa9 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-8e728fa9 br {
            line-height: 0em;
            margin: 0;
        }
        #st-8e728fa9 sub {
            line-height: 0;
        }
        #st-8e728fa9 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td rowspan="2" colspan="2" style="vertical-align:middle;text-align:center;">merged</td>
        <td style="text-align:center;">D2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">D3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Keyword:-mergegroup" tabindex="-1">Keyword: <code>mergegroup</code> <a class="header-anchor" href="#Keyword:-mergegroup" aria-label="Permalink to &quot;Keyword: \`mergegroup\` {#Keyword:-mergegroup}&quot;">​</a></h2><p>Because adjacent cells that are <code>==</code> equal to each other are merged when <code>merge = true</code> is set, you can optionally set the <code>mergegroup</code> keyword of adjacent cells to a different value to avoid merging them even if their values are otherwise equal.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">merged_cell_1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;merged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, merge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mergegroup </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">merged_cell_2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;merged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, valign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, merge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mergegroup </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cells </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  merged_cell_1  merged_cell_2  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  merged_cell_1  merged_cell_2  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cells)</span></span></code></pre></div><div><table id="st-b68c7923">
    <style>
        #st-b68c7923 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-b68c7923 tr {
            background-color: transparent;
            border: none;
        }
        #st-b68c7923 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-b68c7923 br {
            line-height: 0em;
            margin: 0;
        }
        #st-b68c7923 sub {
            line-height: 0;
        }
        #st-b68c7923 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">A1</td>
        <td style="text-align:center;">B1</td>
        <td style="text-align:center;">C1</td>
        <td style="text-align:center;">D1</td>
    </tr>
    <tr>
        <td style="text-align:center;">A2</td>
        <td rowspan="2" style="vertical-align:middle;text-align:center;">merged</td>
        <td rowspan="2" style="vertical-align:middle;text-align:center;">merged</td>
        <td style="text-align:center;">D2</td>
    </tr>
    <tr>
        <td style="text-align:center;">A3</td>
        <td style="text-align:center;">D3</td>
    </tr>
    <tr>
        <td style="text-align:center;">A4</td>
        <td style="text-align:center;">B4</td>
        <td style="text-align:center;">C4</td>
        <td style="text-align:center;">D4</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 0.1em solid currentColor; padding: 0"></td></tr>
</table></div>`,38)]))}const g=i(e,[["render",l]]);export{o as __pageData,g as default};
