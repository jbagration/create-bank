import { FC, useState } from 'react'
import { Button } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { NotificationModal } from '../../../molecules'

import { successBlock, successUnlock } from './BlockCardWindow.const'

import { successTextContainerStyles } from './BlockCardWindow.style'

interface SuccessWindowProps {
    isBlocked: boolean
    onClose: () => void
}

export const SuccessWindow: FC<SuccessWindowProps> = ({
    isBlocked,
    onClose,
}) => {
    const [isOpen, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
        onClose()
    }
    return (
        <NotificationModal type="done" open={isOpen} handleClose={handleClose}>
            <Box sx={successTextContainerStyles}>
                <Typography variant="body1">
                    {isBlocked ? successBlock : successUnlock}
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
