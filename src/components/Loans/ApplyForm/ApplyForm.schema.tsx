import * as yup from 'yup'

export const schemaApplyInputs = (
    minSum: number,
    maxSum: number,
    maxPeriodMonths: number,
    minPeriodMonths: number
) => {
    return yup.object().shape({
        amount: yup
            .number()
            .typeError('Обязательное поле')
            .min(minSum, `Сумма должна быть больше ${minSum}`)
            .max(maxSum, `Сумма должна быть меньше ${maxSum}`),
        periodMonths: yup
            .number()
            .typeError('Обязательное поле')
            .min(minPeriodMonths, `Должен быть больше ${minPeriodMonths}`)
            .max(maxPeriodMonths, `Должен быть меньше ${maxPeriodMonths}`),
        monthlyIncome: yup.string().required('Обязательное поле'),
        monthlyExpenditure: yup.string().required('Обязательное поле'),
        employerIdentificationNumber: yup
            .string()
            .required('Обязательное поле')
            .matches(/^[0-9]+$/, 'ИНН может содержать только цифры')
            .matches(
                /^(\d{10}|\d{12})$/,
                'В поле можно ввести только 10 либо 12 символов'
            ),
    })
}
