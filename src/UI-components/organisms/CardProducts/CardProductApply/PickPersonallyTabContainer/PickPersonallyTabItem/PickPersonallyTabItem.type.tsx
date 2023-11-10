import { Dispatch, SetStateAction } from 'react'
import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'

export interface PickPersonallyTabItemProps {
    bank: BankBranchesState
    isSelected: boolean
    setSelectedItem: Dispatch<SetStateAction<string>>
}

export interface PickPersonallyTabItemStylesProps {
    isSelected: boolean
}
