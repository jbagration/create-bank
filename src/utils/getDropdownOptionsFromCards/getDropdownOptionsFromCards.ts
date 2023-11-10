import { ItemCard } from 'src/types/MyCardsType'

import { getCardLabel } from '../getCardLabel'

export interface OptionFields {
    [key: string]: number | string | boolean | undefined
    text: string
    divider: boolean
    accountNumber?: string | undefined
}

export const getDropdownOptionsFromCards = (
    cards: ItemCard[]
): OptionFields[] => {
    return cards.map((card): OptionFields => {
        const cardLabel = getCardLabel(card)

        return {
            [cardLabel]: card.cardNumber ?? '',
            text: cardLabel,
            divider: true,
            accountNumber: card.accountNumber,
        }
    })
}
