import { CreditAndDepositCard } from 'src/types/MyCardsType'

export type ItemCardStylesProps = Pick<
    ItemCardProps,
    'paymentSystem' | 'cardName' | 'mini' | 'expired' | 'cardStatus'
>

export interface ItemCardProps extends Omit<CreditAndDepositCard, 'cardId'> {
    start?: boolean
    mini?: boolean
}
