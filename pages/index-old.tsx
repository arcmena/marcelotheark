import type { GetStaticProps, NextPage } from 'next'

import SEO from '@components/common/SEO'
import HeroLayout from '@components/layouts/HomePage1/HeroLayout'
import ProjectsLayout from '@components/layouts/HomePage1/ProjectsLayout'
import TimelineLayout from '@components/layouts/HomePage1/TimelineLayout'
import BlogPostsLayout from '@components/layouts/HomePage1/BlogPostsLayout'

import { getProjects } from '@graphql/queries/getProjects'
import { getTimelines } from '@graphql/queries/getTimeline'
import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { HomePageProps } from '@localTypes/pages/HomePageTypes'

import { HomePageContainer } from '@styles/pages/HomePageStyles'

const HomePage: NextPage<HomePageProps> = ({
  projects,
  timelines,
  blogPosts
}) => {
  return (
    <>
      <SEO
        title="Marcelo The Ark | Front End Developer"
        description="Marcelo Mena - Self taught Brazilian Front End Developer. Contents regarding React, JavaScript, TypeScript and all around development topics."
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
