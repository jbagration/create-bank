import { HeaderElement } from 'src/UI-components/atoms'
import { Box } from '@mui/material'

import { darkGrayColor } from '../../../../themes/colors/darkGray'

import { headerColumns } from '../../../atoms/PaymentSchedule/paymentSchedule.const'

export const ScheduleHeader = () => {
    const columns = headerColumns.map((elem, id) => (
        <HeaderElement text={elem} key={id} />
    ))
    return (
        <Box
            sx={{
                display: 'flex',
                boxSizing: 'inherit',
                marginTop: 5,
                color: darkGrayColor[100],
            }}
        >
            {columns}
        </Box>
    )
}
