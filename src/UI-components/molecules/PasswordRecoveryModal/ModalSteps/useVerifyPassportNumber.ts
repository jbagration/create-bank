import { useContext, useEffect, useState } from 'react'
import { signInWithPhoneNumber } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from 'src/firebase.config'
import { useGetPhoneByPassportNumberMutation } from 'src/redux/api/passwordRecoveryApi'
import { verifyPassportSchema } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'

import { PasswordRecoveryModalContext } from '../PasswordRecoveryModalContext'

import { message } from '../PasswordRecoveryModal.const'

export const useVerifyPassportNumber = () => {
    const { goForward, usersData, setUsersData } = useContext(
        PasswordRecoveryModalContext
    )

    const [verifyPassportNumber, { isLoading: verifyPassportIsLoading }] =
        useGetPhoneByPassportNumberMutation()

    const resolver = yupResolver(verifyPassportSchema)

    const defaultValues = {
        passportNumber: usersData.passportNumber || '',
    }

    const methods = useForm({
        defaultValues,
        resolver,
        mode: 'onChange',
    })

    const {
        watch,
        getValues,
        setError,
        formState: { isValid },
    } = methods

    const [isSmsSent, setIsSmsSent] = useState(false)

    const sendSmsCode = (phoneNumber: string) => {
        signInWithPhoneNumber(auth, `+${phoneNumber}`, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult

                goForward()
            })
            .catch(() => {
                const message =
                    'Некорректный номер телефона или ошибка на сервере'
                setError('passportNumber', {
                    message,
                })
                setIsSmsSent(false)
            })
    }

    const [isReadyToSend, setIsReadyToSend] = useState(false)

    const handlePassportVerification = () => {
        const passportNumber = { passportNumber: getValues('passportNumber') }
        verifyPassportNumber(passportNumber)
            .unwrap()
            .then((data) => {
                setUsersData({
                    ...usersData,
                    passportNumber: getValues('passportNumber'),
                    mobilePhone: data.mobilePhone,
                })
                setIsReadyToSend(true)
            })
            .catch((e) => {
                if (e.originalStatus === 400) {
                    setError('passportNumber', { message })
                    setIsSmsSent(false)
                }
            })
    }

    const isDisabled =
        !isValid ||
        !watch('passportNumber') ||
        verifyPassportIsLoading ||
        isSmsSent

    useEffect(() => {
        if (usersData.mobilePhone && isReadyToSend) {
            sendSmsCode(usersData.mobilePhone)
            setIsSmsSent(true)
        }
    }, [usersData, isReadyToSend])

    return {
        methods,
        handlePassportVerification,
        isDisabled,
    }
}
