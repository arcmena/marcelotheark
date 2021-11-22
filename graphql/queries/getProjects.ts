import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'
import { TProject } from '../schema'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description
      url
    }
  }
`

export async function getProjects() {
  const { projects } = await apiClient.request(GET_PROJECTS)

  return projects as Array<TProject>
}
