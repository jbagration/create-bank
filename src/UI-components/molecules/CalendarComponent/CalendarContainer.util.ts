import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import { datesLast10Days, datesLastMonth } from 'src/UI-components/organisms'

export const getDefaultDatesForCard = (cardCreationDate: string) => {
    if (cardCreationDate === '') return datesLastMonth

    const fromNow = differenceInCalendarDays(
        new Date(),
        new Date(cardCreationDate)
    )

    return fromNow > 30
        ? datesLastMonth
        : { from: new Date(cardCreationDate), to: datesLastMonth.to }
}

export const getLast10Days = (cardCreationDate: string) => {
    if (cardCreationDate === '') return datesLast10Days

    const fromNow = differenceInCalendarDays(
        new Date(),
        new Date(cardCreationDate)
    )

    return fromNow > 10
        ? datesLast10Days
        : { from: new Date(cardCreationDate), to: datesLast10Days.to }
}
