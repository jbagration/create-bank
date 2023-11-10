import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

import { Button } from '../../../atoms'
import { NotificationModal } from '../../NotificationModal'

import { ConfirmModalProps } from './ConfirmModalType'

import { defaultErrorMessage } from './ConfirmModal.const'

import { textStyles } from './ConfirmModal.style'

export const ConfirmModal: FC<ConfirmModalProps> = ({
    infoMessage,
    successMessage,
    errorMessage = defaultErrorMessage,
    type,
    setType,
    handleSubmit,
    confirmButtonText,
    isOpen,
    setIsOpen,
    isLoading,
}) => {
    const navigate = useNavigate()

    const handleCloseClick = () => {
        setType('info')
        setIsOpen(false)
        if (type === 'done') {
            navigate('/user_main/deposits/my_deposits')
        }
    }

    const handleSubmitClick = () => {
        handleSubmit()
    }

    const modalText = {
        done: successMessage,
        info: infoMessage,
        error: errorMessage,
    }

    return (
        <NotificationModal
            open={isOpen}
            type={type}
            handleClose={() => {
                handleCloseClick()
            }}
            isLoading={isLoading}
        >
            <Grid container justifyContent="center" alignItems="center" gap={8}>
                <Typography sx={textStyles}>
                    {modalText[type as keyof typeof modalText]}
                </Typography>

                {type === 'info' && (
                    <>
                        <Button
                            buttonVariant="primary"
                            size="medium"
                            variant="contained"
                            onClick={handleSubmitClick}
                            type="submit"
                        >
                            {confirmButtonText}
                        </Button>

                        <Button cancel size="medium" onClick={handleCloseClick}>
                            Отмена
                        </Button>
                    </>
                )}
            </Grid>
        </NotificationModal>
    )
}
