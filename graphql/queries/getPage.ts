import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'

import { TPage } from '../schema'

const CONTENT_FRAGMENT = gql`
  fragment Content on PageContent {
    __typename
  }
`

const defaultContentFragment = CONTENT_FRAGMENT

export const GET_PAGE = gql`
  query getPage($identifier: String!) {
    page(where: { identifier: $identifier }) {
      seo {
        pageTitle
        description
      }
      content {
        ...Content
      }
    }
  }
`

export async function getPage(
  identifier: String,
  contentFragment: string = defaultContentFragment
) {
  const query = `${GET_PAGE} ${contentFragment}`

  const variables = {
    identifier
  }

  const { page } = await apiClient.request(query, variables)

  const pageContent = [...page.content]

  return {...page, content: pageContent} as TPage
}
