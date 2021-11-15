import ArrowRight from '../../Icons/ArrowRightGradient'

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
  publishedAt,
  tags
}: BlogPostItemProps) {
  return (
    <BlogPostItemContainer href="" target="_blank" rel="noopener">
      <BlogPostItemControl>
        {publishedAt} <ArrowRight {...iconProps} />
      </BlogPostItemControl>

      <h2>{title}</h2>

      <BlogPostItemTags>
        {tags.map(tag => (
          <span key={tag}>#{tag}</span>
        ))}
      </BlogPostItemTags>
    </BlogPostItemContainer>
  )
}
