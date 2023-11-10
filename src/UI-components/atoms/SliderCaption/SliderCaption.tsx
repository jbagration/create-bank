import { FC } from 'react'
import { formatNumber } from 'src/utils'
import { Box, Typography } from '@mui/material'

import type { SliderCaptionProps } from './SliderCaption.type'

import { sliderCaptionStyles } from './SliderCaption.style'

export const SliderCaption: FC<SliderCaptionProps> = ({
    minValue,
    maxValue,
}) => {
    return (
        <Box
            sx={sliderCaptionStyles}
            data-testid={`slider-caption-${maxValue}`}
        >
            <Typography variant="body2" color="TextDisabled">
                {formatNumber(minValue)}
            </Typography>

            <Typography variant="body2" color="TextDisabled">
                {formatNumber(maxValue)}
            </Typography>
        </Box>
    )
}
