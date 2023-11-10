import { bankAndFinanceServicesList } from 'src/UI-components/organisms/FavoritesPayments/FavoritesItem.const'

export const labelsForAccountNumber: Record<BankPaymentService, string> = {
    'Пополнение текущего счета': 'Номер счета',
    'Погашение кредита': 'Номер кредитного договора',
    'Пополнение депозита': 'Номер счета депозита',
}

export type BankPaymentService =
    | 'Пополнение текущего счета'
    | 'Погашение кредита'
    | 'Пополнение депозита'

export interface DefaultValues {
    title: string
    service?: BankPaymentService
    accountNumber?: string
}

export const getDefaultValues = (state: DefaultValues) => {
    return {
        bank: state.title ?? 'Сбербанк',
        service: state.service ?? 'Пополнение текущего счета',
        accountNumber: state.accountNumber ?? '',
        cardName: 'Loading...',
        amountToPay: '',
    }
}

const serviceList: BankPaymentService[] = [
    'Пополнение текущего счета',
    'Погашение кредита',
    'Пополнение депозита',
]

export const banks = bankAndFinanceServicesList.map((bank) => ({
    text: bank,
    divider: true,
}))

export const services = serviceList.map<{
    text: BankPaymentService
    divider: boolean
}>((service) => ({
    text: service,
    divider: true,
}))

export const buttonText = 'Оплатить'
