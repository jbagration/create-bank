import { ICommonStepModalProps } from '../../ModalContext'

export interface SetPassword extends Pick<ICommonStepModalProps, 'goForward'> {
    usersPassword?: string
    setPassword: (password: string) => void
    type: 'registration'
    mobilePhone?: never
    finishModal?: () => void
}
export interface ChangePassword
    extends Omit<SetPassword, 'type' | 'mobilePhone'> {
    type: 'passwordRecovery'
    mobilePhone: string
    finishModal: () => void
}
export type SetPasswordFormProps = SetPassword | ChangePassword
