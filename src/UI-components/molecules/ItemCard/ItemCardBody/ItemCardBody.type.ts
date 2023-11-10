import { ItemCardProps } from '../ItemCard.type'

export interface ItemCardBodyProps
    extends Pick<ItemCardProps, 'cardNumber' | 'expirationDate' | 'mini'> {
    start?: boolean
}

export interface ExpirationDateStylesProps
    extends Pick<ItemCardProps, 'mini'> {}
