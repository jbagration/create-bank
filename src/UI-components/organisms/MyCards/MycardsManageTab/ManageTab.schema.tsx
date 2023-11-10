import * as yup from 'yup'

const limitValidationRules = yup
    .string()
    .required('Введите сумму')
    .matches(/.*[^,]$/, 'Сумма указана не полностью')
    .matches(/^[0-9, ]+$/, 'Недопустимые символы')
    .matches(/^[1-9]{1}/, 'Первый символ не может быть 0 или ,')

export const limitSchema = yup.object({
    transactionLimit: limitValidationRules,
})
