import { LoanProductItem } from '../LoanProduct.type'

export interface LoanRangeProps {
    arrLoanRange: (
        | {
              minSum: string
              maxSum: string
              currencyCode: string | undefined
              minPeriodMonths?: string
              maxPeriodMonths?: string
          }
        | {
              minPeriodMonths: string | undefined
              maxPeriodMonths: string | undefined
              minSum?: undefined
              maxSum?: undefined
              currencyCode?: undefined
          }
    )[]
}

export interface LoanProductDetailProps {
    credit: LoanProductItem
    arrLoanRange: LoanRangeProps['arrLoanRange']
}
