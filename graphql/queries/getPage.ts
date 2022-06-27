import { gql } from 'graphql-request'

import { apiClient } from '@config/apiClient'

import { handleLocale } from '@helpers/localeHelpers'

import { ELocale, TPage } from '../schema'

const CONTENT_FRAGMENT = gql`
  fragment Content on PageContent {
    __typename
  }
`

const defaultContentFragment = CONTENT_FRAGMENT

export const GET_PAGE = gql`
  query getPage($identifier: String!, $locales: [Locale!]!) {
    page(where: { identifier: $identifier }, locales: $locales) {
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

export async function getPage({
  identifier,
  contentFragment = defaultContentFragment,
  locale = ELocale.EN
}: {
  identifier: String,
  contentFragment?: string
  locale?: ELocale
}) {
  const query = `${GET_PAGE} ${contentFragment}`

  const variables = {
    identifier,
    locales: [handleLocale(locale)]
  }

  const { page } = await apiClient.request(query, variables)

  const pageContent = [...page.content]

  return {...page, content: pageContent} as TPage
}
