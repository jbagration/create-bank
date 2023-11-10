import { SecurityFormType } from '../../UI-components/organisms'

import { api } from './api'

export interface Password {
    password: string
    NewPassword: string
}
export interface Question {
    securityQuestion: string
    securityAnswer: string
}

export const securityApi = api.injectEndpoints({
    endpoints: (builder) => ({
        newPassword: builder.mutation<Password, SecurityFormType>({
            query: (body) => ({
                url: `user/settings/password`,
                method: 'PATCH',
                body,
            }),
        }),
        newQuestion: builder.mutation<Question, SecurityFormType>({
            query: (body) => ({
                url: `user/settings/controls`,
                method: 'PATCH',
                body,
            }),
        }),
    }),
})

export const { useNewQuestionMutation, useNewPasswordMutation } = securityApi
