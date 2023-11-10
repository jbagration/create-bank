import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

import {
    useNewPasswordMutation,
    useNewQuestionMutation,
} from '../../../../../redux/api/securityApi'

import { optionalSecurityScheme } from './Security.scheme'

import {
    controlQuestionChanged,
    passwordAndQuestionChanged,
    passwordChanged,
} from './Security.const'

import { SecurityFormType } from './Security.type'

export const useSecurityForm = () => {
    const [isOpen, setOpen] = useState(false)
    const [message, setMessage] = useState('')

    const [changePassword, { isError: isPasswordErr }] =
        useNewPasswordMutation()
    const [changeQuestion, { isError: isQuestionErr }] =
        useNewQuestionMutation()

    const navigate = useNavigate()

    const resolver = yupResolver(optionalSecurityScheme)

    const methods = useForm({
        resolver,
        mode: 'onChange',
    })

    const {
        reset,
        formState: { errors },
        setError,
        watch,
    } = methods

    const handleSubmit = async (data: SecurityFormType) => {
        const {
            currentPassword,
            password,
            confirmPassword,
            securityQuestion,
            securityAnswer,
        } = data

        const passwordData = {
            password: currentPassword,
            newPassword: password,
        }
        const securityData = {
            securityQuestion,
            securityAnswer,
        }

        const isPassword = currentPassword && password && confirmPassword
        const isSecurityQuestion = securityQuestion && securityAnswer

        try {
            if (isPassword && isSecurityQuestion) {
                await changePassword(passwordData).unwrap()
                setMessage(passwordAndQuestionChanged)

                await changeQuestion(securityData).unwrap()
                setMessage(passwordAndQuestionChanged)
                setOpen(true)

                return
            }

            if (isPassword) {
                await changePassword(passwordData).unwrap()
                setMessage(passwordChanged)
                setOpen(true)

                return
            }

            if (isSecurityQuestion) {
                await changeQuestion(securityData).unwrap()
                setMessage(controlQuestionChanged)
                setOpen(true)

                return
            }
        } catch (e) {
            const error = e as FetchBaseQueryError

            if (error.status === 400) {
                setError('currentPassword', {
                    message: 'Некорректный текущий пароль. Попробуйте ещё раз',
                })
            }
        }
    }

    const handleReset = () => {
        reset()
        navigate(0)
    }

    const isFieldEmpty = (fieldName: string) => !watch(fieldName)

    const currentPasswordField =
        !!errors.currentPassword || isFieldEmpty('currentPassword')

    const passwordField = !!errors.password || isFieldEmpty('password')

    const confirmPassword =
        isFieldEmpty('confirmPassword') || !!errors.confirmPassword

    const securityQuestion =
        !!errors.securityQuestion || isFieldEmpty('securityQuestion')

    const securityAnswer =
        !!errors.securityAnswer || isFieldEmpty('securityAnswer')

    const isPasswordFields =
        currentPasswordField || passwordField || confirmPassword

    const isSecurityFields = securityQuestion || securityAnswer

    const isDisabled = isSecurityFields && isPasswordFields

    return {
        isDisabled,
        isOpen,
        setOpen,
        handleReset,
        handleSubmit,
        watch,
        methods,
        message,
        isPasswordErr,
        isQuestionErr,
    }
}
