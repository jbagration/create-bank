import { BankBranchesState } from '../../../../redux/slices/bankBranchSlice'

import { Filters } from 'src/pages/BankBranchPage.type'

export interface SpecificBankBranchType {
    [key: string]: {
        name: string
        icon: string
    }
}

export interface BranchListProps {
    bankBranchesList?: Array<BankBranchesState>
    handleRoute: Function
    geoRouteError: Boolean
    routeError: Boolean
    isRouteSuccess: Boolean
    popularFilters: Filters
    extrasFilters: Filters
}
