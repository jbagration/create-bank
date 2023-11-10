export interface LoginWindowProps {
    top?: string
    right?: string
    position?: Position
}

type Position = 'static' | 'absolute' | 'sticky' | 'fixed' | 'relative'

export interface LoginWindowStylesProps extends LoginWindowProps {}
