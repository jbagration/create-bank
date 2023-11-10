import { Dispatch, SetStateAction } from 'react'
import { CreditCard, DepositCard } from 'src/types/MyCardsType'

export interface MyCardsExpandProps {
    data: CreditCard[] | DepositCard[]
    cardsLimit: number
    setCardsLimit: Dispatch<SetStateAction<number>>
}
