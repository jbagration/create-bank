import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import { ModalActionButton } from './ModalActionButton/ModalActionButton'
import { ModalTitle } from './UtilityComponents/ModalTitle'
import { NewDialog } from './NewDialog'

import { modalActionStyles } from './Modal.style'

import { ModalProps } from './Modal.type'

export const Modal = React.memo(
    ({
        title,
        show = true,
        type = 'common',
        goBack,
        isModalFinished,
        children,
        isCloseBtnVisible = false,
    }: ModalProps) => {
        const [open, setOpen] = useState(show)
        const navigate = useNavigate()
        const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            navigate('/login')
            setOpen(false)
        }

        const ModalActionBtnSx = modalActionStyles({
            isModalFinished,
            isCloseBtnVisible,
        })

        return (
            <NewDialog type={type} open={open} onClose={onCloseModal}>
                {!isModalFinished ? (
                    <Box sx={ModalActionBtnSx}>
                        <ModalActionButton
                            modalAction="back"
                            onClick={goBack}
                        />
                        <ModalActionButton
                            modalAction="close"
                            onClick={onCloseModal}
                        />
                    </Box>
                ) : (
                    <Box sx={ModalActionBtnSx}>
                        {isCloseBtnVisible && (
                            <ModalActionButton
                                modalAction="close"
                                onClick={onCloseModal}
                            />
                        )}
                    </Box>
                )}
                <Box sx={{ pl: '115px' }}>
                    {!isModalFinished && <ModalTitle title={title} />}
                </Box>
                {children}
            </NewDialog>
        )
    }
)
