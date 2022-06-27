import { gql } from 'graphql-request'

import { handleLocale } from '@helpers/localeHelpers'

import { apiClient } from '@config/apiClient'

import { ELocale, TBlogPost } from '../schema'

export const GET_RELATED_POSTS_INDEX = gql`
  query getRelatedPosts($tags: [Tags!]!, $slug: String!, $locales: [Locale!]!) {
    posts(
      where: { tags_contains_some: $tags, NOT: { slug: $slug } }
      locales: $locales
    ) {
      id
      createdAt
      slug
      title
      tags
    }
  }
`

export async function getRelatedPostsIndex(
  tags: Array<string>,
  slug: string,
  locale: ELocale = ELocale.EN
) {
  const variables = { tags, slug, locales: [handleLocale(locale)] }

  const { posts } = await apiClient.request(GET_RELATED_POSTS_INDEX, variables)

  return posts as Array<TBlogPost>
}
