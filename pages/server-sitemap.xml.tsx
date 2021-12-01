import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { SITE } from '@constants/urls'
import { getDate } from '@helpers/dateHelpers'

function SiteMap() {
  //
}

export const getServerSideProps: GetServerSideProps = async context => {
  const blogPosts = await getBlogPostsIndex()

  const postPages = blogPosts.map(({ slug }) => ({
    loc: `${SITE}/blog/post/${slug}`,
    lastmod: getDate().toISOString()
  }))

  return getServerSideSitemap(context, postPages)
}

export default SiteMap
