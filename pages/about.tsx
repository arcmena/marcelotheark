import { Fragment } from 'react'
import { GetStaticProps } from 'next'

import SEO from '@components/common/SEO'
import PageTitle from '@components/elements/PageTitle'
import Timeline from '@components/layouts/AboutPage/Timeline'
import AboutMeContent from '@components/layouts/AboutPage/AboutMeContent'

import { TTimeline, TProject } from '@graphql/schema'
import { getTimelines } from '@graphql/queries/getTimeline'
import { getProjects } from '@graphql/queries/getProjects'

import {
  AboutPageContainer,
  AboutPageIntroduction,
} from '@styles/pages/AboutPageStyles'

const SEOContent = {
  title: 'About me | Marcelo the ark - Front End Developer',
  description:
    'A bit about myself (Marcelo Mena) as a person and as a dev, my works and achievements!'
}

const titleContent = (
  <Fragment>
    Hello there 👋 <br /> I’m Marcelo.
  </Fragment>
)

interface AboutPageProps {
  timelines: Array<TTimeline>
  projects: Array<TProject>
}

export default function AboutPage({ timelines }: AboutPageProps) {
  return (
    <>
      <SEO {...SEOContent} />

      <AboutPageContainer>
        <PageTitle label={titleContent} />

        <AboutPageIntroduction>{AboutMeContent}</AboutPageIntroduction>

        <Timeline timelines={timelines} />
      </AboutPageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const timelines = await getTimelines()
  const projects = await getProjects()

  return {
    props: {
      timelines,
      projects,
    }
  }
}
