import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'
import { TBlogPost } from '@graphql/schema'

export const GET_RELATED_POSTS_INDEX = gql`
  query getRelatedPosts($tags: [Tags!]!, $slug: String!) {
    posts(where: { tags_contains_some: $tags, NOT: { slug: $slug } }) {
      id
      createdAt
      slug
      title
      tags
    }
  }
`

export async function getRelatedPostsIndex(tags: Array<string>, slug: string) {
  const variables = { tags, slug }

  const { posts } = await apiClient.request(GET_RELATED_POSTS_INDEX, variables)

  return posts as Array<TBlogPost>
}
