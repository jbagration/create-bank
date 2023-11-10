import { ChangeEvent, FC, useState } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

import { FormHandler } from '../../../UI-components/molecules'

import { useUserDataForm } from './hooks/useUserDataForm'
import { useUserDataFormStatus } from './hooks/useUserDataFormStatus'
import { useUserDataFormSubmit } from './hooks/useUserDataFormSubmit'
import { UserDataFormGrid } from './UserDataFormGrid'
import { UserDataModal } from './UserDataModal'

import { defaultUserDataFormValues } from './UserDataForm.const'

import { FormData, UserDataFormProps } from './UserDataForm.type'

export const UserDataForm: FC<UserDataFormProps> = ({
    formId,
    initialValues = defaultUserDataFormValues,
}) => {
    const initialCountryCallingCode =
        initialValues.phoneNumber?.slice(0, 1) === '7' ? '7' : '375'

    const [inputInfo, setInputInfo] = useState<MuiTelInputInfo>({
        countryCallingCode: initialCountryCallingCode,
        countryCode: null,
        nationalNumber: '1',
        numberType: null,
        numberValue: '',
        reason: 'input',
    })

    const { methods, errors, dirtyFields, resetValues } = useUserDataForm(
        initialValues,
        inputInfo.countryCode
    )

    const handleInputChange = (
        e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        info: MuiTelInputInfo
    ) => {
        setInputInfo(info)
    }

    const {
        modal,
        clearStatus,
        setStatusSuccess,
        setStatusPhoneNumberExists,
        setStatusReadonlyFieldTouched,
    } = useUserDataFormStatus()

    const submitForm = useUserDataFormSubmit(dirtyFields, setStatusSuccess)

    const handleSubmit = async ({ phoneNumber, email }: FormData) => {
        try {
            await submitForm({ phoneNumber, email })
        } catch (error) {
            const fetchBaseQueryError = error as FetchBaseQueryError
            if (fetchBaseQueryError.status === 409) setStatusPhoneNumberExists()
        }
    }

    const handleModalClose = () => {
        if (modal === 'phoneNumberExist') {
            resetValues()
        }
        clearStatus()
    }

    const isFieldsUntouched = !dirtyFields.email && !dirtyFields.phoneNumber
    const hasErrors = !!errors.email || !!errors.phoneNumber
    const isSubmitDisabled = isFieldsUntouched || hasErrors

    return (
        <>
            <FormHandler
                formId={formId}
                methods={methods}
                onSubmit={handleSubmit}
            >
                <UserDataFormGrid
                    initialValues={initialValues}
                    setStatusReadonlyFieldTouched={
                        setStatusReadonlyFieldTouched
                    }
                    isSubmitDisabled={isSubmitDisabled}
                    handleInputChange={handleInputChange}
                    info={inputInfo}
                />
            </FormHandler>

            <UserDataModal
                isOpen={modal === 'dataChangedSuccess'}
                type="success"
                message="Данные изменены"
                onConfirmButtonClick={handleModalClose}
            />
            <UserDataModal
                isOpen={modal === 'phoneNumberExist'}
                type="attention"
                message="Такой номер существует"
                onConfirmButtonClick={handleModalClose}
            />
            <UserDataModal
                isOpen={modal === 'readonlyFieldTouched'}
                type="attention"
                message="Для редактирования этих данных Вам необходимо обратиться в любое отделение банка с документом, удостоверяющим личность"
                onConfirmButtonClick={handleModalClose}
            />
        </>
    )
}
