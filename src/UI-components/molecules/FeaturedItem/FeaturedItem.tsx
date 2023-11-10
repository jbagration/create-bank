import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import type { FeaturedItemProps } from './FeaturedItem.type'

import {
    featuredServicesStyles,
    featuredServicesTextStyles,
} from './FeaturedItem.style'

export const FeaturedItem: FC<FeaturedItemProps> = ({ operation, icon }) => {
    const featuredServicesStylesSx = featuredServicesStyles({ operation })

    return (
        <>
            <Box sx={featuredServicesStylesSx}>{icon && icon}</Box>
            <Typography sx={featuredServicesTextStyles} variant="textLink1">
                {operation}
            </Typography>
        </>
    )
}
