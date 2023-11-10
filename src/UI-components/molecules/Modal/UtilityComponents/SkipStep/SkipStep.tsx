import { FC, useLayoutEffect } from 'react'

import { SkipStepProps } from './SkipStep.type'

export const SkipStep: FC<SkipStepProps> = ({
    goForward,
    goBack,
    prevStep,
    currentStep,
}) => {
    useLayoutEffect(() => {
        currentStep > Number(prevStep) ? goForward() : goBack()
    })
    return null
}
