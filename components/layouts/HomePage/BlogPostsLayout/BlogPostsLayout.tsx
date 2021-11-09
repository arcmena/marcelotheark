import BlogPostItem from '../../../elements/BlogPostsLayout/BlogPostItem'
import SectionTitle from '../../../elements/SectionTitle'

import { BlogPostsContainer, PostsWrapper } from './styles'

const posts = [
  {
    id: '1',
    title: 'Who will be the MVP of the year?',
    publishedAt: 'July 4',
    tags: ['hooks', 'react']
  },
  {
    id: '2',
    title: 'Who will be the MVP of the year?',
    publishedAt: 'July 4',
    tags: ['hooks', 'react']
  },
  {
    id: '3',
    title: 'Who will be the MVP of the year?',
    publishedAt: 'July 4',
    tags: ['hooks', 'react']
  }
]

export default function BlogPostsLayout() {
  return (
    <BlogPostsContainer>
      <SectionTitle title="blog posts" icon="beaker" />

      <PostsWrapper>
        {posts.map(postItem => (
          <BlogPostItem key={postItem.id} {...postItem} />
        ))}
      </PostsWrapper>
    </BlogPostsContainer>
  )
}
