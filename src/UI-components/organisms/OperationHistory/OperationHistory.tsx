import { FC, useEffect } from 'react'

import { ItemHistory } from '../../molecules/ItemHistory/ItemHistory'

import { OperationHistoryProps } from './OperationHistory.type'

export const OperationHistory: FC<OperationHistoryProps> = ({
    dataLength,
    date,
    orders,
    setSize,
}) => {
    useEffect(() => {
        setSize(dataLength)
    }, [dataLength, setSize])

    return (
        <div data-testid="history">
            {orders.map((item, index) => (
                <ItemHistory date={date} key={index.toString()} {...item} />
            ))}
        </div>
    )
}
