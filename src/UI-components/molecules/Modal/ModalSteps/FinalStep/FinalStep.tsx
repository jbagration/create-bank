import { FC, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DialogContent, Typography } from '@mui/material'
import { Box } from '@mui/system'

import {
    useSignUpClientMutation,
    useSignUpNonClientMutation,
} from '../../../../../redux/api/registrationApi'
import { Button } from '../../../../atoms'
import { FormHandler } from '../../../FormHandlers'
import { RegistrationModalContext } from '../../ModalContext'

import { changePasswordMessage, congratsMessage } from './FinalStep.const'

import { modalDialogContentStyles } from '../../Modal.style'
import { congratsImageStyles } from './FinalStep.style'

import { FinalStepProps } from './FinalStep.type'

export const FinalStep: FC<FinalStepProps> = ({ type }) => {
    const methods = useForm()
    const { usersData, isClient } = useContext(RegistrationModalContext)
    const [signUpClient] = useSignUpClientMutation()
    const [signUpNonClient] = useSignUpNonClientMutation()

    useEffect(() => {
        if (type === 'passwordRecovery') return
        isClient(usersData)
            ? signUpClient(usersData)
            : signUpNonClient(usersData)
    }, [])

    const navigate = useNavigate()

    return (
        <FormHandler methods={methods} formId="FinalForm">
            <Typography
                variant="h3"
                align="center"
                sx={{
                    mb: 6,
                }}
            >
                Поздравляем!
            </Typography>

            <DialogContent sx={modalDialogContentStyles}>
                {type === 'registration' ? (
                    <Typography variant="subtitle2" align="center">
                        {congratsMessage}
                    </Typography>
                ) : (
                    <Typography variant="subtitle2" align="center">
                        {changePasswordMessage}
                    </Typography>
                )}

                <Box sx={congratsImageStyles} />

                <Button
                    variant="contained"
                    size="long"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        navigate('/signIn')
                    }}
                >
                    Войти
                </Button>
            </DialogContent>
        </FormHandler>
    )
}
