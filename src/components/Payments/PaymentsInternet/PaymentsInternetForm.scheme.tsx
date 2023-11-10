import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { AmountValidationProps } from 'src/types/schemeTypes'
import { internetAccountNumberValidationRules } from 'src/utils'

export const getPaymentsInternetScheme = (
    amountValidationData: AmountValidationProps
) => {
    return getAmountToPayValidationRules(amountValidationData).shape({
        accountNumber: internetAccountNumberValidationRules,
    })
}
