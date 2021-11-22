import type { GetStaticProps, NextPage } from 'next'

import SEO from '../components/common/SEO'
import HeroLayout from '../components/layouts/HomePage/HeroLayout'
import ProjectsLayout from '../components/layouts/HomePage/ProjectsLayout'
import TimelineLayout from '../components/layouts/HomePage/TimelineLayout'
import BlogPostsLayout from '../components/layouts/HomePage/BlogPostsLayout'

import { getProjects } from '../graphql/queries/getProjects'
import { getTimelines } from '../graphql/queries/getTimeline'
import { getBlogPostsIndex } from '../graphql/queries/getBlogPostsIndex'

import { HomePageProps } from '../types/pages/HomePageTypes'

import { HomePageContainer } from '../styles/pages/HomePageStyles'

const HomePage: NextPage<HomePageProps> = ({
  projects,
  timelines,
  blogPosts
}) => {
  return (
    <>
      <SEO
        title="Marcelo The Ark | Front End Developer"
        description="Marcelo Mena - Front End Developer"
      />

      <HomePageContainer>
        <HeroLayout />
        <ProjectsLayout projects={projects} />
        <TimelineLayout timelines={timelines} />
        <BlogPostsLayout blogPosts={blogPosts} />
      </HomePageContainer>
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
