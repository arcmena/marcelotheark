import BlogPostItem from '@components/elements/BlogPostsLayout/BlogPostItem'
import SectionTitle from '@components/elements/SectionTitle1'

import { BlogPostsLayouProps } from './types'

import { BlogPostsContainer, PostsWrapper } from './styles'

export default function BlogPostsLayout({ blogPosts }: BlogPostsLayouProps) {
  return (
    <BlogPostsContainer id="blog-posts">
      <SectionTitle title="blog posts" icon="beaker" />

      <PostsWrapper>
        {blogPosts.map(postItem => (
          <BlogPostItem key={postItem.id} {...postItem} />
        ))}
      </PostsWrapper>
    </BlogPostsContainer>
  )
}