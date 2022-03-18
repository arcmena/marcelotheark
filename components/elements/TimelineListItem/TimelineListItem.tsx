import { TimelineListItemProps } from './types'

import {
  Circle,
  Connector,
  TimelineListItemWrapper,
  TimelineListItemContainer,
  TimelineListItemContent
} from './styles'

export default function TimelineListItem({
  title,
  description,
  shouldConnectDots,
  ...connectorProps
}: TimelineListItemProps) {
  return (
    <TimelineListItemContainer>
      {shouldConnectDots && <Connector {...connectorProps} />}

      <TimelineListItemWrapper>
        <Circle />

        <TimelineListItemContent>
          <h4 className="timeline-item__title">{title}</h4>

          <p>{description}</p>
        </TimelineListItemContent>
      </TimelineListItemWrapper>
    </TimelineListItemContainer>
  )
}
