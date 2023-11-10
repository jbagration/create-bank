import { FC } from 'react'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

import { financeDebtItems } from '../FavoritesItem.const'

export const FavoritesFinancePage: FC = () => {
    const title = 'Банковские, финансовые услуги'

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={financeDebtItems}
        />
    )
}
