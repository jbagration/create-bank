import * as yup from 'yup'

export type LoginType = 'phoneNumber' | 'passport'

export const allowedPassportSymbols =
    /^[A-Za-zА-Яа-яёЁ!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~\d]*$/

export const getLoginSchema = (login: LoginType) =>
    yup.object({
        ...(login === 'passport' && { passport: passportValidationRules }),
    })

export const passportValidationRules = yup
    .string()
    .matches(allowedPassportSymbols, 'Использованы недопустимые символы')
    .max(20, 'Номер паспорта не должен быть длиннее 20 символов')
