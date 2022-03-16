import SectionTitle from '@components/elements/SectionTitle'
import BlogPostCard from '@components/elements/BlogPostCard'
import ArrowDown from '@components/elements/Icons/ArrowDown'
import Link from '@components/elements/Link'

import {
  LatestArticlesContainer,
  LatestArticlesItems,
  LatestArticlesMore
} from './styles'

const latestArtiles = [...new Array(3)].map(() => ({
  title: 'Lorem ipsum dolor sit amet',
  date: 'November 9, 2021',
  description: 'Consectetur adipiscing merol muspi...'
}))

export default function LatestArticles() {
  return (
    <LatestArticlesContainer>
      <SectionTitle>Latest articles</SectionTitle>
      <LatestArticlesItems>
        {latestArtiles.map(item => (
          <BlogPostCard key={item.title} {...item} />
        ))}
      </LatestArticlesItems>

      <LatestArticlesMore>
        <Link href="/blog">
          More articles <ArrowDown />
        </Link>
      </LatestArticlesMore>
    </LatestArticlesContainer>
  )
}
