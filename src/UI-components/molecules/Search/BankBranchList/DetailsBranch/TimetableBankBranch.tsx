import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { WorkDaysBranchItem } from './WorkDaysBranchItem'
import { WorkTimeBranch } from './WorktimeBranch'

import { timetableBankContainer } from './DetailsBranch.style'

import { TimetableBankBranchProps } from './DetailsBranch.type'

export const TimetableBankBranch: FC<TimetableBankBranchProps> = ({
    workAtWeekends,
    openingTime,
    closingTime,
}) => (
    <Box sx={timetableBankContainer} data-testid="timetable-bank-branch">
        <Typography variant="strong2">График работы</Typography>
        <WorkDaysBranchItem workAtWeekends={workAtWeekends} />
        <WorkTimeBranch
            isIcon
            openingTime={openingTime}
            closingTime={closingTime}
        />
    </Box>
)
