import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/UI-components/atoms'
import {
    limitRepeatingCharacters,
    registrationDataSchema,
    removeCharsFromTheEnd,
    separators,
} from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, FormControl, FormHelperText, Grid } from '@mui/material'

import { FormHandler, InputHandler, RegistrationModalContext } from '../..'

export const SetClientDataForm = () => {
    const { goForward, setUsersData, usersData, isClient } = useContext(
        RegistrationModalContext
    )

    const defaultValues = {
        middleName: (!isClient(usersData) && usersData.middleName) || '',
        firstName: (!isClient(usersData) && usersData.firstName) || '',
        lastName: (!isClient(usersData) && usersData.lastName) || '',
        passportNumber:
            (!isClient(usersData) && usersData.passportNumber) || '',
    }

    const resolver = yupResolver(registrationDataSchema)

    const methods = useForm({
        defaultValues,
        resolver,
        mode: 'onChange',
    })

    const {
        getValues,
        formState: { errors, isValid },
        clearErrors,
    } = methods

    errors.middleName && !getValues('middleName') && clearErrors('middleName')

    if (isClient(usersData)) return null

    const isDisabled = !isValid

    const handleSetClientDataForm = () => {
        if (isDisabled) {
            return
        }

        setUsersData({
            ...usersData,
            firstName: getValues('firstName'),
            middleName: getValues('middleName'),
            lastName: getValues('lastName'),
            countryOfResidence: false,
            passportNumber: getValues('passportNumber'),
        })
        goForward()
    }

    return (
        <FormHandler
            methods={methods}
            formId="SetClientDataForm"
            onSubmit={handleSetClientDataForm}
        >
            <Box display="flex" mb={5}>
                <FormControl variant="standard">
                    <InputHandler
                        size="short"
                        type="text"
                        name="firstName"
                        label="Имя"
                        placeholder="Имя"
                        defaultValue={defaultValues.firstName}
                        autoFocus
                        maxLength={30}
                        validateOnChangeAfterError
                        transformValue={limitRepeatingCharacters(separators)}
                        transformValueOnBlur={removeCharsFromTheEnd(separators)}
                    />
                </FormControl>

                <Box ml={6}>
                    <FormControl variant="standard">
                        <InputHandler
                            size="short"
                            type="text"
                            name="middleName"
                            label="Отчество"
                            placeholder="Отчество"
                            defaultValue={defaultValues.middleName}
                            maxLength={30}
                            validateOnChangeAfterError
                            transformValue={limitRepeatingCharacters(
                                separators
                            )}
                            transformValueOnBlur={removeCharsFromTheEnd(
                                separators
                            )}
                        />
                        <FormHelperText sx={{ textAlign: 'left' }}>
                            Необязательно
                        </FormHelperText>
                    </FormControl>
                </Box>
            </Box>

            <Grid mb={5}>
                <InputHandler
                    size="long"
                    type="text"
                    name="lastName"
                    label="Фамилия"
                    placeholder="Фамилия"
                    defaultValue={defaultValues.lastName}
                    maxLength={30}
                    validateOnChangeAfterError
                    transformValue={limitRepeatingCharacters(separators)}
                    transformValueOnBlur={removeCharsFromTheEnd(separators)}
                />
            </Grid>

            <Grid mb={5}>
                <InputHandler
                    size="long"
                    type="text"
                    name="passportNumber"
                    label="Номер паспорта"
                    placeholder="Номер паспорта"
                    defaultValue={defaultValues.passportNumber}
                    maxLength={20}
                    validateOnChangeAfterError
                    transformValue={limitRepeatingCharacters(separators)}
                    transformValueOnBlur={removeCharsFromTheEnd(separators)}
                />
            </Grid>

            <Button size="long" type="submit" disabled={isDisabled}>
                Продолжить
            </Button>
        </FormHandler>
    )
}
