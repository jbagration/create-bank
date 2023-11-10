import { FC } from 'react'
import { StatusInfo } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { statusContainerStyles } from './CreditDetailStatus.style'

import { CreditDetailStatusProps } from './CreditDetailStatus.type'

export const CreditDetailStatus: FC<CreditDetailStatusProps> = ({ status }) => {
    return (
        <Box data-testid="credit-status" sx={statusContainerStyles}>
            <Typography variant="body1" color="Text.TextPrimary">
                Статус:
            </Typography>
            <StatusInfo status={status} />
        </Box>
    )
}
