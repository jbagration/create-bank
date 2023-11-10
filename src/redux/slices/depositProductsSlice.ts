import { DepositProductsType } from 'src/components/Deposits'
import { createSlice } from '@reduxjs/toolkit'

type DepositProductState = {
    data: DepositProductsType[]
}

const initialState: DepositProductState = {
    data: [],
}

export const depositProductsSlice = createSlice({
    name: 'depositProducts',
    initialState,
    reducers: {
        pushDepositProducts(state, action) {
            state.data = action.payload
        },
    },
})

export const { reducer: depositProductsReducer } = depositProductsSlice
export const { pushDepositProducts } = depositProductsSlice.actions
