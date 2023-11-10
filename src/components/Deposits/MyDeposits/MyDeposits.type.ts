export interface DepositItem {
    agreementId: string
    accountNumber: string
    currencyCode: 'RUB' | 'USD' | 'EUR'
    currentBalance: number
    endDate: string
    productName: string
    startDate: string
}

export interface Deposits extends DepositItem {
    interestRate: number
    autoRenewal: boolean
    name: string
    isRevocable: boolean
}
