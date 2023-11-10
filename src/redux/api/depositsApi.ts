import { Deposits } from 'src/components/Deposits'
import {
    DepositOrderDto,
    RevokeDepositDto,
    UpdateAutoRenewalDto,
} from 'src/models'

import { api } from './api'

export const depositsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDeposits: builder.query<Deposits[], void>({
            query: () => 'deposits',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ agreementId }) => ({
                              type: 'Deposit' as const,
                              agreementId,
                          })),
                          'Deposit',
                      ]
                    : ['Deposit'],
        }),
        getDepositItem: builder.query<Deposits, { agreementId: string }>({
            query: ({ agreementId }) => `deposits/${agreementId}`,
            providesTags: (_result, _error, { agreementId }) => [
                { type: 'Deposit', agreementId },
            ],
        }),
        newDepositOrder: builder.mutation<void, DepositOrderDto>({
            query: (body) => ({
                url: 'deposit-orders/new',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Deposit' }],
        }),
        revokeDeposit: builder.mutation<void, RevokeDepositDto>({
            query: ({ agreementId, cardNumber }) => ({
                url: `deposits/${agreementId}/revocation`,
                method: 'PATCH',
                params: {
                    agreementId,
                },
                body: {
                    cardNumber,
                },
            }),
            invalidatesTags: ['Deposit', 'DepositCards', 'CreditCards'],
        }),
        updateAutoRenewal: builder.mutation<void, UpdateAutoRenewalDto>({
            query: ({ agreementId, autoRenewal }) => ({
                url: `deposits/${agreementId}/auto-renewal`,
                method: 'PATCH',
                body: { autoRenewal },
            }),
            invalidatesTags: (_result, _error, { agreementId }) => [
                { type: 'Deposit', agreementId },
            ],
        }),
    }),
})

export const {
    useGetDepositsQuery,
    useGetDepositItemQuery,
    useNewDepositOrderMutation,
    useRevokeDepositMutation,
    useUpdateAutoRenewalMutation,
} = depositsApi
