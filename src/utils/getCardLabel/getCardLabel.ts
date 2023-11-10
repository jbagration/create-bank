import { ItemCard } from 'src/types/MyCardsType'
import { formatNumber } from 'src/utils'

export const getCardLabel = ({
    cardNumber,
    cardName,
    cardBalance,
    currencyCode,
    cardAlias,
}: ItemCard) => {
    if (
        !cardNumber ||
        !cardName ||
        cardBalance === undefined ||
        !currencyCode
    ) {
        return ''
    }

    return `****${cardNumber.slice(-4)} ${
        cardAlias ?? cardName
    }, ${formatNumber(cardBalance, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${currencyCode}`
}
