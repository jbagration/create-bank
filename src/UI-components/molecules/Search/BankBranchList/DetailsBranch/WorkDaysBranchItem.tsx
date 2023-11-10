import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { days, dayToday } from 'src/common/common.const'

import { workDetailsContainer } from './DetailsBranch.style'

import { WorkDaysProps } from './DetailsBranch.type'

export const WorkDaysBranchItem: FC<WorkDaysProps> = ({ workAtWeekends }) => {
    const week = workAtWeekends ? days : days.slice(0, 5)

    return (
        <Grid container>
            {week.map((day) => {
                const workDetailsContainerStyles = workDetailsContainer({
                    day,
                    dayToday,
                })

                return (
                    <Box key={day} sx={workDetailsContainerStyles}>
                        <Typography variant="body2" align="center" m={1.5}>
                            {day === dayToday ? <b>{day}</b> : day}
                        </Typography>
                    </Box>
                )
            })}
        </Grid>
    )
}
