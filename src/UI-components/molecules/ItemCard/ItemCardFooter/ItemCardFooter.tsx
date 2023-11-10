import { FC } from 'react'
import { formatNumber } from 'src/utils'
import { Box, IconButton, SxProps, Typography } from '@mui/material'

import { definitionPaymentSystem } from '../ItemCard.helper'

import { itemCardBoxStyles } from '../ItemCard.style'
import { cardFooterStyle } from './ItemCardFooter.style'

import { ItemCardFooterProps } from './ItemCardFooter.type'

export const ItemCardFooter: FC<ItemCardFooterProps> = ({
    cardNumber,
    cardBalance: balance,
    currencyCode,
    paymentSystem,
    mini = false,
}) => {
    const cardFooterStyleSx = cardFooterStyle(mini)
    const itemCardBoxStylesSx = [
        itemCardBoxStyles(mini),
        { marginBottom: 0 },
    ] as SxProps

    const cardBalance = balance
        ? formatNumber(balance, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
          })
        : '0'

    return (
        <Box sx={itemCardBoxStylesSx}>
            <Typography data-balance sx={cardFooterStyleSx}>
                {cardNumber && `${cardBalance} ${currencyCode}`}
            </Typography>

            <IconButton>
                {paymentSystem && definitionPaymentSystem(paymentSystem)}
            </IconButton>
        </Box>
    )
}
