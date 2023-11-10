import { FC } from 'react'
import { Box } from '@mui/material'

import { CaptionInfo } from '../../../../assets/svg'

import { captionIconStyles } from './CaptionIcon.style'

export const CaptionIcon: FC = () => {
    return (
        <Box sx={captionIconStyles}>
            <CaptionInfo />
        </Box>
    )
}
