import { GetServerSideProps } from 'next'
import fs from 'fs'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { PAGES_DIR, SITE } from '@constants/urls'
import { getDate } from '@helpers/dateHelpers'

const BLACKLISTED_PATHS = [
  '_app.tsx',
  '_document.tsx',
  '_error.tsx',
  'sitemap.xml.tsx',
  'blog',
  '.next',
  '___next_launcher.js',
  '___vc_bridge.js',
  'components',
  'config',
  'constants',
  'graphql',
  'helpers',
  'lib',
  'node_modules',
  'package.json',
  'styles'
]

export default function Sitemap() {
  //
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogPosts = await getBlogPostsIndex()

  const postPages = blogPosts.map(({ slug }) => `${SITE}/blog/${slug}`)

  const staticPages = fs
    .readdirSync(PAGES_DIR)
    .filter(staticPagePath => !BLACKLISTED_PATHS.includes(staticPagePath))
    .map(staticPagePath => staticPagePath.replace('.tsx', ''))
    .map(
      staticPagePath =>
        `${SITE}/${staticPagePath !== 'index' ? staticPagePath : ''}`
    )

  const allSitePages = [...staticPages, ...postPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allSitePages
        .map(url => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${getDate().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}
