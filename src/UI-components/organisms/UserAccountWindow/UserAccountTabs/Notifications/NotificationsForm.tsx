import { FC, useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid } from '@mui/material'

import { useSetEmailMutation } from '../../../../../redux/api/notificationApi'
import { Button, EditButton } from '../../../../atoms'
import { FormHandler, InputHandler } from '../../../../molecules'

import { emailSchema } from './Notifications.scheme'

import { formElementsContainerStyles } from './Notifications.style'

import { NotificationFormData, NotificationsProps } from './Notifications.type'

export const NotificationForm: FC<NotificationsProps> = ({ email }) => {
    const [isInputDisabled, setInputDisabled] = useState(false)
    const [newEmail, setNewEmail] = useState(email || '')

    const [updateEmail] = useSetEmailMutation()

    const defaultValues = {
        userEmail: '',
    }

    const resolver = yupResolver(emailSchema)

    const methods = useForm({
        defaultValues,
        resolver,
        mode: 'onChange',
    })

    const {
        formState: { errors },
        control,
        setValue,
    } = methods

    const { dirtyFields } = useFormState({
        control,
    })

    const isDisabled = !!errors.userEmail || !dirtyFields.userEmail

    useEffect(() => {
        if (email) {
            setNewEmail(email)
            setInputDisabled(true)
            setValue('userEmail', email)
        }
    }, [email, setValue])

    const handleEmail = (data: NotificationFormData) => {
        setNewEmail(data.userEmail)
        setInputDisabled(true)

        updateEmail({ newEmail: data.userEmail })

        return data
    }

    const handleEditInput = () => {
        setNewEmail('')
        setInputDisabled(false)
    }

    return (
        <FormHandler methods={methods} onSubmit={handleEmail}>
            <Grid sx={formElementsContainerStyles}>
                <InputHandler
                    type="text"
                    name="userEmail"
                    size="long"
                    placeholder="Введите email"
                    label="Введите email"
                    defaultValue={defaultValues.userEmail}
                    required
                    disabled={isInputDisabled}
                />

                {!newEmail && (
                    <Button
                        sx={{ order: 2 }}
                        type="submit"
                        size="medium"
                        buttonVariant="primary"
                        disabled={isDisabled}
                    >
                        Подтвердить
                    </Button>
                )}

                {newEmail && <EditButton handleClick={handleEditInput} />}
            </Grid>
        </FormHandler>
    )
}
