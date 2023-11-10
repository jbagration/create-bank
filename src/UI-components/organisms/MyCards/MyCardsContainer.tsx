import {
    useGetCreditCardsQuery,
    useGetDepositCardsQuery,
} from '../../../redux/api/cardsApi'
import { SkeletonCard } from '../../molecules/Skeleton'

import { MyCards } from './MyCards'

export const MyCardsContainer = () => {
    const {
        data: depositCards,
        isLoading,
        isSuccess,
    } = useGetDepositCardsQuery()
    const { data: creditCards } = useGetCreditCardsQuery()
    const myCards = [...(depositCards ?? []), ...(creditCards ?? [])]

    if (isLoading) {
        return <SkeletonCard quantity={2} />
    }
    return <>{isSuccess && myCards ? <MyCards myCards={myCards} /> : null}</>
}
