import { DepositProductsType } from 'src/components/Deposits'

import { api } from './api'

export const depositProductsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDepositProducts: builder.query<DepositProductsType[], void>({
            query: () => 'deposit-products',
        }),
    }),
})

export const { useGetDepositProductsQuery } = depositProductsApi
