export interface Payment {
    paymentDate: string
    paymentPrincipal: number
    paymentInterest: number
    principalDebt: number
    interestDebt: number
    remains: number
}
export interface P
    extends Omit<Payment, 'principalDebt' | 'interestDebt' | 'remains'> {}

export interface PaymentScheduleDTO {
    accountNumber: string
    agreementID: string
    principalDebt: number
    interestDebt: number
    payments: P[]
}
export interface TransformedData
    extends Pick<PaymentScheduleDTO, 'accountNumber' | 'agreementID'> {
    payments: Payment[][]
}
