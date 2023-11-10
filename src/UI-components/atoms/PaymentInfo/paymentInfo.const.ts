import { RowName } from './paymentInfo.types'

export const buttonText: string = 'Оплатить'
export const paymentInfoPageTitle: string = 'Информация о платеже'
export const addToFavoriteText: string = 'Добавить в избранное'
export const viewHistoryText: string = 'Посмотреть историю'
export const paymentSuccess: string = 'Платеж произведен успешно'
export const addAutopayments: string = 'Добавить в автоплатежи'
export const rowsNames: RowName[] = [
    {
        row: 'bank',
        name: 'Банк',
    },
    {
        row: 'bankId',
        name: 'БИК банка',
    },
    {
        row: 'bicBankPayee',
        name: 'БИК банка получателя',
    },
    {
        row: 'service',
        name: 'Услуга',
    },
    {
        row: 'provider',
        name: 'Интернет-провайдер',
    },
    {
        row: 'operator',
        name: 'Оператор',
    },
    {
        row: 'organization',
        name: 'Обслуживающая организация',
    },
    {
        row: 'recipient',
        name: 'Получатель',
    },
    {
        row: 'accountNumber',
        name: 'Номер счёта',
    },
    {
        row: 'phoneNumber',
        name: 'Номер телефона',
    },
    {
        row: 'accountNumber',
        name: 'Код плательщика',
    },
    {
        row: 'employerIdentificationNumber',
        name: 'ИНН',
    },
    {
        row: 'innPayee',
        name: 'ИНН получателя',
    },
    {
        row: 'cardName',
        name: 'Карта списания',
    },
    {
        row: 'cardNumber',
        name: 'Номер карты',
    },
    {
        row: 'amountToPay',
        name: 'Сумма',
    },
    {
        row: 'purposeTransfer',
        name: 'Цель перевода',
    },
    {
        row: 'nameOfPayee',
        name: 'Наименование получателя',
    },
    {
        row: '--------',
        name: 'Лицевой счёт',
    },
    {
        row: 'passingToAnCard',
        name: 'Карта зачисления',
    },
    {
        row: 'purpose',
        name: 'Назначение платежа',
    },
    {
        row: 'sum',
        name: 'Сумма',
    },
    {
        row: 'namePayee',
        name: 'Имя получателя',
    },
    {
        row: 'commision',
        name: 'Комиссия',
    },
]
