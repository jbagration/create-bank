import React, { FC } from 'react'
import { Typography } from '@mui/material'

import { listData } from './CardProductInfo.const'

import { cardListStyles } from '../CardProducts.style'

import { ModifiedProducts } from '../CardProducts.type'

export const CardProductsInfo: FC<{ data: ModifiedProducts }> = ({ data }) => {
    const { cashback, coBrand, premiumStatus, currencyCode, servicePrice } =
        listData
    return (
        <ul style={cardListStyles}>
            <li>
                <Typography variant="subtitle3">
                    {`${cashback} - ${data.cashback}%;`}
                </Typography>
            </li>
            <li>
                <Typography variant="subtitle3">
                    {`${servicePrice} - ${data.servicePrice} руб/месяц;`}
                </Typography>
            </li>
            <li>
                <Typography variant="subtitle3">
                    {`${currencyCode} - ${data.currencyCode};`}
                </Typography>
            </li>
            <li>
                <Typography variant="subtitle3">
                    {`${premiumStatus} - ${data.premiumStatus};`}
                </Typography>
            </li>
            {data.coBrand && (
                <li>
                    <Typography variant="subtitle3">
                        {`${coBrand} - ${data.coBrand};`}
                    </Typography>
                </li>
            )}
        </ul>
    )
}
