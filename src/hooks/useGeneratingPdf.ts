import { useCallback } from 'react'
import { jsPDF as JsPdf } from 'jspdf'
import { useAppSelector } from 'src/redux/hooks/redux'

import { Payment } from 'src/UI-components/molecules/PaymentSchedule/paymentSchedule.type'

type Row = {
    'Payment date': string
    'Principal debt': string
    'Payment interest': string
    'Amount to pay': string
    Remains: string
}
const header: string[] = [
    'Payment date',
    'Principal debt',
    'Payment interest',
    'Amount to pay',
    'Remains',
]
type Payments = Payment[][]

interface UsePaymentSchedulePdf {
    handler: () => void
}

export const usePaymentSchedulePdf = (
    d: Payments,
    accountNumber: string
): UsePaymentSchedulePdf => {
    const user = useAppSelector((state) => state.auth.user)
    const data = d.flat()
    const rows = data.map(mapCb)

    const handler = useCallback(() => {
        const doc = new JsPdf({
            orientation: 'portrait',
            format: 'a4',
            unit: 'px',
            hotfixes: ['px_scaling'],
        })
        doc.setFont('Roboto')
        doc.text('Payment schedule', 320, 40)
        doc.setFontSize(10)
        doc.text(`Account number: ${accountNumber}`, 130, 100)
        doc.table(130, 120, rows, header, {
            autoSize: true,
            fontSize: 10,
            padding: 15,
        })
        const fileName = `График_платежей_${user?.firstName}_${user?.lastName}`
        doc.save(fileName)
    }, [d])

    return { handler }
}
function mapCb(el: Payment): Row {
    const {
        paymentDate,
        principalDebt,
        paymentPrincipal,
        paymentInterest,
        remains,
    } = el
    const separator = /-/g
    const pDate = paymentDate.replace(separator, '/')
    const amountToPay = (paymentPrincipal + paymentInterest).toFixed(2)
    return {
        'Payment date': pDate,
        'Principal debt': String(principalDebt),
        'Payment interest': String(paymentInterest),
        'Amount to pay': amountToPay,
        Remains: String(remains),
    }
}
