import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Nullable } from '../../types'

export const useCommonStepModalContext = <T>() => {
    const [isModalFinished, setIsModalFinished] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [prevStep, setPrevStep] = useState<Nullable<number>>(null)
    const [usersData, setUsersData] = useState({} as T)

    const navigate = useNavigate()
    const goForward = (e: React.MouseEvent<HTMLElement>) => {
        setPrevStep(currentStep)
        setCurrentStep((currentStep) => ++currentStep)
    }

    const goBack = (e: React.MouseEvent<HTMLElement>) => {
        if (currentStep === 0) {
            navigate('/login')
            return
        }
        setPrevStep(currentStep)
        if (currentStep === 2) {
            setCurrentStep((currentStep) => currentStep - 2)
            return
        }
        setCurrentStep((currentStep) => --currentStep)
    }

    const finishModal = () => {
        setIsModalFinished(true)
    }
    return {
        isModalFinished,
        finishModal,
        currentStep,
        setCurrentStep,
        prevStep,
        setPrevStep,
        usersData,
        setUsersData,
        goBack,
        goForward,
    }
}
