import { formatNumber, OptionFields, pluralMonths } from 'src/utils'
import { ratioToPercent } from 'src/utils/ratioToPercent/ratioToPercent'

import { DepositProductsType } from '../DepositProducts'

import { ApplyForDepositState, DepositOrderInfo } from './ApplyForDeposit.type'

export const getHelperText = ({
    currencyCode,
    amountMax,
    amountMin,
}: Pick<ApplyForDepositState, 'currencyCode' | 'amountMax' | 'amountMin'>) =>
    `От ${formatNumber(amountMin)} ${currencyCode} до ${formatNumber(
        amountMax
    )} ${currencyCode}`

export const createDepositOptions = (
    deposits: DepositProductsType[]
): OptionFields[] => {
    return deposits.map((deposit) => ({
        [pluralMonths(deposit.durationMonths)]: deposit.durationMonths,
        text: pluralMonths(deposit.durationMonths),
        divider: false,
    }))
}

export const filterDepositByNameWithSort = (
    deposits: DepositProductsType[],
    name: string | undefined
) =>
    deposits
        .filter((i) => i.name === name)
        .sort((a, b) => a.durationMonths - b.durationMonths)

export function dataTransform(data: DepositOrderInfo): string[] {
    const res = [
        `${data.durationMonths} ${
            data.durationMonths === 3 ? 'месяца' : 'месяцев'
        }`,
        `${data.interestRate}%`,
        data.cardName,
        `${data.amount} ${data.currencyCode}`,
        data.currencyCode,
        data.isRevocable ? 'Отзывной' : 'Безотзывной',
        data.isRevocable ? 'Предусмотрено' : 'Не предусмотрено',
        'Предусмотрено',
        data.isCapitalizationActive ? 'Да' : 'Нет',
        data.autoRenewal ? 'Да' : 'Нет',
    ]

    if (data.isRevocable) {
        res.splice(5, 0, `${ratioToPercent(data.interestRateEarly, 5)}%`)
    }

    return res
}
