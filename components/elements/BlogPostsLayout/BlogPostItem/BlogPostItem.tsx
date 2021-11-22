import ArrowRight from '../../Icons/ArrowRightGradient'
import Link from '../../Link'

import { getMonthAndDay } from '@helpers/dateHelpers'
import { SITE_URLS } from '@constants/urls'

import { BlogPostItemProps } from './types'

import {
  BlogPostItemContainer,
  BlogPostItemControl,
  BlogPostItemTags
} from './styles'

const iconProps = {
  width: 24,
  height: 24
}

export default function BlogPostItem({
  title,
  createdAt,
  tags,
  slug
}: BlogPostItemProps) {
  return (
    <Link href={SITE_URLS.BLOG_POST + slug}>
      <BlogPostItemContainer>
        <BlogPostItemControl>
          {getMonthAndDay(createdAt)} <ArrowRight {...iconProps} />
        </BlogPostItemControl>

        <h3 className="blog-post-item__title">{title}</h3>

        <BlogPostItemTags>
          {tags.map(tag => (
            <span key={tag}>#{tag}</span>
          ))}
        </BlogPostItemTags>
      </BlogPostItemContainer>
    </Link>
  )
}
