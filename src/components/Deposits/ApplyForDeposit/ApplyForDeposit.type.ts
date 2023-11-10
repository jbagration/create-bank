import { DepositProductsType } from '../DepositProducts'

export interface ApplyForDepositState {
    amountMax: number
    amountMin: number
    currencyCode: string
    id: number
    interestRateEarly: number
    isRevocable: boolean
}

export type DepositOrder = Pick<
    DepositProductsType,
    | 'id'
    | 'name'
    | 'currencyCode'
    | 'isRevocable'
    | 'interestRate'
    | 'durationMonths'
> & {
    cardName: string
    cardNumber: string
    amount: string
    autoRenewal: boolean
    isCapitalizationActive: boolean
}

export type DepositOrderInfo = DepositOrder &
    Pick<DepositProductsType, 'interestRateEarly'>
