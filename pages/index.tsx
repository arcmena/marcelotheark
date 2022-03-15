import SEO from '@components/common/SEO'
import ProfileCard from '@components/elements/ProfileCard'
import Hero from './home/components/Hero'
import LatestArticles from './home/components/LatestArticles'

import { HomePageContainer } from '@styles/pages/HomePageStyles'

const SEOContent = {
  title: 'Marcelo The Ark | Front End Developer',
  description:
    'Marcelo Mena - Self taught Brazilian Front End Developer. Contents regarding React, JavaScript, TypeScript and all around development topics.'
}

export default function Home() {
  return (
    <>
      <SEO {...SEOContent} />

      <HomePageContainer>
        <Hero />
        <ProfileCard />
        <LatestArticles />
      </HomePageContainer>
    </>
  )
}
