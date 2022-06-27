import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '@components/common/SEO'
import Timeline from '@components/layouts/AboutPage/Timeline'
import Projects from '@components/layouts/AboutPage/Projects'
import Introduction from '@components/layouts/AboutPage/Introduction'

import { getPage } from '@graphql/queries/getPage'
import { ABOUT_PAGE_CONTENT } from '@graphql/fragments/aboutPageContent'
import {
  TTimeline,
  TProject,
  ELocale,
  TPage,
  TMyIntroduction
} from '@graphql/schema'

import { getContent } from '@helpers/contentHelpers'

import {
  AboutPageContainer,
} from '@styles/pages/AboutPageStyles'

const titleContent = (
  <Fragment>
    Hello there 👋 <br /> I’m Marcelo.
  </Fragment>
)

interface AboutPageProps {
  pageData: TPage
}

export default function AboutPage(props: AboutPageProps) {
  const { pageData } = props
  const { seo, content } = pageData

  const myIntroductionContent = getContent(
    'MyIntroduction',
    content
  ) as TMyIntroduction
  const timelines = getContent('Timeline', content) as TTimeline[]
  const projects = getContent('Project', content) as TProject[]

  return (
    <>
      <SEO {...seo} />

      <AboutPageContainer>
        {myIntroductionContent && <Introduction content={myIntroductionContent} />}
        {timelines && <Timeline timelines={timelines} />}
        {projects && <Projects projects={projects} />}
      </AboutPageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async props => {
  const { locale } = props

  const pageData = await getPage({
    identifier: '/about',
    contentFragment: ABOUT_PAGE_CONTENT,
    locale: locale as ELocale
  })

  return {
    props: {
      pageData,
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}
