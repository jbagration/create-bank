import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths'
import {
    DepositAccount,
    PersonalShipping,
    PostShipping,
} from 'src/models/cards.dto'
import {
    CredetCardIdService,
    CreditCard,
    DepositCard,
    DepositCardAliasInfo,
    DepositCardIdService,
    DepositCardInfo,
    DepositCardLimitInfo,
    GetStatementParams,
    NewCreditCardId,
    NewDepositCardId,
    StatementDepositInfo,
} from 'src/types/MyCardsType'

import { api } from './api'

export const cardsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        setStatusDepositCard: builder.mutation<void, any>({
            query: ({ body }) => ({
                url: `deposit-cards/active-cards`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['DepositItemCard'],
        }),

        setStatusCreditCard: builder.mutation<void, any>({
            query: ({ body }) => ({
                url: `credit-cards/active-cards`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['CreditItemCard'],
        }),

        getDepositCards: builder.query<DepositCard[], void>({
            query: () => 'deposit-cards',
            providesTags: () => ['DepositCards', 'CardAlias'],
            transformResponse: (response: DepositCard[]) => {
                return response.map((card) => {
                    const expirationDate = new Date(card.expirationDate ?? 0)
                    const months = differenceInCalendarMonths(
                        new Date(),
                        expirationDate
                    )
                    return {
                        ...card,
                        type: 'depositCard' as const,
                        expired: months > 0,
                        almostExpired: months === 0,
                    }
                })
            },
        }),

        getDepositAccount: builder.query<DepositAccount[], void>({
            query: () => 'deposit-account',
        }),

        getCreditCards: builder.query<CreditCard[], void>({
            query: () => 'credit-cards',
            providesTags: () => ['CreditCards', 'CardAlias'],
            transformResponse: ({ creditCards }) => {
                return creditCards.map((card: CreditCard) => {
                    const expirationDate = new Date(card.expirationDate ?? 0)
                    const months = differenceInCalendarMonths(
                        new Date(),
                        expirationDate
                    )

                    return {
                        ...card,
                        cardName: 'кредитная',
                        type: 'creditCard' as const,
                        expired: months > 0,
                        almostExpired: months === 0,
                    }
                })
            },
        }),

        getDepositCardItem: builder.query<NewDepositCardId, string>({
            query: (id) => `deposit-cards/${id}`,
            providesTags: ['DepositItemCard', 'CardAlias'],
            transformResponse: (
                response: DepositCardIdService
            ): NewDepositCardId => {
                return {
                    type: 'depositCard',
                    cardStatus: response.status,
                    ...response,
                }
            },
        }),

        getCreditCardItem: builder.query<NewCreditCardId, string>({
            query: (id) => `credit-cards/info?cardId=${id}`,
            providesTags: ['CreditItemCard', 'CardAlias'],
            transformResponse: (
                response: CredetCardIdService
            ): NewCreditCardId => {
                return {
                    ...response,
                    status: 'ACTIVE',
                    cardStatus: 'ACTIVE',
                    cardBalance: 400000,
                    currencyCode: 'RUB',
                    cardName: 'кредитная',
                    type: 'creditCard',
                }
            },
        }),

        getDepositCardInfo: builder.query<DepositCardInfo, string>({
            query: (id) => `deposit-cards/${id}/info`,
            providesTags: ['DepositCardLimit'],
        }),

        newDebitCardOrder: builder.mutation<
            void,
            PersonalShipping | PostShipping
        >({
            query: (body) => ({
                url: 'deposit-card-orders/new',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['DepositCards'],
        }),

        deactivateDepositCard: builder.mutation<void, any>({
            query: ({ body }) => ({
                url: `deposit-cards/deactivate`,
                method: 'PATCH',
                body,
                responseHandler: (response: { text: () => any }) =>
                    response.text(),
            }),
            invalidatesTags: ['DepositCards'],
        }),

        changeDepositCardLimit: builder.mutation<void, DepositCardLimitInfo>({
            query: (body) => ({
                url: `/deposit-cards/limit`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['DepositCardLimit'],
        }),

        changeCardAlias: builder.mutation<void, DepositCardAliasInfo>({
            query: (body) => ({
                url: `/deposit-cards/alias`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['CardAlias'],
        }),

        getStatementInfo: builder.query<
            StatementDepositInfo[],
            GetStatementParams
        >({
            query: ({ cardId, from, to, pageNumber, pageSize, type }) => ({
                url: `history/${type}/${cardId}`,
                params: { from, to, pageNumber, pageSize },
            }),
            providesTags: ['DepositItemCard'],
        }),
    }),
})

export const {
    useNewDebitCardOrderMutation,
    useGetDepositAccountQuery,
    useGetDepositCardsQuery,
    useGetCreditCardsQuery,
    useGetCreditCardItemQuery,
    useGetDepositCardItemQuery,
    useGetDepositCardInfoQuery,
    useChangeDepositCardLimitMutation,
    useChangeCardAliasMutation,
    useSetStatusDepositCardMutation,
    useSetStatusCreditCardMutation,
    useDeactivateDepositCardMutation,
    useGetStatementInfoQuery,
    useLazyGetStatementInfoQuery,
} = cardsApi
