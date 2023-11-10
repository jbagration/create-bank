import { FC } from 'react'
import { Dialog } from '@mui/material'

import { modalDialogStyles } from './NewDialog.style'

import { NewDialogProps } from './NewDialog.type'

export const NewDialog: FC<NewDialogProps> = ({
    type = 'common',
    open = true,
    onClose,
    children,
}) => {
    const modalDialogStylesSx = modalDialogStyles({
        type,
    })

    return (
        <Dialog
            disableScrollLock
            disablePortal
            disableAutoFocus
            disableEnforceFocus
            disableEscapeKeyDown
            maxWidth={false}
            hideBackdrop
            open={open}
            onClose={onClose}
            sx={modalDialogStylesSx}
            data-testid="modal"
        >
            {children}
        </Dialog>
    )
}
