import { subDays } from 'date-fns'
import subMonths from 'date-fns/subMonths'

import { transferInfo } from 'src/UI-components/molecules/TransferItem/TransferItem.const'

export const datesLastMonth = {
    from: subMonths(new Date(), 1),
    to: new Date(),
}

export const datesLast10Days = {
    from: subDays(new Date(), 10),
    to: new Date(),
}

export const defaultFilters = {
    pageSize: 10,
    purpose: '',
    from: datesLastMonth.from.toISOString(),
    to: datesLastMonth.to.toISOString(),
    min_sum: 0,
    max_sum: 100000,
    type_name: '',
    operationType: '',
}

export const transferTypesMap = new Map([['Все типы транзакций', '']])
const transferTypesArray = Object.entries(transferInfo).map(([key, value]) => {
    transferTypesMap.set(value, key)
    return {
        key,
        text: value,
        divider: true,
    }
})
const defaultTransferType = {
    key: '',
    text: 'Все типы транзакций',
    divider: true,
}
export const transferTypes = [defaultTransferType, ...transferTypesArray]

export const operationTypesMap = new Map([
    ['Все типы операций', ''],
    ['Доход', 'INCOME'],
    ['Расход', 'EXPENSE'],
])
export const operationTypes = [
    {
        key: '',
        text: 'Все типы операций',
        divider: true,
    },
    {
        key: 'INCOME',
        text: 'Доход',
        divider: true,
    },
    {
        key: 'EXPENSE',
        text: 'Расход',
        divider: true,
    },
]

export const ITEM_COUNT = 10
