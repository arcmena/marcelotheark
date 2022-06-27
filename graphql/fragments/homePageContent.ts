import { gql } from 'graphql-request'

export const HOME_PAGE_CONTENT = gql`
  fragment Content on PageContent {
    ... on Hero {
      __typename
      content
    }
  }
`
