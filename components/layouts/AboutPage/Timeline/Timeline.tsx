import TimelineList from '@components/elements/TimelineList'

import { TimelineLayoutProps } from './types'

import { TimelineContainer, TimelineListWrapper } from './styles'
import SectionTitle from '@components/elements/SectionTitle'

const Timeline = ({ timelines }: TimelineLayoutProps) => {
  return (
    <TimelineContainer>
      <SectionTitle>The road so far...</SectionTitle>

      <TimelineListWrapper>
        {timelines.map(timeline => (
          <TimelineList key={timeline.id} {...timeline} />
        ))}
      </TimelineListWrapper>
    </TimelineContainer>
  )
}

export default Timeline
