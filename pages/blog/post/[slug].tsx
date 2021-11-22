import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import SEO from '@components/common/SEO'
import BlogPostResponsiveImage from '@components/elements/BlogPost/BlogPostResponsiveImage'
import BlogPostH2 from '@components/elements/BlogPost/BlogPostH2'
import BlogPostParagraph from '@components/elements/BlogPost/BlogPostParagraph'
import BlogPostH1 from '@components/elements/BlogPost/BlogPostH1'

import { getBlogPostData } from '@graphql/queries/getBlogPostData'
import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'

import { blogPostSEO } from '@helpers/blogPostHelpers'
import { getFullDate } from '@helpers/dateHelpers'

import { BlogPostPageProps } from '@localTypes/pages/BlogPostPageTypes'

import {
  BlogPostContainer,
  BlogPostContentContainer,
  BlogPostInfo,
  BlogPostTitle
} from '@styles/pages/BlogPostPageStyles'

const postComponents = {
  img: BlogPostResponsiveImage,
  h1: BlogPostH1,
  h2: BlogPostH2,
  p: BlogPostParagraph
}

export default function BlogPostPage({
  postData,
  mdContent
}: BlogPostPageProps) {
  const { title, createdAt, tags } = postData

  const { seoTitle, seoDescription } = blogPostSEO(postData)

  const joinedTags = tags.join(', ')

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>

        <BlogPostInfo>
          <span>{getFullDate(createdAt)}</span> <span>{joinedTags}</span>
        </BlogPostInfo>

        <BlogPostContentContainer>
          <MDXRemote {...mdContent} components={postComponents} />
        </BlogPostContentContainer>
      </BlogPostContainer>
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
