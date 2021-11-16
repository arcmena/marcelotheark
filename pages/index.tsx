import type { GetStaticProps, NextPage } from 'next'

import SEO from '../components/common/SEO'
import HeroLayout from '../components/layouts/HomePage/HeroLayout'
import ProjectsLayout from '../components/layouts/HomePage/ProjectsLayout'
import TimelineLayout from '../components/layouts/HomePage/TimelineLayout'
import BlogPostsLayout from '../components/layouts/HomePage/BlogPostsLayout'
import ContactsLayout from '../components/layouts/ContactsLayout'

import { getProjects } from '../graphql/queries/getProjects'
import { getTimelines } from '../graphql/queries/getTimeline'
import { TProject, TTimeline } from '../graphql/schema'

interface HomePageProps {
  projects: Array<TProject>
  timelines: Array<TTimeline>
}

const HomePage: NextPage<HomePageProps> = ({ projects, timelines }) => {
  return (
    <>
      <SEO
        title="Marcelo The Ark"
        description="Marcelo Mena - Front End Developer"
      />

      <HeroLayout />
      <ProjectsLayout projects={projects} />
      <TimelineLayout timelines={timelines} />
      <BlogPostsLayout />
      <ContactsLayout id="contacts" />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()
  const timelines = await getTimelines()

  return {
    props: {
      projects,
      timelines
    }
  }
}

export default HomePage
