export interface ModalProps {
    text?: string
    showModal: boolean
    closeModal: () => void
}

export interface ModalContentProps {
    content: {
        icon: JSX.Element
        text: string
        linkTo: string
    }[]
}
