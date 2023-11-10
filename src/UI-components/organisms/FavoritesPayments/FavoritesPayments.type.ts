export interface OrderItem {
    icon: string
    text: string
    path: string
    state?: Record<string, any>
}

export interface FavoritesPagesProps {
    title: string
    listItems: Array<OrderItem>
}

export type UtilityType = 'ELECTRICITY' | 'WATER' | 'GAS' | 'APARTMENT'

export interface UtilityOrganization {
    utilityOrganizationType: UtilityType
    name: string
}

export interface UtilityOrganizationItem {
    icon: string
    text: string
    path: string
}

export interface UtilityOrganizationTypeItem {
    utilityOrganizationType: UtilityType
    icon: string
    text: string
    path: string
    state: { organizations: UtilityOrganizationItem[] }
}
