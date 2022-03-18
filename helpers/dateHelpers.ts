import { format } from 'date-fns'

export const getMonthAndDay = (date: string) => format(new Date(date), 'MMMM d')

export const getFullDate = (date: string) =>
  format(new Date(date), "MMMM d'th' yyyy")

export const getDate = () => new Date()
