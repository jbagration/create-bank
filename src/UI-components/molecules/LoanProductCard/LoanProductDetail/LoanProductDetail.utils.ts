import { LoanProductItem } from '../LoanProduct.type'

export const dataTransform = (data: LoanProductItem) => {
    return [
        `${data.minInterestRate}%`,
        data.needGuarantees ? 'Да' : 'Нет',
        data.earlyRepayment ? 'Да' : 'Нет',
        data.needIncomeDetails ? 'Да' : 'Нет',
        data.autoProcessing ? 'Да' : 'Нет',
    ]
}
