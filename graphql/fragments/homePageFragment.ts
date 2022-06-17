import { gql } from 'graphql-request'

export const HOME_PAGE_FRAGMENT = gql`
  fragment Content on PageContent {
    ... on Hero {
      __typename
      content
    }
  }
`
