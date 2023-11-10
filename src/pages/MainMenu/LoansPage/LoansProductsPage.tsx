import { FC } from 'react'
import { Typography } from '@mui/material'

import { LoanProductCards } from '../../../UI-components/molecules'

export const LoansProductsPage: FC = () => {
    return (
        <>
            <Typography
                variant="h5"
                component="h2"
                mb="40px"
                color="Text.TextPrimary"
            >
                Кредитные продукты
            </Typography>

            <LoanProductCards />
        </>
    )
}
