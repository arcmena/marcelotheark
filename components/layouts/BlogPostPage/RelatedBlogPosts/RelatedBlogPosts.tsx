import BlogPostCard from '@components/elements/BlogPostCard'
import SectionTitle from '@components/elements/SectionTitle'

import { TBlogPost } from '@graphql/schema'

import { RelatedBlogPostsContainer, RelatedBlogPostsList } from './styles'

export interface RelatedBlogPostProps {
  relatedBlogPosts: Array<TBlogPost> | []
}

const RelatedBlogPosts = ({ relatedBlogPosts }: RelatedBlogPostProps) => {
  if (relatedBlogPosts.length) {
    return (
      <RelatedBlogPostsContainer data-testid="RelatedBlogPosts">
        <SectionTitle>Related posts</SectionTitle>

        <RelatedBlogPostsList>
          {relatedBlogPosts.map(blogPost => (
            <BlogPostCard key={blogPost.id} {...blogPost} />
          ))}
        </RelatedBlogPostsList>
      </RelatedBlogPostsContainer>
    )
  }

  return null
}

export default RelatedBlogPosts
