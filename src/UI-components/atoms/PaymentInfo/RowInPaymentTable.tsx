import { FC } from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'

import { paymentInfoRowStyle } from './paymentInfo.style'

type Props = {
    name: string
    value: string | number
}

export const RowInPaymentTable: FC<Props> = ({ name, value }) => {
    return (
        <TableRow>
            <TableCell sx={paymentInfoRowStyle('left')}>
                <Typography>{name}</Typography>
            </TableCell>
            <TableCell sx={paymentInfoRowStyle('right')}>
                <Typography variant="strong2">{value}</Typography>
            </TableCell>
        </TableRow>
    )
}
