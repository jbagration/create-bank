import {
    Consultation,
    CurrencyExchange,
    ExoticCurrency,
    Insurance,
    Open,
    Pandus,
    Payments,
    TopUp,
    TopUpWithoutCard,
    Transfer,
    Weekends,
    Withdraw,
} from '../assets/svg'

import { Filters } from './BankBranchPage.type'

export const popularFiltersArr: Filters = [
    { moneyTransfer: '', text: 'Перевести', icon: Transfer },
    { acceptPayment: '', text: 'Оплатить', icon: Payments },
    { cashWithdraw: '', text: 'Снять', icon: Withdraw },
    { replenishCard: '', text: 'Пополнить', icon: TopUp },
    { currencyExchange: '', text: 'Обмен валют', icon: CurrencyExchange },
    {
        replenishWithoutCard: '',
        text: 'Пополнить без карты',
        icon: TopUpWithoutCard,
    },
]

export const workingFiltersArr: Filters = [
    { workAtWeekends: '', text: 'Выходные', icon: Weekends },
    { closed: '', text: 'Открыто сейчас', icon: Open },
]

export const extrasFiltersArr: Filters = [
    { ramp: '', text: 'Пандус', icon: Pandus },
    {
        exoticCurrency: '',
        text: 'Обмен экзотической валюты',
        icon: ExoticCurrency,
    },
    { consultation: '', text: 'Консультация', icon: Consultation },
    { insurance: '', text: 'Страхование', icon: Insurance },
]

export const defaultCity = {
    name: 'Москва',
    coords: { lat: 37.617767, lon: 55.755834 },
}
