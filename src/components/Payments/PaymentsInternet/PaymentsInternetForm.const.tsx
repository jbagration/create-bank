import { formatNumber } from 'src/utils'

import { informationInternetItems } from 'src/UI-components/organisms/FavoritesPayments/FavoritesItem.const'

interface DefaultValues {
    title: string
}

export const getDefaultValues = (state: DefaultValues) => {
    return {
        provider: state.title ?? 'Ростелеком',
        accountNumber: '',
        cardName: 'Loading...',
        amountToPay: '',
    }
}

export const amountLimits = {
    amountMin: 1,
    amountMax: 15000,
    currencyCode: 'RUB',
}

export const providers = informationInternetItems.map(({ text }) => ({
    text,
    divider: true,
}))

export const helperText = `От ${formatNumber(amountLimits.amountMin, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})} ${amountLimits.currencyCode} до ${formatNumber(amountLimits.amountMax, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})} ${amountLimits.currencyCode}`
