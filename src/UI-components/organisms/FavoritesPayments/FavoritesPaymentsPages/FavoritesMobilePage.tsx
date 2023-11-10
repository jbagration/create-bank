import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { informationMobileItems } from '../FavoritesItem.const'

export const FavoritesMobilePage: FC = () => {
    const title = 'Мобильная связь'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={informationMobileItems}
        />
    )
}
