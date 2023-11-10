export interface StatusInfoStylesProps {
    status: string
}

export interface StatusInfoProps
    extends Pick<StatusInfoStylesProps, 'status'> {}
