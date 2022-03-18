import SectionTitle from '@components/elements/SectionTitle'
import BlogPostCard from '@components/elements/BlogPostCard'
import ArrowDown from '@components/elements/Icons/ArrowDown'
import Link from '@components/elements/Link'

import { TBlogPost } from '@graphql/schema'

import {
  LatestBlogPostsContainer,
  LatestBlogPostsItems,
  LatestBlogPostsMore
} from './styles'

interface LatestBlogPostsProps {
  latestBlogPosts: Array<TBlogPost>
}

export default function LatestBlogPosts({
  latestBlogPosts
}: LatestBlogPostsProps) {
  return (
    <LatestBlogPostsContainer>
      <SectionTitle>Latest articles</SectionTitle>
      <LatestBlogPostsItems>
        {latestBlogPosts.map(blogPost => (
          <BlogPostCard key={blogPost.id} {...blogPost} />
        ))}
      </LatestBlogPostsItems>

      <LatestBlogPostsMore>
        <Link href="/blog">
          More articles <ArrowDown />
        </Link>
      </LatestBlogPostsMore>
    </LatestBlogPostsContainer>
  )
}
