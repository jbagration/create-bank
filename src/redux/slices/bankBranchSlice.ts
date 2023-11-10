import { InputMarker } from '@2gis/mapgl-clusterer'
import { createSlice } from '@reduxjs/toolkit'

export interface BankBranchesState {
    bankBranchType:
        | 'LOCAL_BRANCH'
        | 'ATM'
        | 'INFOKIOSK'
        | 'CURRENCY_EXCHANGE'
        | 'REMOTE_WORKPLACE'
    branchNumber: string
    branchCoordinates: string
    city: string
    branchAddress: string
    closed: boolean
    openingTime: string
    closingTime: string
    workAtWeekends: boolean
    cashWithdraw: boolean
    moneyTransfer: boolean
    acceptPayment: boolean
    currencyExchange: boolean
    ramp: boolean
    replenishCard: boolean
    replenishAccount: boolean
    consultation: boolean
    insurance: boolean
}

export const bankBranches = []

interface GroupBankBranches {
    bankBranches: Array<BankBranchesState>
    searchValueBankBranch: string
    markersBankBranch: InputMarker[]
    selectedBankBranch: BankBranchesState
}

const initialState: GroupBankBranches = {
    bankBranches: bankBranches as Array<BankBranchesState>,
    searchValueBankBranch: '',
    markersBankBranch: [],
    selectedBankBranch: {} as BankBranchesState,
}

export const BankBranchSlice = createSlice({
    name: 'branch',
    initialState,
    reducers: {
        addBranches(state, action) {
            state.bankBranches = action.payload
        },
        selectSearchValueBankBranch(state, action) {
            state.searchValueBankBranch = action.payload
        },
        addMarkersBankBranches(state, action) {
            state.markersBankBranch = action.payload
        },
        selectItemBankBranch(state, action) {
            state.selectedBankBranch = action.payload
        },
        selectItemAndSearchValue(state, action) {
            state.searchValueBankBranch = action.payload.searchValue
            state.selectedBankBranch = action.payload.bankBranch
        },
    },
})

export const { reducer: branchReducer } = BankBranchSlice
export const {
    addBranches,
    selectSearchValueBankBranch,
    addMarkersBankBranches,
    selectItemBankBranch,
    selectItemAndSearchValue,
} = BankBranchSlice.actions
