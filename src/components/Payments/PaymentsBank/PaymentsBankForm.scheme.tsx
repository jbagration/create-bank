import { AmountValidationProps } from 'src/types/schemeTypes'
import { bankAccountNumberValidationRules } from 'src/utils'
import * as yup from 'yup'

const getAmountToPayValidationRules = ({
    availableBalance = 0,
}: AmountValidationProps) => {
    return yup.object().shape({
        amountToPay: yup
            .string()
            .required('Обязательное поле')
            .transform((value) => value.trim().replace(/\s+/g, ''))
            .test(
                'availableBalance',
                'Недостаточно средств на карте списания',
                (value) => {
                    const amount = value
                        ? parseFloat(value.replace(/,/g, '.'))
                        : 0

                    return amount <= availableBalance
                }
            )
            .test(
                'amountRange',
                'Сумма должна быть от 1 000 RUB до 2 000 000 000 RUB',
                (value) => {
                    const amount = value
                        ? parseFloat(value.replace(/,/g, '.'))
                        : 0

                    return amount >= 1000 && amount <= 2000000000
                }
            ),
    })
}

export const getPaymentsBankScheme = (
    amountValidationData: AmountValidationProps
) => {
    return getAmountToPayValidationRules(amountValidationData).shape({
        accountNumber: bankAccountNumberValidationRules,
    })
}
