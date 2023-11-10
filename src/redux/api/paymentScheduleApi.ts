import {
    P,
    Payment,
    PaymentScheduleDTO,
    TransformedData,
} from 'src/UI-components/molecules/PaymentSchedule/paymentSchedule.type'
import { api } from './api'


const paymentScheduleApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPaymentSchedule: builder.query<TransformedData, string>({
            query: (creditId: string) => `credits/${creditId}/schedule`,
            transformResponse,
        }),
    }),
})
export const { useGetPaymentScheduleQuery } = paymentScheduleApi

function transformResponse(data: PaymentScheduleDTO) {
    const {
        payments,
        principalDebt,
        interestDebt,
        accountNumber,
        agreementID,
    } = data
    const obj: { [key: string]: Payment[] } = {}
    let remains = principalDebt
    const sortByYear = (elem: P, isLast: boolean) => {
        const year = elem.paymentDate.split('-')[0]
        if (!Object.prototype.hasOwnProperty.call(obj, year)) {
            remains -= elem.paymentPrincipal
            remains = isLast
                ? Math.round(Number(remains.toFixed(2)))
                : Number(remains.toFixed(2))
            obj[year] = []
            obj[year].push({ ...elem, principalDebt, interestDebt, remains })
        } else {
            remains -= elem.paymentPrincipal
            remains = isLast
                ? Math.round(Number(remains.toFixed(2)))
                : Number(remains.toFixed(2))
            obj[year].push({ ...elem, principalDebt, interestDebt, remains })
        }
    }

    for (let i = 0; i < payments.length; i++) {
        const isLast = i === payments.length - 1
        sortByYear(payments[i], isLast)
    }
    return {
        accountNumber,
        agreementID,
        payments: Object.entries(obj).map((elem) => elem[1]),
    }
}
