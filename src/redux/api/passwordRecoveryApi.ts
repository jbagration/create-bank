import {
    GetPhoneByPassportNumberDto,
    GetPhoneByPassportNumberReturnDto,
} from '../../models/getPhoneByPassportNumber.dto'
import { PasswordRecoveryDto } from '../../models/passwordRecovery.dto'

import { api } from './api'

export const passwordRecoveryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        passwordRecovery: builder.mutation<void, PasswordRecoveryDto>({
            query: ({ mobilePhone, newPassword }) => ({
                url: 'login/password',
                method: 'PATCH',
                params: {
                    mobilePhone,
                },
                body: {
                    newPassword,
                },
            }),
        }),
        getPhoneByPassportNumber: builder.mutation<
            GetPhoneByPassportNumberReturnDto,
            GetPhoneByPassportNumberDto
        >({
            query: (passportNumber) => ({
                url: 'security/session',
                method: 'POST',
                body: passportNumber,
            }),
        }),
    }),
})

export const {
    usePasswordRecoveryMutation,
    useGetPhoneByPassportNumberMutation,
} = passwordRecoveryApi
