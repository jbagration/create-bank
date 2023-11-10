import {
    FavoritePayment,
    FavoritePaymentInfo,
} from 'src/models/favoritePayments.dto'

import { api } from './api'

export const favoritePaymentsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFavoritePayments: builder.query<FavoritePayment[], string>({
            query: (clientId) => ({
                url: `payments/favorites`,
                params: { clientId },
            }),
        }),
        getFavoritePayment: builder.query<FavoritePaymentInfo, string>({
            query: (transfer_order_id) => ({
                url: `payments/favorites/${transfer_order_id}`,
            }),
        }),
    }),
})

export const { useGetFavoritePaymentsQuery, useGetFavoritePaymentQuery } =
    favoritePaymentsApi
