import { DateInterval } from 'src/types/CommonTypes'

export interface MyCalendarProps {
    setDates: (date: DateInterval) => void
    startDate: Date | null
    endDate: Date | null
    minDate: string
}

export interface CalendarContainerProps {
    cardCreationDate: string
    defaultDates: DateInterval
    handleChange: (date: DateInterval) => void
}

export type TimePeriodProps = Pick<MyCalendarProps, 'startDate' | 'endDate'>
