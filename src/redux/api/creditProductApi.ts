import { api } from './api'

import { LoanProductItem } from '../../UI-components/molecules/LoanProductCard/LoanProduct.type'

export const creditProductsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCreditProducts: builder.query<LoanProductItem[], void>({
            query: () => 'credit-products',
        }),
    }),
})

export const { useGetCreditProductsQuery } = creditProductsApi
