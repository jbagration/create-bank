import { SxProps } from '@mui/material'

import { SkeletonCardItemStylesProps } from './SkeletonCardItem.type'

export const skeletonItemStyles = ({
    isVertical,
}: SkeletonCardItemStylesProps): SxProps => {
    return {
        display: 'flex',
        position: 'relative',
        borderRadius: '12px',
        marginTop: isVertical ? '40px' : 0,
    }
}
