import { Dispatch, SetStateAction } from 'react'

export type ConfirmModalProps = {
    infoMessage: string
    successMessage: string
    confirmButtonText: string
    errorMessage?: string
    handleSubmit: Function
    type: string
    setType: Dispatch<SetStateAction<string>>
    isLoading: boolean
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
