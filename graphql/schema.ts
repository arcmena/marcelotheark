export type TImage = {
  url: string
}

export type TProject = {
  id: string
  title: string
  appType: string
  description: string
  technologiesUsed: Array<string>
  repoUrl: string | null
  projectUrl: string | null
  projectCover: TImage
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
  createdAt: string
  slug: string
  title: string
  tags: Array<string>
  content: string
  description: string
  subtitle: string
  postCover: TImage
}

export type TMyIntroduction = {
  introduction: string
  experienceHistory: string
}

type TSEO = {
  pageTitle: string
  description: string
}

export type TGraphqlIdentifier = {
  __typename: string
}

export type TPage = {
  seo?: TSEO,
  content?: TGraphqlIdentifier[]
}

export enum ELocale {
  PT_BR = 'pt-BR',
  EN = 'en'
}
