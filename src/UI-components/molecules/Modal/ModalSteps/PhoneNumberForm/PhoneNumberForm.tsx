import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from 'firebase/auth'
import { MuiTelInputInfo } from 'mui-tel-input'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { phoneNumberForRegistrationRules } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography } from '@mui/material'

import app from '../../../../../firebase.config'
import { useLazyCheckIfPhoneNumberExistsQuery } from '../../../../../redux/api/registrationApi'
import { Nullable } from '../../../../../types'
import { Button, Caption } from '../../../../atoms'
import { countryCodeObject } from '../../../../atoms/Input/Input.utils'
import { FormHandler, InputHandler } from '../../../FormHandlers'
import {
    ClientUsersType,
    NonClientUsersType,
    RegistrationModalContext,
} from '../../ModalContext'

import {
    CaptionContainer,
    TabCheckbox,
} from '../../../../organisms/MyCards/MycardsManageTab/ManageTab.style'
import { captionBoxStyles } from './PhoneNumberForm.style'

const resolver = yupResolver(phoneNumberForRegistrationRules)

export const PhoneNumberForm: FC = () => {
    const {
        goForward,
        setUsersData,
        usersData,
        usersData: { inputInfo: userInputInfo },
    } = useContext(RegistrationModalContext)

    const [inputInfo, setInputInfo] = useState<MuiTelInputInfo>({
        countryCallingCode: userInputInfo?.countryCallingCode || null,
        countryCode: userInputInfo?.countryCode || null,
        nationalNumber: userInputInfo?.nationalNumber || null,
        numberType: userInputInfo?.numberType || null,
        numberValue: userInputInfo?.numberValue || null,
        reason: userInputInfo?.reason || 'input',
    })

    const navigate = useNavigate()

    const [prevPhoneNumber, setPrevPhoneNumber] =
        useState<Nullable<string>>(null)
    const [isSmsSent, setIsSmsSent] = useState(false)

    const auth = getAuth(app)

    const [checkIfPhoneNumberExists, { isLoading: checkPhoneNumberIsLoading }] =
        useLazyCheckIfPhoneNumberExistsQuery()

    const defaultValues = {
        phoneNumber: `+${usersData.mobilePhone}` || '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onTouched',
        resolver,
    })

    const [isChecked, setChecked] = useState<boolean>(false)

    const {
        watch,
        getValues,
        setError,
        formState: { isValid },
    } = methods

    const sendSmsCode = (phoneNumber: string) => {
        setIsSmsSent(true)
        signInWithPhoneNumber(auth, `+${phoneNumber}`, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
                goForward()
            })
            .catch((error) => {
                const message = 'Ошибка на сервере. Попробуйте позже'
                setError('phoneNumber', {
                    message,
                })
                setIsSmsSent(false)
                setPrevPhoneNumber(getValues('phoneNumber'))
            })
    }

    const checkPhoneNumber = () => {
        const phoneNumber = getValues('phoneNumber').replace(/[^0-9.]/g, '')
        let message: string | undefined

        checkIfPhoneNumberExists(phoneNumber)
            .unwrap()
            .then((user) => {
                const { clientStatus, mobilePhone } = user
                switch (clientStatus) {
                    case 'NOT_REGISTERED':
                        setUsersData({
                            ...usersData,
                            clientStatus,
                            mobilePhone,
                            id: user.id,
                            inputInfo,
                        } as ClientUsersType)
                        break
                    case 'NOT_CLIENT':
                        setUsersData({
                            ...usersData,
                            clientStatus,
                            mobilePhone,
                            inputInfo,
                        } as NonClientUsersType)
                        break
                    default:
                        break
                }
            })
            .then(() => {
                sendSmsCode(phoneNumber)
            })
            .catch((e) => {
                if (e.status >= 500) {
                    setError('phoneNumber', {
                        message: 'Ошибка на сервере. Попробуйте позже',
                    })
                }
                if (e.status === 409) {
                    setIsSmsSent(false)
                    message =
                        'Пользователь с таким номером телефона уже \nзарегистрирован. Выполните вход или \nпроверьте правильность введенного номера'
                    setError('phoneNumber', {
                        message,
                    })
                    setPrevPhoneNumber(getValues('phoneNumber'))
                }
            })
    }

    const handleClickPolicy = () => {
        navigate('/registration/policy')
    }

    const handleClickRules = () => {
        navigate('/registration/rules')
    }

    const captionBoxStylesSx = captionBoxStyles()

    const [, ...phoneNumber] = watch('phoneNumber').split(' ')

    const [isPhoneNumberLength, setIsPhoneNumberLength] = useState(
        phoneNumber.join('').length !==
            countryCodeObject[
                inputInfo.countryCallingCode as keyof typeof countryCodeObject
            ]
    )

    useEffect(() => {
        if (`+${usersData.mobilePhone}`) {
            setIsPhoneNumberLength(false)
        }
        window.recaptchaVerifier = new RecaptchaVerifier(
            'sign-in-button',
            {
                size: 'invisible',
            },
            auth
        )
    }, [])

    const isDisabled =
        isPhoneNumberLength ||
        checkPhoneNumberIsLoading ||
        !isChecked ||
        isSmsSent ||
        !isValid

    const handleInputChange = (
        e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        info: MuiTelInputInfo
    ) => {
        setInputInfo(info)
    }

    return (
        <FormHandler
            methods={methods}
            formId="PhoneNumberForm"
            onSubmit={checkPhoneNumber}
        >
            <InputHandler
                size="long"
                type="tel"
                name="phoneNumber"
                label="Введите номер телефона"
                placeholder="Телефон"
                onChange={handleInputChange}
                info={inputInfo}
            />

            <Box sx={captionBoxStylesSx}>
                <Typography
                    variant="caption"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Caption component>
                        <CaptionContainer sx={{ p: '12px 4px' }}>
                            <TabCheckbox
                                sx={{ mr: '6px' }}
                                checked={isChecked}
                                onChange={() => setChecked(!isChecked)}
                            />
                        </CaptionContainer>
                    </Caption>

                    <Typography
                        fontSize="12px"
                        lineHeight="16px"
                        padding="8px 6px"
                    >
                        Я ознакомлен&#8260;-а с &nbsp;
                        <Link to="" onMouseDown={handleClickPolicy}>
                            Политикой конфиденциальности
                        </Link>
                        &nbsp; и &nbsp;
                        <Link to="" onMouseDown={handleClickRules}>
                            Правилами дистанционного банковского обслуживания
                        </Link>
                    </Typography>
                </Typography>
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
            <div id="sign-in-button" />
        </FormHandler>
    )
}
