import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import {
    charactersLimitSecurityQuestion,
    limitRepeatingCharacters,
    removeCharsFromTheEnd,
    securityQuestionFormSchema,
    separators,
} from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid } from '@mui/material'

import { FormHandler, InputHandler, RegistrationModalContext } from '../..'

import { controlQuestions as questions } from '../../../atoms/DropdownMenu/DropdownMenu.const'

export const SecurityQuestionForm = () => {
    const [dropdownValue, setDropdownValue] = useState('')
    const { goForward, usersData, finishModal, setUsersData } = useContext(
        RegistrationModalContext
    )

    const defaultValues = {
        securityQuestion: usersData.securityQuestion || '',
        securityAnswer: usersData.securityAnswer || '',
    }

    const resolver = yupResolver(securityQuestionFormSchema)

    const methods = useForm({ defaultValues, resolver, mode: 'onChange' })

    const {
        setValue,
        getValues,
        watch,
        formState: { isValid },
    } = methods

    useEffect(() => {
        if (dropdownValue === 'Написать свой вопрос') {
            setValue('securityQuestion', '')
        } else {
            setValue('securityQuestion', dropdownValue)
        }
    }, [dropdownValue])

    const isDisabled =
        !isValid || !watch('securityQuestion') || !watch('securityAnswer')

    const handleSecurityQuestionForm = () => {
        if (isDisabled) {
            return
        }

        setUsersData({
            ...usersData,
            securityQuestion: getValues('securityQuestion'),
            securityAnswer: getValues('securityAnswer'),
        })
        finishModal()
        goForward()
    }

    const handleContinueClick = () => {
        setUsersData({
            ...usersData,
            securityQuestion: getValues('securityQuestion'),
            securityAnswer: getValues('securityAnswer'),
        })
        finishModal()
        goForward()
    }

    return (
        <FormHandler
            methods={methods}
            formId="SecurityQuestionForm"
            onSubmit={handleSecurityQuestionForm}
        >
            <DropdownMenu
                size="long"
                options={questions}
                placeholder="Выберите контрольный вопрос"
                label="Выберите контрольный вопрос"
                getValue={(value) => {
                    setDropdownValue(value)
                }}
            />

            {dropdownValue === 'Написать свой вопрос' && (
                <Grid mt={6}>
                    <InputHandler
                        onHandleSubmit={handleSecurityQuestionForm}
                        name="securityQuestion"
                        size="long"
                        type="text"
                        placeholder="Напишите свой вопрос"
                        label="Напишите свой вопрос"
                        multiline
                        transformValue={limitRepeatingCharacters(separators)}
                        transformValueOnBlur={removeCharsFromTheEnd(separators)}
                        isCounter
                        countLimit={charactersLimitSecurityQuestion}
                    />
                </Grid>
            )}

            <Grid mt={6}>
                <InputHandler
                    onHandleSubmit={handleSecurityQuestionForm}
                    name="securityAnswer"
                    size="long"
                    type="text"
                    placeholder="Напишите ответ на контрольный вопрос"
                    label="Напишите ответ на контрольный вопрос"
                    multiline
                    transformValue={limitRepeatingCharacters(separators)}
                    transformValueOnBlur={removeCharsFromTheEnd(separators)}
                    isCounter
                    countLimit={charactersLimitSecurityQuestion}
                />
            </Grid>
            <Button
                onClick={handleContinueClick}
                type="submit"
                variant="contained"
                size="long"
                sx={{ mt: 6 }}
                disabled={isDisabled}
            >
                Продолжить
            </Button>
        </FormHandler>
    )
}
