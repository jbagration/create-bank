export interface LoanProductItem {
    id: number
    name: string
    minSum: number
    maxSum: number
    currencyCode: string
    minInterestRate: number
    maxInterestRate: number
    needGuarantees: boolean
    deliveryInCash: boolean
    earlyRepayment: boolean
    needIncomeDetails: boolean
    minPeriodMonths: number
    maxPeriodMonths: number
    isActive: boolean
    details: string
    calculationMode: string
    gracePeriodMonths: number
    rateIsAdjustable: boolean
    rateBase: string
    rateFixPart: number
    increasedRate: number
    autoProcessing: boolean
}

export interface LoanProductCardProps {
    Svg?: React.ComponentType
    details?: string | JSX.Element
    apply?: boolean
    creditId?: number
    flex?: string
    data: LoanProductItem[]
}

export interface ButtonBoxStylesProps {
    flex: string
}
