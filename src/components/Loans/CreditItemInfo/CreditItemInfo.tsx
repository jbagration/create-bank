import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { textMainStyles } from 'src/common/common.styles'
import { Button } from 'src/UI-components/atoms'
import { Progress } from 'src/UI-components/molecules'
import { ClipboardComponent } from 'src/UI-components/molecules/ClipboardComponent'
import { Calendar, CreditTable } from 'src/UI-components/organisms'
import { formatNumber } from 'src/utils'
import { Box, Grid } from '@mui/material'

import { CreditDetailsWrapper } from '../ApplyForm/CreditDetailsWrapper'

import { fullPaymentText, makePaymentText } from '../loans.const'

import { CreditItem } from '../ApplyForm/CreditDetailsItem/CreditDetailsItem.type'

export const CreditItemInfo: FC<
    CreditItem & { loanPeriod: string; creditId?: string }
> = ({
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
    creditId,
}) => {
    const paid = 0
    const toBePaid = creditLimit
    const redeemed = 0

    const navigate = useNavigate()

    return (
        <Grid container spacing="40px" sx={textMainStyles}>
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
                        })} руб.`}
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
                            <Progress redeemed={Math.round(redeemed)} />
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
                        flexCenter
                        padding="32px 20px"
                    />
                    <ClipboardComponent
                        fullWidth
                        title={`${formatNumber(toBePaid, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })} руб.`}
                        subtitle="Осталось заплатить"
                        rightBottom="8"
                        rightTop="8"
                        textLarge
                        center
                        flexCenter
                        padding="32px 20px"
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
                <Calendar creditId={creditId} date={paymentDate} />
            </Grid>
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    gap: '60px',
                }}
            >
                <Button
                    size="long"
                    buttonVariant="primary"
                    onClick={() => navigate('/user_main/payments')}
                >
                    {makePaymentText}
                </Button>
                <Button
                    size="long"
                    type="button"
                    cancel
                    onClick={() => navigate('/user_main/payments')}
                >
                    {fullPaymentText}
                </Button>
            </Grid>
        </Grid>
    )
}
