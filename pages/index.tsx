import type { NextPage } from 'next'

import SEO from '../components/common/SEO'
import HeroLayout from '../components/layouts/HomePage/HeroLayout'
import ProjectsLayout from '../components/layouts/HomePage/ProjectsLayout'
import TimelineLayout from '../components/layouts/HomePage/TimelineLayout'
import BlogPostsLayout from '../components/layouts/HomePage/BlogPostsLayout'

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Marcelo The Ark"
        description="Marcelo Mena - Front End Developer"
      />

      <HeroLayout />
      <ProjectsLayout />
      <TimelineLayout />
      <BlogPostsLayout />
    </>
  )
}

export default Home
