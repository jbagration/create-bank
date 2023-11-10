import { NewCreditCardId, NewDepositCardId } from '../../../types/MyCardsType'

export type MyCardDetailProps = {
    card: NewCreditCardId | NewDepositCardId
    toShadow?: boolean
    start?: boolean
    cardId: string
}
