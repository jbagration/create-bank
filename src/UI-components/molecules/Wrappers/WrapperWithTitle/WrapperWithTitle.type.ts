export interface WrapperProps {
    children?: JSX.Element | JSX.Element[]
    title: string
    subtitle?: string
    loanCard?: boolean
    paymentTypeCard?: boolean
}

export interface WrapperStylesProps
    extends Pick<WrapperProps, 'title' | 'loanCard' | 'paymentTypeCard'> {}
