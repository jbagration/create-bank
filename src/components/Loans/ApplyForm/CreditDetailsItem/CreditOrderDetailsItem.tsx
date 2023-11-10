import { FC } from 'react'
import { formatNumber, pluralMonths } from 'src/utils'
import { Box, Grid } from '@mui/material'

import { CreditDetailsWrapper } from '../CreditDetailsWrapper'

import { CreditDetailCell } from './CreditDetailCell'
import { CreditDetailName } from './CreditDetailName'
import { CreditDetailStatus } from './CreditDetailStatus'

import { CreditOrderDetailsProps } from './CreditDetailsItem.type'

export const CreditOrderDetailsItem: FC<CreditOrderDetailsProps> = ({
    productName = 'Credit name',
    periodMonths,
    amount,
    first,
    last,
    index,
    status = '',
    maxWidth,
    maxWidthBorder = '100%',
}) => {
    const orderMonth = pluralMonths(periodMonths)

    return (
        <Box maxWidth={maxWidthBorder}>
            <CreditDetailsWrapper
                paddingSmall
                leftTop={first ? '8' : '0'}
                rightTop={first ? '8' : '0'}
                leftBottom={last ? '8' : '0'}
                rightBottom={last ? '8' : '0'}
                bottomBorder={last}
            >
                <Grid
                    container
                    maxWidth={maxWidth}
                    justifyContent="space-between"
                >
                    <Grid item xs={4}>
                        <CreditDetailName
                            name={productName}
                            text={`${orderMonth}`}
                            position={index}
                        />
                    </Grid>

                    <Grid item xs={4} textAlign="center">
                        <CreditDetailCell
                            title={`${formatNumber(Number(amount))} руб.`}
                        />
                    </Grid>

                    <Grid item xs={4} textAlign="center">
                        <CreditDetailStatus status={status} />
                    </Grid>
                </Grid>
            </CreditDetailsWrapper>
        </Box>
    )
}
