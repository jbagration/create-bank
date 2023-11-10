import React from 'react'
import { Grid, Typography } from '@mui/material'

import { CreditDetailsWrapper } from '../../../../components/Loans/ApplyForm/CreditDetailsWrapper/CreditDetailsWrapper'

import { HeadCreditTitleStyles } from './HeadCreditTable.style'

export const HeadCreditTable = () => {
    return (
        <Grid item md={12}>
            <CreditDetailsWrapper
                leftTop="6"
                rightTop="6"
                bottomBorder={false}
                textCenter
            >
                <Typography sx={HeadCreditTitleStyles} variant="body1">
                    Условия кредитования
                </Typography>
            </CreditDetailsWrapper>
        </Grid>
    )
}
