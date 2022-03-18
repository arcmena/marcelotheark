import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { TBlogPost } from '../../graphql/schema'

export interface BlogPostPageProps {
  postData: TBlogPost
  mdContent: MDXRemoteSerializeResult<Record<string, unknown>>
  relatedBlogPosts: Array<TBlogPost> | []
}
