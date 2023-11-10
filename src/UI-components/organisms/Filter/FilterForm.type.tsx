import { FiltersValue } from 'src/redux/slices/myCardsSlice'
import { DateInterval } from 'src/types/CommonTypes'
import { CreditCard, DepositCard } from 'src/types/MyCardsType'

import { FilterFormValues } from './Filter.type'

export interface FilterFormProps {
    cards: (DepositCard | CreditCard)[]
    setHistoryFilters?: (
        data?: FilterFormValues,
        option?: 'reset' | 'start'
    ) => void
    cardNumber?: string
    count?: number
    filters: FiltersValue
}

export interface DefaultFiltersValue {
    cardNumber: string | undefined
    operationType: string
    type_name: string
    sum: number[]
    dates: DateInterval
}

export interface TypeName {
    key: string
    text: string
    divider: boolean
}
