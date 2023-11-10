import { CardProduct } from 'src/models/cardProducts.dto'
import { ItemCard } from 'src/types/MyCardsType'

export type ModifiedProducts = Pick<
    ItemCard,
    'cardName' | 'currencyCode' | 'paymentSystem' | 'cardAlias'
> &
    Pick<
        CardProduct,
        | 'cashback'
        | 'coBrand'
        | 'id'
        | 'premiumStatus'
        | 'currencyCode'
        | 'servicePrice'
    >
