import { OrdersItem } from 'src/models'
import { useGetCreditCardsQuery } from 'src/redux/api/cardsApi'
import { useGetCreditsQuery } from 'src/redux/api/creditApi'
import { useGetCreditOrdersQuery } from 'src/redux/api/creditOrdersApi'
import { CreditCard } from 'src/types/MyCardsType'

import { Credits } from './ApplyForm/CreditDetailsItem/CreditDetailsItem.type'

interface Return {
    creditsData: Credits[] | undefined
    ordersData: OrdersItem[] | undefined
    cardsData: CreditCard[] | undefined
    loadingCreditsData: boolean
    successCreditsData: boolean
    loadingOrdersData: boolean
    successOrdersData: boolean
    loadingCardsData: boolean
    successCardsData: boolean
}

export const useGetLoansData = (): Return => {
    const {
        data: creditsData,
        isLoading: loadingCreditsData,
        isSuccess: successCreditsData,
    } = useGetCreditsQuery()
    const {
        data: ordersData,
        isLoading: loadingOrdersData,
        isSuccess: successOrdersData,
    } = useGetCreditOrdersQuery()
    const {
        data: cardsData,
        isLoading: loadingCardsData,
        isSuccess: successCardsData,
    } = useGetCreditCardsQuery()
    return {
        creditsData,
        loadingCreditsData,
        successCreditsData,
        ordersData,
        loadingOrdersData,
        successOrdersData,
        cardsData,
        loadingCardsData,
        successCardsData,
    }
}
