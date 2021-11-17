import type { GetStaticProps, NextPage } from 'next'

import SEO from '../components/common/SEO'
import HeroLayout from '../components/layouts/HomePage/HeroLayout'
import ProjectsLayout from '../components/layouts/HomePage/ProjectsLayout'
import TimelineLayout from '../components/layouts/HomePage/TimelineLayout'
import BlogPostsLayout from '../components/layouts/HomePage/BlogPostsLayout'
import ContactsLayout from '../components/layouts/ContactsLayout'

import { getProjects } from '../graphql/queries/getProjects'
import { getTimelines } from '../graphql/queries/getTimeline'
import { getBlogPostsIndex } from '../graphql/queries/getBlogPostsIndex'
import { TBlogPost, TProject, TTimeline } from '../graphql/schema'

interface HomePageProps {
  projects: Array<TProject>
  timelines: Array<TTimeline>
  blogPosts: Array<TBlogPost>
}

const HomePage: NextPage<HomePageProps> = ({
  projects,
  timelines,
  blogPosts
}) => {
  return (
    <>
      <SEO
        title="Marcelo The Ark"
        description="Marcelo Mena - Front End Developer"
      />

      <HeroLayout />
      <ProjectsLayout projects={projects} />
      <TimelineLayout timelines={timelines} />
      <BlogPostsLayout blogPosts={blogPosts} />
      <ContactsLayout id="contacts" />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()
  const timelines = await getTimelines()
  const blogPosts = await getBlogPostsIndex()

  return {
    props: {
      projects,
      timelines,
      blogPosts
    }
  }
}

export default HomePage
