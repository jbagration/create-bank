/* eslint-disable no-param-reassign */
import { StatementDepositInfo } from 'src/types/MyCardsType'
import { datesLastMonth } from 'src/UI-components/organisms'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersValue {
    pageSize: number
    purpose: string
    from: string
    to: string
    min_sum: number
    max_sum: number
    type_name: string
    operationType: string
    pageNumber: number
    cardNumber: string | undefined
}

interface InitState {
    cardName: string
    filters: FiltersValue
    tabNumber: number
    statementInfo: StatementDepositInfo[] | []
}

const initialState: InitState = {
    cardName: '',
    filters: {
        pageSize: 10,
        purpose: '',
        from: datesLastMonth.from.toISOString(),
        to: datesLastMonth.to.toISOString(),
        min_sum: 0,
        max_sum: 100000,
        type_name: '',
        operationType: '',
        pageNumber: 0,
        cardNumber: '',
    } as FiltersValue,
    tabNumber: 0,
    statementInfo: [],
}

export const myCardsSlice = createSlice({
    name: 'myCard',
    initialState,
    reducers: {
        setMyCardName(state, action) {
            state.cardName = action.payload
        },
        setFiltersValues(state, action: PayloadAction<FiltersValue>) {
            state.filters = action.payload as FiltersValue
        },
        setTabNumber(state, action) {
            state.tabNumber = action.payload
        },
        setStatementInfo(state, action) {
            state.statementInfo = action.payload
        },
    },
})

export const { reducer: myCardsReducer } = myCardsSlice
export const {
    setMyCardName,
    setFiltersValues,
    setTabNumber,
    setStatementInfo,
} = myCardsSlice.actions
