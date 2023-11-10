import { OrdersItem } from '../../models'

import { api } from './api'

export const creditOrdersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCreditOrders: builder.query<OrdersItem[], void>({
            query: () => 'credit-orders',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Credits' as const,
                              id,
                          })),
                          'Credits',
                      ]
                    : ['Credits'],
        }),
        newOrder: builder.mutation<void, any>({
            query: (body) => ({
                url: 'credit-orders/new/',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Credits' }],
        }),
    }),
})

export const { useGetCreditOrdersQuery, useNewOrderMutation } = creditOrdersApi
