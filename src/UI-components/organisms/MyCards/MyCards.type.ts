import {
    CreditAndDepositCard,
    NewCreditCardId,
    NewDepositCardId,
} from 'src/types/MyCardsType'

export interface MyCardsProps {
    myCards: CreditAndDepositCard[]
}

export interface MyCardsInfoTabProps {
    card: NewCreditCardId | NewDepositCardId
}
