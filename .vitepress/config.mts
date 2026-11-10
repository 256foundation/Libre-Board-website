import { defineConfig } from 'vitepress'
import { hardwareBranch, hardwareRepo, hardwareTree } from './hardware'

// The deploy workflow sets DOCS_BASE so one config serves both a fork
// preview (served under /<repo-name>/) and production at libreboard.org
// (served at /).
const base = process.env.DOCS_BASE || '/'

const title = 'Libre Board'
const description = 'Open source mining control board'
const italiannoHref = `${base}fonts/italianno-latin-400-normal.woff2`
const wordmarkHref = `${base}wordmark.svg`
const mascotHref = `${base}mascot.svg`

function applyHardwareTokens(token: {
  type: string
  content?: string
  children?: { type: string; content?: string; attrGet: (n: string) => string | null; attrSet: (n: string, v: string) => void }[]
  attrGet?: (n: string) => string | null
  attrSet?: (n: string, v: string) => void
}) {
  const swap = (value: string) =>
    value
      .replaceAll('__HW_TREE__', hardwareTree)
      .replaceAll('__HW_REPO__', hardwareRepo)
      .replaceAll('__HW_BRANCH__', hardwareBranch)

  if ((token.type === 'text' || token.type === 'code_inline') && token.content) {
    token.content = swap(token.content)
  }
  if (token.type === 'link_open' && token.attrGet && token.attrSet) {
    const href = token.attrGet('href')
    if (href && href.includes('__HW_')) token.attrSet('href', swap(href))
  }
  token.children?.forEach(applyHardwareTokens)
}

export default defineConfig({
  title,
  description,

  base,
  cleanUrls: true,
  lastUpdated: true,

  srcExclude: ['README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'node_modules/**'],

  // Dev-server only: Vite blocks requests addressed to hostnames it
  // does not know. To review the dev server from another machine by
  // name, list the names in DEV_ALLOWED_HOSTS, comma separated:
  // DEV_ALLOWED_HOSTS=myhost just dev
  vite: {
    server: {
      allowedHosts: (process.env.DEV_ALLOWED_HOSTS || '')
        .split(',')
        .filter(Boolean)
    }
  },

  markdown: {
    config(md) {
      md.core.ruler.after('inline', 'hardware-links', (state) => {
        state.tokens.forEach((token) => applyHardwareTokens(token))
      })
    }
  },

  // Hero actions are frontmatter, so the markdown token pass never
  // sees them. Same tokens as the pages.
  transformPageData(pageData) {
    const actions = pageData.frontmatter.hero?.actions
    if (!Array.isArray(actions)) return
    for (const action of actions) {
      if (typeof action.link !== 'string') continue
      action.link = action.link
        .replaceAll('__HW_TREE__', hardwareTree)
        .replaceAll('__HW_REPO__', hardwareRepo)
        .replaceAll('__HW_BRANCH__', hardwareBranch)
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: `${base}favicon-48.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}favicon-32.png` }],
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    // Self-hosted Italianno (OFL). Preload the one file the brand
    // title uses. The face is not loaded from a third-party CDN.
    [
      'link',
      {
        rel: 'preload',
        href: italiannoHref,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }
    ],
    [
      'style',
      {},
      `@font-face{font-family:"Italianno";src:url("${italiannoHref}") format("woff2");font-weight:400;font-style:normal;font-display:swap;}
:root{--libre-wordmark:url("${wordmarkHref}");--libre-mascot:url("${mascotHref}");}`
    ],
    // Social link previews. og:image requires an absolute URL, so it
    // points at production even in a fork preview.
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://libreboard.org/og-card.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    logo: '/mascot.svg',

    // The docs are organized by Diataxis (https://diataxis.fr):
    // tutorial, how-to guides, reference, explanation. Keep each page
    // in one mode; link across modes instead of mixing them.
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/tutorial/what-you-need' },
      { text: 'How-to', link: '/howto/order-from-jlcpcb' },
      { text: 'Reference', link: '/reference/specifications' },
      { text: 'Explanation', link: '/explanation/why-libre-board' },
      { text: 'Community', link: '/community' }
    ],

    sidebar: [
      {
        text: 'Tutorial',
        items: [
          { text: 'What You Need', link: '/tutorial/what-you-need' }
        ]
      },
      {
        text: 'How-to Guides',
        items: [
          { text: 'Order from JLCPCB', link: '/howto/order-from-jlcpcb' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Specifications', link: '/reference/specifications' },
          { text: 'Revisions', link: '/reference/revisions' },
          { text: 'Design Files', link: '/reference/design-files' }
        ]
      },
      {
        text: 'Explanation',
        items: [
          { text: 'Why Libre Board', link: '/explanation/why-libre-board' },
          { text: 'Where Libre Board Is Today', link: '/explanation/status' },
          { text: 'Design Goals', link: '/explanation/design-goals' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Community and Contributing', link: '/community' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: hardwareTree }
    ],

    footer: {
      message:
        'A 256 Foundation project. Hardware licensed CERN-OHL-S-2.0. ' +
        'This site is <a href="https://github.com/256foundation/Libre-Board-website">open to contributions on GitHub</a>.',
      copyright:
        'Copyright Libre Board contributors' +
        `<a class="foundation-mark" href="https://256foundation.org" aria-label="256 Foundation">` +
        `<img class="light-logo" src="${base}256-foundation-light.png" alt="">` +
        `<img class="dark-logo" src="${base}256-foundation-dark.png" alt=""></a>`
    },

    search: {
      provider: 'local'
    },

    outline: { level: [2, 3] },

    editLink: {
      pattern:
        'https://github.com/256foundation/Libre-Board-website/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
