import{_ as d,C as h,c as k,o as r,az as g,G as l,w as e,j as t,a as i}from"./chunks/framework.BKUja_M7.js";const C=JSON.parse('{"title":"SummaryTables","description":"","frontmatter":{"layout":"home","hero":{"name":"SummaryTables","text":null,"tagline":"Publication-ready tables for Julia - in HTML, docx, LaTeX and Typst","image":{"src":"logo.png","alt":"SummaryTables"},"actions":[{"theme":"alt","text":"View on Github","link":"https://github.com/PumasAI/SummaryTables.jl"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),p={name:"index.md"};function E(y,s,o,F,c,b){const a=h("PluginTabsTab"),n=h("PluginTabs");return r(),k("div",null,[s[6]||(s[6]=g(`<h1 id="SummaryTables" tabindex="-1">SummaryTables <a class="header-anchor" href="#SummaryTables" aria-label="Permalink to &quot;SummaryTables {#SummaryTables}&quot;">​</a></h1><p>SummaryTables is focused on creating tables for publications in HTML, docx, LaTeX and Typst formats. It offers both convenient predefined table functions that are inspired by common table formats in the pharma space, as well as an API to create completely custom tables.</p><p>It deliberately uses an opinionated, limited styling API so that styling can be as consistent as possible across the different backends.</p><h2 id="Installation" tabindex="-1">Installation <a class="header-anchor" href="#Installation" aria-label="Permalink to &quot;Installation {#Installation}&quot;">​</a></h2><p>SummaryTables is registered in the General Registry and can be installed as usual:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pkg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SummaryTables&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="Examples" tabindex="-1">Examples <a class="header-anchor" href="#Examples" aria-label="Permalink to &quot;Examples {#Examples}&quot;">​</a></h2>`,7)),l(n,null,{default:e(()=>[l(a,{label:"Custom table"},{default:e(()=>s[0]||(s[0]=[t("p",null,[i("Completely customizable "),t("a",{href:"/SummaryTables.jl/v3/reference/infrastructure/table#Table"},"Table"),i("s can be built from scratch as a matrix of "),t("a",{href:"/SummaryTables.jl/v3/reference/infrastructure/cell#Cell"},"Cell"),i("s with a little styling metadata.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"categories "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Deciduous"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Deciduous"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Evergreen"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Evergreen"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Evergreen"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"species "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Beech"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Oak"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Fir"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Spruce"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Pine"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fake_data "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'    "35m"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "40m"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "38m"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "27m"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "29m"')]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'    "10k"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "12k"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "18k"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "9k"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "7k"')]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'    "500yr"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "800yr"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "600yr"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "700yr"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "400yr"')]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'    "80'),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\$"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "150'),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\$"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "40'),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\$"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "70'),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\$"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "50'),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\$"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"labels "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Size"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Annotated"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Water consumption"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Liters per year"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Age"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Value"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"body "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    Cell"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".(categories, bold "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", merge "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", border_bottom "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"'"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    Cell"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".(species)"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"'"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    Cell"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".(fake_data)")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Table"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"hcat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    Cell"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".(labels, italic "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", halign "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," :right"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    body")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), header "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),t("div",{innerHTML:`<table id="st-5ee6cd77">
    <style>
        #st-5ee6cd77 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-5ee6cd77 tr {
            background-color: transparent;
            border: none;
        }
        #st-5ee6cd77 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-5ee6cd77 br {
            line-height: 0em;
            margin: 0;
        }
        #st-5ee6cd77 sub {
            line-height: 0;
        }
        #st-5ee6cd77 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-style:italic;text-align:right;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Deciduous</td>
        <td colspan="3" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Evergreen</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:right;"></td>
        <td style="text-align:center;">Beech</td>
        <td style="text-align:center;">Oak</td>
        <td style="text-align:center;">Fir</td>
        <td style="text-align:center;">Spruce</td>
        <td style="text-align:center;">Pine</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-style:italic;text-align:right;">Size</td>
        <td style="text-align:center;">35m</td>
        <td style="text-align:center;">40m</td>
        <td style="text-align:center;">38m</td>
        <td style="text-align:center;">27m</td>
        <td style="text-align:center;">29m</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:right;">Water consumption<sup>1</sup></td>
        <td style="text-align:center;">10k</td>
        <td style="text-align:center;">12k</td>
        <td style="text-align:center;">18k</td>
        <td style="text-align:center;">9k</td>
        <td style="text-align:center;">7k</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:right;">Age</td>
        <td style="text-align:center;">500yr</td>
        <td style="text-align:center;">800yr</td>
        <td style="text-align:center;">600yr</td>
        <td style="text-align:center;">700yr</td>
        <td style="text-align:center;">400yr</td>
    </tr>
    <tr>
        <td style="font-style:italic;text-align:right;">Value</td>
        <td style="text-align:center;">80$</td>
        <td style="text-align:center;">150$</td>
        <td style="text-align:center;">40$</td>
        <td style="text-align:center;">70$</td>
        <td style="text-align:center;">50$</td>
    </tr>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="6" style="font-size: 0.8em;"><sup>1</sup> Liters per year</td></tr>
</table>`},null,-1)])),_:1}),l(a,{label:"simple_table"},{default:e(()=>s[1]||(s[1]=[t("p",null,[i("The "),t("a",{href:"/SummaryTables.jl/v3/reference/table_functions/simple_table#simple_table"},"simple_table"),i(" is a quick way to render standard tabular data sources.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DataFrames")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"data "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," DataFrame"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sex "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    age "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"27"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"45"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"34"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"85"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"55"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"44"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"24"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"29"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"37"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"76"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    blood_type "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"0"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"0"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    smoker "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"simple_table"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data,")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":age"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Age (years)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":sex"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Sex"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":smoker"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Smoker"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":blood_type"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Blood Type"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    halign "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":left"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":right"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":right"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":right"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),t("div",{innerHTML:`<table id="st-dca29f20">
    <style>
        #st-dca29f20 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-dca29f20 tr {
            background-color: transparent;
            border: none;
        }
        #st-dca29f20 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-dca29f20 br {
            line-height: 0em;
            margin: 0;
        }
        #st-dca29f20 sub {
            line-height: 0;
        }
        #st-dca29f20 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Age (years)</td>
        <td style="font-weight:bold;text-align:right;">Sex</td>
        <td style="font-weight:bold;text-align:right;">Smoker</td>
        <td style="font-weight:bold;text-align:right;">Blood Type</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="text-align:left;">27</td>
        <td style="text-align:right;">m</td>
        <td style="text-align:right;">true</td>
        <td style="text-align:right;">A</td>
    </tr>
    <tr>
        <td style="text-align:left;">45</td>
        <td style="text-align:right;">m</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">0</td>
    </tr>
    <tr>
        <td style="text-align:left;">34</td>
        <td style="text-align:right;">m</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">B</td>
    </tr>
    <tr>
        <td style="text-align:left;">85</td>
        <td style="text-align:right;">m</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">B</td>
    </tr>
    <tr>
        <td style="text-align:left;">55</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">true</td>
        <td style="text-align:right;">B</td>
    </tr>
    <tr>
        <td style="text-align:left;">44</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">true</td>
        <td style="text-align:right;">A</td>
    </tr>
    <tr>
        <td style="text-align:left;">24</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">true</td>
        <td style="text-align:right;">0</td>
    </tr>
    <tr>
        <td style="text-align:left;">29</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">A</td>
    </tr>
    <tr>
        <td style="text-align:left;">37</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">A</td>
    </tr>
    <tr>
        <td style="text-align:left;">76</td>
        <td style="text-align:right;">f</td>
        <td style="text-align:right;">false</td>
        <td style="text-align:right;">B</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>`},null,-1)])),_:1}),l(a,{label:"table_one"},{default:e(()=>s[2]||(s[2]=[t("p",null,[i("The "),t("a",{href:"/SummaryTables.jl/v3/reference/table_functions/table_one#table_one"},"table_one"),i(" function is often used to describe properties of groups in a population.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DataFrames")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"data "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," DataFrame"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sex "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"m"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"f"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    age "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"27"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"45"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"34"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"85"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"55"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"44"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"24"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"29"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"37"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"76"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    blood_type "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"0"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"0"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"A"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"B"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    smoker "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"table_one"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data,")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":age"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Age (years)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":blood_type"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Blood type"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":smoker"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Smoker"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    groupby "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," :sex"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Sex"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    show_n "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),t("div",{innerHTML:`<table id="st-a474b6d8">
    <style>
        #st-a474b6d8 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-a474b6d8 tr {
            background-color: transparent;
            border: none;
        }
        #st-a474b6d8 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-a474b6d8 br {
            line-height: 0em;
            margin: 0;
        }
        #st-a474b6d8 sub {
            line-height: 0;
        }
        #st-a474b6d8 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="2" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Sex</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:center;">Total<br>(n=10)</td>
        <td style="text-align:center;">f<br>(n=6)</td>
        <td style="text-align:center;">m<br>(n=4)</td>
    </tr>
        <tr><td colspan="4" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="font-weight:bold;text-align:left;">Age (years)</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">45.6 (20.7)</td>
        <td style="text-align:center;">44.2 (19.1)</td>
        <td style="text-align:center;">47.8 (25.9)</td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">Median [Min, Max]</td>
        <td style="text-align:center;">40.5 [24, 85]</td>
        <td style="text-align:center;">40.5 [24, 76]</td>
        <td style="text-align:center;">39.5 [27, 85]</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Blood type</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">0</td>
        <td style="text-align:center;">2 (20%)</td>
        <td style="text-align:center;">1 (16.7%)</td>
        <td style="text-align:center;">1 (25%)</td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">A</td>
        <td style="text-align:center;">4 (40%)</td>
        <td style="text-align:center;">3 (50%)</td>
        <td style="text-align:center;">1 (25%)</td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">B</td>
        <td style="text-align:center;">4 (40%)</td>
        <td style="text-align:center;">2 (33.3%)</td>
        <td style="text-align:center;">2 (50%)</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Smoker</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">false</td>
        <td style="text-align:center;">6 (60%)</td>
        <td style="text-align:center;">3 (50%)</td>
        <td style="text-align:center;">3 (75%)</td>
    </tr>
    <tr>
        <td style="padding-left:12.0pt;text-align:left;">true</td>
        <td style="text-align:center;">4 (40%)</td>
        <td style="text-align:center;">3 (50%)</td>
        <td style="text-align:center;">1 (25%)</td>
    </tr>
    <tr><td colspan="4" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>`},null,-1)])),_:1}),l(a,{label:"listingtable"},{default:e(()=>s[3]||(s[3]=[t("p",null,[i("The "),t("a",{href:"/SummaryTables.jl/v3/reference/table_functions/listingtable#listingtable"},"listingtable"),i(" lists all raw values from a table column in a matrix-like arrangement, with possibly nested groups and groupwise summaries.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DataFrames")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Statistics")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"data "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," DataFrame"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    concentration "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," sin"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".("),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"24"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},".+"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    compound "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Ibuprofen"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Paracetamol"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"12"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    dosage "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"High"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Medium"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Low"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"8"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    time "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.25"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.5"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], inner "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 6"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mean_sd"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values) "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Concat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"mean"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values), "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'" ("'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"std"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values), "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'")"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"listingtable"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data,")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    :concentration"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Concentration (ng/mL)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rows "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":compound"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Compound"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":dosage"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Dosage"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    cols "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," :time"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Time (hr)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    summarize_rows "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," :compound"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        length "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "N"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        median "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Median"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        mean_sd "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Mean (SD)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),t("div",{innerHTML:`<table id="st-54f32d34">
    <style>
        #st-54f32d34 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-54f32d34 tr {
            background-color: transparent;
            border: none;
        }
        #st-54f32d34 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-54f32d34 br {
            line-height: 0em;
            margin: 0;
        }
        #st-54f32d34 sub {
            line-height: 0;
        }
        #st-54f32d34 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Time (hr)</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">0</td>
        <td style="text-align:center;">0.25</td>
        <td style="text-align:center;">0.5</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Compound</td>
        <td style="font-weight:bold;text-align:left;">Dosage</td>
        <td colspan="4" style="font-weight:bold;text-align:center;">Concentration (ng/mL)</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="3" style="padding-bottom: 3.0pt;text-align:left;">Ibuprofen</td>
        <td style="text-align:left;">High</td>
        <td style="text-align:center;">2.84</td>
        <td style="text-align:center;">2.66</td>
        <td style="text-align:center;">2.42</td>
        <td style="text-align:center;">2.15</td>
    </tr>
    <tr>
        <td style="text-align:left;">Low</td>
        <td style="text-align:center;">2.14</td>
        <td style="text-align:center;">2.41</td>
        <td style="text-align:center;">2.65</td>
        <td style="text-align:center;">2.84</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">Medium</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.04</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.04</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">1.15</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">N</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">Median</td>
        <td style="text-align:center;">2.14</td>
        <td style="text-align:center;">2.41</td>
        <td style="text-align:center;">2.42</td>
        <td style="text-align:center;">2.15</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Mean (SD)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.01 (0.908)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.02 (0.894)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.04 (0.872)</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.05 (0.846)</td>
    </tr>
    <tr>
        <td rowspan="3" style="padding-bottom: 3.0pt;padding-top: 3.0pt;text-align:left;">Paracetamol</td>
        <td style="padding-top: 3.0pt;text-align:left;">High</td>
        <td style="padding-top: 3.0pt;text-align:center;">1.24</td>
        <td style="padding-top: 3.0pt;text-align:center;">1.46</td>
        <td style="padding-top: 3.0pt;text-align:center;">1.71</td>
        <td style="padding-top: 3.0pt;text-align:center;">1.99</td>
    </tr>
    <tr>
        <td style="text-align:left;">Low</td>
        <td style="text-align:center;">1.72</td>
        <td style="text-align:center;">1.46</td>
        <td style="text-align:center;">1.25</td>
        <td style="text-align:center;">1.09</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;text-align:left;">Medium</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.91</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.99</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.99</td>
        <td style="padding-bottom: 3.0pt;text-align:center;">2.91</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;text-align:center;"></td>
        <td style="font-weight:bold;padding-top: 3.0pt;text-align:left;">N</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
        <td style="padding-top: 3.0pt;text-align:center;">3</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">Median</td>
        <td style="text-align:center;">1.72</td>
        <td style="text-align:center;">1.46</td>
        <td style="text-align:center;">1.71</td>
        <td style="text-align:center;">1.99</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">1.96 (0.858)</td>
        <td style="text-align:center;">1.97 (0.883)</td>
        <td style="text-align:center;">1.98 (0.902)</td>
        <td style="text-align:center;">2 (0.909)</td>
    </tr>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>`},null,-1)])),_:1}),l(a,{label:"summarytable"},{default:e(()=>s[4]||(s[4]=[t("p",null,[i("The "),t("a",{href:"/SummaryTables.jl/v3/reference/table_functions/summarytable#summarytable"},"summarytable"),i(" is the little brother of "),t("code",null,"listingtable"),i(" and omits the raw values but has similar grouping functionality.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DataFrames")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Statistics")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"data "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," DataFrame"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    concentration "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," sin"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".("),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"24"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},".+"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    compound "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Ibuprofen"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Paracetamol"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"12"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    dosage "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"High"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Medium"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Low"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"8"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    time "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," repeat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.25"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.5"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"], inner "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 6"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mean_sd"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values) "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Concat"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"mean"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values), "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'" ("'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"std"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(values), "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'")"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"summarytable"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data,")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    :concentration"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Concentration (ng/mL)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rows "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ["),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":compound"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Compound"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    cols "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," :time"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Time (hr)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    summary "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        length "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "N"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        median "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Median"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        mean_sd "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Mean (SD)"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1),t("div",{innerHTML:`<table id="st-14f3b3e5">
    <style>
        #st-14f3b3e5 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-14f3b3e5 tr {
            background-color: transparent;
            border: none;
        }
        #st-14f3b3e5 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-14f3b3e5 br {
            line-height: 0em;
            margin: 0;
        }
        #st-14f3b3e5 sub {
            line-height: 0;
        }
        #st-14f3b3e5 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;border-bottom:1px solid currentColor; padding-bottom: 0.25em;text-align:center;">Time (hr)</td>
    </tr>
    <tr>
        <td style="text-align:center;"></td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">0</td>
        <td style="text-align:center;">0.25</td>
        <td style="text-align:center;">0.5</td>
        <td style="text-align:center;">1</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Compound</td>
        <td style="text-align:center;"></td>
        <td colspan="4" style="font-weight:bold;text-align:center;">Concentration (ng/mL)</td>
    </tr>
        <tr><td colspan="6" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td rowspan="3" style="text-align:left;">Ibuprofen</td>
        <td style="font-weight:bold;text-align:left;">N</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Median</td>
        <td style="text-align:center;">2.14</td>
        <td style="text-align:center;">2.41</td>
        <td style="text-align:center;">2.42</td>
        <td style="text-align:center;">2.15</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">2.01 (0.908)</td>
        <td style="text-align:center;">2.02 (0.894)</td>
        <td style="text-align:center;">2.04 (0.872)</td>
        <td style="text-align:center;">2.05 (0.846)</td>
    </tr>
    <tr>
        <td rowspan="3" style="text-align:left;">Paracetamol</td>
        <td style="font-weight:bold;text-align:left;">N</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
        <td style="text-align:center;">3</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Median</td>
        <td style="text-align:center;">1.72</td>
        <td style="text-align:center;">1.46</td>
        <td style="text-align:center;">1.71</td>
        <td style="text-align:center;">1.99</td>
    </tr>
    <tr>
        <td style="font-weight:bold;text-align:left;">Mean (SD)</td>
        <td style="text-align:center;">1.96 (0.858)</td>
        <td style="text-align:center;">1.97 (0.883)</td>
        <td style="text-align:center;">1.98 (0.902)</td>
        <td style="text-align:center;">2 (0.909)</td>
    </tr>
    <tr><td colspan="6" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
</table>`},null,-1)])),_:1}),l(a,{label:"overview_table"},{default:e(()=>s[5]||(s[5]=[t("p",null,[i("The "),t("a",{href:"/SummaryTables.jl/v3/reference/table_functions/overview_table#overview_table"},"overview_table"),i(" is intended for a quick glance over the different columns making up a dataset.")],-1),t("div",{class:"language-julia vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"julia"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," SummaryTables")]),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"using"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," RDatasets")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"df "),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," dataset"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ggplot2"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"diamonds"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")["),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"7"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),t("span",{class:"line"}),i(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"overview_table"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(df)")])])])],-1),t("div",{innerHTML:`<table id="st-f1e20e29">
    <style>
        #st-f1e20e29 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-f1e20e29 tr {
            background-color: transparent;
            border: none;
        }
        #st-f1e20e29 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-f1e20e29 br {
            line-height: 0em;
            margin: 0;
        }
        #st-f1e20e29 sub {
            line-height: 0;
        }
        #st-f1e20e29 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">No</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Variable</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Stats / Values</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Freqs (% of Valid)</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Graph</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Valid</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Missing</td>
    </tr>
        <tr><td colspan="7" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">1</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Carat<br>[Float64]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 0.798 (0.474)<br>min ≤ med ≤ max:<br>0.2 ≤ 0.7 ≤ 5.01<br>IQR (CV): 0.64 (0.594)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">273 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='2.0' width='9.090909090909092' height='60.0' fill='lightgray' stroke='gray'/><rect x='11.090909090909092' y='3.5887744709743075' width='9.090909090909092' height='58.41122552902569' fill='lightgray' stroke='gray'/><rect x='20.181818181818183' y='18.461468824261623' width='9.09090909090909' height='43.53853117573838' fill='lightgray' stroke='gray'/><rect x='29.27272727272727' y='48.145750820414165' width='9.09090909090909' height='13.854249179585834' fill='lightgray' stroke='gray'/><rect x='38.36363636363637' y='55.1730225189544' width='9.090909090909086' height='6.826977481045603' fill='lightgray' stroke='gray'/><rect x='47.45454545454545' y='61.650333823695824' width='9.090909090909093' height='0.34966617630417574' fill='lightgray' stroke='gray'/><rect x='56.54545454545454' y='61.89815548262985' width='9.090909090909086' height='0.10184451737014832' fill='lightgray' stroke='gray'/><rect x='65.63636363636363' y='61.98642073101731' width='9.090909090909093' height='0.013579268982686354' fill='lightgray' stroke='gray'/><rect x='74.72727272727273' y='61.98642073101731' width='9.09090909090908' height='0.013579268982686354' fill='lightgray' stroke='gray'/><rect x='83.81818181818181' y='61.99660518275433' width='9.090909090909093' height='0.0033948172456716996' fill='lightgray' stroke='gray'/><rect x='92.9090909090909' y='61.99660518275433' width='9.090909090909093' height='0.0033948172456716996' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">2</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Cut<br>[CategoricalValue{String, UInt8}]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. Ideal<br>2. Premium<br>3. Very Good<br>4. Good<br>5. Fair</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">21551 (40%)<br>13791 (25.6%)<br>12082 (22.4%)<br>4906 (9.1%)<br>1610 (3%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='76.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 76.0'><rect x='2.0' y='62.0' width='2.984797923618835' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='9.095291064145346' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='22.398961809417873' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='25.567296996662957' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='39.953652206154985' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">3</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Color<br>[CategoricalValue{String, UInt8}]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. G<br>2. E<br>3. F<br>4. H<br>5. D<br>6. I<br>7. J</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">11292 (20.9%)<br>9797 (18.2%)<br>9542 (17.7%)<br>8304 (15.4%)<br>6775 (12.6%)<br>5422 (10.1%)<br>2808 (5.2%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='106.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 106.0'><rect x='2.0' y='92.0' width='5.205784204671858' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='77.0' width='10.051909529106414' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='12.560252131998517' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='15.394883203559512' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='17.690025954764554' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='18.162773451983686' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='20.934371523915463' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">4</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Clarity<br>[CategoricalValue{String, UInt8}]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. SI1<br>2. VS2<br>3. SI2<br>4. VS1<br>5. VVS2<br>6. VVS1<br>7. IF<br>8. I1</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">13065 (24.2%)<br>12258 (22.7%)<br>9194 (17%)<br>8171 (15.1%)<br>5066 (9.4%)<br>3655 (6.8%)<br>1790 (3.3%)<br>741 (1.4%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='121.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 121.0'><rect x='2.0' y='107.0' width='1.3737486095661846' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='92.0' width='3.3185020393029294' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='77.0' width='6.776047460140898' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='9.39191694475343' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='15.148312940304045' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='17.044864664441974' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='22.725250278086765' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='24.22135706340378' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">5</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Depth<br>[Float64]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 61.7 (1.43)<br>min ≤ med ≤ max:<br>43 ≤ 61.8 ≤ 79<br>IQR (CV): 1.5 (0.0232)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">184 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='61.99624467996328' width='12.5' height='0.0037553200367188566' fill='lightgray' stroke='gray'/><rect x='14.5' y='62.0' width='12.5' height='0.0' fill='lightgray' stroke='gray'/><rect x='27.0' y='61.97621630643412' width='12.5' height='0.023783693565885056' fill='lightgray' stroke='gray'/><rect x='39.5' y='55.62597012434282' width='12.5' height='6.374029875657181' fill='lightgray' stroke='gray'/><rect x='52.0' y='2.0' width='12.5' height='60.0' fill='lightgray' stroke='gray'/><rect x='64.5' y='60.91095718935158' width='12.5' height='1.0890428106484187' fill='lightgray' stroke='gray'/><rect x='77.0' y='61.973712759742966' width='12.5' height='0.026287240257030664' fill='lightgray' stroke='gray'/><rect x='89.5' y='61.99624467996328' width='12.5' height='0.0037553200367188566' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">6</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Table<br>[Float64]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 57.5 (2.23)<br>min ≤ med ≤ max:<br>43 ≤ 57 ≤ 95<br>IQR (CV): 3 (0.0389)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">127 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='61.997092882407095' width='8.333333333333334' height='0.0029071175929065163' fill='lightgray' stroke='gray'/><rect x='10.333333333333334' y='61.997092882407095' width='8.333333333333334' height='0.0029071175929065163' fill='lightgray' stroke='gray'/><rect x='18.666666666666668' y='56.80934153786521' width='8.333333333333332' height='5.1906584621347935' fill='lightgray' stroke='gray'/><rect x='26.999999999999996' y='2.0' width='8.333333333333332' height='60.0' fill='lightgray' stroke='gray'/><rect x='35.333333333333336' y='49.26682494306895' width='8.333333333333329' height='12.733175056931053' fill='lightgray' stroke='gray'/><rect x='43.66666666666667' y='61.549396773099474' width='8.333333333333329' height='0.45060322690052823' fill='lightgray' stroke='gray'/><rect x='51.99999999999999' y='61.97965017684965' width='8.333333333333336' height='0.020349823150346502' fill='lightgray' stroke='gray'/><rect x='60.33333333333333' y='61.997092882407095' width='8.333333333333343' height='0.0029071175929065163' fill='lightgray' stroke='gray'/><rect x='68.66666666666667' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='77.0' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='85.33333333333334' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='93.66666666666667' y='61.998546441203544' width='8.333333333333329' height='0.0014535587964532581' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">7</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Price<br>[Int32]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 3933 (3989)<br>min ≤ med ≤ max:<br>326 ≤ 2401 ≤ 18823<br>IQR (CV): 4374 (1.01)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">11602 distinct values</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='2.0' width='10.0' height='60.0' fill='lightgray' stroke='gray'/><rect x='12.0' y='36.324670495393136' width='10.0' height='25.675329504606868' fill='lightgray' stroke='gray'/><rect x='22.0' y='42.59662025368756' width='10.0' height='19.40337974631244' fill='lightgray' stroke='gray'/><rect x='32.0' y='52.21526257075569' width='10.0' height='9.78473742924431' fill='lightgray' stroke='gray'/><rect x='42.0' y='56.09246787588316' width='10.0' height='5.907532124116845' fill='lightgray' stroke='gray'/><rect x='52.0' y='57.63938354749411' width='10.0' height='4.360616452505887' fill='lightgray' stroke='gray'/><rect x='62.0' y='58.764863859852085' width='10.0' height='3.2351361401479153' fill='lightgray' stroke='gray'/><rect x='72.0' y='59.47882493905714' width='10.0' height='2.5211750609428583' fill='lightgray' stroke='gray'/><rect x='82.0' y='59.94240383423543' width='10.0' height='2.0575961657645747' fill='lightgray' stroke='gray'/><rect x='92.0' y='61.22654216419452' width='10.0' height='0.7734578358054787' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="7" style="font-size: 0.8em;">Dimensions: 53940 x 7<br/>Duplicate rows: 803</td></tr>
</table>`},null,-1)])),_:1})]),_:1})])}const m=d(p,[["render",E]]);export{C as __pageData,m as default};
