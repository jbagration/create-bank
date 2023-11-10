import { FC, useState } from 'react'
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import subDays from 'date-fns/subDays'
import DatePicker from 'react-datepicker'
import { myCalendarBoxStyles } from 'src/common/common.styles'
import { Box } from '@mui/material'

import { RenderCustomHeader } from '../../atoms'

import type { MyCalendarProps } from './CalendarComponent.type'

import 'react-datepicker/dist/react-datepicker.css'

export const MyCalendar: FC<MyCalendarProps> = ({
    setDates,
    startDate,
    endDate,
    minDate,
}) => {
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        isOpen ? setOpen(false) : setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onChange = (dates: (Date | null)[]) => {
        const [start, end] = dates

        setDates({
            from: start ? new Date(format(start, 'Y-MM-dd')) : null,
            to: end ? new Date(format(end, 'Y-MM-dd')) : null,
        })
    }

    return (
        <Box sx={myCalendarBoxStyles}>
            <DatePicker
                locale={ru}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                maxDate={new Date()}
                minDate={new Date(minDate) || subDays(new Date(), 364)}
                renderCustomHeader={({
                    monthDate,
                    changeYear,
                    nextMonthButtonDisabled,
                    prevMonthButtonDisabled,
                    increaseMonth,
                    decreaseMonth,
                }) => (
                    <RenderCustomHeader
                        onOpen={handleOpen}
                        onClose={handleClose}
                        monthDate={monthDate}
                        decreaseMonth={decreaseMonth}
                        increaseMonth={increaseMonth}
                        prevMonthButtonDisabled={prevMonthButtonDisabled}
                        nextMonthButtonDisabled={nextMonthButtonDisabled}
                        changeYear={changeYear}
                        isOpen={isOpen}
                    />
                )}
            />
        </Box>
    )
}
