import React from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'

import {
    ClientUsersData,
    NonClientUsersData,
} from '../../../models/registrationUserData.dto'
import { Nullable } from '../../../types'

export interface ICommonStepModalProps {
    currentStep: number
    prevStep: Nullable<number>
    setPrevStep: (newPrevStep: any) => void
    goForward: (e?: any) => void
    goBack: (e?: any) => void
    isModalFinished: boolean
    finishModal: (e?: any) => void
}

export interface StepModalContextProps<ModalData>
    extends ICommonStepModalProps {
    usersData: ModalData
    setUsersData: (usersData: ModalData) => void
}

type AdditionalUsersType = {
    inputInfo?: MuiTelInputInfo
    isSmsSent?: boolean
}

export interface ClientUsersType extends ClientUsersData, AdditionalUsersType {}

export interface NonClientUsersType
    extends NonClientUsersData,
        AdditionalUsersType {}

export interface IRegistrationModalContext
    extends StepModalContextProps<ClientUsersType | NonClientUsersType> {
    isClient: (
        usersData: ClientUsersType | NonClientUsersType
    ) => usersData is ClientUsersType
}

const isClient = (
    usersData: ClientUsersType | NonClientUsersType
): usersData is ClientUsersType => {
    return 'id' in usersData
}

const defaultContextValue = { isClient } as IRegistrationModalContext

export const RegistrationModalContext = React.createContext(defaultContextValue)
