import { TypeOGImage } from '@components/common/SEO/types'
import { TBlogPost } from '@graphql/schema'

export const blogPostSEO = (blogPost: TBlogPost) => {
  const { title, description, tags, postCover } = blogPost

  const joinedTags = tags.join(', ')

  const seoTitle = `${title} | Marcelo The Ark`

  const seoDescription = `${description} - ${joinedTags}`

  const ogImage: TypeOGImage = {
    src: postCover.url,
    alt: title,
    type: 'image/png',
    width: '800',
    height: '600'
  }

  return {
    pageTitle: seoTitle,
    description: seoDescription,
    ogImage
  }
}
