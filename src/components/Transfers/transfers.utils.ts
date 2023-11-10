import { CreditCard, DepositCard } from 'src/types/MyCardsType'
import {
    formatNumber,
    getDropdownOptionsFromCards,
    OptionFields,
} from 'src/utils'

import { transfersOption } from './TransfersPage.const'

export const getTransferCards = (cards: OptionFields[], current: string) => {
    return cards.filter((card) => {
        const keys = Object.keys(card)
        return !keys.some((key) => key === current)
    })
}
export const getOptions = (cards: (DepositCard[] | CreditCard[])[]) => {
    return cards.map((el) => getDropdownOptionsFromCards(el))
}
export const amountLimits = {
    amountMin: 10,
    amountMax: 100000,
    currencyCode: 'RUB',
    commision: 30,
}
export const defaultValues = {
    phoneNumber: '',
    accountNumber: '',
    cardNumber: '',
    cardName: '',
    nameOfPayee: '',
    namePayee: '',
    innPayee: '',
    bicBankPayee: '',
    purposeTransfer: '',
    amountToPay: '',
    commision: '',
}

export const openConditions = () => {
    window.open(require('src/assets/pdf/transferConditions.pdf'), '_blank')
}

export const calculateCommision = (value: string) => {
    const formatValue = value.split(' ').join('').replace(',', '.')
    let sum = Number(formatValue) * 0.005
    sum = sum < 30 ? 30 : sum
    sum = sum > 1500 ? 1500 : sum
    return {
        text: `Минимальная сумма комиссии - 30 RUB, максимальная сумма - 1 500 RUB. Процент комиссии за данный перевод составляет 0,5% от суммы перевода - ${formatNumber(
            sum
        )} RUB.`,
        sum,
    }
}

export const isCustomNamePayee = (value: string): boolean =>
    transfersOption.includes(value)
