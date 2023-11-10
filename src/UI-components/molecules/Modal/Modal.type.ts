export interface ModalProps {
    show: boolean
    title: string
    goBack: (e?: any) => void
    children?: React.ReactNode
    formId?: string
    type?: 'common' | 'loginForm' | 'congrats'
    isModalFinished: boolean
    isCloseBtnVisible?: boolean
}

export interface ModalStylesProps {
    isModalFinished: boolean
    isCloseBtnVisible: boolean
}
