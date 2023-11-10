import { AmountValidationProps } from 'src/types/schemeTypes'
import * as yup from 'yup'

export const getAmountToPayValidationRules = ({
    amountMin = 0,
    amountMax = 14999,
    currencyCode = '',
    availableBalance = 0,
    commision = 0,
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
                    return amount + commision <= availableBalance
                }
            )
            .test(
                'minimalAmount',
                `Сумма перевода не должна быть менее ${amountMin} ${currencyCode}`,
                (value) => {
                    const amount = value
                        ? parseFloat(value.replace(/,/g, '.'))
                        : 0

                    return amount >= amountMin
                }
            )
            .test(
                'maximumAmount',
                `Сумма перевода не должна быть более ${amountMax} ${currencyCode}`,
                (value) => {
                    const amount = value
                        ? parseFloat(value.replace(/,/g, '.'))
                        : 0

                    return amount + commision <= amountMax
                }
            ),
    })
}
