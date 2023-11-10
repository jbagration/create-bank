import { NewApply } from './ApplyForm/ApplyForm.type'

export const myLoansText = 'Мои кредиты'
export const captionText = [
    'На данный момент у вас пока нет кредитов. Вы можете ознакомиться с',
    'Кредитными продуктами',
    'и',
    'Подать заявку',
    'на получение кредита онлайн',
]
export const myCreditCardsText = 'Мои кредитные карты'
export const myLoanApplicationsText = 'Мои заявки на кредит'

export const incomeTitle = 'Доход'
export const incomeLabel = 'Введите доход от заработной платы'
export const incomeText = 'Ежемесячный доход'

export const expensesLabel = 'Введите расход'
export const expensesText = 'Среднемесячный расход'
export const employerIdentificationNumberText = 'Введите ИНН'
export const employerIdentificationNumberLabel = 'ИНН текущего работодателя'

export const loanOptionsTitle = 'Варианты кредита'
export const loanAmountText = 'Сумма кредита'
export const loanTermLabel = 'Срок кредита, мес.'

export const myDocumentsText = 'Мои документы'
export const orderText = 'Заказать'

export const makePaymentText = 'Погасить'
export const fullPaymentText = 'Погасить досрочно'

export const applyDefaultValue = (
    minSum: number,
    minPeriodMonths: number,
    monthlyIncome: string,
    monthlyExpenditure: string,
    employerIdentificationNumber: string
) => {
    const defaultValues: NewApply = {
        productId: 0,
        amount: minSum,
        periodMonths: minPeriodMonths,
        creationDate: '',
        monthlyIncome,
        monthlyExpenditure,
        employerIdentificationNumber,
    }

    const notificationTexts = {
        success: 'Заявка успешно принята. Время обработки займет до 5 минут',
        error: 'Заявка не принята. Ошибка при получении данных с сервера',
    }

    return {
        defaultValues,
        notificationTexts,
    }
}
