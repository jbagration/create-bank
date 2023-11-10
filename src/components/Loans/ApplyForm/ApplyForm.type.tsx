import { CreditProductFormState } from 'src/redux/slices/creditProductsSlice'
import { LoanProductItem } from 'src/UI-components/molecules'

export interface NewApply {
    productId: number
    amount: number
    periodMonths: number
    creationDate: string
    monthlyIncome: string
    monthlyExpenditure: string
    employerIdentificationNumber: string
}

export interface ApplyProps
    extends Pick<
        LoanProductItem,
        | 'id'
        | 'maxPeriodMonths'
        | 'minPeriodMonths'
        | 'minSum'
        | 'maxSum'
        | 'currencyCode'
    > {
    fieldsState: CreditProductFormState
}
