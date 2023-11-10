import { StepModalContextProps } from '../Modal/ModalContext'

export interface PasswordRecoveryModalData {
    passportNumber: string
    mobilePhone: string
    newPassword: string
}
export interface IPasswordRecoveryModalContext
    extends StepModalContextProps<PasswordRecoveryModalData> {}
