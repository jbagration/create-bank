import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths'
import { pluralMonths } from 'src/utils'

export const getCreditDurationInMonths = (
    endDate: string,
    startDate: string = new Date().toISOString()
) => {
    const terminationDate = new Date(endDate)
    const agreementDate = new Date(startDate)

    const diffInMonths = differenceInCalendarMonths(
        terminationDate,
        agreementDate
    )
    return pluralMonths(diffInMonths)
}
