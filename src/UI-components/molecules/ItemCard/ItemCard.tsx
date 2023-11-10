import { FC } from 'react'
import { Box } from '@mui/material'

import type { ItemCardProps } from './ItemCard.type'
import { ItemCardBody } from './ItemCardBody'
import { ItemCardFooter } from './ItemCardFooter'
import { ItemCardHeader } from './ItemCardHeader'

import { itemCardStyles } from './ItemCard.style'

export const ItemCard: FC<ItemCardProps> = ({
    currencyCode,
    cardBalance,
    cardNumber,
    expirationDate,
    cardName,
    paymentSystem,
    start,
    mini = false,
    expired,
    cardStatus,
}) => {
    const itemCardStylesSx = itemCardStyles({
        paymentSystem,
        cardName,
        mini,
        expired,
        cardStatus,
    })

    return (
        <Box sx={itemCardStylesSx} data-testid="card-item">
            <ItemCardHeader cardName={cardName} mini={mini} />

            <ItemCardBody
                start={start}
                expirationDate={expirationDate}
                cardNumber={cardNumber}
                mini={mini}
            />

            <ItemCardFooter
                cardBalance={cardBalance}
                currencyCode={currencyCode}
                paymentSystem={paymentSystem}
                cardNumber={cardNumber}
                mini={mini}
            />
        </Box>
    )
}
