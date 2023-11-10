import { OrderItem, TransferOrdersItem } from 'src/UI-components/molecules'

import {
    popularDefaultPayments,
    popularPayments,
} from './FeaturedServices.const'

const last = 0

export function getPopularPayments(
    operations: TransferOrdersItem[] | undefined
) {
    const listIsEmptyOrUndefined = !operations || !operations.length

    if (listIsEmptyOrUndefined) {
        return popularDefaultPayments
    }
    const lastDate = operations && operations[last].date
    const lastOperations = filterOperationsByDate(operations, lastDate)
    const payments = getPayments(lastOperations)

    return getPopular(payments)
}

function filterOperationsByDate(
    payments: TransferOrdersItem[],
    d: string
): TransferOrdersItem[] {
    const date = getMonthAndDay(d)
    return payments.filter((payment) => {
        const currentDate = getMonthAndDay(payment.date)
        return currentDate === date
    })
}

function getPayments(payments: TransferOrdersItem[]): OrderItem[] {
    return payments.reduce<OrderItem[]>((acc, current) => {
        return [...acc, ...current.orders]
    }, [])
}

function getPopular(payments: OrderItem[]) {
    const listIsEmpty = payments.length < 1
    if (listIsEmpty) {
        return popularDefaultPayments
    }

    const listOfPaymentsType = Array.from(
        new Set(payments.map((payment) => payment.transferTypeName))
    )

    const listByPopularity = listOfPaymentsType
        .map((el) =>
            payments.filter((payment) => payment.transferTypeName === el)
        )
        .sort((first, next) => (first.length > next.length ? -1 : 1))
        .map((payments) => {
            if (payments[last].transferTypeName === 'BETWEEN_CARDS') {
                return popularPayments.transferMySelf
            }

            if (payments[last].transferTypeName === 'TO_ANOTHER_CARD') {
                return popularPayments.transferToAnotherCard
            }

            return popularPayments.transferToAnotherCard
        })
    return [...listByPopularity, ...popularDefaultPayments].slice(0, 6)
}

function getMonthAndDay(date: string) {
    const regExp = /\.(.*)$/
    return (date.match(regExp) as RegExpMatchArray)[0]
}
