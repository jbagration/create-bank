import { useLocation } from 'react-router-dom'
import { Preloader } from 'src/assets/svg'
import { useGetOrderDetailByIdQuery } from 'src/redux/api/historyApi'

import { TransferOrderDetailsItem } from './TransferOrderDetailesItem'

export const TransferOrderDetailsContainer = () => {
    const { state } = useLocation()
    const { transferOrderId } = state
    const { data, isSuccess, isLoading } =
        useGetOrderDetailByIdQuery(transferOrderId)

    if (isLoading) {
        return <Preloader />
    }

    return data && isSuccess ? (
        <TransferOrderDetailsItem state={state} data={data} />
    ) : null
}
