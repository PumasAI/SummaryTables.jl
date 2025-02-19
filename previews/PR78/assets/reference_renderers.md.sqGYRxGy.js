import{_ as a,c as i,o as p,az as l}from"./chunks/framework.Bsd9CH4I.js";const n="/SummaryTables.jl/previews/PR78/assets/icon_pdf.Cf5evGw-.png",t="/SummaryTables.jl/previews/PR78/assets/icon_docx.CNfrto-m.png",y=JSON.parse('{"title":"Renderers","description":"","frontmatter":{},"headers":[],"relativePath":"reference/renderers.md","filePath":"reference/renderers.md","lastUpdated":null}'),h={name:"reference/renderers.md"};function e(k,s,d,o,E,g){return p(),i("div",null,s[0]||(s[0]=[l(`<h1 id="renderers" tabindex="-1">Renderers <a class="header-anchor" href="#renderers" aria-label="Permalink to &quot;Renderers&quot;">​</a></h1><h2 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h2><p>In IDEs that support the <code>MIME&quot;text/html&quot;</code> or <code>MIME&quot;juliavscode/html&quot;</code> types, just <code>display</code>ing a <code>Table</code> will render it in HTML for you. All examples in this documentation are rendered this way. Alternatively, you can print HTML to any IO object via <code>show(io, MIME&quot;text/html&quot;, table)</code>.</p><h2 id="latex" tabindex="-1">LaTeX <a class="header-anchor" href="#latex" aria-label="Permalink to &quot;LaTeX&quot;">​</a></h2><p>You can print LaTeX code to any IO via <code>show(io, MIME&quot;text/latex&quot;, table)</code>. Keep in mind that the <code>threeparttable</code>, <code>multirow</code> and <code>booktabs</code> packages need to separately be included in your preamble due to the way LaTeX documents are structured.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tectonic_jll</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mkpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">45</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">85</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">44</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">76</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blood_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    smoker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tbl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> table_one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Age (years)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blood_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blood type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:smoker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Smoker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    groupby </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    show_n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># render latex in a temp directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mktempdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dir</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    texfile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dir, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.tex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(texfile, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;w&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # add the necessary packages in the preamble</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">raw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocumentclass{article}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sepackage{threeparttable}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sepackage{multirow}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sepackage{booktabs}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">egin{document}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # print the table as latex code</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MIME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/latex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), tbl)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">raw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nd{document}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # render the tex file to pdf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tectonic_jll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tectonic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bin</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $texfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dir, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>note: connecting to https://relay.fullyjustified.net/default_bundle_v33.tar</span></span>
<span class="line"><span>note: resolved to https://data1.fullyjustified.net/tlextras-2022.0r0.tar</span></span>
<span class="line"><span>note: downloading index https://data1.fullyjustified.net/tlextras-2022.0r0.tar.index.gz</span></span>
<span class="line"><span>note: downloading SHA256SUM</span></span>
<span class="line"><span>note: generating format &quot;latex&quot;</span></span>
<span class="line"><span>note: downloading tectonic-format-latex.tex</span></span>
<span class="line"><span>note: downloading xelatex.ini</span></span>
<span class="line"><span>note: downloading latex.ltx</span></span>
<span class="line"><span>note: downloading texsys.cfg</span></span>
<span class="line"><span>note: downloading expl3.ltx</span></span>
<span class="line"><span>note: downloading expl3-code.tex</span></span>
<span class="line"><span>note: downloading cmr10.tfm</span></span>
<span class="line"><span>note: downloading UnicodeData.txt</span></span>
<span class="line"><span>note: downloading CaseFolding.txt</span></span>
<span class="line"><span>note: downloading SpecialCasing.txt</span></span>
<span class="line"><span>note: downloading fonttext.cfg</span></span>
<span class="line"><span>note: downloading fonttext.ltx</span></span>
<span class="line"><span>note: downloading omlenc.def</span></span>
<span class="line"><span>note: downloading omsenc.def</span></span>
<span class="line"><span>note: downloading ot1enc.def</span></span>
<span class="line"><span>note: downloading t1enc.def</span></span>
<span class="line"><span>note: downloading ts1enc.def</span></span>
<span class="line"><span>note: downloading tuenc.def</span></span>
<span class="line"><span>note: downloading tulmr.fd</span></span>
<span class="line"><span>note: downloading tulmss.fd</span></span>
<span class="line"><span>note: downloading tulmtt.fd</span></span>
<span class="line"><span>note: downloading ts1lmr.fd</span></span>
<span class="line"><span>note: downloading t1cmr.fd</span></span>
<span class="line"><span>note: downloading ot1cmr.fd</span></span>
<span class="line"><span>note: downloading ot1cmss.fd</span></span>
<span class="line"><span>note: downloading ot1cmtt.fd</span></span>
<span class="line"><span>note: downloading fontmath.cfg</span></span>
<span class="line"><span>note: downloading fontmath.ltx</span></span>
<span class="line"><span>note: downloading omlcmm.fd</span></span>
<span class="line"><span>note: downloading omscmsy.fd</span></span>
<span class="line"><span>note: downloading omxcmex.fd</span></span>
<span class="line"><span>note: downloading ucmr.fd</span></span>
<span class="line"><span>note: downloading preload.cfg</span></span>
<span class="line"><span>note: downloading preload.ltx</span></span>
<span class="line"><span>note: downloading cmex10.tfm</span></span>
<span class="line"><span>note: downloading line10.tfm</span></span>
<span class="line"><span>note: downloading linew10.tfm</span></span>
<span class="line"><span>note: downloading lcircle10.tfm</span></span>
<span class="line"><span>note: downloading lcirclew10.tfm</span></span>
<span class="line"><span>note: downloading cmr5.tfm</span></span>
<span class="line"><span>note: downloading cmr7.tfm</span></span>
<span class="line"><span>note: downloading cmmi5.tfm</span></span>
<span class="line"><span>note: downloading cmmi7.tfm</span></span>
<span class="line"><span>note: downloading cmmi10.tfm</span></span>
<span class="line"><span>note: downloading cmsy5.tfm</span></span>
<span class="line"><span>note: downloading cmsy7.tfm</span></span>
<span class="line"><span>note: downloading cmsy10.tfm</span></span>
<span class="line"><span>note: downloading atveryend.sty</span></span>
<span class="line"><span>note: downloading atveryend-ltx.sty</span></span>
<span class="line"><span>note: downloading atbegshi.sty</span></span>
<span class="line"><span>note: downloading atbegshi-ltx.sty</span></span>
<span class="line"><span>note: downloading load-unicode-data.tex</span></span>
<span class="line"><span>note: downloading hyphen.cfg</span></span>
<span class="line"><span>note: downloading xebabel.def</span></span>
<span class="line"><span>note: downloading language.dat</span></span>
<span class="line"><span>note: downloading hyphen.tex</span></span>
<span class="line"><span>note: downloading dumyhyph.tex</span></span>
<span class="line"><span>note: downloading zerohyph.tex</span></span>
<span class="line"><span>note: downloading dehypht-x-2022-03-16.tex</span></span>
<span class="line"><span>note: downloading dehypht-x-2022-03-16.pat</span></span>
<span class="line"><span>note: downloading dehyphn-x-2022-03-16.tex</span></span>
<span class="line"><span>note: downloading dehyphn-x-2022-03-16.pat</span></span>
<span class="line"><span>note: downloading loadhyph-af.tex</span></span>
<span class="line"><span>note: downloading hyph-af.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-af.tex</span></span>
<span class="line"><span>note: downloading loadhyph-grc.tex</span></span>
<span class="line"><span>note: downloading hyph-grc.tex</span></span>
<span class="line"><span>note: downloading ibyhyph.tex</span></span>
<span class="line"><span>note: downloading loadhyph-hy.tex</span></span>
<span class="line"><span>note: downloading hyph-hy.tex</span></span>
<span class="line"><span>note: downloading loadhyph-eu.tex</span></span>
<span class="line"><span>note: downloading hyph-eu.tex</span></span>
<span class="line"><span>note: downloading loadhyph-be.tex</span></span>
<span class="line"><span>note: downloading hyph-be.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-be.tex</span></span>
<span class="line"><span>note: downloading loadhyph-bg.tex</span></span>
<span class="line"><span>note: downloading hyph-bg.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ca.tex</span></span>
<span class="line"><span>note: downloading hyph-ca.tex</span></span>
<span class="line"><span>note: downloading loadhyph-zh-latn-pinyin.tex</span></span>
<span class="line"><span>note: downloading hyph-zh-latn-pinyin.tex</span></span>
<span class="line"><span>note: downloading loadhyph-cu.tex</span></span>
<span class="line"><span>note: downloading hyph-cu.tex</span></span>
<span class="line"><span>note: downloading loadhyph-cop.tex</span></span>
<span class="line"><span>note: downloading hyph-cop.tex</span></span>
<span class="line"><span>note: downloading loadhyph-hr.tex</span></span>
<span class="line"><span>note: downloading hyph-hr.tex</span></span>
<span class="line"><span>note: downloading loadhyph-cs.tex</span></span>
<span class="line"><span>note: downloading hyph-cs.tex</span></span>
<span class="line"><span>note: downloading loadhyph-da.tex</span></span>
<span class="line"><span>note: downloading hyph-da.tex</span></span>
<span class="line"><span>note: downloading loadhyph-nl.tex</span></span>
<span class="line"><span>note: downloading hyph-nl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-en-gb.tex</span></span>
<span class="line"><span>note: downloading hyph-en-gb.tex</span></span>
<span class="line"><span>note: downloading loadhyph-en-us.tex</span></span>
<span class="line"><span>note: downloading hyph-en-us.tex</span></span>
<span class="line"><span>note: downloading loadhyph-eo.tex</span></span>
<span class="line"><span>note: downloading hyph-eo.tex</span></span>
<span class="line"><span>note: downloading loadhyph-et.tex</span></span>
<span class="line"><span>note: downloading hyph-et.tex</span></span>
<span class="line"><span>note: downloading loadhyph-mul-ethi.tex</span></span>
<span class="line"><span>note: downloading hyph-mul-ethi.tex</span></span>
<span class="line"><span>note: downloading loadhyph-fi.tex</span></span>
<span class="line"><span>note: downloading hyph-fi.tex</span></span>
<span class="line"><span>note: downloading loadhyph-fi-x-school.tex</span></span>
<span class="line"><span>note: downloading hyph-fi-x-school.tex</span></span>
<span class="line"><span>note: downloading loadhyph-fr.tex</span></span>
<span class="line"><span>note: downloading hyph-fr.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-fr.tex</span></span>
<span class="line"><span>note: downloading loadhyph-fur.tex</span></span>
<span class="line"><span>note: downloading hyph-fur.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-fur.tex</span></span>
<span class="line"><span>note: downloading loadhyph-gl.tex</span></span>
<span class="line"><span>note: downloading hyph-gl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ka.tex</span></span>
<span class="line"><span>note: downloading hyph-ka.tex</span></span>
<span class="line"><span>note: downloading loadhyph-de-1901.tex</span></span>
<span class="line"><span>note: downloading hyph-de-1901.tex</span></span>
<span class="line"><span>note: downloading loadhyph-de-1996.tex</span></span>
<span class="line"><span>note: downloading hyph-de-1996.tex</span></span>
<span class="line"><span>note: downloading loadhyph-de-ch-1901.tex</span></span>
<span class="line"><span>note: downloading hyph-de-ch-1901.tex</span></span>
<span class="line"><span>note: downloading loadhyph-el-polyton.tex</span></span>
<span class="line"><span>note: downloading hyph-el-polyton.tex</span></span>
<span class="line"><span>note: downloading loadhyph-el-monoton.tex</span></span>
<span class="line"><span>note: downloading hyph-el-monoton.tex</span></span>
<span class="line"><span>note: downloading loadhyph-hu.tex</span></span>
<span class="line"><span>note: downloading hyph-hu.tex</span></span>
<span class="line"><span>note: downloading loadhyph-is.tex</span></span>
<span class="line"><span>note: downloading hyph-is.tex</span></span>
<span class="line"><span>note: downloading loadhyph-as.tex</span></span>
<span class="line"><span>note: downloading hyph-as.tex</span></span>
<span class="line"><span>note: downloading loadhyph-bn.tex</span></span>
<span class="line"><span>note: downloading hyph-bn.tex</span></span>
<span class="line"><span>note: downloading loadhyph-gu.tex</span></span>
<span class="line"><span>note: downloading hyph-gu.tex</span></span>
<span class="line"><span>note: downloading loadhyph-hi.tex</span></span>
<span class="line"><span>note: downloading hyph-hi.tex</span></span>
<span class="line"><span>note: downloading loadhyph-kn.tex</span></span>
<span class="line"><span>note: downloading hyph-kn.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ml.tex</span></span>
<span class="line"><span>note: downloading hyph-ml.tex</span></span>
<span class="line"><span>note: downloading loadhyph-mr.tex</span></span>
<span class="line"><span>note: downloading hyph-mr.tex</span></span>
<span class="line"><span>note: downloading loadhyph-or.tex</span></span>
<span class="line"><span>note: downloading hyph-or.tex</span></span>
<span class="line"><span>note: downloading loadhyph-pi.tex</span></span>
<span class="line"><span>note: downloading hyph-pi.tex</span></span>
<span class="line"><span>note: downloading loadhyph-pa.tex</span></span>
<span class="line"><span>note: downloading hyph-pa.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ta.tex</span></span>
<span class="line"><span>note: downloading hyph-ta.tex</span></span>
<span class="line"><span>note: downloading loadhyph-te.tex</span></span>
<span class="line"><span>note: downloading hyph-te.tex</span></span>
<span class="line"><span>note: downloading loadhyph-id.tex</span></span>
<span class="line"><span>note: downloading hyph-id.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ia.tex</span></span>
<span class="line"><span>note: downloading hyph-ia.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ga.tex</span></span>
<span class="line"><span>note: downloading hyph-ga.tex</span></span>
<span class="line"><span>note: downloading loadhyph-it.tex</span></span>
<span class="line"><span>note: downloading hyph-it.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-it.tex</span></span>
<span class="line"><span>note: downloading loadhyph-kmr.tex</span></span>
<span class="line"><span>note: downloading hyph-kmr.tex</span></span>
<span class="line"><span>note: downloading loadhyph-la-x-classic.tex</span></span>
<span class="line"><span>note: downloading hyph-la-x-classic.tex</span></span>
<span class="line"><span>note: downloading loadhyph-la.tex</span></span>
<span class="line"><span>note: downloading hyph-la.tex</span></span>
<span class="line"><span>note: downloading loadhyph-la-x-liturgic.tex</span></span>
<span class="line"><span>note: downloading hyph-la-x-liturgic.tex</span></span>
<span class="line"><span>note: downloading loadhyph-lv.tex</span></span>
<span class="line"><span>note: downloading hyph-lv.tex</span></span>
<span class="line"><span>note: downloading loadhyph-lt.tex</span></span>
<span class="line"><span>note: downloading hyph-lt.tex</span></span>
<span class="line"><span>note: downloading loadhyph-mk.tex</span></span>
<span class="line"><span>note: downloading hyph-mk.tex</span></span>
<span class="line"><span>note: downloading loadhyph-mn-cyrl.tex</span></span>
<span class="line"><span>note: downloading hyph-mn-cyrl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-mn-cyrl-x-lmc.tex</span></span>
<span class="line"><span>note: downloading hyph-mn-cyrl-x-lmc.tex</span></span>
<span class="line"><span>note: downloading loadhyph-nb.tex</span></span>
<span class="line"><span>note: downloading hyph-nb.tex</span></span>
<span class="line"><span>note: downloading hyph-no.tex</span></span>
<span class="line"><span>note: downloading loadhyph-nn.tex</span></span>
<span class="line"><span>note: downloading hyph-nn.tex</span></span>
<span class="line"><span>note: downloading loadhyph-oc.tex</span></span>
<span class="line"><span>note: downloading hyph-oc.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-oc.tex</span></span>
<span class="line"><span>note: downloading loadhyph-pms.tex</span></span>
<span class="line"><span>note: downloading hyph-pms.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-pms.tex</span></span>
<span class="line"><span>note: downloading loadhyph-pl.tex</span></span>
<span class="line"><span>note: downloading hyph-pl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-pt.tex</span></span>
<span class="line"><span>note: downloading hyph-pt.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ro.tex</span></span>
<span class="line"><span>note: downloading hyph-ro.tex</span></span>
<span class="line"><span>note: downloading loadhyph-rm.tex</span></span>
<span class="line"><span>note: downloading hyph-rm.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-rm.tex</span></span>
<span class="line"><span>note: downloading loadhyph-ru.tex</span></span>
<span class="line"><span>note: downloading hyph-ru.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sa.tex</span></span>
<span class="line"><span>note: downloading hyph-sa.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sr-latn.tex</span></span>
<span class="line"><span>note: downloading hyph-sh-latn.tex</span></span>
<span class="line"><span>note: downloading hyph-sh-cyrl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sr-cyrl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sk.tex</span></span>
<span class="line"><span>note: downloading hyph-sk.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sl.tex</span></span>
<span class="line"><span>note: downloading hyph-sl.tex</span></span>
<span class="line"><span>note: downloading loadhyph-es.tex</span></span>
<span class="line"><span>note: downloading hyph-es.tex</span></span>
<span class="line"><span>note: downloading loadhyph-sv.tex</span></span>
<span class="line"><span>note: downloading hyph-sv.tex</span></span>
<span class="line"><span>note: downloading loadhyph-th.tex</span></span>
<span class="line"><span>note: downloading hyph-th.tex</span></span>
<span class="line"><span>note: downloading loadhyph-tr.tex</span></span>
<span class="line"><span>note: downloading hyph-tr.tex</span></span>
<span class="line"><span>note: downloading loadhyph-tk.tex</span></span>
<span class="line"><span>note: downloading hyph-tk.tex</span></span>
<span class="line"><span>note: downloading loadhyph-uk.tex</span></span>
<span class="line"><span>note: downloading hyph-uk.tex</span></span>
<span class="line"><span>note: downloading hyph-quote-uk.tex</span></span>
<span class="line"><span>note: downloading loadhyph-hsb.tex</span></span>
<span class="line"><span>note: downloading hyph-hsb.tex</span></span>
<span class="line"><span>note: downloading loadhyph-cy.tex</span></span>
<span class="line"><span>note: downloading hyph-cy.tex</span></span>
<span class="line"><span>note: downloading latex2e-first-aid-for-external-files.ltx</span></span>
<span class="line"><span>note: Running TeX ...</span></span>
<span class="line"><span>note: downloading article.cls</span></span>
<span class="line"><span>note: downloading size10.clo</span></span>
<span class="line"><span>note: downloading lmroman10-regular.otf</span></span>
<span class="line"><span>note: downloading tex-text.tec</span></span>
<span class="line"><span>note: downloading threeparttable.sty</span></span>
<span class="line"><span>note: downloading multirow.sty</span></span>
<span class="line"><span>note: downloading booktabs.sty</span></span>
<span class="line"><span>note: downloading l3backend-xetex.def</span></span>
<span class="line"><span>note: downloading ts1cmr.fd</span></span>
<span class="line"><span>note: downloading lmroman10-bold.otf</span></span>
<span class="line"><span>note: Rerunning TeX because &quot;main.aux&quot; changed ...</span></span>
<span class="line"><span>note: Running xdvipdfmx ...</span></span>
<span class="line"><span>note: downloading pdftex.map</span></span>
<span class="line"><span>note: downloading kanjix.map</span></span>
<span class="line"><span>note: downloading ckx.map</span></span>
<span class="line"><span>note: downloading texglyphlist.txt</span></span>
<span class="line"><span>note: downloading pdfglyphlist.txt</span></span>
<span class="line"><span>note: downloading glyphlist.txt</span></span>
<span class="line"><span>note: Writing \`/tmp/jl_gSEPsR/main.pdf\` (10.00390625 KiB)</span></span>
<span class="line"><span>note: Skipped writing 1 intermediate files (use --keep-intermediates to keep them)</span></span></code></pre></div><p>Download <code>example.pdf</code>: <a href="example.pdf" download><img src="`+n+`" width="60"></a></p><h2 id="docx" tabindex="-1">docx <a class="header-anchor" href="#docx" aria-label="Permalink to &quot;docx&quot;">​</a></h2><p>To get docx output, you need to use the WriteDocx.jl package because this format is not plain-text like LaTeX or HTML. The table node you get out of the <code>to_docx</code> function can be placed into sections on the same level as paragraphs.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WriteDocx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> W</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mkpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">45</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">85</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">44</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">76</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blood_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    smoker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tbl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> table_one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Age (years)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blood_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blood type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:smoker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Smoker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    groupby </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    show_n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> W</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Document</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            W</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                W</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    SummaryTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">to_docx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tbl)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">W</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.docx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), doc)</span></span></code></pre></div><p>Download <code>example.docx</code>: <a href="example.docx" download><img src="`+t+`" width="60"></a></p><h2 id="typst" tabindex="-1">Typst <a class="header-anchor" href="#typst" aria-label="Permalink to &quot;Typst&quot;">​</a></h2><p>You can print <a href="https://github.com/typst/typst" target="_blank" rel="noreferrer">Typst</a> table code to any IO via <code>show(io, MIME&quot;text/typst&quot;, table)</code>. From SummaryTables v2.0 on, the Typst backend is using the native table functionality in Typst v0.11. Previous versions used the <a href="https://github.com/PgBiel/typst-tablex/" target="_blank" rel="noreferrer">tablex</a> package.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Typst_jll</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mkpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">45</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">85</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">44</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">76</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blood_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    smoker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tbl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> table_one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Age (years)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blood_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blood type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:smoker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Smoker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    groupby </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :sex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    show_n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># render latex in a temp directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mktempdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dir</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    typfile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dir, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.typ&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(typfile, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;w&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # print the table as latex code</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MIME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/typst&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), tbl)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # render the tex file to pdf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Typst_jll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">typst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bin</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$typfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dir, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@__DIR__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example_typst.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>Download <code>example_typst.pdf</code>: <a href="example_typst.pdf" download><img src="`+n+'" width="60"></a></p>',16)]))}const F=a(h,[["render",e]]);export{y as __pageData,F as default};
