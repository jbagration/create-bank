import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

export const FavoritesUtilitiesPage: FC = () => {
    const title = 'Обслуживающая организация'
    const { state } = useLocation()

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={state.organizations}
        />
    )
}
