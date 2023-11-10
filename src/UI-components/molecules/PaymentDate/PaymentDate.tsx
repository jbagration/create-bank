import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { PaymentDateProps } from './PaymentDate.type'

const getMonthNameInGenitiveCase = (date = new Date()) =>
    [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ][date.getMonth()]

export const PaymentDate: FC<PaymentDateProps> = ({
    paymentDate,
    creditId,
}) => {
    let date
    if (paymentDate) {
        date = new Date(paymentDate)
    } else {
        date = new Date()
    }

    const monthInGenitive = getMonthNameInGenitiveCase(date)
    const day = date.getDate()
    const year = date.getFullYear()
    const scheduleLink = creditId && (
        <NavLink to={`${creditId}/schedule`}>
            <Typography sx={{ marginTop: '40px' }}>График платежей</Typography>
        </NavLink>
    )

    return (
        <Box>
            <Typography
                variant="textLink3"
                sx={{ display: 'block', mb: 8, textAlign: 'center' }}
            >
                Дата следующего платежа
            </Typography>
            <Box textAlign="center" sx={{ marginBottom: '40px' }}>
                <Typography color="BackAccent.BackgroundPrimary" variant="h5">
                    {day}
                </Typography>
                <Typography color="Text.TextPrimary" variant="subtitle1">
                    {monthInGenitive}
                </Typography>
                <Typography color="Text.TextPrimary" variant="subtitle1">
                    {year}
                </Typography>
                {scheduleLink}
            </Box>
        </Box>
    )
}
