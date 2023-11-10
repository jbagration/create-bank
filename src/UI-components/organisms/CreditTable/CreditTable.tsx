import { FC } from 'react'
import { formatNumber } from 'src/utils'
import { Grid } from '@mui/material'

import { ClipboardComponent } from '../../molecules/ClipboardComponent/ClipboardComponent'

type Props = {
    accountNumber: string
    interestRate: string | number
    paymentInterest: number
    paymentPrincipal: number
    agreementNumber: string
    principalDebt: string | number
    loanPeriod: string
    creditLimit: number | string
    interestDebt: string | number
}

export const CreditTable: FC<Props> = ({
    accountNumber = '30232810100000000004',
    interestRate,
    paymentPrincipal,
    paymentInterest,
    agreementNumber = '87654321',
    principalDebt,
    creditLimit,
    loanPeriod,
    interestDebt,
}) => {
    return (
        <Grid container>
            <Grid item md={6}>
                <ClipboardComponent
                    leftTop="8"
                    rightBorder={false}
                    bottomBorder={false}
                    title={accountNumber}
                    subtitle="Номер счёта"
                    copy
                />
            </Grid>

            <Grid item md={6}>
                <ClipboardComponent
                    bottomBorder={false}
                    rightTop="8"
                    title={agreementNumber}
                    subtitle="Номер кредитного договора"
                    copy
                />
            </Grid>

            <Grid item md={6}>
                <ClipboardComponent
                    rightBorder={false}
                    textLarge
                    title={`${formatNumber(paymentPrincipal + paymentInterest, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })} руб.`}
                    subtitle="Ежемесячный платеж"
                    copy={false}
                    bottomBorder={false}
                />
            </Grid>

            <Grid item md={6}>
                <ClipboardComponent
                    title={`${interestRate.toString()}%`}
                    textLarge
                    subtitle="Cтавка по кредиту"
                    copy={false}
                    bottomBorder={false}
                />
            </Grid>

            <Grid item md={6}>
                <ClipboardComponent
                    rightBorder={false}
                    textLarge
                    title={`${
                        formatNumber(paymentPrincipal, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }) || 0
                    } руб.`}
                    subtitle="Основной долг"
                    copy={false}
                    leftBottom="8"
                />
            </Grid>
            <Grid item md={6}>
                <ClipboardComponent
                    title={`${formatNumber(paymentInterest, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })} руб.`}
                    textLarge
                    subtitle="Долг по процентам"
                    copy={false}
                    rightBottom="8"
                />
            </Grid>
        </Grid>
    )
}
