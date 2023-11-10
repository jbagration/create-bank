import subMonths from 'date-fns/subMonths'

export const yearAgoISODate = subMonths(new Date(), 12).toISOString()
