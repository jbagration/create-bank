import { pluralMonths } from 'src/utils'

import { Data } from './OrderCardInfo.type'

export const exampleData = {
    id: 176,
    cardName: 'MC Universe',
    paymentSystem: 'MASTERCARD',
    cashback: '1',
    coBrand: '',
    isVirtual: true,
    premiumStatus: 'WORLD',
    servicePrice: 200,
    productPrice: 300,
    currencyCode: 'USD',
    isActive: true,
    cardDuration: 4,
}

export const CardProductTable = [
    'Кэшбэк',
    'Стоимость услуги',
    'Валюта',
    'Премиум статус',
    'Кобрендинговая программа',
    'Карточная платежная система',
    'Виртуальность карты',
    'Цена товара',
    'Срок действия карты',
]

export const btn = 'Далее'
export const linkText = 'Условиями договора, тарифами и рекомендациями'
export const textAgree = 'Я ознакомлен/-а c '
export const captionText =
    ' по безопасному использованию банковских платежных карт '
export const dataTransform = (data: Data): string[] => {
    const {
        cashback,
        servicePrice,
        currencyCode,
        premiumStatus,
        coBrand,
        paymentSystem,
        isVirtual,
        productPrice,
        cardDuration,
    } = data
    return [
        `${cashback}% на все покупки в месяц`,
        `${servicePrice} руб/месяц`,
        currencyCode,
        premiumStatus,
        coBrand || 'Нет',
        paymentSystem,
        isVirtual ? 'Виртуальная' : 'Не виртуальная',
        `${productPrice} руб.`,
        `${pluralMonths(cardDuration)}`,
    ]
}
