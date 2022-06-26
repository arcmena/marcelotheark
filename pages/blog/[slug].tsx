import { Fragment } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import * as mdx from '@mdx-js/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import SEO from '@components/common/SEO'
import BlogPostResponsiveImage from '@components/elements/BlogPostContent/BlogPostResponsiveImage'
import BlogPostH2 from '@components/elements/BlogPostContent/BlogPostH2'
import BlogPostParagraph from '@components/elements/BlogPostContent/BlogPostParagraph'
import BlogPostH1 from '@components/elements/BlogPostContent/BlogPostH1'
import PageTitle from '@components/elements/PageTitle'
import RelatedBlogPosts from '@components/layouts/BlogPostPage/RelatedBlogPosts'
import ProfileCard from '@components/elements/ProfileCard'

import { getBlogPostData } from '@graphql/queries/getBlogPostData'
import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'
import { getRelatedPostsIndex } from '@graphql/queries/getRelatedPostsIndex'
import { ELocale } from '@graphql/schema'

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

const postComponents = {
  h1: BlogPostH1,
  h2: BlogPostH2,
  p: BlogPostParagraph
} as React.ComponentProps<typeof mdx.MDXProvider>['components']

export default function BlogPostPage({
  postData,
  mdContent,
  relatedBlogPosts
}: BlogPostPageProps) {
  const { t } = useTranslation('post')
  const { locale } = useRouter()

  const { title, createdAt, tags, postCover, subtitle } = postData

  return (
    <>
      <SEO {...blogPostSEO(postData)} />

      <BlogPostPageContainer>
        <PageTitle>{title}</PageTitle>

        <BlogPostSubtitle>{subtitle}</BlogPostSubtitle>

        <BlogPostImageContainer>
          <BlogPostResponsiveImage src={postCover.url} alt={title} />
        </BlogPostImageContainer>

        <BlogPostInfo>
          <span>
            {t('published-on')} {getFullDate(createdAt, locale as ELocale)}
          </span>{' '}
          {t('in')}{' '}
          {tags.map((tag, index) => (
            <Fragment key={tag}>
              <BlogPostInfoTags>{tag}</BlogPostInfoTags>
              {index + 1 !== tags.length && ', '}
            </Fragment>
          ))}
          . {t('authored-by')}:
        </BlogPostInfo>

        <ProfileCard />

        <BlogPostContentContainer>
          <MDXRemote {...mdContent} components={postComponents} />
        </BlogPostContentContainer>

        <RelatedBlogPosts relatedBlogPosts={relatedBlogPosts} />
      </BlogPostPageContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async props => {
  const { locales } = props as { locales: string[] }

  const blogPosts = await getBlogPostsIndex()

  const localizedPaths = blogPosts
    .map(blogPost =>
      locales.map(locale => ({
        params: { slug: blogPost.slug },
        locale
      }))
    )
    .flat()

  return {
    paths: localizedPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { locale, params } = context

  const { slug } = params as { slug: string }

  const postData = await getBlogPostData(slug, locale as ELocale)
  const mdContent = await serialize(postData.content)

  const relatedBlogPosts = await getRelatedPostsIndex(
    postData.tags,
    slug,
    locale as ELocale
  )

  return {
    props: {
      postData,
      mdContent,
      relatedBlogPosts,
      ...(await serverSideTranslations(locale!, ['common', 'post']))
    }
  }
}
