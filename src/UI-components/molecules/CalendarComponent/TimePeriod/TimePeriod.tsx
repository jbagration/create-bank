import { FC } from 'react'
import format from 'date-fns/format'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import { Box, Typography } from '@mui/material'

import type { TimePeriodProps } from '../CalendarComponent.type'

import {
    allTimePeriodContainerStyles,
    calendarIconStyles,
    datesStyles,
    iconContainerStyles,
    periodStyles,
    timePeriodContainerStyles,
} from './TimePeriod.style'

export const TimePeriod: FC<TimePeriodProps> = ({ startDate, endDate }) => {
    const myStartDate = startDate ? format(startDate, 'dd.MM.yyyy') : null
    const myEndDate = endDate !== null ? format(endDate, 'dd.MM.yyyy') : null

    return (
        <Box sx={allTimePeriodContainerStyles}>
            <Box sx={iconContainerStyles}>
                <CalendarTodayOutlinedIcon sx={calendarIconStyles} />
            </Box>
            <Box sx={timePeriodContainerStyles}>
                <Typography sx={periodStyles}>Период</Typography>
                <Typography sx={datesStyles}>
                    {myEndDate === null || myStartDate === myEndDate
                        ? myStartDate
                        : `${myStartDate} - ${myEndDate}`}
                </Typography>
            </Box>
        </Box>
    )
}
