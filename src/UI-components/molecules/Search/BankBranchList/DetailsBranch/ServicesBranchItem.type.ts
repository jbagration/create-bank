import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'

import { Filters } from 'src/pages/BankBranchPage.type'

export type ServicesBranchItemProps = {
    popularFilters: Filters
    extrasFilters: Filters
    bankBranch: BankBranchesState
}
