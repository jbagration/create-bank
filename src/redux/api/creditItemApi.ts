import { CreditItem } from 'src/components/Loans/ApplyForm/CreditDetailsItem/CreditDetailsItem.type'
import { api } from './api'


export const creditItemApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCreditItem: builder.query<CreditItem, string>({
            query: (id) => `credits/${id}`,
        }),
    }),
})

export const { useLazyGetCreditItemQuery, useGetCreditItemQuery } =
    creditItemApi
