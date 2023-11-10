import { DialogProps } from '@mui/material'

export interface NewDialogProps extends Pick<DialogProps, 'onClose'> {
    type?: 'common' | 'loginForm' | 'congrats'
    open: boolean
}

export interface ModalDialogStylesProps extends Pick<NewDialogProps, 'type'> {}
