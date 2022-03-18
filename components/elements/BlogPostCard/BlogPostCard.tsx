import Card from '../Card'
import Link from '../Link'

import { TBlogPost } from '@graphql/schema'

import { getMonthAndDay } from '@helpers/dateHelpers'

import {
  BlogPostCardDate,
  BlogPostCardShortDescription,
  BlogPostCardTitle
} from './styles'

const BlogPostCard = ({ title, createdAt, subtitle }: TBlogPost) => {
  return (
    //@ts-ignore
    <Card as={Link} href="/blog/lorem-ipsum-dolor-sit-amet">
      <BlogPostCardTitle>{title}</BlogPostCardTitle>
      <BlogPostCardDate>{getMonthAndDay(createdAt)}</BlogPostCardDate>
      <BlogPostCardShortDescription>{subtitle}</BlogPostCardShortDescription>
    </Card>
  )
}

export default BlogPostCard
