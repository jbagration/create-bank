export interface DepositOrderDto {
    productId: number
    initialAmount: number
    cardNumber: string
    autoRenewal: boolean
    interestRate: number
    durationMonth: number
}
