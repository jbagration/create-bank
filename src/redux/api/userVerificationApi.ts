import { UserVerificateDto } from 'src/models'

import { api } from './api'

export const userVerificationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserVerificationDocuments: builder.query<UserVerificateDto, void>({
            query: () => 'verification-documents',
        }),
        newDocuments: builder.mutation<void, any>({
            query: (body) => ({
                url: 'verification-documents/new',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'VerificationDocs' }],
        }),
    }),
})

export const { useGetUserVerificationDocumentsQuery, useNewDocumentsMutation } =
    userVerificationApi
