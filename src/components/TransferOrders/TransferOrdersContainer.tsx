import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'
import addDays from 'date-fns/addDays'
import { Preloader } from 'src/assets/svg'
import { useDebounce } from 'src/hooks/useDebounce'
import {
    useGetCreditCardsQuery,
    useGetDepositCardsQuery,
} from 'src/redux/api/cardsApi'
import { useLazyGetOperationsHistoryQuery } from 'src/redux/api/historyApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { FiltersValue, setFiltersValues } from 'src/redux/slices/myCardsSlice'
import {
    Caption,
    SearchField,
    searchFieldHasError,
} from 'src/UI-components/atoms'
import { Pagination } from 'src/UI-components/molecules'
import { FilterForm, TransferOrders } from 'src/UI-components/organisms'
import { FilterComponent } from 'src/UI-components/organisms/Filter/FilterComponent'
import { Box, Collapse, Typography } from '@mui/material'

import { emptyString } from 'src/common/common.const'
import {
    defaultFilters,
    ITEM_COUNT,
} from 'src/UI-components/organisms/TransferOrders/TransferOrders.const'

import {
    transferBoxPaginationStyles,
    transferBoxStyles,
    transferOrderCaptionStyles,
} from 'src/UI-components/organisms/TransferOrders/TransferOrders.style'

import { FilterFormValues } from 'src/UI-components/organisms/Filter/Filter.type'

export const TransferOrdersContainer: FC<{
    cardNumber?: string
    savedFilters?: FiltersValue
}> = ({ cardNumber, savedFilters }) => {
    const dispatch = useAppDispatch()

    const { data: debitCards } = useGetDepositCardsQuery()
    const { data: creditCards } = useGetCreditCardsQuery()
    const allCards = useMemo(() => {
        if (debitCards && creditCards) return [...debitCards, ...creditCards]
        return []
    }, [debitCards, creditCards])

    const [count, setCount] = useState(0)
    const [size, setSize] = useState(0)
    const [open, setOpen] = useState(false)

    const [purposeQuery, setPurposeQuery] = useState(emptyString)
    const debouncedPurposeQuery = useDebounce(
        !searchFieldHasError(purposeQuery) ? purposeQuery : '',
        300
    )
    const handlePurposeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setPurposeQuery(text)
    }

    const [filters, setFilters] = useState(
        savedFilters ?? {
            pageNumber: count,
            cardNumber,
            ...defaultFilters,
        }
    )

    const setHistoryFilters = useCallback(
        (data?: FilterFormValues, option?: 'reset' | 'start') => {
            if (option === 'start') {
                setCount(0)
            }
            if (option === 'reset') {
                setCount(0)
                setPurposeQuery(emptyString)
                setOpen(false)
            }

            const fromDate = data?.date?.from
            const toDate = data?.date?.to && addDays(data.date.to, 1)

            setFilters((prevFilters) => ({
                pageSize: prevFilters.pageSize,
                pageNumber: count,
                cardNumber: data?.cardNumber ?? prevFilters.cardNumber,
                purpose: debouncedPurposeQuery.toLowerCase(),
                from: fromDate ? fromDate.toISOString() : prevFilters.from,
                to: toDate ? toDate.toISOString() : prevFilters.to,
                min_sum: data?.min_sum ?? prevFilters.min_sum,
                max_sum: data?.max_sum ?? prevFilters.max_sum,
                type_name: data?.type_name ?? prevFilters.type_name,
                operationType: data?.operationType ?? prevFilters.operationType,
            }))
        },
        [count, debouncedPurposeQuery]
    )

    useEffect(() => {
        setHistoryFilters()
    }, [setHistoryFilters])

    const [getHistory, { data, isSuccess, error }] =
        useLazyGetOperationsHistoryQuery()

    useEffect(() => {
        getHistory(filters)
        dispatch(setFiltersValues(filters))
    }, [filters, getHistory])

    if (!isSuccess) {
        return <Preloader />
    }

    const pageNimber = count + 1

    const getNumberOfPages = () => {
        if (size > pageNimber * ITEM_COUNT) {
            return pageNimber * ITEM_COUNT
        }
        return ITEM_COUNT - (pageNimber * ITEM_COUNT - size)
    }

    return (
        <>
            <Box mb={open ? '40px' : '0px'}>
                <Box sx={transferBoxStyles}>
                    <SearchField
                        value={purposeQuery}
                        onChange={handlePurposeChange}
                    />
                    <FilterComponent setOpen={setOpen} open={open} />
                </Box>
                <Collapse in={open}>
                    <FilterForm
                        cards={allCards}
                        count={count}
                        cardNumber={cardNumber}
                        setHistoryFilters={setHistoryFilters}
                        filters={filters}
                    />
                </Collapse>
            </Box>

            {data && data.length > 0 ? (
                <>
                    {data.map((item, index) => (
                        <TransferOrders
                            key={index}
                            setSize={setSize}
                            {...item}
                        />
                    ))}
                    <Box sx={transferBoxPaginationStyles}>
                        <Typography>
                            Отображается {getNumberOfPages()} из {size} записей
                        </Typography>
                        <Typography>
                            Страница {pageNimber} из{' '}
                            {Math.ceil(size / ITEM_COUNT)}
                        </Typography>
                        <Pagination
                            size={ITEM_COUNT}
                            count={count}
                            setCount={setCount}
                            dataLength={size}
                        />
                    </Box>
                </>
            ) : (
                <>
                    <Caption
                        sx={transferOrderCaptionStyles}
                        text="История операций пуста"
                    />
                    <Pagination
                        size={ITEM_COUNT}
                        dataLength={size}
                        setCount={setCount}
                        next={false}
                        error={error}
                        count={count}
                    />
                </>
            )}
        </>
    )
}
