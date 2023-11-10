import { api } from './api'

export const paymentTypesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPaymentTypes: builder.query<string[], void>({
            query: () => 'payments/paymentType',
        }),
    }),
})

export const { useGetPaymentTypesQuery } = paymentTypesApi
