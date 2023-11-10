export interface SkeletonCardItemProps {
    width: string
    height: string
    isVertical?: boolean
}

export interface SkeletonCardItemStylesProps
    extends Pick<SkeletonCardItemProps, 'isVertical'> {}
