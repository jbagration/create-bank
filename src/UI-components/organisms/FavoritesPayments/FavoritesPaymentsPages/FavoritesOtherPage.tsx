import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { otherServicesItems } from '../FavoritesItem.const'

export const FavoritesOtherPage: FC = () => {
    const title = 'Прочие платежи'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={otherServicesItems}
        />
    )
}
