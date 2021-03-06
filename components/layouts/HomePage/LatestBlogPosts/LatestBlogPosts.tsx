import { useTranslation } from 'next-i18next'

import SectionTitle from '@components/elements/SectionTitle'
import BlogPostCard from '@components/elements/BlogPostCard'
import ArrowDown from '@components/elements/Icons/ArrowDown'
import Link from '@components/elements/Link'

import { TBlogPost } from '@graphql/schema'

import * as gtag from '@lib/gtag'

import {
  LatestBlogPostsContainer,
  LatestBlogPostsItems,
  LatestBlogPostsMore
} from './styles'

const trackClickAllPosts = () =>
  gtag.event({
    category: 'Blog',
    action: 'click',
    label: `Blog - Click to view more posts`
  })

interface LatestBlogPostsProps {
  latestBlogPosts: Array<TBlogPost>
}

export default function LatestBlogPosts({
  latestBlogPosts
}: LatestBlogPostsProps) {
  const { t } = useTranslation('common')

  return (
    <LatestBlogPostsContainer>
      <SectionTitle>{t('latest-articles')}</SectionTitle>
      <LatestBlogPostsItems>
        {latestBlogPosts.map(blogPost => (
          <BlogPostCard key={blogPost.id} {...blogPost} />
        ))}
      </LatestBlogPostsItems>

      <LatestBlogPostsMore>
        <Link
          href="/blog"
          onClick={trackClickAllPosts}
        >
          {t('more-posts')} <ArrowDown aria-hidden="true" focusable="false" />
        </Link>
      </LatestBlogPostsMore>
    </LatestBlogPostsContainer>
  )
}
