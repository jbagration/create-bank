import { useEffect } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { calendarContainerStyles } from 'src/common/common.styles'
import { Box } from '@mui/material'

import { getDefaultDatesForCard } from './CalendarContainer.util'
import { MyCalendar } from './MyCalendar'
import { TimePeriod } from './TimePeriod'

import { CalendarContainerProps } from './CalendarComponent.type'

export const CalendarContainer = ({
    cardCreationDate,
    defaultDates,
    handleChange,
}: CalendarContainerProps) => {
    return (
        <Box sx={calendarContainerStyles}>
            <TimePeriod
                startDate={defaultDates.from}
                endDate={defaultDates.to}
            />
            <MyCalendar
                setDates={handleChange}
                startDate={defaultDates.from}
                endDate={defaultDates.to}
                minDate={cardCreationDate}
            />
        </Box>
    )
}

export const CalendarContainerWithFormContext = ({
    cardCreationDate,
    defaultDates,
}: Pick<CalendarContainerProps, 'cardCreationDate' | 'defaultDates'>) => {
    const { control, setValue } = useFormContext()

    useEffect(() => {
        setValue('date', getDefaultDatesForCard(cardCreationDate))
    }, [cardCreationDate, setValue])

    const {
        field: { onChange: onChangeDefault, value },
    } = useController({
        control,
        defaultValue: defaultDates.from
            ? defaultDates
            : getDefaultDatesForCard(cardCreationDate),
        name: 'date',
    })

    return (
        <CalendarContainer
            cardCreationDate={cardCreationDate}
            defaultDates={value}
            handleChange={onChangeDefault}
        />
    )
}
