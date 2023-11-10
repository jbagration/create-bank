import { Status } from 'src/types/MyCardsType'
import { transformDate } from 'src/UI-components/molecules/ItemCard/ItemCard.helper'

export interface MyCardTableValueType {
    status: Status
    currencyCode: string
    creationDate: string
    expirationDate: string
    holderName: string
    cardNumber: string
    accountNumber: string
}
enum status {
    ACTIVE = 'Активна',
    BLOCKED = 'Заблокирована',
    EXPIRED = 'Истек срок действия',
}

export const dataTransform = (data: MyCardTableValueType): string[] => {
    return [
        status[data.status],
        data.currencyCode,
        transformDate(new Date(data.expirationDate)),
        data.holderName,
        data.cardNumber.replace(/(.{4})/g, '$1 '),
        data.accountNumber,
    ]
}
