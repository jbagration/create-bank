import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, DialogActions, DialogContent, Typography } from '@mui/material'

import { LoginForm } from '../../../components/Forms'
import { modalDialogContentStyles, NewDialog } from '../Modal'
import { ModalActionButton } from '../Modal/ModalActionButton/ModalActionButton'

import { modalDialogActionsStyles } from '../Modal/Modal.style'
import { loginFormTypographyStyles } from './LoginFormModal.style'

export interface Props {
    show: boolean
    title: string
    children?: React.ReactNode
}

export type ModalProps = Props

export const LoginFormModal = React.memo(
    ({ title, show = true }: ModalProps) => {
        const navigate = useNavigate()
        return (
            <NewDialog type="loginForm" open={show}>
                <DialogActions sx={modalDialogActionsStyles}>
                    <ModalActionButton
                        onClick={() => {
                            navigate('/login')
                        }}
                        modalAction="returnOnMain"
                    />
                </DialogActions>

                <Typography variant="h3" sx={loginFormTypographyStyles}>
                    {title}
                </Typography>

                <DialogContent sx={modalDialogContentStyles}>
                    <Box maxWidth="343px" data-testid="form-wrapper">
                        <LoginForm formId="LoginForm" />
                    </Box>
                </DialogContent>
            </NewDialog>
        )
    }
)
