import { Mutex } from 'async-mutex'
import { TokensDataType } from 'src/types/apiTypes'
import { storage } from 'src/utils'
import {
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { BaseQueryFn, createApi, FetchArgs } from '@reduxjs/toolkit/query/react'

import { logout } from '../slices/auth'
import { resetCreditState } from '../slices/creditProductsSlice'
import { RootState } from '../store'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
        const clientId = (getState() as RootState)?.auth.clientId

        const token = storage.get('accessToken')

        if (token && clientId) {
            headers.set('Authorization', `${token}`)
            headers.set('ClientId', `${clientId}`)
        }

        return headers
    },
})

const baseQueryWithLogout: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const state = api.getState() as RootState
    const { clientId } = state.auth

    await mutex.waitForUnlock()

    let response = await baseQuery(args, api, extraOptions)

    if (response.error) {
        const { error } = response
        if (
            ((error.status === 'PARSING_ERROR' &&
                error.originalStatus === 401) ||
                error.status === 401) &&
            api.endpoint !== 'login'
        ) {
            if (!mutex.isLocked()) {
                const release = await mutex.acquire()

                const refreshToken = storage.get('refreshToken')

                storage.remove('accessToken')

                try {
                    const tokens = await baseQuery(
                        {
                            url: 'login/token',
                            method: 'GET',
                            headers: {
                                Authorization: refreshToken || '',
                                clientId,
                            },
                        },
                        api,
                        extraOptions
                    )

                    if (tokens.data) {
                        const { data } = tokens as TokensDataType
                        storage.set('accessToken', data.accessToken)
                        storage.set('refreshToken', data.refreshToken)

                        response = await baseQuery(args, api, extraOptions)
                    } else {
                        api.dispatch(logout({ isAutoLogout: true }))
                        api.dispatch(resetCreditState())
                        storage.remove('accessToken')
                        storage.remove('refreshToken')
                    }
                } finally {
                    release()
                }
            } else {
                await mutex.waitForUnlock()
                response = await baseQuery(args, api, extraOptions)
            }
        }
    }
    return response
}

export const api = createApi({
    reducerPath: 'api',
    keepUnusedDataFor: 600,
    tagTypes: [
        'DepositCards',
        'CreditCards',
        'Credits',
        'Deposit',
        'Email',
        'EmailStatus',
        'Sms',
        'Push',
        'DepositItemCard',
        'CreditItemCard',
        'VerificationDocs',
        'DepositCardLimit',
        'CardAlias',
    ],
    baseQuery: baseQueryWithLogout,
    endpoints: () => ({}),
})
