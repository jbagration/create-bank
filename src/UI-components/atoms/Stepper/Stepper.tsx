import { FC } from 'react'
import {
    Box,
    Step,
    StepIconProps,
    StepLabel,
    StepperProps as MuiStepperProps,
    Typography,
} from '@mui/material'

import { StepperRoot } from './StepperRoot'
import { stepIconStyles, stepLabelStyles } from './Style'

import { setStepperVariant } from './Stepper.const'

import { StepperProps } from './Stepper.type'

export const Stepper: FC<MuiStepperProps & StepperProps> = ({
    stepperVariant = 'ThreeStepsReg',
    activeStep,
    ...props
}) => {
    const stepperWord = setStepperVariant(stepperVariant)
    const stepLabelStylesSx = stepLabelStyles({ stepperVariant })

    function QontoStepIcon(props: StepIconProps) {
        const { completed, className, icon } = props

        return (
            <Box className={className} sx={stepIconStyles}>
                {completed ? (
                    <div className="QontoStepIcon-completedIcon" />
                ) : icon === stepperWord?.length ? (
                    <div />
                ) : (
                    <div className="QontoStepIcon-circle" />
                )}
            </Box>
        )
    }

    return (
        <Box width="600px">
            <StepperRoot
                activeStep={activeStep}
                stepperVariant={stepperVariant}
            >
                {stepperWord?.map((label) => (
                    <Step key={label} data-testid={`label-${label}`}>
                        <StepLabel
                            sx={stepLabelStylesSx}
                            StepIconComponent={QontoStepIcon}
                        >
                            <Typography variant="body2">{label}</Typography>
                        </StepLabel>
                    </Step>
                ))}
            </StepperRoot>
        </Box>
    )
}
