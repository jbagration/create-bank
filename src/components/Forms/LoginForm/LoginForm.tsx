import { ChangeEvent, useState } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

import { LoginDto } from '../../../models/Login.dto'
import {
    useLazySetUserInfoQuery,
    useLoginMutation,
} from '../../../redux/api/authApi'
import { Button } from '../../../UI-components/atoms'
import { countryCodeObject } from '../../../UI-components/atoms/Input/Input.utils'
import { TabsWithContent } from '../../../UI-components/atoms/Tabs'
import {
    FormHandler,
    InputHandler,
} from '../../../UI-components/molecules/FormHandlers'

import { getLoginSchema, LoginType } from './LoginForm.schema'

import { LoginFormData } from './LoginForm.type'

interface LoginFormProps {
    formId: string
}

export const LoginForm: React.FC<LoginFormProps> = ({
    formId,
}: LoginFormProps) => {
    const [inputInfo, setInputInfo] = useState<MuiTelInputInfo>({
        countryCallingCode: '7',
        countryCode: null,
        nationalNumber: '1',
        numberType: null,
        numberValue: '+71',
        reason: 'input',
    })

    const [loginErrorState, setLoginErrorState] = useState<{
        passport: boolean
        phoneNumber: boolean
    }>({
        passport: false,
        phoneNumber: false,
    })
    const [loginType, setLoginType] = useState<LoginType>('phoneNumber')

    const handleTabChange = (newTabIndex: number) => {
        resetField('password')
        resetField('passport')
        resetField('phoneNumber')
        if (newTabIndex === 0) {
            setLoginType('phoneNumber')
            return
        }
        setLoginType('passport')
    }

    const resolver = yupResolver(getLoginSchema(loginType))

    const defaultValues: LoginFormData = {
        phoneNumber: '',
        passport: '',
        password: '',
    }
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const [setUserInfo] = useLazySetUserInfoQuery()

    const methods = useForm<LoginFormData>({
        defaultValues,
        resolver,
        mode: 'onChange',
    })
    const {
        formState: { errors },
        watch,
        setError,
        resetField,
        clearErrors,
    } = methods

    const clearLoginError = () => {
        if (!loginErrorState[loginType]) return
        clearErrors(['password', loginType])
        setLoginErrorState({ ...loginErrorState, [loginType]: false })
    }

    const handleInputChange = (
        e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        info: MuiTelInputInfo
    ) => {
        setInputInfo(info)
    }

    const onSubmitHandler: SubmitHandler<LoginFormData> = async (
        data: LoginFormData
    ) => {
        const loginRequestData: LoginDto = {
            password: data.password,
            login: '',
            type: 'PASSPORT_NUMBER',
        }
        if (loginType === 'passport') {
            loginRequestData.login = data.passport
            loginRequestData.type = 'PASSPORT_NUMBER'
        } else {
            const phoneNumber = data.phoneNumber.replace(/[^0-9.]/g, '')
            loginRequestData.login = phoneNumber
            loginRequestData.type = 'PHONE_NUMBER'
        }

        try {
            await login(loginRequestData)
                .unwrap()
                .then(() => setUserInfo())
            navigate('/user_main', { replace: true })
        } catch (e) {
            const error = e as FetchBaseQueryError

            if (
                (error.status === 'PARSING_ERROR' &&
                    error.originalStatus === 400) ||
                error.status === 400
            ) {
                setError(loginType, {})
                setError('password', {
                    message:
                        'Неверный логин или пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?", чтобы сбросить его.',
                })
                setLoginErrorState({
                    ...loginErrorState,
                    [loginType]: true,
                })
            }
        }
    }

    const [, ...phoneNumber] = watch('phoneNumber').split(' ')

    const isFieldEmpty = (fieldName: keyof LoginFormData) => !watch(fieldName)
    const isDisabled =
        loginType === 'passport'
            ? !!errors.passport ||
              !!errors.password ||
              isFieldEmpty('password') ||
              isFieldEmpty('passport')
            : !!errors.phoneNumber ||
              !!errors.password ||
              phoneNumber.join('').length !==
                  countryCodeObject[
                      inputInfo.countryCallingCode as keyof typeof countryCodeObject
                  ] ||
              isFieldEmpty('password')

    return (
        <FormHandler
            formId={formId}
            methods={methods}
            onSubmit={onSubmitHandler}
        >
            <TabsWithContent
                onTabChange={handleTabChange}
                labels={['По телефону', 'По паспорту']}
            >
                <Box mt={4}>
                    {loginType === 'phoneNumber' && (
                        <InputHandler
                            size="long"
                            type="tel"
                            name="phoneNumber"
                            label="Телефон"
                            placeholder="Телефон"
                            defaultValue={defaultValues.phoneNumber}
                            onChange={handleInputChange}
                            info={inputInfo}
                        />
                    )}
                    {loginType === 'phoneNumber' && (
                        <Box mt={2} mb={4}>
                            <InputHandler
                                size="long"
                                type="password"
                                name="password"
                                label="Пароль"
                                placeholder="Пароль"
                                defaultValue={defaultValues.password}
                                onChange={clearLoginError}
                            />
                        </Box>
                    )}
                </Box>
                <Box mt={4}>
                    {loginType === 'passport' && (
                        <InputHandler
                            size="long"
                            type="text"
                            name="passport"
                            label="Номер паспорта"
                            placeholder="Номер паспорта"
                            defaultValue={defaultValues.passport}
                            onChange={clearLoginError}
                        />
                    )}
                    {loginType === 'passport' && (
                        <Box mt={4} mb={4}>
                            <InputHandler
                                size="long"
                                type="password"
                                name="password"
                                label="Пароль"
                                placeholder="Пароль"
                                defaultValue={defaultValues.password}
                                onChange={clearLoginError}
                            />
                        </Box>
                    )}
                </Box>
            </TabsWithContent>
            <Button
                disabled={isDisabled}
                type="submit"
                size="long"
                buttonVariant="primary"
            >
                Войти
            </Button>
        </FormHandler>
    )
}
