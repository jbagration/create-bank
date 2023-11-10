import { ratioToPercent } from 'src/utils'

import type { DepositProductsType } from '../DepositProducts.type'

export const btn = 'Заказать'
export const leftFieldsRevocable = [
    'Тип депозита',
    'Валюта',
    'Возможность досрочного снятия',
    'Ставка при досрочном снятии',
    'Пополнение',
    'Капитализация',
]

export const leftFieldsNonRevocable = [
    'Тип депозита',
    'Валюта',
    'Возможность досрочного снятия',
    'Пополнение',
    'Капитализация',
]

export const dataTransform = (
    data: Pick<
        DepositProductsType,
        'interestRateEarly' | 'currencyCode' | 'isRevocable'
    >
): string[] => {
    const res = [
        data.isRevocable ? 'Отзывной' : 'Безотзывной',
        data.currencyCode,
        data.isRevocable ? 'Предусмотрено' : 'Не предусмотрено',
        'Предусмотрено',
        'Предусмотрено',
    ]

    if (data.isRevocable) {
        res.splice(3, 0, `${ratioToPercent(data.interestRateEarly, 5)}%`)
    }

    return res
}
