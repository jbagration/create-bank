import { ItemCard } from 'src/types/MyCardsType'

export interface DescriptionMyCardProps
    extends Pick<
        ItemCard,
        | 'cardNumber'
        | 'cardName'
        | 'cardAlias'
        | 'cardBalance'
        | 'currencyCode'
        | 'expired'
        | 'almostExpired'
    > {
    mini?: boolean
}
