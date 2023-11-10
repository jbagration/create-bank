import { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'

import {
    useSetStatusCreditCardMutation,
    useSetStatusDepositCardMutation,
} from '../../../../redux/api/cardsApi'
import { Button } from '../../../atoms'
import { NotificationModal } from '../../../molecules'

import { ErrorWindow } from './ErrorWindow'
import { SuccessWindow } from './SuccessWindow'

import {
    block,
    blockConfirm,
    blockDescription,
    unlock,
    unlockConfirm,
    unlockDescription,
} from './BlockCardWindow.const'

import {
    confirmButtonContainerStyles,
    confirmContainerStyles,
} from './BlockCardWindow.style'

import { BlockCardWindowProps } from './BlockCardWindow.type'

export const BlockCardWindow: FC<BlockCardWindowProps> = ({
    cardStatus,
    cardNumber,
    cardType,
    setModalState,
}) => {
    const [
        setNewDepositCardStatus,
        { error: depositError, isLoading: isDepositLoading },
    ] = useSetStatusDepositCardMutation()

    const [
        setNewCreditCardStatus,
        { error: creditError, isLoading: isCreditLoading },
    ] = useSetStatusCreditCardMutation()

    const newCardStatus = cardStatus === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE'
    const isCardBlocked = cardStatus !== 'ACTIVE'
    const [isBlocked, setBlocked] = useState(false)
    const [isOpen, setOpen] = useState(true)

    const requestOptions = {
        body: {
            cardStatus: newCardStatus,
            cardNumber,
        },
    }

    const error = depositError || creditError
    const isLoading = isDepositLoading || isCreditLoading

    const handleModalClose = () => {
        setOpen(false)
        setModalState(false)
    }

    const handleCardStatusChange = () => {
        setBlocked(!isBlocked)
        if (cardType === 'depositCard') {
            setNewDepositCardStatus(requestOptions)
        } else {
            setNewCreditCardStatus(requestOptions)
        }
    }

    return (
        <>
            {!isBlocked && !error && (
                <NotificationModal
                    type="info"
                    open={isOpen}
                    handleClose={handleModalClose}
                >
                    <Box sx={confirmContainerStyles}>
                        <Typography variant="strong1">
                            {isCardBlocked ? unlockConfirm : blockConfirm}
                        </Typography>
                        <Typography>
                            {isCardBlocked
                                ? unlockDescription
                                : blockDescription}
                        </Typography>
                        <Box sx={confirmButtonContainerStyles}>
                            <Button
                                buttonVariant="primary"
                                size="medium"
                                onClick={handleCardStatusChange}
                            >
                                {isCardBlocked ? unlock : block}
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
            {isBlocked && !isLoading && !error && (
                <SuccessWindow
                    isBlocked={isCardBlocked}
                    onClose={handleModalClose}
                />
            )}
            {isBlocked && error && (
                <ErrorWindow message="Ошибка" onClose={handleModalClose} />
            )}
        </>
    )
}
