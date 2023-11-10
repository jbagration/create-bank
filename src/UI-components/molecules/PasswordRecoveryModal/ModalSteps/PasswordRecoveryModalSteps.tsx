import { useContext } from 'react'
import { Box } from '@mui/material'

import { Stepper } from '../../../atoms/Stepper/Stepper'
import {
    FinalStep,
    SetPasswordForm,
    SmsVerificationForm,
    StepperModal,
} from '../../Modal'
import { PasswordRecoveryModalContext } from '../PasswordRecoveryModalContext'

import { VerifyPassportNumberForm } from './VerifyPassportNumberForm'

export const PasswordRecoveryModalSteps = () => {
    const {
        currentStep,
        isModalFinished,
        usersData,
        setUsersData,
        goForward,
        finishModal,
    } = useContext(PasswordRecoveryModalContext)

    const setPassword = (password: string) => {
        setUsersData({ ...usersData, newPassword: password })
    }

    return (
        <>
            <Box pl="115px" mb="46px">
                {!isModalFinished && (
                    <Stepper
                        activeStep={currentStep + 1}
                        stepperVariant="ThreeStepsPassword"
                    />
                )}
            </Box>
            <StepperModal currentStep={currentStep}>
                <VerifyPassportNumberForm />
                <SmsVerificationForm
                    goForward={goForward}
                    mobilePhone={usersData.mobilePhone}
                />
                <SetPasswordForm
                    type="passwordRecovery"
                    mobilePhone={usersData.mobilePhone}
                    goForward={goForward}
                    setPassword={setPassword}
                    usersPassword={usersData.newPassword}
                    finishModal={finishModal}
                />
                <FinalStep type="passwordRecovery" />
            </StepperModal>
            <div id="recaptcha-container" />
        </>
    )
}
