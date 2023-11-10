import { useContext } from 'react'
import { Box } from '@mui/material'

import { Stepper } from '../../atoms/Stepper/Stepper'

import { RegistrationModalContext } from './ModalContext'
import {
    FinalStep,
    PhoneNumberForm,
    SecurityQuestionForm,
    SetClientDataForm,
    SetPasswordForm,
    SmsVerificationForm,
} from './ModalSteps'
import { StepperModal } from './StepperModal'
import { SkipStep } from './UtilityComponents'

export const RegistrationModalSteps = () => {
    const {
        currentStep,
        isModalFinished,
        isClient,
        usersData,
        setUsersData,
        goBack,
        goForward,
        prevStep,
    } = useContext(RegistrationModalContext)

    const setPassword = (password: string) => {
        setUsersData({ ...usersData, password })
    }
    return (
        <>
            <Box paddingLeft="115px" marginBottom="46px">
                {currentStep > 0 && !isModalFinished && (
                    <Stepper
                        activeStep={
                            isClient(usersData)
                                ? currentStep > 1
                                    ? currentStep - 1
                                    : currentStep
                                : currentStep
                        }
                        stepperVariant={
                            isClient(usersData) ? 'ThreeStepsReg' : 'FourSteps'
                        }
                    />
                )}
            </Box>
            <StepperModal currentStep={currentStep}>
                <PhoneNumberForm />
                <SmsVerificationForm
                    goForward={goForward}
                    mobilePhone={usersData.mobilePhone}
                />
                {isClient(usersData) ? (
                    <SkipStep
                        goBack={goBack}
                        goForward={goForward}
                        prevStep={prevStep}
                        currentStep={currentStep}
                    />
                ) : (
                    <SetClientDataForm />
                )}
                <SetPasswordForm
                    type="registration"
                    goForward={goForward}
                    setPassword={setPassword}
                    usersPassword={usersData.password}
                />
                <SecurityQuestionForm />
                <FinalStep type="registration" />
            </StepperModal>
        </>
    )
}
