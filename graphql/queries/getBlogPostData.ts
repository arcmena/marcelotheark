import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'
import { TBlogPost } from '../schema'

export const GET_BLOG_POST_DATA = gql`
  query getBlogPostData($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      tags
      title
      description
      subtitle
      content
      createdAt
      postCover {
        url(
          transformation: {
            image: { resize: { width: 800, height: 600 } }
            document: { output: { format: png } }
          }
        )
      }
    }
  }
`

export async function getBlogPostData(slug: string) {
  const variables = { slug }

  const { post } = await apiClient.request(GET_BLOG_POST_DATA, variables)

  return post as TBlogPost
}
