import { pluralMonths } from 'src/utils'

const switchRateDuration = (obj: Record<string, number>) =>
    Object.entries(obj).reduce<Record<string, string>>(
        (acc, [rate, duration]) => {
            acc[pluralMonths(duration)] = rate
            return acc
        },
        {}
    )

export const revocableDepositDurationByRate = {
    '2%': 3,
    '3,5%': 6,
    '4,5%': 12,
}

export const nonRevocableDepositDurationByRate = {
    '3,5%': 3,
    '5,5%': 6,
    '6,5%': 12,
}

export const revocableDepositRateByDuration = switchRateDuration(
    revocableDepositDurationByRate
)

export const nonRevocableDepositRateByDuration = switchRateDuration(
    nonRevocableDepositDurationByRate
)

export const minInterestRateRevocable = '2%'
export const maxInterestRateRevocable = '4,5%'

export const minInterestRateNonRevocable = '3,5%'
export const maxInterestRateNonRevocable = '6,5%'
