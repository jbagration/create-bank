import {
    ContainerWithPayments,
    ScheduleHeader,
} from 'src/UI-components/molecules/PaymentSchedule'

import { Payment } from 'src/UI-components/molecules/PaymentSchedule/paymentSchedule.type'

export const PaymentScheduleContainer = ({ data }: { data: Payment[][] }) => {
    return (
        <>
            <ScheduleHeader />
            {data.map((payments) => (
                <ContainerWithPayments payments={payments} />
            ))}
        </>
    )
}
