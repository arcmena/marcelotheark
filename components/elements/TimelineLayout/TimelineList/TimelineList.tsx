import TimelineListItem from '../TimelineListItem'

import { TimelineListProps } from './types'

import { TimelineListContainer, TimelineListItemWrapper } from './styles'

export default function TimelineList({ year, items }: TimelineListProps) {
  return (
    <TimelineListContainer>
      <h2>{year}</h2>

      <TimelineListItemWrapper>
        {items.map((item, index) => {
          const isFirstElement = index === 0
          const isLastElement = index === items.length - 1
          const shouldConnectDots = items.length > 1

          const props = {
            isFirstElement,
            isLastElement,
            shouldConnectDots,
            ...item
          }

          return <TimelineListItem key={item.id} {...props} />
        })}
      </TimelineListItemWrapper>
    </TimelineListContainer>
  )
}
