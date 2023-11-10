import { FC } from 'react'
import { Skeleton } from '@mui/material'

import { skeletonItemStyles } from './SkeletonCardItem.style'

import { SkeletonCardItemProps } from './SkeletonCardItem.type'

export const SkeletonCardItem: FC<SkeletonCardItemProps> = ({
    width,
    height,
    isVertical,
}) => {
    const skeletonItemStylesSx = skeletonItemStyles({ isVertical })

    return (
        <Skeleton
            sx={skeletonItemStylesSx}
            animation="wave"
            variant="circular"
            width={width}
            height={height}
        />
    )
}
