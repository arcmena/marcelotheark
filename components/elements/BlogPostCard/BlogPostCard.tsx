import Card from '../Card'
import Link from '../Link'

import { TBlogPost } from '@graphql/schema'

import { getFullDate } from '@helpers/dateHelpers'

import * as gtag from '@lib/gtag'

import {
  BlogPostCardDate,
  BlogPostCardShortDescription,
  BlogPostCardTitle
} from './styles'

const trackClick = (title: string) =>
  gtag.event({
    category: 'Blog',
    action: 'click',
    label: `Blog Post Card - Go to ${title}`
  })

const BlogPostCard = ({ title, createdAt, subtitle, slug }: TBlogPost) => {
  return (
    <Link
      href={`/blog/${slug}`}
      title={title}
      onClick={() => trackClick(title)}
    >
      <Card as="article">
        <BlogPostCardTitle>{title}</BlogPostCardTitle>
        <BlogPostCardDate>{getFullDate(createdAt)}</BlogPostCardDate>
        <BlogPostCardShortDescription>{subtitle}</BlogPostCardShortDescription>
      </Card>
    </Link>
  )
}

export default BlogPostCard
