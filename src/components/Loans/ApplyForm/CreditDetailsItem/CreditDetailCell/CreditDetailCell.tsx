import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import {
    creditTextStyles,
    creditTitleStrongTextStyles,
} from '../CreditDetailsItem.style'

import { CreditDetailCellProps } from './CreditDetailCell.type'

export const CreditDetailCell: FC<CreditDetailCellProps> = ({
    title,
    text,
    sx,
}) => {
    return (
        <Box sx={sx} overflow="hidden">
            <Typography sx={creditTitleStrongTextStyles}>{title}</Typography>
            <Typography sx={creditTextStyles}>{text}</Typography>
        </Box>
    )
}
