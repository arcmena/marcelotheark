import { ITimelineItem } from '../../../../types/Timeline'

export interface TimelineListItemProps extends ITimelineItem, IConnectorProps {
  shouldConnectDots: boolean
}

export interface IConnectorProps {
  isFirstElement: boolean
  isLastElement: boolean
}
