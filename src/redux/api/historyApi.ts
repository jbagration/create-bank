import { HistoryResponseItem } from 'src/types'
import { TransferOrdersItem } from 'src/UI-components/molecules'
import { prepareDate } from 'src/utils'

import { api } from './api'

import { OrderDetailsItem } from 'src/UI-components/organisms/TransferOrders/TransferOrderDetails/TransferOrderDetailes.type'

type HistoryRequest = {
    pageNumber: number
    pageSize: number
    cardNumber?: string
    purpose?: string
    max_sum?: number
    min_sum?: number
    type_name?: string
    operationType?: string
    from?: string
    to?: string
}

export const historyApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOperationsHistory: builder.query<
            Array<TransferOrdersItem>,
            HistoryRequest
        >({
            query: (params) => ({ url: `history`, params: { ...params } }),
            transformResponse: ({
                total,
                transferOrderList: response,
            }: {
                total: number
                transferOrderList: HistoryResponseItem[]
            }) => {
                return response.reduce<TransferOrdersItem[]>((acc, item) => {
                    const { resultDate, time } = prepareDate(
                        item.createdAt,
                        item.completedAt
                    )

                    const sameDateIndex = acc.findIndex(
                        (elem) => elem.date === resultDate
                    )
                    if (sameDateIndex >= 0) {
                        acc[sameDateIndex].orders.push({
                            transferOrderId: item.transferOrderId,
                            sum: item.sum,
                            transferTypeName: item.transferTypeName,
                            currencyCode: item.currencyCode,
                            time,
                            remitterCardNumber: item.remitterCardNumber,
                            name: item.name,
                            purpose: item.purpose,
                        })
                    } else {
                        acc.push({
                            dataLength: total,
                            date: resultDate,
                            orders: [
                                {
                                    transferOrderId: item.transferOrderId,
                                    sum: item.sum,
                                    transferTypeName: item.transferTypeName,
                                    currencyCode: item.currencyCode,
                                    time,
                                    remitterCardNumber: item.remitterCardNumber,
                                    name: item.name,
                                    purpose: item.purpose,
                                },
                            ],
                        })
                    }

                    return acc
                }, [])
            },
        }),

        getOrderDetailById: builder.query<OrderDetailsItem, string>({
            query: (transferOrderId) =>
                `history/details?transferOrderId=${transferOrderId}`,
        }),
    }),
})

export const {
    useLazyGetOperationsHistoryQuery,
    useGetOperationsHistoryQuery,
    useGetOrderDetailByIdQuery,
} = historyApi
