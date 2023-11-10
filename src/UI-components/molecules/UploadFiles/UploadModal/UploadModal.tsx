import React, { FC } from 'react'
import { DialogContent } from '@mui/material'
import Dialog from '@mui/material/Dialog'

import { dialogStyles } from './UploadModal.style'

import { UploadModalProps } from './UploadModal.type'

export const UploadModal: FC<UploadModalProps> = ({
    children,
    isShowModal,
}) => {
    return (
        <Dialog sx={dialogStyles} open={isShowModal} disableEscapeKeyDown>
            <DialogContent sx={{ padding: '50px 16px' }}>
                {children}
            </DialogContent>
        </Dialog>
    )
}
