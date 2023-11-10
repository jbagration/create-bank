import { CardProduct } from '../../models/cardProducts.dto'

import { api } from './api'

export const cardProductsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCardProducts: builder.query<CardProduct[], void>({
            query: () => 'cards-products',
        }),
    }),
})

export const { useGetCardProductsQuery } = cardProductsApi
