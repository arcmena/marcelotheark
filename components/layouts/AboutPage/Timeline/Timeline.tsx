import { useTranslation } from 'next-i18next'

import TimelineList from '@components/elements/TimelineList'
import SectionTitle from '@components/elements/SectionTitle'

import { TimelineLayoutProps } from './types'

import { TimelineContainer, TimelineListWrapper } from './styles'

const Timeline = ({ timelines }: TimelineLayoutProps) => {
  const { t } = useTranslation('common')
  
  return (
    <TimelineContainer>
      <SectionTitle>{t('the-road-so-far')}</SectionTitle>

      <TimelineListWrapper>
        {timelines.map(timeline => (
          <TimelineList key={timeline.id} {...timeline} />
        ))}
      </TimelineListWrapper>
    </TimelineContainer>
  )
}

export default Timeline
