import { GetStaticProps } from 'next'

import SEO from '@components/common/SEO'
import BlogPostCard from '@components/elements/BlogPostCard'
import Input from '@components/elements/Input'
import PageTitle from '@components/elements/PageTitle'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'
import { TBlogPost } from '@graphql/schema'

import {
  BlogPostPageDescription,
  BlogPostPageResults,
  BlogPostPageSearchInput,
  BlogPostsPageContainer
} from '@styles/pages/BlogPostsPageStyles'

const SEOContent = {
  title: 'Blog Posts | Marcelo the ark - Front End Developer',
  description:
    'Blog posts / Writings and studies dedicated to the dev community 💝'
}

interface BlogPostsPageProps {
  blogPosts: Array<TBlogPost>
}

export default function BlogPostsPage({ blogPosts }: BlogPostsPageProps) {
  return (
    <>
      <SEO {...SEOContent} />

      <BlogPostsPageContainer>
        <PageTitle label="Blog Posts" />

        <BlogPostPageDescription>
          Writings and studies that I dedicate some time to share with the
          community 💝
        </BlogPostPageDescription>

        <BlogPostPageSearchInput>
          <Input name="blogPostSearch" placeholder="Search" />
        </BlogPostPageSearchInput>

        <BlogPostPageResults>
          {blogPosts.map(blogPost => (
            <BlogPostCard key={blogPost.id} {...blogPost} />
          ))}
        </BlogPostPageResults>
      </BlogPostsPageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getBlogPostsIndex()

  return {
    props: {
      blogPosts
    }
  }
}
