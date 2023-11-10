import { CreditCard, DepositCard } from 'src/types/MyCardsType'

export const filterCardsByExpirationStatus = (
    debitCards?: DepositCard[],
    creditCards?: CreditCard[]
) => {
    const debitToDisplay =
        debitCards &&
        debitCards.filter(
            (card) => !card.expired && card.cardStatus === 'ACTIVE'
        )
    const creditToDisplay =
        creditCards && creditCards.filter((card) => !card.expired)

    let expiredToDisplay =
        debitCards && creditCards
            ? [...debitCards, ...creditCards].filter(
                  (card) => card.expired || card.cardStatus !== 'ACTIVE'
              )
            : null
    if (expiredToDisplay?.length === 0) {
        expiredToDisplay = null
    }
    return {
        debitToDisplay,
        creditToDisplay,
        expiredToDisplay,
    }
}
