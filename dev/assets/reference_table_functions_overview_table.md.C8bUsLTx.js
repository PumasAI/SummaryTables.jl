import{_ as i,c as e,o as l,az as a}from"./chunks/framework.CAkcY2eT.js";const y=JSON.parse('{"title":"overview_table","description":"","frontmatter":{},"headers":[],"relativePath":"reference/table_functions/overview_table.md","filePath":"reference/table_functions/overview_table.md","lastUpdated":null}'),d={name:"reference/table_functions/overview_table.md"};function n(r,t,s,g,h,p){return l(),e("div",null,t[0]||(t[0]=[a(`<h1 id="overview_table" tabindex="-1"><code>overview_table</code> <a class="header-anchor" href="#overview_table" aria-label="Permalink to &quot;\`overview_table\` {#overview_table}&quot;">​</a></h1><h2 id="Synopsis" tabindex="-1">Synopsis <a class="header-anchor" href="#Synopsis" aria-label="Permalink to &quot;Synopsis {#Synopsis}&quot;">​</a></h2><p>The <code>overview_table</code> table is intended to quickly give an overview of the columns that a dataset consists of. It displays different statistical summaries depending on the types of the columns, including bar graphs that give a quick intuition of the distribution of values. It is styled after R&#39;s <code>dfSummary</code> function from the <a href="https://cran.r-project.org/web/packages/summarytools/" target="_blank" rel="noreferrer"><code>summarytools</code></a> package.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RDatasets</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ggplot2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;diamonds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">overview_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df)</span></span></code></pre></div><div><table id="st-79dc912a">
    <style>
        #st-79dc912a {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-79dc912a tr {
            background-color: transparent;
            border: none;
        }
        #st-79dc912a tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-79dc912a br {
            line-height: 0em;
            margin: 0;
        }
        #st-79dc912a sub {
            line-height: 0;
        }
        #st-79dc912a sup {
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
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">7</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Price<br>[Int32]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 3933 (3989)<br>min ≤ med ≤ max:<br>326 ≤ 2401 ≤ 18823<br>IQR (CV): 4374 (1.01)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">11602 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='2.0' width='10.0' height='60.0' fill='lightgray' stroke='gray'/><rect x='12.0' y='36.324670495393136' width='10.0' height='25.675329504606868' fill='lightgray' stroke='gray'/><rect x='22.0' y='42.59662025368756' width='10.0' height='19.40337974631244' fill='lightgray' stroke='gray'/><rect x='32.0' y='52.21526257075569' width='10.0' height='9.78473742924431' fill='lightgray' stroke='gray'/><rect x='42.0' y='56.09246787588316' width='10.0' height='5.907532124116845' fill='lightgray' stroke='gray'/><rect x='52.0' y='57.63938354749411' width='10.0' height='4.360616452505887' fill='lightgray' stroke='gray'/><rect x='62.0' y='58.764863859852085' width='10.0' height='3.2351361401479153' fill='lightgray' stroke='gray'/><rect x='72.0' y='59.47882493905714' width='10.0' height='2.5211750609428583' fill='lightgray' stroke='gray'/><rect x='82.0' y='59.94240383423543' width='10.0' height='2.0575961657645747' fill='lightgray' stroke='gray'/><rect x='92.0' y='61.22654216419452' width='10.0' height='0.7734578358054787' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">8</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">X<br>[Float64]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 5.73 (1.12)<br>min ≤ med ≤ max:<br>0 ≤ 5.7 ≤ 10.7<br>IQR (CV): 1.83 (0.196)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">554 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='61.971980619928786' width='9.090909090909092' height='0.02801938007121585' fill='lightgray' stroke='gray'/><rect x='11.090909090909092' y='62.0' width='9.090909090909092' height='0.0' fill='lightgray' stroke='gray'/><rect x='20.181818181818183' y='62.0' width='9.09090909090909' height='0.0' fill='lightgray' stroke='gray'/><rect x='29.27272727272727' y='60.43441713852081' width='9.09090909090909' height='1.5655828614791898' fill='lightgray' stroke='gray'/><rect x='38.36363636363637' y='2.0' width='9.090909090909086' height='60.0' fill='lightgray' stroke='gray'/><rect x='47.45454545454545' y='12.945070340318722' width='9.090909090909093' height='49.05492965968128' fill='lightgray' stroke='gray'/><rect x='56.54545454545454' y='9.260521860953823' width='9.090909090909086' height='52.73947813904618' fill='lightgray' stroke='gray'/><rect x='65.63636363636363' y='43.10793298698266' width='9.090909090909093' height='18.892067013017336' fill='lightgray' stroke='gray'/><rect x='74.72727272727273' y='55.50650866849571' width='9.09090909090908' height='6.493491331504291' fill='lightgray' stroke='gray'/><rect x='83.81818181818181' y='61.87391278967953' width='9.090909090909093' height='0.12608721032047177' fill='lightgray' stroke='gray'/><rect x='92.9090909090909' y='61.97898546494659' width='9.090909090909093' height='0.021014535053411887' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">9</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Y<br>[Float64]</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 5.73 (1.14)<br>min ≤ med ≤ max:<br>0 ≤ 5.71 ≤ 58.9<br>IQR (CV): 1.82 (0.199)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">552 distinct values</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='33.00813991860082' width='8.333333333333334' height='28.991860081399185' fill='lightgray' stroke='gray'/><rect x='10.333333333333334' y='2.0' width='8.333333333333334' height='60.0' fill='lightgray' stroke='gray'/><rect x='18.666666666666668' y='61.995050049499504' width='8.333333333333332' height='0.004949950500495071' fill='lightgray' stroke='gray'/><rect x='26.999999999999996' y='62.0' width='8.333333333333332' height='0.0' fill='lightgray' stroke='gray'/><rect x='35.333333333333336' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='43.66666666666667' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='51.99999999999999' y='61.998350016499835' width='8.333333333333336' height='0.0016499835001648755' fill='lightgray' stroke='gray'/><rect x='60.33333333333333' y='62.0' width='8.333333333333343' height='0.0' fill='lightgray' stroke='gray'/><rect x='68.66666666666667' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='77.0' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='85.33333333333334' y='62.0' width='8.333333333333329' height='0.0' fill='lightgray' stroke='gray'/><rect x='93.66666666666667' y='61.998350016499835' width='8.333333333333329' height='0.0016499835001648755' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-bottom: 3.0pt;padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">10</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Z<br>[Float64]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Mean (sd): 3.54 (0.706)<br>min ≤ med ≤ max:<br>0 ≤ 3.53 ≤ 31.8<br>IQR (CV): 1.13 (0.199)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">375 distinct values</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='64.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 64.0'><rect x='2.0' y='61.96404939300787' width='6.25' height='0.035950606992132705' fill='lightgray' stroke='gray'/><rect x='8.25' y='2.0' width='6.25' height='60.0' fill='lightgray' stroke='gray'/><rect x='14.5' y='37.745844839264315' width='6.25' height='24.254155160735685' fill='lightgray' stroke='gray'/><rect x='20.75' y='61.981243161569324' width='6.25' height='0.01875683843067799' fill='lightgray' stroke='gray'/><rect x='27.0' y='61.99843693013078' width='6.25' height='0.001563069869223277' fill='lightgray' stroke='gray'/><rect x='33.25' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='39.5' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='45.75' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='52.0' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='58.25' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='64.5' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='70.75' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='77.0' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='83.25' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='89.5' y='62.0' width='6.25' height='0.0' fill='lightgray' stroke='gray'/><rect x='95.75' y='61.99843693013078' width='6.25' height='0.001563069869223277' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">53940<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="7" style="font-size: 0.8em;">Dimensions: 53940 x 10<br/>Duplicate rows: 146</td></tr>
</table></div><h2 id="Keyword:-max_categories" tabindex="-1">Keyword: <code>max_categories</code> <a class="header-anchor" href="#Keyword:-max_categories" aria-label="Permalink to &quot;Keyword: \`max_categories\` {#Keyword:-max_categories}&quot;">​</a></h2><p>Only <code>n &lt;= max_categories</code> categories per column will be listed individually, the rest will be lumped together. By default, only the 10 most frequent categories will be displayed.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    letters </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vcat, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str, i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (str, i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> overview_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-fd7a958d">
    <style>
        #st-fd7a958d {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-fd7a958d tr {
            background-color: transparent;
            border: none;
        }
        #st-fd7a958d tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-fd7a958d br {
            line-height: 0em;
            margin: 0;
        }
        #st-fd7a958d sub {
            line-height: 0;
        }
        #st-fd7a958d sup {
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
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">letters<br>[String]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. Z<br>2. Y<br>3. X<br>4. W<br>5. V<br>6. U<br>7. T<br>8. S<br>9. R<br>10. Q<br>[16 others]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">676 (10.9%)<br>625 (10.1%)<br>576 (9.3%)<br>529 (8.5%)<br>484 (7.8%)<br>441 (7.1%)<br>400 (6.5%)<br>361 (5.8%)<br>324 (5.2%)<br>289 (4.7%)<br>1496 (24.1%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='166.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 166.0'><rect x='2.0' y='152.0' width='24.125141106273183' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='137.0' width='4.660538622802774' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='122.0' width='5.2249637155297535' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='107.0' width='5.821641670698274' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='92.0' width='6.450572488308337' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='77.0' width='7.111756168359943' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='7.805192710853088' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='8.530882115787776' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='9.288824383164005' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='10.079019512981777' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='10.90146750524109' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">6201<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="7" style="font-size: 0.8em;">Dimensions: 6201 x 1<br/>Duplicate rows: 6175</td></tr>
</table></div><p>We can reduce the number of categories by setting <code>max_categories = 5</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> overview_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data; max_categories </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-2f55d8e5">
    <style>
        #st-2f55d8e5 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-2f55d8e5 tr {
            background-color: transparent;
            border: none;
        }
        #st-2f55d8e5 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-2f55d8e5 br {
            line-height: 0em;
            margin: 0;
        }
        #st-2f55d8e5 sub {
            line-height: 0;
        }
        #st-2f55d8e5 sup {
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
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">letters<br>[String]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. Z<br>2. Y<br>3. X<br>4. W<br>5. V<br>[21 others]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">676 (10.9%)<br>625 (10.1%)<br>576 (9.3%)<br>529 (8.5%)<br>484 (7.8%)<br>3311 (53.4%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='91.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 91.0'><rect x='2.0' y='77.0' width='53.39461377197227' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='7.805192710853088' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='8.530882115787776' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='9.288824383164005' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='10.079019512981777' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='10.90146750524109' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">6201<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="7" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="7" style="font-size: 0.8em;">Dimensions: 6201 x 1<br/>Duplicate rows: 6175</td></tr>
</table></div><h2 id="Keyword:-label_metadata_key" tabindex="-1">Keyword: <code>label_metadata_key</code> <a class="header-anchor" href="#Keyword:-label_metadata_key" aria-label="Permalink to &quot;Keyword: \`label_metadata_key\` {#Keyword:-label_metadata_key}&quot;">​</a></h2><p>If column label metadata is found, a label column is added to the output. This keyword determines which key to use for the lookup, the default is <code>&quot;label&quot;</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SummaryTables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataFrames</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    letters </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vcat, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str, i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (str, i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DataFrames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colmetadata!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:letters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Letters of the alphabet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DataFrames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colmetadata!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:letters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spanish_label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Letras del alfabeto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> overview_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div><div><table id="st-3fcca690">
    <style>
        #st-3fcca690 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-3fcca690 tr {
            background-color: transparent;
            border: none;
        }
        #st-3fcca690 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-3fcca690 br {
            line-height: 0em;
            margin: 0;
        }
        #st-3fcca690 sub {
            line-height: 0;
        }
        #st-3fcca690 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">No</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Variable</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Label</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Stats / Values</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Freqs (% of Valid)</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Graph</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Valid</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Missing</td>
    </tr>
        <tr><td colspan="8" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">letters<br>[String]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Letters of the alphabet</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. Z<br>2. Y<br>3. X<br>4. W<br>5. V<br>6. U<br>7. T<br>8. S<br>9. R<br>10. Q<br>[16 others]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">676 (10.9%)<br>625 (10.1%)<br>576 (9.3%)<br>529 (8.5%)<br>484 (7.8%)<br>441 (7.1%)<br>400 (6.5%)<br>361 (5.8%)<br>324 (5.2%)<br>289 (4.7%)<br>1496 (24.1%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='166.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 166.0'><rect x='2.0' y='152.0' width='24.125141106273183' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='137.0' width='4.660538622802774' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='122.0' width='5.2249637155297535' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='107.0' width='5.821641670698274' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='92.0' width='6.450572488308337' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='77.0' width='7.111756168359943' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='7.805192710853088' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='8.530882115787776' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='9.288824383164005' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='10.079019512981777' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='10.90146750524109' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">6201<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="8" style="font-size: 0.8em;">Dimensions: 6201 x 1<br/>Duplicate rows: 6175</td></tr>
</table></div><p>We can pick the alternative label by specifying <code>label_metadata_key = &quot;spanish_label&quot;</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> overview_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data; label_metadata_key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;spanish_label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table id="st-bcc8a778">
    <style>
        #st-bcc8a778 {
            border: none;
            margin: 0 auto;
            padding: 0.25rem;
            border-collapse: separate;
            border-spacing: 0.85em 0.2em;
            line-height: 1.2em;
        }
        #st-bcc8a778 tr {
            background-color: transparent;
            border: none;
        }
        #st-bcc8a778 tr td {
            vertical-align: top;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        #st-bcc8a778 br {
            line-height: 0em;
            margin: 0;
        }
        #st-bcc8a778 sub {
            line-height: 0;
        }
        #st-bcc8a778 sup {
            line-height: 0;
        }
    </style>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">No</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Variable</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Label</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Stats / Values</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Freqs (% of Valid)</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Graph</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Valid</td>
        <td style="font-weight:bold;padding-bottom: 3.0pt;text-align:left;">Missing</td>
    </tr>
        <tr><td colspan="8" style="border-bottom:1px solid currentColor;padding:0"></td></tr>    <tr>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">letters<br>[String]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">Letras del alfabeto</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">1. Z<br>2. Y<br>3. X<br>4. W<br>5. V<br>6. U<br>7. T<br>8. S<br>9. R<br>10. Q<br>[16 others]</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">676 (10.9%)<br>625 (10.1%)<br>576 (9.3%)<br>529 (8.5%)<br>484 (7.8%)<br>441 (7.1%)<br>400 (6.5%)<br>361 (5.8%)<br>324 (5.2%)<br>289 (4.7%)<br>1496 (24.1%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;"><svg width='104.0' height='166.0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 104.0 166.0'><rect x='2.0' y='152.0' width='24.125141106273183' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='137.0' width='4.660538622802774' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='122.0' width='5.2249637155297535' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='107.0' width='5.821641670698274' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='92.0' width='6.450572488308337' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='77.0' width='7.111756168359943' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='62.0' width='7.805192710853088' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='47.0' width='8.530882115787776' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='32.0' width='9.288824383164005' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='17.0' width='10.079019512981777' height='12.0' fill='lightgray' stroke='gray'/><rect x='2.0' y='2.0' width='10.90146750524109' height='12.0' fill='lightgray' stroke='gray'/></svg></td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">6201<br>(100%)</td>
        <td style="padding-top: 3.0pt;vertical-align:middle;text-align:left;">0<br>(0%)</td>
    </tr>
    <tr><td colspan="8" style="border-bottom: 1.5px solid currentColor; padding: 0"></td></tr>
    <tr><td colspan="8" style="font-size: 0.8em;">Dimensions: 6201 x 1<br/>Duplicate rows: 6175</td></tr>
</table></div>`,19)]))}const k=i(d,[["render",n]]);export{y as __pageData,k as default};
