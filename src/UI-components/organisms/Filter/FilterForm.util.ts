import { CreditCard, DepositCard } from 'src/types/MyCardsType'
import { getCardLabel } from 'src/utils'

import { FilterCardItem } from './Filter.type'

export const getCardsForFilter = (
    cards: (DepositCard | CreditCard)[]
): FilterCardItem[] => {
    const result = cards.map((card) => ({
        text: getCardLabel(card),
        cardNumber: card.cardNumber,
        divider: true,
    }))
    result.unshift({
        text: 'Все карты',
        cardNumber: '',
        divider: true,
    })

    return result
}

export const getCardNumberByText = (cards: FilterCardItem[], text?: string) => {
    return text ? cards.find((card) => card.text === text)?.cardNumber : ''
}

export const getTextByCardNumber = (
    cards: FilterCardItem[],
    cardNumber?: string
) => {
    return cardNumber
        ? cards.find((card) => card.cardNumber === cardNumber)?.text
        : 'Все карты'
}

export const getCurrentCardCreationDate = (
    cards: (DepositCard | CreditCard)[],
    cardNumber?: string
) => {
    if (!cardNumber) return '0'

    const date = cards.find(
        (card) => card.cardNumber === cardNumber
    )?.creationDate
    return date || '0'
}
