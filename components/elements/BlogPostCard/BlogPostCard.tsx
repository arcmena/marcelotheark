import Card from '../Card'
import Link from '../Link'

import { TBlogPost } from '@graphql/schema'

import { getMonthAndDay } from '@helpers/dateHelpers'

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

const BlogPostCard = ({ title, createdAt, subtitle }: TBlogPost) => {
  return (
    //@ts-ignore
    <Card
      as={Link}
      href="/blog/lorem-ipsum-dolor-sit-amet"
      onClick={() => trackClick(title)}
    >
      <BlogPostCardTitle>{title}</BlogPostCardTitle>
      <BlogPostCardDate>{getMonthAndDay(createdAt)}</BlogPostCardDate>
      <BlogPostCardShortDescription>{subtitle}</BlogPostCardShortDescription>
    </Card>
  )
}

export default BlogPostCard
