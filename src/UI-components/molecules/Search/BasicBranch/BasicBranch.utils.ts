import { EntriesIconsBankBranchType } from './BasicBranch.type'

export const defineIconAndName = (
    entriesIconsBankBranch: EntriesIconsBankBranchType,
    bankBranchType: string | undefined
) => {
    let iconBankBranch: string | undefined
    let nameBankBranch: string | undefined

    for (const [key, value] of entriesIconsBankBranch) {
        if (bankBranchType === key) {
            iconBankBranch = value.icon
            nameBankBranch = value.name
        }
    }

    return { iconBankBranch, nameBankBranch }
}
