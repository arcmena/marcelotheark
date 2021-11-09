import SectionTitle from '../../../elements/SectionTitle'
import TimelineList from '../../../elements/TimelineLayout/TimelineList'

import { TimelineContainer, TimelineListWrapper } from './styles'

const myTimeline = [
  {
    year: '2021',
    items: [
      {
        title: 'Joined X as a Front End Developer',
        description: 'So grateful for this opportunity.'
      },
      {
        title: 'Promoted to Front End Developer on Kompa Saúde',
        description: 'Carrer level up.'
      }
    ]
  },
  {
    year: '2020',
    items: [
      {
        title: 'Joined Kompa Saúde as a Junior Front End Developer',
        description: 'So grateful for this opportunity.'
      },
      {
        title: 'Landed first job as a Software Developer',
        description:
          'The result of studying every day and putting myself out there. I remember how happy I was to receive the offer.'
      }
    ]
  },
  {
    year: '2019',
    items: [
      {
        title: 'Landed first job in tech industrie',
        description: 'So grateful for this opportunity.'
      },
      {
        title: "Started a Bachelor's Degree in Computer Science",
        description:
          'The result of studying every day and putting myself out there. I remember how happy I was to receive the offer.'
      }
    ]
  }
]

export default function TimelineLayout() {
  return (
    <TimelineContainer>
      <SectionTitle title="timeline" icon="badge-check" />

      <TimelineListWrapper>
        {myTimeline.map(timeline => (
          <TimelineList key={timeline.year} {...timeline} />
        ))}
      </TimelineListWrapper>
    </TimelineContainer>
  )
}
