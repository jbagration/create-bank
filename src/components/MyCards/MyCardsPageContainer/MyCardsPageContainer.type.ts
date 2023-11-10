import { CreditCard, DepositCard } from 'src/types/MyCardsType'

export interface MyCardsPageContainerProps {
    data: CreditCard[] | DepositCard[] | undefined
    skeletonQuantity: number
    initialCardsLimit: number
}
