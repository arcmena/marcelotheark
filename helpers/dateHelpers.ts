import { ELocale } from '@graphql/schema'
import { format } from 'date-fns'

import ptBRLocale from 'date-fns/locale/pt-BR'

export const getMonthAndDay = (date: string) => format(new Date(date), 'MMMM d')

export const getFullDate = (date: string, locale: ELocale = ELocale.EN) => {
  const localeFormat = locale === ELocale.EN ? "MMMM d'th' yyyy" : "d 'de' MMMM 'de' yyyy"
  const localeConfig = locale === ELocale.EN ? undefined : ptBRLocale

  return format(new Date(date), localeFormat, {
    locale: localeConfig
  })
}

export const getDate = () => new Date()
