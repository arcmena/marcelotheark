import Card from '../Card'
import Link from '../Link'

import {
  BlogPostCardDate,
  BlogPostCardShortDescription,
  BlogPostCardTitle
} from './styles'

const BlogPostCard = ({
  title,
  date,
  description
}: {
  title: string
  date: string
  description: string
}) => {
  return (
    //@ts-ignore
    <Card as={Link} href={`/${title}`}>
      <BlogPostCardTitle>{title}</BlogPostCardTitle>
      <BlogPostCardDate>{date}</BlogPostCardDate>
      <BlogPostCardShortDescription>{description}</BlogPostCardShortDescription>
    </Card>
  )
}

export default BlogPostCard
