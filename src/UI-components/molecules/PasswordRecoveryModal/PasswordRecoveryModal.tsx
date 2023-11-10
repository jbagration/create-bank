import { FC } from 'react'

import { useCommonStepModalContext } from '../../../redux/hooks/useCommonStepModal'
import { Modal } from '../Modal'

import { PasswordRecoveryModalSteps } from './ModalSteps/PasswordRecoveryModalSteps'
import { PasswordRecoveryModalContext } from './PasswordRecoveryModalContext'

import { PasswordRecoveryModalData } from './PasswordRecoveryModal.type'

export const PasswordRecoveryModal: FC = () => {
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
    } = useCommonStepModalContext<PasswordRecoveryModalData>()

    return (
        <PasswordRecoveryModalContext.Provider
            value={{
                currentStep,
                prevStep,
                usersData,
                isModalFinished,
                goBack,
                goForward,
                setPrevStep,
                setUsersData,
                finishModal,
            }}
        >
            <Modal
                goBack={goBack}
                type="common"
                show
                title="Восстановление пароля"
                isModalFinished={isModalFinished}
            >
                <PasswordRecoveryModalSteps />
            </Modal>
        </PasswordRecoveryModalContext.Provider>
    )
}
