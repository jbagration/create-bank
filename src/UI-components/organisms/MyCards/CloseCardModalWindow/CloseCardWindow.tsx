import { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { useDeactivateDepositCardMutation } from '../../../../redux/api/cardsApi'
import { Button } from '../../../atoms'
import { NotificationModal } from '../../../molecules'

import { ErrorWindow } from './ErrorWindow'
import { SuccessWindow } from './SuccessWindow'

import { close, closeConfirm, closeError } from './CloseCardWindow.const'

import {
    confirmButtonContainerStyles,
    confirmContainerStyles,
} from './CloseCardWindow.style'

import { CloseCardWindowProps } from './CloseCardWindow.type'

export const CloseCardWindow: FC<CloseCardWindowProps> = ({
    cardNumber,
    setModalState,
}) => {
    const [
        deactivateDepositCard,
        { error: deactivateError, isLoading: isDepositLoading },
    ] = useDeactivateDepositCardMutation()

    const [isClose, setIsClose] = useState(false)
    const [isOpen, setOpen] = useState(true)

    const requestOptions = {
        body: {
            cardNumber,
        },
    }

    const error = deactivateError
    const isLoading = isDepositLoading

    const handleModalClose = () => {
        setOpen(false)
        setModalState(false)
    }

    const handleCardDeactivate = () => {
        setIsClose(!isClose)
        deactivateDepositCard(requestOptions)
    }

    return (
        <>
            {!isClose && !error && (
                <NotificationModal
                    type="info"
                    open={isOpen}
                    handleClose={handleModalClose}
                >
                    <Box sx={confirmContainerStyles}>
                        <Typography variant="strong1">
                            {closeConfirm}
                        </Typography>
                        <Box sx={confirmButtonContainerStyles}>
                            <Button
                                buttonVariant="primary"
                                size="medium"
                                onClick={handleCardDeactivate}
                            >
                                {close}
                            </Button>
                            <Button
                                cancel
                                size="medium"
                                onClick={handleModalClose}
                            >
                                Отмена
                            </Button>
                        </Box>
                    </Box>
                </NotificationModal>
            )}
            {isClose && !isLoading && !error && (
                <SuccessWindow onClose={handleModalClose} />
            )}
            {error && (
                <ErrorWindow message={closeError} onClose={handleModalClose} />
            )}
        </>
    )
}
