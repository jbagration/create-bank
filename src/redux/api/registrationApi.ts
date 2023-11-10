import { blockPhoneNumberDto } from '../../models/blockPhoneNumber.dto'
import {
    ClientUsersData,
    NonClientUsersData,
} from '../../models/registrationUserData.dto'
import { smsVerificationDto } from '../../models/smsVerification.dto'

import { api } from './api'

import { CheckPhoneNumberReturn } from '../../UI-components/molecules/Modal/ModalSteps/ModalSteps.type'

export const registrationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        checkIfPhoneNumberExists: builder.query<CheckPhoneNumberReturn, string>(
            {
                query: (mobilePhone) => ({
                    url: 'registration',
                    params: {
                        mobilePhone,
                    },
                }),
            }
        ),
        sendSmsCode: builder.query<void, string>({
            query: (receiver) => ({
                url: 'security/session',
                method: 'PATCH',
                params: {
                    receiver,
                },
            }),
        }),
        verifySmsCode: builder.query<void, smsVerificationDto>({
            query: (body) => ({
                url: 'security/session/verification',
                method: 'POST',
                body,
            }),
        }),
        blockPhoneNumber: builder.mutation<void, blockPhoneNumberDto>({
            query: (body) => ({
                url: 'security/session/verification',
                method: 'PATCH',
                body,
            }),
        }),
        signUpClient: builder.mutation<void, ClientUsersData>({
            query: (body) => ({
                url: 'registration/user-profile',
                method: 'PATCH',
                body,
            }),
        }),
        signUpNonClient: builder.mutation<void, NonClientUsersData>({
            query: (body) => ({
                url: 'registration/user-profile/new',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {
    useLazyCheckIfPhoneNumberExistsQuery,
    useLazySendSmsCodeQuery,
    useSendSmsCodeQuery,
    useLazyVerifySmsCodeQuery,
    useSignUpClientMutation,
    useSignUpNonClientMutation,
    useBlockPhoneNumberMutation,
} = registrationApi
