export interface DepositProductsType {
    name: 'Оптимальный' | 'Надежный'
    id: number
    interestRate: number
    interestRateEarly: number
    currencyCode: 'EUR' | 'RUB' | 'USD'
    isRevocable: boolean
    durationMonths: number
    amountMin: number
    amountMax: number
}
