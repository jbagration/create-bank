import { FC } from 'react'
import {
    StepConnector,
    Stepper,
    StepperProps as MuiStepperProps,
} from '@mui/material'

import type { StepperProps } from './Stepper.type'
import {
    connectorFourStepsStyles,
    connectorThreeStepsStyles,
    stepperStyles,
} from './Style'

export const StepperRoot: FC<MuiStepperProps & StepperProps> = ({
    stepperVariant = '',
    ...props
}) => {
    const stepperStylesSx = stepperStyles({ stepperVariant })

    return (
        <>
            {stepperVariant === 'ThreeStepsPassword' && (
                <Stepper
                    alternativeLabel
                    sx={stepperStylesSx}
                    connector={<StepConnector sx={connectorThreeStepsStyles} />}
                    {...props}
                />
            )}
            {stepperVariant === 'ThreeStepsReg' && (
                <Stepper
                    alternativeLabel
                    sx={stepperStylesSx}
                    connector={<StepConnector sx={connectorThreeStepsStyles} />}
                    {...props}
                />
            )}
            {stepperVariant === 'FourSteps' && (
                <Stepper
                    alternativeLabel
                    sx={stepperStylesSx}
                    connector={<StepConnector sx={connectorFourStepsStyles} />}
                    {...props}
                />
            )}
        </>
    )
}
