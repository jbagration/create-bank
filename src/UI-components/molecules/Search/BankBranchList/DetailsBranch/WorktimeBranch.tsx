import { FC } from 'react'
import { getWorkSchedule } from 'src/utils'
import { Box, Icon, Typography } from '@mui/material'

import { ReactComponent as ClockIcon } from 'src/assets/svg/BankBranchPageSvg/SearchBar/СlockIcon.svg'

import { clockContainer } from './DetailsBranch.style'
import { iconStyles } from './WorktimeBranch.style'

import { WorkTimeBranchProps } from './DetailsBranch.type'

export const WorkTimeBranch: FC<WorkTimeBranchProps> = ({
    isIcon = false,
    openingTime,
    closingTime,
}) => {
    const time = getWorkSchedule(openingTime, closingTime)

    return (
        <Box sx={clockContainer}>
            {isIcon && (
                <Icon sx={iconStyles}>
                    <ClockIcon />
                </Icon>
            )}
            <Typography variant="body2">{time}</Typography>
        </Box>
    )
}
