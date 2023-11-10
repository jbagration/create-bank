import { formatNumber } from 'src/utils'

import { rowsNames } from './paymentInfo.const'

export const transformRowsName = (array: [string, string | number][]) => {
    return array.reduce<[string, string | number][]>((acc, [row, value]) => {
        if (value) {
            const el = rowsNames.find((element) => element.row === row)
            const name = el?.name || ''
            value =
                el?.row === 'amountToPay' || el?.row === 'commision'
                    ? `${formatNumber(value)} RUB`
                    : value
            acc.push([name, value])
        }
        return acc
    }, [])
}
