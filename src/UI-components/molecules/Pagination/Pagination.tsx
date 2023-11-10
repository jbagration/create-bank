import { FC } from 'react'

import { HistoryArrows } from '../HistoryArrows'

import { PaginationProps } from './Pagination.type'

export const Pagination: FC<PaginationProps> = ({
    count,
    setCount,
    dataLength,
    error,
    next,
    size,
}) => {
    const changeNext = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const changePrev = () => {
        setCount((prevState: number) => prevState - 1)
    }

    return (
        <HistoryArrows
            size={size}
            next={next}
            error={error}
            count={count}
            changePrev={changePrev}
            changeNext={changeNext}
            dataLength={dataLength}
        />
    )
}
