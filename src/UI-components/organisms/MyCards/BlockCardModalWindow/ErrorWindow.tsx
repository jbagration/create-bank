import { FC, useState } from 'react'
import { Button } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { NotificationModal } from '../../../molecules'

import { successTextContainerStyles } from './BlockCardWindow.style'

interface ErrorWindowProps {
    message: string
    onClose: () => void
}

export const ErrorWindow: FC<ErrorWindowProps> = ({ message, onClose }) => {
    const [isOpen, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
        onClose()
    }

    return (
        <NotificationModal type="error" open={isOpen} handleClose={handleClose}>
            <Box sx={successTextContainerStyles}>
                <Typography variant="body1">{message}</Typography>

                <Button
                    type="button"
                    size="medium"
                    cancel
                    onClick={handleClose}
                >
                    Ок
                </Button>
            </Box>
        </NotificationModal>
    )
}
