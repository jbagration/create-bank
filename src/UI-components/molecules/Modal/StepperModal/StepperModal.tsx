import React, { FC } from 'react'
import { DialogContent } from '@mui/material'

import { modalDialogContentStyles } from '../Modal.style'

export interface StepperModalProps {
    currentStep: number
}
export const StepperModal: FC<StepperModalProps> = ({
    currentStep,
    children,
}) => {
    return (
        <DialogContent sx={modalDialogContentStyles}>
            {React.Children.map(
                children,
                (child, thisStep) => thisStep === currentStep && child
            )}
        </DialogContent>
    )
}
