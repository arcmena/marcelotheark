import { gql } from 'graphql-request'

import { apiClient } from '../../config/apiClient'
import { TBlogPost } from '../schema'

export const GET_BLOG_POSTS_INDEX = gql`
  query getBlogPostsIndex {
    posts {
      id
      publishedAt
      slug
      title
      tags
    }
  }
`

export async function getBlogPostsIndex() {
  const { posts } = await apiClient.request(GET_BLOG_POSTS_INDEX)

  return posts as Array<TBlogPost>
}
