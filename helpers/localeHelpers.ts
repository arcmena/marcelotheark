import { ELocale } from '@graphql/schema'

export const handleLocale = (locale: ELocale) =>
  locale === ELocale.en ? locale : 'pt_BR'
