import iconBankServices from '../../../assets/svg/iconBankServices.svg'
import iconMobileConnection from '../../../assets/svg/iconMobileConnection.svg'

export type FavoriteKey =
    | 'BANKING_SERVICES'
    | 'BY_PHONE_NUMBER'
    | 'BETWEEN_CARDS'
    | 'TO_ANOTHER_CARD'

interface Favorite {
    name: string
    src: string
}
type FavoritePayments = Record<FavoriteKey, Favorite>

export const favoritePayments: FavoritePayments = {
    BANKING_SERVICES: {
        name: 'Банковский перевод',
        src: `${iconBankServices}`,
    },
    BY_PHONE_NUMBER: {
        name: 'Мобильная связь',
        src: iconMobileConnection,
    },
    BETWEEN_CARDS: {
        name: 'Между своими картами',
        src: `${iconBankServices}`,
    },
    TO_ANOTHER_CARD: {
        name: 'На карту другого банка',
        src: `${iconBankServices}`,
    },
}
