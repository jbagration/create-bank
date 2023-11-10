import { FC } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { darkGrayColor } from 'src/themes/colors/darkGray'
import { Box, Typography } from '@mui/material'

import { Payment as P } from 'src/UI-components/molecules/PaymentSchedule/paymentSchedule.type'

export const Payment: FC<P> = ({
    paymentDate,
    paymentInterest,
    paymentPrincipal,
    remains,
}) => {
    const amountToBePaid = (paymentPrincipal + paymentInterest).toFixed(2)
    const date = new Date(paymentDate)
    const paymentDay = format(date, 'd MMMM', { locale: ru })

    return (
        <Box
            sx={{
                display: 'flex',
                boxSizing: 'inherit',
                marginTop: 5,
            }}
        >
            <Box sx={{ width: '25%' }}>
                <Typography variant="strong2">{paymentDay}</Typography>
            </Box>
            <Box sx={{ width: '25%', color: darkGrayColor[100] }}>
                <Typography>{paymentPrincipal}</Typography>
            </Box>
            <Box sx={{ width: '25%', color: darkGrayColor[100] }}>
                <Typography>{paymentInterest}</Typography>
            </Box>
            <Box sx={{ width: '25%' }}>
                <Typography variant="strong2">{amountToBePaid}</Typography>
            </Box>
            <Box sx={{ width: '25%', color: darkGrayColor[100] }}>
                <Typography>{remains}</Typography>
            </Box>
        </Box>
    )
}
