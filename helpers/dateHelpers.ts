import { format } from 'date-fns'

export const getMonthAndDay = (date: string) => format(new Date(date), 'MMMM d')
