import { Dispatch, SetStateAction, useState } from 'react'

import { useGetDepositCardsQuery } from '../redux/api/cardsApi'
import { DepositCard } from '../types/MyCardsType'

type UseGetDepositCards = {
    (cardsToShow: number): {
        cardsLimit: number
        depositCards: DepositCard[]
        setCardsLimit: Dispatch<SetStateAction<number>>
        cardsToExpand: number
        cardsQuantity: number
        isSuccess: boolean
    }
}

export const useGetDepositCards: UseGetDepositCards = (cardsToShow) => {
    const [cardsLimit, setCardsLimit] = useState(cardsToShow)

    const { data: allDepositCards, isSuccess } = useGetDepositCardsQuery()

    const depositCards = allDepositCards || []

    const cardsQuantity = depositCards.length
    const cardsToExpand = Number(cardsQuantity) - Number(cardsLimit)

    return {
        cardsLimit,
        depositCards,
        setCardsLimit,
        cardsToExpand,
        cardsQuantity,
        isSuccess,
    }
}
