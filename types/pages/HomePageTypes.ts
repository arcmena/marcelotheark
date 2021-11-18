import { TBlogPost, TProject, TTimeline } from '../../graphql/schema'

export interface HomePageProps {
  projects: Array<TProject>
  timelines: Array<TTimeline>
  blogPosts: Array<TBlogPost>
}
