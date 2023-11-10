import { ItemCardProps } from '../ItemCard/ItemCard.type'

export type CardNumberProps = Pick<
    ItemCardProps,
    'cardNumber' | 'start' | 'mini'
>
