import { Payment } from 'src/UI-components/atoms'

import { ScheduleDivider } from '../ScheduleDivider/ScheduleDivider'

import { Payment as P } from '../paymentSchedule.type'

export const ContainerWithPayments = ({ payments }: { payments: P[] }) => {
    const currenYear = String(new Date().getFullYear())
    const paymentYear = payments[0].paymentDate.split('-')[0]

    const isDivider = currenYear !== paymentYear

    return (
        <>
            {isDivider && <ScheduleDivider text={paymentYear} />}
            {payments.map((payment, id) => {
                return <Payment {...payment} key={id} />
            })}
        </>
    )
}
