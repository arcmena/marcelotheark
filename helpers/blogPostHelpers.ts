import { TBlogPost } from '@graphql/schema'

export const blogPostSEO = (blogPost: TBlogPost) => {
  const { title, description, tags } = blogPost

  const joinedTags = tags.join(', ')

  const seoTitle = `${title} | Marcelo The Ark`

  const seoDescription = `${description} - ${joinedTags}`

  return {
    seoTitle,
    seoDescription
  }
}
