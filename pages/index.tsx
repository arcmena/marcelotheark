import type { GetStaticProps, NextPage } from 'next'

import SEO from '../components/common/SEO'
import HeroLayout from '../components/layouts/HomePage/HeroLayout'
import ProjectsLayout from '../components/layouts/HomePage/ProjectsLayout'
import TimelineLayout from '../components/layouts/HomePage/TimelineLayout'
import BlogPostsLayout from '../components/layouts/HomePage/BlogPostsLayout'
import ContactsLayout from '../components/layouts/ContactsLayout'

import { getProjects } from '../graphql/queries/getProjects'
import { TProject } from '../graphql/schema'

interface HomePageProps {
  projects: Array<TProject>
}

const HomePage: NextPage<HomePageProps> = ({ projects }) => {
  return (
    <>
      <SEO
        title="Marcelo The Ark"
        description="Marcelo Mena - Front End Developer"
      />

      <HeroLayout />
      <ProjectsLayout projects={projects} />
      <TimelineLayout />
      <BlogPostsLayout />
      <ContactsLayout id="contacts" />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()

  return {
    props: {
      projects
    }
  }
}

export default HomePage
