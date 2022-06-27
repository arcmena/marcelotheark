import { gql } from 'graphql-request'

import { handleLocale } from '@helpers/localeHelpers'

import { apiClient } from '@config/apiClient'

import { ELocale, TBlogPost } from '../schema'

export const GET_BLOG_POST_DATA = gql`
  query getBlogPostData($slug: String!, $locales: [Locale!]!) {
    post(where: { slug: $slug }, locales: $locales) {
      id
      slug
      tags
      title
      description
      subtitle
      content
      createdAt
      postCover {
        url
      }
    }
  }
`

export async function getBlogPostData(
  slug: string,
  locale: ELocale = ELocale.EN
) {
  const variables = { slug, locales: [handleLocale(locale)] }

  const { post } = await apiClient.request(GET_BLOG_POST_DATA, variables)

  return post as TBlogPost
}
