import { informationUtilityTypes } from './FavoritesItem.const'

import {
    UtilityOrganization,
    UtilityOrganizationTypeItem,
} from './FavoritesPayments.type'

export const parseUtilityOrganizations = (data: UtilityOrganization[]) =>
    data.reduce<UtilityOrganizationTypeItem[]>((acc, item) => {
        const index = acc.findIndex(
            (el) => el.utilityOrganizationType === item.utilityOrganizationType
        )
        if (index === -1) {
            return [
                ...acc,
                {
                    utilityOrganizationType: item.utilityOrganizationType,
                    ...informationUtilityTypes[item.utilityOrganizationType],
                    state: {
                        organizations: [
                            {
                                text: item.name,
                                path: 'new',
                                icon: informationUtilityTypes[
                                    item.utilityOrganizationType
                                ].icon,
                            },
                        ],
                    },
                },
            ]
        }
        return [
            ...acc.slice(0, index),
            {
                ...acc[index],
                state: {
                    organizations: [
                        ...acc[index].state.organizations,
                        { text: item.name, path: 'new', icon: acc[index].icon },
                    ],
                },
            },
            ...acc.slice(index + 1),
        ]
    }, [])
