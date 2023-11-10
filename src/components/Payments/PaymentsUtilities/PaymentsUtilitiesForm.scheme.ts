import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { AmountValidationProps } from 'src/types/schemeTypes'
import { utilitiesAccountNumberValidationRules } from 'src/utils'

export const getUtilitiesPaymentSchema = (
    amountValidationData: AmountValidationProps
) => {
    return getAmountToPayValidationRules(amountValidationData).shape({
        accountNumber: utilitiesAccountNumberValidationRules,
    })
}
