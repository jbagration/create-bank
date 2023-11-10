import type { OrdersItem } from 'src/models'
import { CreditCard } from 'src/types/MyCardsType'

export interface Credits {
    creditId: string
    name: string
    principalDebt: number
    creditLimit: number
    creditCurrencyCode: string
    terminationDate: string
    agreementDate: string
    presenceCard: boolean
}

export interface CreditItem {
    name?: string
    creditCurrencyCode?: string
    agreementDate?: string
    agreementID?: string
    agreementNumber: string
    accountNumber: string
    cardId?: string
    cardNumber?: string
    balance?: number
    accountCurrencyCode?: string
    creditLimit: number
    interestRate: string | number
    principalDebt: number
    interestDebt: number
    paymentDate: string
    paymentPrincipal: number
    paymentInterest: number
}

type CreditDetailGeneral = {
    first: boolean
    last: boolean
    index: number
    maxWidth: string
    maxWidthBorder?: string
}

export type CreditDetailsProps = Omit<
    Credits,
    'creditCurrencyCode' | 'principalDebt' | 'presenceCard'
> &
    CreditDetailGeneral

export type CreditCardDetailsProps = CreditCard & CreditDetailGeneral

export type CreditOrderDetailsProps = Omit<
    OrdersItem,
    'productId' | 'creationDate'
> &
    CreditDetailGeneral & {
        productName?: string
    }

export interface CreditCards {
    cardId: string
    cardNumber: string
    balance: number
    accountCurrencyCode: string
    paymentSystem: string
    expirationDate: string
    name: string
}

export interface CreditCardsItem {
    creditId: string
    accountNumber: string
    cardNumber: string
    balance: string
    holderName: string
    expirationDate: string
    paymentSystem: string
    status: string
    transactionLimit: string
    name: string
    principal_debt: string
    creditLimit: string
    creditCurrencyCode: string
    terminationDate: string
}
