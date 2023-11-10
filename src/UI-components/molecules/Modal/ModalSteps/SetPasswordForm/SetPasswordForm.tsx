import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { usePasswordRecoveryMutation } from 'src/redux/api/passwordRecoveryApi'
import { Button } from 'src/UI-components/atoms'
import { passwordErrorMessage, setPasswordSchema } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'

import { FormHandler, InputHandler } from '../../../FormHandlers'

import { SetPasswordFormProps } from './SetPasswordForm.type'

export const SetPasswordForm: FC<SetPasswordFormProps> = ({
    setPassword,
    usersPassword,
    goForward,
    type,
    mobilePhone,
    finishModal,
}) => {
    const [setNewPassword] = usePasswordRecoveryMutation()

    const defaultValues = {
        confirmPassword: usersPassword || '',
        password: usersPassword || '',
    }

    const resolver = yupResolver(setPasswordSchema)

    const methods = useForm({
        defaultValues,
        resolver,
        mode: 'onChange',
    })

    const {
        watch,
        formState: { errors },
    } = methods

    const handleSettingPassword = () => {
        const password = watch('password')

        if (type === 'registration') {
            setPassword(password)
            goForward()
        } else {
            setNewPassword({
                newPassword: password,
                mobilePhone,
            })
                .unwrap()
                .then(() => {
                    if (type === 'passwordRecovery') {
                        finishModal()
                        goForward()
                    }
                })
        }
    }

    const isDisable =
        !!errors.password ||
        !!errors.confirmPassword ||
        !watch('password') ||
        !watch('confirmPassword') ||
        watch('password') !== watch('confirmPassword')

    return (
        <FormHandler
            methods={methods}
            formId="SetPasswordForm"
            onSubmit={handleSettingPassword}
        >
            <Box mb={6} width="343px">
                <InputHandler
                    size="long"
                    type="password"
                    name="password"
                    label="Придумайте пароль"
                    placeholder="Придумайте пароль"
                    autoFocus
                    validateOnChangeAfterError
                    helperText={passwordErrorMessage}
                />
            </Box>

            <InputHandler
                size="long"
                type="password"
                name="confirmPassword"
                label="Подтвердите пароль"
                placeholder="Подтвердите пароль"
                validateOnChangeAfterError
                helperText={' '}
            />

            <Button
                type="submit"
                variant="contained"
                size="long"
                disabled={isDisable}
                sx={{ mt: '24px' }}
            >
                Продолжить
            </Button>
        </FormHandler>
    )
}
