import * as yup from 'yup'

export interface CardNumberValidationProps {
    cardNumberMinLength?: number
}

export const getCardNumberValidationRules = ({
    cardNumberMinLength = 19,
}: CardNumberValidationProps) => {
    return yup.object().shape({
        cardNumber: yup
            .string()
            .required('Обязательное поле')
            .min(
                cardNumberMinLength,
                `Номер карты должен содержать минимум ${cardNumberMinLength} символов`
            ),
    })
}
