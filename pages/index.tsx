import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '@components/common/SEO'
import ProfileCard from '@components/elements/ProfileCard'
import Hero from '@components/layouts/HomePage/Hero'
import LatestBlogPosts from '@components/layouts/HomePage/LatestBlogPosts'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'
import { ELocale, TBlogPost } from '@graphql/schema'

import { HomePageContainer } from '@styles/pages/HomePageStyles'

const SEOContent = {
  title: 'Marcelo the ark | Front End Developer',
  description:
    'Marcelo Mena - Self taught Brazilian Front End Developer. Contents regarding React, JavaScript, TypeScript and all around development topics.'
}

interface HomePageProps {
  latestBlogPosts: Array<TBlogPost>
}

export default function HomePage({ latestBlogPosts }: HomePageProps) {
  return (
    <>
      <SEO {...SEOContent} />

      <HomePageContainer>
        <Hero />

        <ProfileCard />

        <LatestBlogPosts latestBlogPosts={latestBlogPosts} />
      </HomePageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async props => {
  const { locale } = props

  const latestBlogPosts = await getBlogPostsIndex(locale as ELocale)

  return {
    props: {
      latestBlogPosts,
      ...await serverSideTranslations(locale!, ['common']),
    }
  }
}
