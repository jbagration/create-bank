import { OrdersItem } from '../../../models'
import { CreditCard } from '../../../types/MyCardsType'

import { Credits } from '../ApplyForm/CreditDetailsItem/CreditDetailsItem.type'

export type CreditListData = Partial<CreditCard & OrdersItem & Credits>

export interface CreditListProps {
    data: CreditListData[]
    text: string
    renderItem: (
        credit: CreditListData,
        index: number,
        array: CreditListData[]
    ) => JSX.Element
}
