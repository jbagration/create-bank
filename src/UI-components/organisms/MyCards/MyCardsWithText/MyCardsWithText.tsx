import { FC } from 'react'

import { ItemCardWithText } from '../../../../components/MyCards/ItemCard/ItemCardWithText'
import { CreditAndDepositCard } from '../../../../types/MyCardsType'

import { NoCardCaption } from './NoCardCaption'

export type MyCardsWithTextProps = {
    myCards: CreditAndDepositCard[]
    cardsLimit?: number
}

export const MyCardsWithText: FC<MyCardsWithTextProps> = ({
    myCards,
    cardsLimit,
}) => {
    return myCards.length === 0 ? (
        <NoCardCaption />
    ) : (
        <>
            {myCards.slice(0, cardsLimit).map((card) => (
                <ItemCardWithText key={card.cardNumber} {...card} />
            ))}
        </>
    )
}
