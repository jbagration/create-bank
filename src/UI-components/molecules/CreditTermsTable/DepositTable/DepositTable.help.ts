import { Deposits } from 'src/components/Deposits'
import { formatNumber, pluralMonths, ratioToPercent } from 'src/utils'

export function monthDiff(startDate: Date, endDate: Date) {
    const month =
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())

    return pluralMonths(month)
}
export function transformEndDate(endDate: Date) {
    const month = endDate.getMonth() + 1
    return `${endDate.getDate()}.${
        month < 10 ? '0' : ''
    }${month}.${endDate.getFullYear()}`
}

export const dataTransform = (data: Deposits) => {
    const startDate = new Date(data.startDate)
    const endDate = new Date(data.endDate)

    const monthPeriod = monthDiff(startDate, endDate)
    const newEndDate = transformEndDate(endDate)
    const finishDate = `До ${newEndDate}`
    const totalDate = monthPeriod
    const accountNumber = `**** ${data.accountNumber.slice(-4)}`
    const balance = `${formatNumber(data.currentBalance, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${data.currencyCode}`
    return [
        balance,
        finishDate,
        `${ratioToPercent(data.interestRate, 5)}%`,
        totalDate,
        'Предусмотрено',
        'Предусмотрено',
        accountNumber,
    ]
}
