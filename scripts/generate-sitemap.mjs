import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

function addPage(page) {
  const path = page.replace('pages', '').replace('.tsx', '')
  const route = path === '/index' ? '/' : path

  return `
    <url>
      <loc>${`https://marcelotheark.com${route}`}</loc>
      <changefreq>hourly</changefreq>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
  `
}

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc')

  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/blog'
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(addPage).join('\n')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()
