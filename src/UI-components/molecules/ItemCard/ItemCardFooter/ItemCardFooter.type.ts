import { ItemCardProps } from '../ItemCard.type'

export interface ItemCardFooterProps
    extends Pick<
        ItemCardProps,
        'cardNumber' | 'cardBalance' | 'currencyCode' | 'paymentSystem' | 'mini'
    > {}
