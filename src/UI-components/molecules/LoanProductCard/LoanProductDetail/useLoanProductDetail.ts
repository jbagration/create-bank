import { useLocation } from 'react-router-dom'
import { LocationParams } from 'src/types/hooksTypes'
import { pluralMonths } from 'src/utils'

import { LoanProductItem } from '../LoanProduct.type'

export const useLoanProductDetail = () => {
    const { state: credit } = useLocation() as LocationParams<LoanProductItem>

    const toCurrency = new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: credit?.currencyCode,
    })

    const arrLoanRange = [
        {
            minSum: toCurrency.format(Number(credit?.minSum)),
            maxSum: toCurrency.format(Number(credit?.maxSum)),
            currencyCode: credit?.currencyCode,
        },
        {
            minPeriodMonths: credit && pluralMonths(credit.minPeriodMonths),
            maxPeriodMonths: credit && pluralMonths(credit.maxPeriodMonths),
        },
    ]

    return {
        arrLoanRange,
        credit,
    }
}
