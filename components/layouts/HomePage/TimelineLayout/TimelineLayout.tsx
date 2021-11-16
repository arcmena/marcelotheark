import SectionTitle from '../../../elements/SectionTitle'
import TimelineList from '../../../elements/TimelineLayout/TimelineList'

import { TimelineLayoutProps } from './types'

import { TimelineContainer, TimelineListWrapper } from './styles'

export default function TimelineLayout({ timelines }: TimelineLayoutProps) {
  return (
    <TimelineContainer id="timeline">
      <SectionTitle title="timeline" icon="badge-check" />

      <TimelineListWrapper>
        {timelines.map(timeline => (
          <TimelineList key={timeline.id} {...timeline} />
        ))}
      </TimelineListWrapper>
    </TimelineContainer>
  )
}
