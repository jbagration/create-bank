import { FC, useEffect, useState } from 'react'
import { getAuth, signInWithPhoneNumber } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { Box, Grid, Typography } from '@mui/material'

import { CountDownTimer } from '../../../../components/CountDownTimer'
import app from '../../../../firebase.config'
import { useBlockPhoneNumberMutation } from '../../../../redux/api/registrationApi'
import { Button } from '../../../atoms'
import { FormHandler, InputHandler } from '../..'

import { SmsVerificationFormProps } from './ModalSteps.type'

export const SmsVerificationForm: FC<SmsVerificationFormProps> = ({
    goForward,
    mobilePhone,
}) => {
    const [isAbleToSendData, setIsAbleToSendData] = useState(true)

    const [blockSeconds, setBlockSeconds] = useState(0)

    const [timerRendersCount, setTimerRenderCount] = useState(1)

    const [attemptsLeft, setAttemptsLeft] = useState(3)

    const [blockPhoneNumber] = useBlockPhoneNumberMutation()

    const defaultValues = {
        smsCode: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
    })

    const { getValues, watch, setError, clearErrors } = methods

    const auth = getAuth(app)

    const resendSmsCode = () => {
        const phoneNumber = `+${mobilePhone}`
        let message: string | undefined

        signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
                setTimerRenderCount((p) => p + 1)
            })
            .catch((error) => {
                message = 'СМС код не отправлен'
                setError('smsCode', {
                    message,
                })
            })
    }

    const isDisabled =
        !isAbleToSendData || !watch('smsCode') || watch('smsCode').length !== 6

    const verifySms = async () => {
        const code = getValues('smsCode')
        const { confirmationResult } = window
        if (!isDisabled) {
            try {
                await confirmationResult.confirm(code)
                goForward()
            } catch (e) {
                setAttemptsLeft((p) => p - 1)
                if (attemptsLeft === 0) {
                    setBlockSeconds(600)
                }
            }
        }
    }

    const SendCodeAgainComponent = () => {
        return (
            <Typography
                sx={{ cursor: 'pointer' }}
                variant="strong3"
                onClick={resendSmsCode}
            >
                Отправить код повторно
            </Typography>
        )
    }

    const countDown = attemptsLeft > 0 ? 90 : blockSeconds || 600

    useEffect(() => {
        if (attemptsLeft === 3) return

        let message: string | undefined

        if (attemptsLeft === 2) {
            setTimerRenderCount((p) => p + 1)
            message = 'Неверный код, у вас осталось 2 попытки'
        }

        if (attemptsLeft === 1) {
            setTimerRenderCount((p) => p + 1)
            message = 'Неверный код, у вас осталась 1 попытка'
        }

        if (attemptsLeft === 0) {
            if (!blockSeconds) {
                blockPhoneNumber({ mobilePhone })
            }

            setTimerRenderCount((p) => p + 1)
            setIsAbleToSendData(false)
            message =
                'Слишком много неудачных попыток. Вы сможете \nзапросить код еще раз через 10 минут, нажав кнопку ниже'
        }

        setError('smsCode', {
            message,
        })
    }, [attemptsLeft, blockPhoneNumber, blockSeconds, mobilePhone, setError])
    return (
        <FormHandler
            methods={methods}
            formId="SmsVerificationForm"
            onSubmit={verifySms}
        >
            <Grid mb={6} width="343px" color="Text.Primary">
                <Typography variant="body1">
                    Мы отправили СМС с 6-значным кодом подтверждения на номер +
                    {mobilePhone}
                </Typography>
            </Grid>
            <InputHandler
                size="long"
                type="smsCode"
                name="smsCode"
                label="Введите код из СМС"
                outFocusLabel="Укажите код"
                placeholder="******"
                autoFocus={false}
            />

            <Box>
                <CountDownTimer
                    key={timerRendersCount}
                    seconds={countDown}
                    fallback={SendCodeAgainComponent}
                    onTimerDestroy={() => {
                        if (blockSeconds) {
                            setAttemptsLeft(3)
                            setBlockSeconds(0)
                        }
                        clearErrors()
                        setIsAbleToSendData(true)
                    }}
                />
            </Box>

            <Button
                type="submit"
                variant="contained"
                size="long"
                disabled={isDisabled}
                sx={{ mt: 6 }}
            >
                Продолжить
            </Button>
        </FormHandler>
    )
}
