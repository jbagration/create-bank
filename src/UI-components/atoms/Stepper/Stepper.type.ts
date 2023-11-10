export type StepperProps = {
    stepperVariant?: 'ThreeStepsPassword' | 'ThreeStepsReg' | 'FourSteps' | ''
}

export type StypperStyledProps = Pick<StepperProps, 'stepperVariant'>
