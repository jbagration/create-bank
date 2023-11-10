import { FC } from 'react'
import { Button } from 'src/UI-components/atoms'
import { Progress } from 'src/UI-components/molecules'
import { ClipboardComponent } from 'src/UI-components/molecules/ClipboardComponent'
import { Calendar, CreditTable } from 'src/UI-components/organisms'
import { formatNumber } from 'src/utils'
import { Box, Grid } from '@mui/material'

import { CreditDetailsWrapper } from '../ApplyForm/CreditDetailsWrapper'

import { CreditItem } from '../ApplyForm/CreditDetailsItem/CreditDetailsItem.type'

export const CreditItemInfo: FC<CreditItem & { loanPeriod: string }> = ({
    paymentDate,
    creditLimit,
    loanPeriod,
    accountNumber,
    interestRate,
    principalDebt,
    interestDebt,
    agreementNumber,
    paymentPrincipal,
    paymentInterest,
}) => {
    const paid = Number(creditLimit) - Number(principalDebt)
    const redeemed = (paid / Number(creditLimit)) * 100

    return (
        <Grid container spacing="40px">
            <Grid
                item
                md={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}
            >
                <Box>
                    <ClipboardComponent
                        leftTop="8"
                        rightTop="8"
                        bottomBorder={false}
                        title={loanPeriod}
                        subtitle="Cрок кредита"
                        copy={false}
                    />
                    <ClipboardComponent
                        textLarge
                        title={`${formatNumber(creditLimit, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}`}
                        subtitle="Сумма кредита"
                        copy={false}
                        bottomBorder={false}
                    />
                    <CreditDetailsWrapper
                        topBorder={false}
                        leftBottom="8"
                        rightBottom="8"
                    >
                        <Box
                            sx={{
                                width: '180px',
                                height: '180px',
                                margin: 'auto',
                                marginBottom: '30px',
                            }}
                        >
                            <Progress
                                redeemed={parseFloat(redeemed.toFixed(1))}
                            />
                        </Box>
                    </CreditDetailsWrapper>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <ClipboardComponent
                        fullWidth
                        title={`${formatNumber(paid, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })} руб.`}
                        subtitle="Оплачено"
                        leftBottom="8"
                        leftTop="8"
                        rightBorder={false}
                        textLarge
                        center
                    />
                    <ClipboardComponent
                        fullWidth
                        title={`${formatNumber(Number(principalDebt), {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })} руб.`}
                        subtitle="Осталось заплатить"
                        rightBottom="8"
                        rightTop="8"
                        textLarge
                        center
                    />
                </Box>
            </Grid>
            <Grid
                item
                md={7}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}
            >
                <CreditTable
                    interestDebt={interestDebt}
                    loanPeriod={loanPeriod}
                    creditLimit={creditLimit}
                    accountNumber={accountNumber}
                    interestRate={interestRate}
                    paymentPrincipal={paymentPrincipal}
                    paymentInterest={paymentInterest}
                    agreementNumber={agreementNumber}
                    principalDebt={principalDebt}
                />
                <Calendar date={paymentDate} />
            </Grid>
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    gap: '60px',
                }}
            >
                <Button size="long" buttonVariant="primary">
                    Пополнить
                </Button>
                <Button size="long" type="button" cancel>
                    Оплатить раньше
                </Button>
            </Grid>
        </Grid>
    )
}
