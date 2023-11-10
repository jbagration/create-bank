import { ItemCard } from '../types/MyCardsType'

export type CardProduct = Omit<
    ItemCard,
    'cardNumber' | 'transactionLimit' | 'expirationDate' | 'balance'
> & {
    cardDuration: number
    cashback: string | number
    id: number
    coBrand?: string
    isActive: boolean
    isVirtual: boolean
    productPrice: number
    servicePrice: number | string
    premiumStatus: string
}
