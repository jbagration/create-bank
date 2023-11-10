import { useState } from 'react'

type FormModalStatus =
    | 'dataChangedSuccess'
    | 'phoneNumberExist'
    | 'readonlyFieldTouched'
    | null

export const useUserDataFormStatus = () => {
    const [modal, setModal] = useState<FormModalStatus>(null)

    const clearStatus = () => {
        setModal(null)
    }
    const setStatusSuccess = () => {
        setModal('dataChangedSuccess')
    }
    const setStatusPhoneNumberExists = () => {
        setModal('phoneNumberExist')
    }
    const setStatusReadonlyFieldTouched = () => {
        setModal('readonlyFieldTouched')
    }

    return {
        modal,
        clearStatus,
        setStatusSuccess,
        setStatusPhoneNumberExists,
        setStatusReadonlyFieldTouched,
    }
}
