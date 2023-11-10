import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'

import { Filters } from 'src/pages/BankBranchPage.type'

export const findExistingFilters = (
    filters: Filters,
    bankBranch: BankBranchesState
) => {
    return filters.filter((filter) => {
        const [filterKey] = Object.keys(filter)

        return (
            typeof bankBranch[filterKey as keyof typeof bankBranch] !==
                'undefined' &&
            bankBranch[filterKey as keyof typeof bankBranch] === true
        )
    })
}
