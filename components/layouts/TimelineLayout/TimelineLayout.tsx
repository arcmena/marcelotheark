import SectionTitle from '@components/elements/SectionTitle1'
import TimelineList from '@components/elements/TimelineList'

import { TimelineLayoutProps } from './types'

import { TimelineContainer, TimelineListWrapper } from './styles'

export default function TimelineLayout({ timelines }: TimelineLayoutProps) {
  return (
    <TimelineListWrapper>
      {timelines.map(timeline => (
        <TimelineList key={timeline.id} {...timeline} />
      ))}
    </TimelineListWrapper>
  )
}
