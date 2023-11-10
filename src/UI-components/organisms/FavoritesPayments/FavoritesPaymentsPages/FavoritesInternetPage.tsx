import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { informationInternetItems } from '../FavoritesItem.const'

export const FavoritesInternetPage: FC = () => {
    const title = 'Интернет-провайдер'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={informationInternetItems}
        />
    )
}
