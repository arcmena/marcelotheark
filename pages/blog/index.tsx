import SEO from '@components/common/SEO'
import BlogPostCard from '@components/elements/BlogPostCard'
import Input from '@components/elements/Input'
import PageTitle from '@components/elements/PageTitle'

import {
  BlogPostPageDescription,
  BlogPostPageResults,
  BlogPostPageSearchInput,
  BlogPostsPageContainer
} from '@styles/pages/BlogPostsPageStyles'

const blogPosts = [...new Array(3)].map(() => ({
  title: 'Lorem ipsum dolor sit amet',
  date: 'November 9, 2021',
  description: 'Consectetur adipiscing merol muspi...'
}))

const SEOContent = {
  title: 'Blog Posts | Marcelo the ark - Front End Developer',
  description:
    'Blog posts / Writings and studies dedicated to the dev community 💝'
}

export default function BlogPostsPage() {
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
          {blogPosts.map(item => (
            <BlogPostCard key={item.title} {...item} />
          ))}
        </BlogPostPageResults>
      </BlogPostsPageContainer>
    </>
  )
}
