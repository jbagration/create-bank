import { ICommonStepModalProps } from '../ModalContext'

export type CheckPhoneNumberReturn =
    | ClientPhoneNumberReturn
    | NonClientPhoneNumberReturn

interface ClientPhoneNumberReturn {
    id: string
    mobilePhone: string
    clientStatus: 'NOT_REGISTERED'
}

interface NonClientPhoneNumberReturn {
    mobilePhone: string
    clientStatus: 'ACTIVE' | 'NOT_ACTIVE' | 'CLOSED' | 'NOT_CLIENT'
}

export interface SmsVerificationFormProps
    extends Pick<ICommonStepModalProps, 'goForward'> {
    mobilePhone: string
}
