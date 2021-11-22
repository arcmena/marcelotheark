import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'
import { TTimeline } from '../schema'

export const GET_TIMELINES = gql`
  query getTimeline {
    timelines {
      id
      year
      items {
        id
        title
        description
      }
    }
  }
`

export async function getTimelines() {
  const { timelines } = await apiClient.request(GET_TIMELINES)

  return timelines as Array<TTimeline>
}
