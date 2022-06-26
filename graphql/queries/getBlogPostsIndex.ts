import { gql } from 'graphql-request'

import { handleLocale } from '@helpers/localeHelpers'

import { apiClient } from '@config/apiClient'

import { ELocale, TBlogPost } from '../schema'

export const GET_BLOG_POSTS_INDEX = gql`
  query getBlogPostsIndex($locales: [Locale!]!) {
    posts(orderBy: createdAt_DESC, locales: $locales) {
      id
      createdAt
      slug
      title
      tags
      subtitle
    }
  }
`

export async function getBlogPostsIndex(locale: ELocale = ELocale.EN) {
  const variables = {
    locales: [handleLocale(locale)]
  }

  const { posts } = await apiClient.request(GET_BLOG_POSTS_INDEX, variables)

  return posts as Array<TBlogPost>
}
