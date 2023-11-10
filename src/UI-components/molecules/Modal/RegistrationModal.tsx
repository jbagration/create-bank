import React, { useContext } from 'react'

import {
    ClientUsersData,
    NonClientUsersData,
} from '../../../models/registrationUserData.dto'
import { useCommonStepModalContext } from '../../../redux/hooks/useCommonStepModal'
import { Header } from '../Header/Header'

import { Modal } from './Modal'
import { RegistrationModalContext } from './ModalContext'
import { RegistrationModalSteps } from './RegistrationModalSteps'

export const RegistrationModal = () => {
    const {
        goBack,
        goForward,
        currentStep,
        prevStep,
        usersData,
        setUsersData,
        setPrevStep,
        finishModal,
        isModalFinished,
    } = useCommonStepModalContext<ClientUsersData | NonClientUsersData>()

    const { isClient } = useContext(RegistrationModalContext)

    return (
        <>
            <Header main />
            <RegistrationModalContext.Provider
                value={{
                    currentStep,
                    prevStep,
                    usersData,
                    isModalFinished,
                    goBack,
                    goForward,
                    setPrevStep,
                    setUsersData,
                    isClient,
                    finishModal,
                }}
            >
                <Modal
                    goBack={goBack}
                    type="common"
                    show
                    title="Регистрация"
                    isModalFinished={isModalFinished}
                    isCloseBtnVisible
                >
                    <RegistrationModalSteps />
                </Modal>
            </RegistrationModalContext.Provider>
        </>
    )
}
