import { gql } from 'graphql-request'

export const ABOUT_PAGE_CONTENT = gql`
  fragment Content on PageContent {
    ... on MyIntroduction {
      __typename
      introduction
      experienceHistory
    }
    ... on Project {
      __typename
      id
      title
      description
      appType
      technologiesUsed
      repoUrl
      projectUrl
      projectCover {
        url
      }
    }
    ... on Timeline {
      __typename
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
