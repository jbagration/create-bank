import { useEffect } from 'react'
import { getAuth, RecaptchaVerifier } from 'firebase/auth'
import app from 'src/firebase.config'
import { Button, Caption } from 'src/UI-components/atoms'
import {
    limitRepeatingCharacters,
    removeCharsFromTheEnd,
    separators,
} from 'src/utils'
import { Grid } from '@mui/material'

import { FormHandler, InputHandler } from '../../FormHandlers'

import { useVerifyPassportNumber } from './useVerifyPassportNumber'

import { captionStyles } from './VerifyPassportNumber.style'

export const VerifyPassportNumberForm = () => {
    const { methods, isDisabled, handlePassportVerification } =
        useVerifyPassportNumber()

    const handleSubmit = () => {
        if (!isDisabled) {
            handlePassportVerification()
        }
    }

    const auth = getAuth(app)

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {
                size: 'invisible',
            },
            auth
        )
    }, [])

    return (
        <FormHandler
            methods={methods}
            formId="verifyPassportForm"
            onSubmit={handleSubmit}
        >
            <Grid width="343px">
                <InputHandler
                    name="passportNumber"
                    label="Введите номер паспорта"
                    placeholder="Введите номер паспорта"
                    size="long"
                    type="text"
                    maxLength={20}
                    validateOnChangeAfterError
                    transformValue={limitRepeatingCharacters(separators)}
                    transformValueOnBlur={removeCharsFromTheEnd(separators)}
                />
                <Caption
                    text="На ваш номер телефона будет отправлено СМС с кодом"
                    sx={captionStyles}
                />
                <Button size="long" type="submit" disabled={isDisabled}>
                    Продолжить
                </Button>
            </Grid>
        </FormHandler>
    )
}
