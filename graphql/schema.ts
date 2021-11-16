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
