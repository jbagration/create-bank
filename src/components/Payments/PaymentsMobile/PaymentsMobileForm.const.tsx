import { formatNumber } from 'src/utils'

export const amountLimits = {
    amountMin: 1,
    amountMax: 15000,
    currencyCode: 'RUB',
}

export const helperText = `От ${formatNumber(amountLimits.amountMin, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})} ${amountLimits.currencyCode} до ${formatNumber(amountLimits.amountMax, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})} ${amountLimits.currencyCode}`

interface DefaultValues {
    title: string
}

export const getDefaultValues = (state: DefaultValues) => {
    return {
        cardName: 'Loading...',
        phoneNumber: '',
        operator: state.title ?? 'БиЛайн',
        amountToPay: '',
    }
}
