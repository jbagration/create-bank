import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { NotificationModal } from '../../../molecules'

import { successClose } from './CloseCardWindow.const'

import { successTextContainerStyles } from './CloseCardWindow.style'

interface SuccessWindowProps {
    onClose: () => void
}

export const SuccessWindow: FC<SuccessWindowProps> = ({ onClose }) => {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
        onClose()
        navigate(-1)
    }
    return (
        <NotificationModal type="done" open={isOpen} handleClose={handleClose}>
            <Box sx={successTextContainerStyles}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    {successClose}
                </Typography>
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
