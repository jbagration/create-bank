import { ChangeEvent } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'

export interface FormData {
    firstName: string
    lastName: string
    middleName: string
    passportNumber: string
    phoneNumber: string
    email: string
    isResident: boolean
}

export interface UserDataFormProps {
    formId: string
    initialValues?: Partial<FormData>
}

export interface UserDataFormGridProps {
    setStatusReadonlyFieldTouched: () => void
    isSubmitDisabled: boolean
    initialValues: Partial<FormData>
    handleInputChange: (
        e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        info: MuiTelInputInfo
    ) => void
    info: MuiTelInputInfo
}

export interface FormDirtyFields {
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    passportNumber?: boolean
    phoneNumber?: boolean
    email?: boolean
    isResident?: boolean
}
