import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { informationServicesItems } from '../FavoritesItem.const'

export const FavoritesInfoPage: FC = () => {
    const title = 'Услуги связи'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={informationServicesItems}
        />
    )
}
