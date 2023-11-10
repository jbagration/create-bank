import { minLengthErrorMessage } from 'src/utils'
import * as yup from 'yup'

export const emailSchema = yup.object().shape({
    userEmail: yup.string().when({
        is: (val: string) => val.length > 0,
        then: yup
            .string()
            .matches(/^[a-zA-Z0-9_.\-@]+$/, 'Недопустимые символы')
            .max(50, 'Превышено максимальное количество символов (не более 50)')
            .required('Введите адрес электронной почты')
            .email(minLengthErrorMessage),
    }),
})
