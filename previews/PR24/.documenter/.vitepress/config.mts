import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";

function getBaseRepository(base: string): string {
  if (!base || base === '/') return '/';
  const parts = base.split('/').filter(Boolean);
  return parts.length > 0 ? `/${parts[0]}/` : '/';
}

const baseTemp = {
  base: '/SummaryTables.jl/previews/PR24/',// TODO: replace this in makedocs!
}

const navTemp = {
  nav: [
{ text: 'Home', link: '/index' },
{ text: 'Reference', collapsed: false, items: [
{ text: 'Table Functions', collapsed: false, items: [
{ text: 'simple_table', link: '/reference/table_functions/simple_table' },
{ text: 'overview_table', link: '/reference/table_functions/overview_table' },
{ text: 'listingtable', link: '/reference/table_functions/listingtable' },
{ text: 'summarytable', link: '/reference/table_functions/summarytable' },
{ text: 'table_one', link: '/reference/table_functions/table_one' }]
 },
{ text: 'Infrastructure', collapsed: false, items: [
{ text: 'Table', link: '/reference/infrastructure/table' },
{ text: 'Cell', link: '/reference/infrastructure/cell' },
{ text: 'CellStyle', link: '/reference/infrastructure/cellstyle' }]
 },
{ text: 'Renderers', link: '/reference/renderers' }]
 },
{ text: 'Resources', collapsed: false, items: [
{ text: 'API', link: '/resources/api' },
{ text: 'Changelog', link: '/resources/changelog' }]
 }
]
,
}

const nav = [
  ...navTemp.nav,
  {
    component: 'VersionPicker'
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/SummaryTables.jl/previews/PR24/',// TODO: replace this in makedocs!
  title: 'SummaryTables.jl',
  description: 'Documentation for SummaryTables.jl',
  lastUpdated: true,
  cleanUrls: true,
  outDir: '../1', // This is required for MarkdownVitepress to work correctly...
  head: [
    ['link', { rel: 'icon', href: `${baseTemp.base}favicon.ico` }],
    ['script', {src: `${getBaseRepository(baseTemp.base)}versions.js`}],
    // ['script', {src: '/versions.js'], for custom domains, I guess if deploy_url is available.
    ['script', {src: `${baseTemp.base}siteinfo.js`}]
  ],
  ignoreDeadLinks: true,
  vite: {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ], 
    },
  },
  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
      md.use(mathjax3),
      md.use(footnote)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"}
  },
  themeConfig: {
    outline: 'deep',
    logo: { src: '/logo.png', width: 24, height: 24},
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav,
    sidebar: [
{ text: 'Home', link: '/index' },
{ text: 'Reference', collapsed: false, items: [
{ text: 'Table Functions', collapsed: false, items: [
{ text: 'simple_table', link: '/reference/table_functions/simple_table' },
{ text: 'overview_table', link: '/reference/table_functions/overview_table' },
{ text: 'listingtable', link: '/reference/table_functions/listingtable' },
{ text: 'summarytable', link: '/reference/table_functions/summarytable' },
{ text: 'table_one', link: '/reference/table_functions/table_one' }]
 },
{ text: 'Infrastructure', collapsed: false, items: [
{ text: 'Table', link: '/reference/infrastructure/table' },
{ text: 'Cell', link: '/reference/infrastructure/cell' },
{ text: 'CellStyle', link: '/reference/infrastructure/cellstyle' }]
 },
{ text: 'Renderers', link: '/reference/renderers' }]
 },
{ text: 'Resources', collapsed: false, items: [
{ text: 'API', link: '/resources/api' },
{ text: 'Changelog', link: '/resources/changelog' }]
 }
]
,
    editLink: { pattern: "https://https://github.com/PumasAI/SummaryTables.jl/edit/master/docs/src/:path" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PumasAI/SummaryTables.jl' }
    ],
    footer: {
      message: 'Made with <a href="https://luxdl.github.io/DocumenterVitepress.jl/dev/" target="_blank"><strong>DocumenterVitepress.jl</strong></a><br>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}.`
    }
  }
})