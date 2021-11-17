import BlogPostItem from '../../../elements/BlogPostsLayout/BlogPostItem'
import SectionTitle from '../../../elements/SectionTitle'

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
