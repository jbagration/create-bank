import { SxProps } from '@mui/material'

import { SkeletonCardStylesProps } from './SkeletonCard.type'

export const skeletonCardStyle = ({
    isVertical,
}: SkeletonCardStylesProps): SxProps => {
    return {
        display: isVertical ? 'block' : 'flex',
        gap: '40px',
        overflow: 'hidden',
        width: '1850px',
    }
}
