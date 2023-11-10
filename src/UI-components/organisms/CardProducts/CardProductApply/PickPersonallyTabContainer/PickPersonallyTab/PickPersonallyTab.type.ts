import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'

import { TabProps } from '../../CardProductApply.type'

export type PickPersonallyTabProps = TabProps & {
    bankList: BankBranchesState[]
}
