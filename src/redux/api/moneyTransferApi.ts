import { MoneyTransferDTO } from 'src/models/moneyTransfer.dto'

import { api } from './api'

export const moneyTransferApi = api.injectEndpoints({
    endpoints: (builder) => ({
        moneyTransfer: builder.mutation<void, MoneyTransferDTO>({
            query: (body) => ({
                url: 'payments/new-payment',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useMoneyTransferMutation } = moneyTransferApi
