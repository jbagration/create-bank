import { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogTitle, IconButton } from '@mui/material'

import { Close, Done, Info, Preloader } from '../../../assets/svg'

import {
    iconButtonStyles,
    notificationBoxStyles,
    notificationCircleStyles,
    notificationDialogStyles,
} from './NotificationModal.style'

import { NotificationProps } from './NotificationModal.type'

export const NotificationModal: FC<NotificationProps> = ({
    open,
    handleClose,
    type = 'done',
    isLoading,
    children,
}) => {
    return (
        <Dialog
            sx={notificationDialogStyles}
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {isLoading ? (
                <Box sx={notificationBoxStyles}>
                    <Preloader />
                </Box>
            ) : (
                <Box sx={notificationBoxStyles}>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        {handleClose ? (
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={iconButtonStyles}
                            >
                                <CloseIcon />
                            </IconButton>
                        ) : null}
                    </DialogTitle>

                    <Box sx={notificationCircleStyles}>
                        {type === 'error' ? <Close /> : null}
                        {type === 'done' ? <Done /> : null}
                        {type === 'info' ? <Info /> : null}
                    </Box>
                    {children}
                </Box>
            )}
        </Dialog>
    )
}
