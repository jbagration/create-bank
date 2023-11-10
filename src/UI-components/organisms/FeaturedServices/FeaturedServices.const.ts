import { FC } from 'react'
import {
    BankingServicesIcon,
    InternetIcon,
    MobileIcon,
    OtherIcon,
    SberIcon,
    TransferEasyIcon,
    TransferIcon,
    UtilitiesIcon,
} from 'src/assets'

export const featuredInfo = [
    'Пополнение телефона',
    'Перевод на карту',
    'Коммунальные услуги',
    'Обмен валюты',
    'Добавить',
]

export type LinkMapping = Record<string, string>

const linkMapping: LinkMapping = {
    'Пополнение телефона': 'user_main/payments/infopage/mobile',
    'Коммунальные услуги': 'user_main/payments/utilities',
    'Обмен валюты': 'exchange_rate',
}
export interface DefaultPayment {
    text: string
    Icon: FC
    href: string
    data: null | {}
}
export const popularDefaultPayments: DefaultPayment[] = [
    {
        text: 'Банковские услуги',
        Icon: BankingServicesIcon,
        href: 'payments/financepage',
        data: null,
    },
    {
        text: 'Коммунальные услуги',
        Icon: UtilitiesIcon,
        href: 'payments/utilities',
        data: null,
    },
    {
        text: 'Мобильная связь',
        Icon: MobileIcon,
        href: 'payments/infopage/mobile',
        data: null,
    },
    {
        text: 'Интернет',
        Icon: InternetIcon,
        href: 'payments/infopage/internet',
        data: null,
    },
    {
        text: 'Перевод на карту',
        Icon: TransferIcon,
        href: 'transfers',
        data: null,
    },
    {
        text: 'Прочие услуги',
        Icon: OtherIcon,
        href: 'payments/other',
        data: null,
    },
]

interface PopularPayments {
    transferMySelf: DefaultPayment
    transferToAnotherCard: DefaultPayment
}
export const popularPayments: PopularPayments = {
    transferMySelf: {
        href: 'transfers/myself',
        text: 'Перевод между своими счетами',
        Icon: TransferEasyIcon,
        data: null,
    },
    transferToAnotherCard: {
        href: 'transfers/card',
        text: 'Перевод на карту другого банка',
        Icon: SberIcon,
        data: null,
    },
}
export default linkMapping
