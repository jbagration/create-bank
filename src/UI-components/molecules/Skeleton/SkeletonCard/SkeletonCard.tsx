import { FC } from 'react'
import { Box } from '@mui/material'

import { SkeletonCardItem } from '../SkeletonCardItem/SkeletonCardItem'

import { skeletonCardStyle } from './SkeletonCard.style'

import { SkeletonCardProps } from './SkeletonCard.type'

export const SkeletonCard: FC<SkeletonCardProps> = ({
    quantity,
    isVertical,
}) => {
    const skeletons = new Array(quantity).fill(1)
    const skeletonCardStyleSx = skeletonCardStyle({ isVertical })

    return (
        <Box sx={skeletonCardStyleSx}>
            {skeletons.map(() => (
                <SkeletonCardItem
                    data-testid="skeleton"
                    key={crypto.randomUUID()}
                    width="328px"
                    height="210px"
                    isVertical={isVertical}
                />
            ))}
        </Box>
    )
}
