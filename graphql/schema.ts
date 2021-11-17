export type TProject = {
  id: string
  title: string
  description: string
  url: string
}

export type TTimelineItem = {
  id: string
  title: string
  description: string
}

export type TTimeline = {
  id: string
  year: string
  items: Array<TTimelineItem>
}

export type TBlogPost = {
  id: string
  publishedAt: string
  slug: string
  title: string
  tags: Array<string>
  content: string
}
