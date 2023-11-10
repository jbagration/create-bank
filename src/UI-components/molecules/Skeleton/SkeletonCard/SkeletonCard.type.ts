export interface SkeletonCardProps {
    quantity: number
    isVertical?: boolean
}

export type SkeletonCardStylesProps = Pick<SkeletonCardProps, 'isVertical'>
