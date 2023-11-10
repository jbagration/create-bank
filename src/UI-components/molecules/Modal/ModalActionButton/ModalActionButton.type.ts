import { ButtonProps } from '@mui/material'

export interface ModalActionButtonProps extends ButtonProps {
    modalAction?: 'close' | 'back' | 'returnOnMain'
    children?: React.ReactNode
}

export interface ActionButtonStylesProps extends ModalActionButtonProps {}
