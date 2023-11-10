import { ItemCardProps } from '../ItemCard.type'

export interface ItemCardHeaderProps
    extends Pick<ItemCardProps, 'cardName' | 'mini'> {}
