import { ItemCard } from 'src/types/MyCardsType'
import { getCardLabel } from 'src/utils'

export const findLatestOpenedCard = (
    depositCards: ItemCard[],
    chosenCardName: string
) => {
    if (chosenCardName === 'Loading...') {
        const defaultCard = depositCards[0]
        return {
            text: defaultCard ? getCardLabel(defaultCard) : '',
            balance: defaultCard?.cardBalance || 0,
        }
    }

    const lastOpened = depositCards.find((card) => {
        const name = getCardLabel(card)
        return name === chosenCardName
    })

    return {
        text: lastOpened ? getCardLabel(lastOpened) : '',
        balance: lastOpened?.cardBalance || 0,
    }
}
