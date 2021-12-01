import { GetServerSideProps } from 'next'
import fs from 'fs'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { SITE } from '@constants/urls'
import { getDate } from '@helpers/dateHelpers'

function generateSiteMap(pages: Array<string>) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pages
        .map(
          page => `
            <url>
                <loc>${`${SITE}${page}`}</loc>
                <lastmod>${getDate().toISOString()}</lastmod>
            </url>
        `
        )
        .join('')}
    </urlset>
   `
}

function SiteMap() {
  //
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { res } = context

  const staticPages = fs
    .readdirSync('pages')
    .filter(staticPage => {
      return ![
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
        'blog'
      ].includes(staticPage)
    })
    .map(staticPage => staticPage.replace('index.tsx', '/'))

  const blogPosts = await getBlogPostsIndex()

  const postPages = blogPosts.map(({ slug }) => `/blog/post/${slug}`)

  const pages = [...staticPages, ...postPages]

  const sitemap = generateSiteMap(pages)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
