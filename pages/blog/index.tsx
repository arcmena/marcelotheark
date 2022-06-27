import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import SEO from '@components/common/SEO'
import BlogPostCard from '@components/elements/BlogPostCard'
import Input from '@components/elements/Input'
import PageTitle from '@components/elements/PageTitle'

import { getBlogPostsIndex } from '@graphql/queries/getBlogPostsIndex'
import { getPage } from '@graphql/queries/getPage'
import { ELocale, TBlogPost, TPage } from '@graphql/schema'

import {
  BlogPostPageDescription,
  BlogPostPageResults,
  BlogPostPageSearchInput,
  BlogPostsPageContainer
} from '@styles/pages/BlogPostsPageStyles'

interface BlogPostsPageProps {
  pageData: TPage
  blogPosts: Array<TBlogPost>
}

export default function BlogPostsPage(props: BlogPostsPageProps) {
  const { blogPosts, pageData } = props
  const { seo } = pageData

  const { t } = useTranslation('common')

  return (
    <>
      <SEO {...seo} />

      <BlogPostsPageContainer>
        <PageTitle>{t('blog-posts')}</PageTitle>

        <BlogPostPageDescription>
          {t('blog-posts-description')}
        </BlogPostPageDescription>

        <BlogPostPageSearchInput>
          <Input disabled name="blogPostSearch" placeholder={t('search-input-placeholder')} />
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

export const getStaticProps: GetStaticProps = async props => {
  const { locale } = props

  const pageData = await getPage({
    identifier: '/blog',
    locale: locale as ELocale
  })

  const blogPosts = await getBlogPostsIndex(locale as ELocale)

  return {
    props: {
      blogPosts,
      pageData,
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}
