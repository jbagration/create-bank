import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from './FavoritesPaymentsTemplatePage'

import { mainServicesItems } from './FavoritesItem.const'

export const FavoritesPayments: FC = () => {
    const title = 'Создать новый избранный платеж'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={mainServicesItems}
        />
    )
}
