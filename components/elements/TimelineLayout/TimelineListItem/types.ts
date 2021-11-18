import { TTimelineItem } from '../../../../graphql/schema'

export interface TimelineListItemProps extends TTimelineItem, IConnectorProps {
  shouldConnectDots: boolean
}

export interface IConnectorProps {
  isFirstElement: boolean
  isLastElement: boolean
}
