import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { AmountValidationProps } from 'src/types/schemeTypes'
import {
    bankAccountNumberValidationRules,
    bicBankPayeeNumberValidationRules,
    innPayeeNumberValidationRules,
} from 'src/utils'

export const getDetailsTransferScheme =
    (accountNumber: string) =>
    (amountValidationData: AmountValidationProps) => {
        return getAmountToPayValidationRules(amountValidationData).shape({
            accountNumber: bankAccountNumberValidationRules.test(
                'numbers must not match',
                'Невозможен перевод на счет, привязанный к карте списания',
                (value) => accountNumber !== value
            ),
            innPayee: innPayeeNumberValidationRules,
            bicBankPayee: bicBankPayeeNumberValidationRules,
        })
    }
