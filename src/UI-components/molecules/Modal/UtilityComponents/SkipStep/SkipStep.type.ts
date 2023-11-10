import { StepModalContextProps } from '../../ModalContext'

export type SkipStepProps = Pick<
    StepModalContextProps<any>,
    'goForward' | 'goBack' | 'prevStep' | 'currentStep'
>
