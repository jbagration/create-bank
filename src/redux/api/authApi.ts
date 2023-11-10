import { LoginDto, LoginResponseDto, UserDto } from 'src/models'
import { storage } from 'src/utils'

import { login, setUser } from '../slices/auth'

import { api } from './api'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponseDto, LoginDto>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled

                    storage.set('accessToken', data.accessToken)
                    storage.set('refreshToken', data.refreshToken)

                    dispatch(login(data.clientId || 'cap'))
                } catch ({ error }) {}
            },
        }),
        setUserInfo: builder.query<UserDto, void>({
            query: () => 'information',
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: user } = await queryFulfilled
                    dispatch(
                        setUser({
                            ...user,
                            profileSettings: {},
                        })
                    )
                } catch ({ error }) {}
            },
        }),
    }),
})

export const { useLoginMutation, useLazySetUserInfoQuery } = authApi
