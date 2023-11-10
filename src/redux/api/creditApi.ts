import { Credits } from 'src/components/Loans/ApplyForm/CreditDetailsItem/CreditDetailsItem.type'
import { api } from './api'


export const creditsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCredits: builder.query<Credits[], void>({
            query: () => 'credits',
            transformResponse: (response: Credits[]) =>
                response.filter((credit) => !credit.presenceCard),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ creditId }) => ({
                              type: 'Credits' as const,
                              creditId,
                          })),
                          'Credits',
                      ]
                    : ['Credits'],
        }),
    }),
})

export const { useLazyGetCreditsQuery, useGetCreditsQuery } = creditsApi
