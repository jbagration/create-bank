import { FC } from 'react'
import { Preloader } from 'src/assets/svg'
import { useGetUtilityOrganizationsQuery } from 'src/redux/api/infoServicesApi'

import { parseUtilityOrganizations } from '../FavoritesPayments.util'
import { FavoritesPaymentsTemplatePage } from '../FavoritesPaymentsTemplatePage'

export const FavoritesUtilityTypesPage: FC = () => {
    const title = 'Коммунальные услуги'
    const { data } = useGetUtilityOrganizationsQuery()

    if (!data) {
        return <Preloader />
    }

    const organizationTypeItems = parseUtilityOrganizations(data)

    return (
        <FavoritesPaymentsTemplatePage
            title={title}
            listItems={organizationTypeItems}
        />
    )
}
