import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '@components/common/SEO'
import ProfileCard from '@components/elements/ProfileCard'
import Hero from '@components/layouts/HomePage/Hero'
import LatestBlogPosts from '@components/layouts/HomePage/LatestBlogPosts'

import { TBlogPost, TPage, ELocale } from '@graphql/schema'
import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'
import { getPage } from '@graphql/queries/getPage'
import { HOME_PAGE_FRAGMENT } from '@graphql/fragments/homePageFragment'

import { getContent } from '@helpers/contentHelpers'
import { IHero } from '@components/layouts/HomePage/Hero/Hero'

import { HomePageContainer } from '@styles/pages/HomePageStyles'


interface HomePageProps {
  pageData: TPage,
  latestBlogPosts: Array<TBlogPost>
}

export default function HomePage(props: HomePageProps) {
  const { pageData, latestBlogPosts } = props
  const { seo, content } = pageData

  const heroContent = getContent<IHero>('Hero', content)

  return (
    <>
      <SEO {...seo} />

      <HomePageContainer>
        {heroContent && <Hero content={heroContent.content} />}

        <ProfileCard />

        <LatestBlogPosts latestBlogPosts={latestBlogPosts} />
      </HomePageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async props => {
  const { locale } = props

  const pageData = await getPage('/', HOME_PAGE_FRAGMENT)
  const latestBlogPosts = await getBlogPostsIndex(locale as ELocale)

  return {
    props: {
      pageData,
      latestBlogPosts,
      ...await serverSideTranslations(locale!, ['common']),
    }
  }
}
