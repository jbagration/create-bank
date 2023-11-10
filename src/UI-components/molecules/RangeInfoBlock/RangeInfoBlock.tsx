import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { rangeStyles, textBoxStyles } from './RangeInfoBlock.style'

interface RangeInfoBlockProps {
    minValue: string
    minDescription: string
    maxValue: string
    maxDescription: string
}

export const RangeInfoBlock: FC<RangeInfoBlockProps> = ({
    minValue,
    maxValue,
    maxDescription,
    minDescription,
}) => {
    return (
        <>
            <Box sx={textBoxStyles}>
                <Typography variant="body2">{minDescription}</Typography>
                <Typography variant="body2">{maxDescription}</Typography>
            </Box>
            <Box sx={textBoxStyles}>
                <Typography variant="strong4">{minValue}</Typography>
                <Typography variant="strong4">{maxValue}</Typography>
            </Box>
            <Box sx={rangeStyles} />
        </>
    )
}
