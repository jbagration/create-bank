import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { financeDebtItems } from '../FavoritesItem.const'

export const FavoritesDebtPage: FC = () => {
    const title = 'Задолженность по кредиту'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={financeDebtItems}
        />
    )
}
