import { FC } from 'react'
import { Typography } from '@mui/material'

import { HiddingCardNumber } from '../../HiddingCardNumber'
import { transformDate } from '../ItemCard.helper'

import { expirationDateStyles } from './ItemCardBody.style'

import { ItemCardBodyProps } from './ItemCardBody.type'

export const ItemCardBody: FC<ItemCardBodyProps> = ({
    start,
    cardNumber,
    expirationDate,
    mini = false,
}) => {
    const expirationDateStylesSx = expirationDateStyles({ mini })

    return (
        <>
            <HiddingCardNumber
                start={start}
                cardNumber={cardNumber}
                mini={mini}
            />

            <Typography data-expiration sx={expirationDateStylesSx}>
                {cardNumber && expirationDate
                    ? transformDate(new Date(expirationDate))
                    : 'XX/XX'}
            </Typography>
        </>
    )
}
