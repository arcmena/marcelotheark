import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import * as mdx from '@mdx-js/react'

import SEO from '@components/common/SEO'
import BlogPostResponsiveImage from '@components/elements/BlogPost/BlogPostResponsiveImage'
import BlogPostH2 from '@components/elements/BlogPost/BlogPostH2'
import BlogPostParagraph from '@components/elements/BlogPost/BlogPostParagraph'
import BlogPostH1 from '@components/elements/BlogPost/BlogPostH1'
import PageTitle from '@components/elements/PageTitle'

import { getBlogPostData } from '@graphql/queries/getBlogPostData'
import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { blogPostSEO } from '@helpers/blogPostHelpers'
import { getFullDate } from '@helpers/dateHelpers'

import { BlogPostPageProps } from '@localTypes/pages/BlogPostPageTypes'

import {
  BlogPostPageContainer,
  BlogPostContentContainer,
  BlogPostSubtitle,
  BlogPostImageContainer,
  BlogPostInfo,
  BlogPostInfoTags
} from '@styles/pages/BlogPostPageStyles'
import ProfileCard from '@components/elements/ProfileCard'

const postComponents = {
  h1: BlogPostH1,
  h2: BlogPostH2,
  p: BlogPostParagraph
} as React.ComponentProps<typeof mdx.MDXProvider>['components']

export default function BlogPostPage({
  postData,
  mdContent
}: BlogPostPageProps) {
  const { title, createdAt, tags, postCover, subtitle } = postData

  return (
    <>
      <SEO {...blogPostSEO(postData)} />

      <BlogPostPageContainer>
        <PageTitle label={title} />

        <BlogPostSubtitle>{subtitle}</BlogPostSubtitle>

        <BlogPostImageContainer>
          <BlogPostResponsiveImage src={postCover.url} alt={title} />
        </BlogPostImageContainer>

        <BlogPostInfo>
          <span>Published on {getFullDate(createdAt)}</span> in{' '}
          {tags.map((tag, index) => (
            <>
              <BlogPostInfoTags key={tag}>{tag}</BlogPostInfoTags>
              {index + 1 !== tags.length && ', '}
            </>
          ))}
          . Authored by:
        </BlogPostInfo>

        <ProfileCard />

        <BlogPostContentContainer>
          <MDXRemote {...mdContent} components={postComponents} />
        </BlogPostContentContainer>
      </BlogPostPageContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await getBlogPostsIndex()

  const blogPostPaths = blogPosts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths: blogPostPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const postData = await getBlogPostData(slug)

  const mdContent = await serialize(postData.content)

  return {
    props: {
      postData,
      mdContent
    }
  }
}
