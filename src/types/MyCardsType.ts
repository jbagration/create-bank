export type Type = 'depositCard' | 'creditCard'
export type PaymentSystem = 'VISA' | 'MASTERCARD' | 'MIR'
export type Status = 'BLOCKED' | 'ACTIVE' | 'EXPIRED'

export interface ItemCard {
    cardId?: string
    cardNumber?: string
    creationDate?: string
    expirationDate?: string
    expired?: boolean
    almostExpired?: boolean
    cardName?: string
    paymentSystem?: PaymentSystem
    currencyCode?: string
    type?: Type
    cardBalance?: number
    cardAlias?: string | null
    balance?: number | undefined
    accountNumber?: string | undefined
    cardStatus?: string
}

export interface CreditCard extends ItemCard {
    id?: string
    name: string
    accountNumber: string
}

export interface DepositCard extends ItemCard {
    currentBalance?: number
    cardId?: string
    accountNumber?: string
}

export type CreditAndDepositCard = CreditCard | DepositCard

export interface CardItemHistoryType {
    sum: string
    transferTypeName: string
    currencyCode: string
    time: string
    remitterCardNumber: string
    name: string
    date: string
    purpose: string
}

export interface DepositCardIdService {
    cardId: string
    holderName: string
    status: Status
    cardNumber: string
    expirationDate: string
    cardName: string
    paymentSystem: PaymentSystem
    currencyCode: string
    balance: number
    cardAlias: string | null
}

export interface NewDepositCardId extends DepositCard {
    holderName: string
    status: Status
    accountNumber?: string
}

export interface DepositCardInfo {
    holderName: string
    status: string
    transactionLimit: number
}

export interface DepositCardLimitInfo {
    cardNumber: string
    transactionLimit: string
}

export interface DepositCardAliasInfo {
    cardNumber: string
    cardAlias: string
}

export interface CredetCardIdService {
    creditId: string
    cardNumber: string
    accountNumber: string
    balance: number
    holderName: string
    expirationDate: string
    paymentSystem: PaymentSystem
    status: Status
    transactionLimit: number
    name: string
    principalDebt: number
    creditLimit: number
    creditCurrencyCode: string
    terminationDate: string
    cardAlias: string | null
}

export interface NewCreditCardId extends ItemCard {
    creditId: string
    accountNumber: string
    holderName: string
    status: Status
    transactionLimit?: number
    principalDebt?: number
    creditLimit: number
    terminationDate?: string
}

export interface StatementDepositInfo {
    transferOrderId: string
    purpose: string
    payeeId: string
    sum: number
    completedAt: string
    typeName: string
    currencyCode: string
}

export interface GetStatementParams {
    cardId: string | undefined
    from: string | null
    to: string | null
    pageNumber: string
    pageSize: string
    type?: string
}
