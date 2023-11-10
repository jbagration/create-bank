import { FC } from 'react'
import { Box, Paper, Typography } from '@mui/material'

import { Button } from '../../../atoms/Button'

import { cardTextBoxStyles, sliderPaperStyles } from './SliderItem.style'

import { SliderItemProps } from './SliderItem.type'

export const SliderItem: FC<SliderItemProps> = ({ item }) => {
    const { cardBackground, cardTitle, cardDescription, cardLink } = item
    const sliderPaperStylesSx = sliderPaperStyles({ cardBackground })

    return (
        <Paper sx={sliderPaperStylesSx}>
            <Box sx={cardTextBoxStyles}>
                <Typography sx={{ mb: '18px' }} variant="h2">
                    {cardTitle}
                </Typography>

                <Typography sx={{ mb: '40px' }} variant="h5">
                    {cardDescription}
                </Typography>

                <Button buttonVariant="primary" size="large" href={cardLink}>
                    Узнать больше
                </Button>
            </Box>
        </Paper>
    )
}
