import { getPhoneNumberValidationRules, minLengthErrorMessage } from 'src/utils'
import * as yup from 'yup'

const emailValidationRules = yup
    .string()
    .required('Введите адрес электронной почты')
    .matches(/^[a-zA-Z0-9_.\-@]+$/, 'Недопустимые символы')
    .max(50, 'Превышено максимальное количество символов (не более 50)')
    .email(minLengthErrorMessage)

export const getUserDataScheme = (countryCode: string | null) => {
    return yup.object({
        phoneNumber: getPhoneNumberValidationRules(countryCode),
        email: emailValidationRules,
    })
}
