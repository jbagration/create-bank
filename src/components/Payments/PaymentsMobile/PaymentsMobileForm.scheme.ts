import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { AmountValidationProps } from 'src/types/schemeTypes'
import { getPhoneNumberValidationRules } from 'src/utils'

export const getMobilePaymentScheme =
    (countryCode: string | null) =>
    (amountValidationData: AmountValidationProps) => {
        return getAmountToPayValidationRules(amountValidationData).shape({
            phoneNumber: getPhoneNumberValidationRules(countryCode),
        })
    }
export const getTransferByPhoneScheme =
    (countryCode: string | null, userPhone: string) =>
    (amountValidationData: AmountValidationProps) => {
        return getAmountToPayValidationRules(amountValidationData).shape({
            phoneNumber: getPhoneNumberValidationRules(countryCode).test(
                'numbers must not match',
                'Невозможен перевод по номеру телефона привязанного к аккаунту',
                (value) => value?.replace('+', '') !== userPhone
            ),
        })
    }
