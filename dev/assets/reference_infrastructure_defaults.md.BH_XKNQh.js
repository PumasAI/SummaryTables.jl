import{_ as l,C as r,c as d,o,j as s,az as n,a as t,G as i,w as p}from"./chunks/framework.CAkcY2eT.js";const E=JSON.parse('{"title":"Global Defaults","description":"","frontmatter":{},"headers":[],"relativePath":"reference/infrastructure/defaults.md","filePath":"reference/infrastructure/defaults.md","lastUpdated":null}'),h={name:"reference/infrastructure/defaults.md"},c={class:"jldocstring custom-block",open:""};function k(u,e,g,y,b,f){const a=r("Badge");return o(),d("div",null,[e[4]||(e[4]=s("h1",{id:"Global-Defaults",tabindex:"-1"},[t("Global Defaults "),s("a",{class:"header-anchor",href:"#Global-Defaults","aria-label":'Permalink to "Global Defaults {#Global-Defaults}"'},"​")],-1)),e[5]||(e[5]=s("p",null,"SummaryTables provides a global defaults system that allows you to set default values for commonly used formatting parameters across all table functions. This feature is particularly useful when you want to maintain consistent formatting throughout a document or application without having to specify the same parameters repeatedly.",-1)),e[6]||(e[6]=s("p",null,[t("The system provides two public functions: "),s("a",{href:"/SummaryTables.jl/dev/reference/infrastructure/defaults#SummaryTables.defaults!-reference-infrastructure-defaults"},[s("code",null,"SummaryTables.defaults!")]),t(" for setting global defaults and "),s("a",{href:"/SummaryTables.jl/dev/resources/api#SummaryTables.with_defaults-Tuple{Any}"},[s("code",null,"SummaryTables.with_defaults")]),t(" for temporary scoped changes.")],-1)),s("details",c,[s("summary",null,[e[0]||(e[0]=s("a",{id:"SummaryTables.defaults!-reference-infrastructure-defaults",href:"#SummaryTables.defaults!-reference-infrastructure-defaults"},[s("span",{class:"jlbinding"},"SummaryTables.defaults!")],-1)),e[1]||(e[1]=t()),i(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[3]||(e[3]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">defaults!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Changes the default settings (implemented via ScopedValues) in the current dynamic scope. A new scope is created with <code>with_defaults</code>, otherwise you are modifying the global scope. This could be done, e.g., at the start of a script or notebook.</p><p>Mutation of the settings happens under lock and is therefore threadsafe. However, you should use <code>with_defaults</code> instead if you intend to change defaults only for some task without affecting other tasks.</p><p>The available settings are:</p><p><code>round_mode</code>: Rounding mode for floats, can be <code>:auto</code>, <code>:digits</code> or <code>:sigdigits</code>. Default = <code>:auto</code> MarkdownAST.LineBreak()</p><p><code>round_digits</code>: Number of digits to target when rounding floats. Default = <code>3</code> MarkdownAST.LineBreak()</p><p><code>trailing_zeros</code>: If <code>false</code>, removes trailing zeros when formatting floats. Default = <code>false</code> MarkdownAST.LineBreak()</p><p><code>linebreak_footnotes</code>: If <code>true</code>, each footnote is displayed on a separate line. Default = <code>true</code> MarkdownAST.LineBreak()</p><p><code>annotation_labels</code>: An indexable collection or a <code>Symbol</code> that specifies a predefined collection which contains annotation labels. Predefined variants are <code>:numbers</code>, <code>:lowercase</code>, <code>:uppercase</code>, <code>:roman_lower</code> and <code>:roman_upper</code>. Default = <code>:numbers</code> MarkdownAST.LineBreak()</p><p><code>label_key</code>: Key to look up column label metadata with. A value of <code>nothing</code> disables lookup. Default = <code>&quot;label&quot;</code> MarkdownAST.LineBreak()</p><p><code>table_one</code>: Defaults for the <code>table_one</code> function Default = <code>TableOneDefaults( categorical_default = SummaryTables.level_analyses, numeric_default = SummaryTables.default_numeric_analysis, )</code></p>',11)),i(a,{type:"info",class:"source-link",text:"source"},{default:p(()=>e[2]||(e[2]=[s("a",{href:"https://github.com/PumasAI/SummaryTables.jl/blob/540e4ee5436711516e1cf31419fff31756bf29db/src/infrastructure/defaults.jl#L71-L86",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e[7]||(e[7]=n(`<h2 id="Persistent-Defaults" tabindex="-1">Persistent Defaults <a class="header-anchor" href="#Persistent-Defaults" aria-label="Permalink to &quot;Persistent Defaults {#Persistent-Defaults}&quot;">​</a></h2><p>Use <code>SummaryTables.defaults!</code> to change the global default settings that will apply to all subsequently created tables:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">defaults!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(round_mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, round_digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, trailing_zeros </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">numbers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34.56789</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4.5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(numbers))</span></span></code></pre></div><div><table id="st-6ca8d348">
    <style>
        #st-6ca8d348 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-6ca8d348 tr {
            background-color: transparent;
            border: none;
        }
        #st-6ca8d348 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-6ca8d348 br {
            line-height: 0em;
            margin: 0;
        }
        #st-6ca8d348 sub {
            line-height: 0;
        }
        #st-6ca8d348 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.2346</td>
        <td style="text-align:center;">2.3456</td>
    </tr>
    <tr>
        <td style="text-align:center;">34.5679</td>
        <td style="text-align:center;">4.5000</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>Note that explicit settings override the defaults:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(numbers), trailing_zeros </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-47ac4779">
    <style>
        #st-47ac4779 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-47ac4779 tr {
            background-color: transparent;
            border: none;
        }
        #st-47ac4779 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-47ac4779 br {
            line-height: 0em;
            margin: 0;
        }
        #st-47ac4779 sub {
            line-height: 0;
        }
        #st-47ac4779 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.2346</td>
        <td style="text-align:center;">2.3456</td>
    </tr>
    <tr>
        <td style="text-align:center;">34.5679</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><p>The <code>defaults!</code> function does not selectively update but it applies the keywords on top of SummaryTables&#39;s own defaults. To reset to the package defaults, you therefore specify no keywords.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">defaults!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(numbers))</span></span></code></pre></div><div><table id="st-60be9ef2">
    <style>
        #st-60be9ef2 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-60be9ef2 tr {
            background-color: transparent;
            border: none;
        }
        #st-60be9ef2 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-60be9ef2 br {
            line-height: 0em;
            margin: 0;
        }
        #st-60be9ef2 sub {
            line-height: 0;
        }
        #st-60be9ef2 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.23</td>
        <td style="text-align:center;">2.35</td>
    </tr>
    <tr>
        <td style="text-align:center;">34.6</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div><h2 id="Temporary-Scoped-Defaults" tabindex="-1">Temporary Scoped Defaults <a class="header-anchor" href="#Temporary-Scoped-Defaults" aria-label="Permalink to &quot;Temporary Scoped Defaults {#Temporary-Scoped-Defaults}&quot;">​</a></h2><p>Use <code>SummaryTables.with_defaults</code> to temporarily change default settings for a specific block of code without affecting the global settings. This is implemented via ScopedValues.jl, so you can use <code>with_defaults</code> in multiple separate tasks without interference between them. Within a <code>with_defaults</code> block you can again modify settings using <code>defaults!</code> and these changes will persist until the scope ends.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use different defaults temporarily</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_defaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(round_mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sigdigits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, round_digits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, trailing_zeros </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    numbers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.23456</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34.56789</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4.5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(numbers))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div><table id="st-53c5475e">
    <style>
        #st-53c5475e {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-53c5475e tr {
            background-color: transparent;
            border: none;
        }
        #st-53c5475e tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-53c5475e br {
            line-height: 0em;
            margin: 0;
        }
        #st-53c5475e sub {
            line-height: 0;
        }
        #st-53c5475e sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;">1.235</td>
        <td style="text-align:center;">2.346</td>
    </tr>
    <tr>
        <td style="text-align:center;">34.57</td>
        <td style="text-align:center;">4.5</td>
    </tr>
    <tr><td colspan="2" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table></div>`,14))])}const C=l(h,[["render",k]]);export{E as __pageData,C as default};
