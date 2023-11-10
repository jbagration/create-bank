import { useState } from 'react'

import { Preloader } from '../../../assets/svg'
import { useGetOperationsHistoryQuery } from '../../../redux/api/historyApi'
import { Caption } from '../../atoms'
import { Pagination } from '../../molecules'

import { OperationHistory } from './OperationHistory'

import { captionStyles } from './OperationHistory.style'

export const OperationHistoryContainer = () => {
    const [count, setCount] = useState(0)
    const [size, setSize] = useState(0)
    const { data, isLoading, error } = useGetOperationsHistoryQuery({
        pageNumber: count,
        pageSize: 3,
    })

    if (isLoading && !data && !error) {
        return <Preloader />
    }

    return !error && data && data.length > 0 ? (
        <>
            {data.map((item, index) => (
                <OperationHistory
                    key={index}
                    setSize={setSize}
                    error={error}
                    {...item}
                />
            ))}
            <Pagination
                count={count}
                setCount={setCount}
                dataLength={size}
                error={error}
                size={3}
            />
        </>
    ) : (
        <>
            <Caption sx={captionStyles} text="История операций пуста" />
            <Pagination
                next={false}
                count={count}
                setCount={setCount}
                dataLength={size}
                error={error}
                size={3}
            />
        </>
    )
}
