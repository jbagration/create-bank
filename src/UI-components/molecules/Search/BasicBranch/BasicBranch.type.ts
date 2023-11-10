import { BankBranchesState } from '../../../../redux/slices/bankBranchSlice'

import { Filters } from 'src/pages/BankBranchPage.type'

export interface BranchItemProps {
    bankBranch: BankBranchesState
    handleRoute: Function
    geoRouteError: Boolean
    routeError: Boolean
    isRouteSuccess: Boolean
    popularFilters: Filters
    extrasFilters: Filters
}

export interface ItemContainerProp {
    isBranchItemInfoOpen: boolean
}

export interface BasicBranchProps {
    bankBranchType?:
        | 'LOCAL_BRANCH'
        | 'ATM'
        | 'INFOKIOSK'
        | 'CURRENCY_EXCHANGE'
        | 'REMOTE_WORKPLACE'
    branchNumber?: string
    branchAddress?: string
    closed?: boolean
    openingTime?: string
    closingTime?: string
    bankCoordinates?: string
}

export interface BranchTypeTextProps {
    closed?: boolean
}

export type EntriesIconsBankBranchType = [
    string,
    {
        name: string
        icon: string
    }
][]
