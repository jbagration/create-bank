export interface ButtonWithIconPropsStyles {
    yellow?: boolean
    yellowLight?: boolean
    transparent?: boolean
    size?: string
    radius?: boolean
    onClick?: () => void
}

export interface ButtonWithIconProps extends ButtonWithIconPropsStyles {
    children?: JSX.Element
}
