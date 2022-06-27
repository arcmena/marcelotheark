import { ELocale } from '@graphql/schema'

export const handleLocale = (locale: ELocale) =>
  locale === ELocale.EN ? locale : 'pt_BR'
