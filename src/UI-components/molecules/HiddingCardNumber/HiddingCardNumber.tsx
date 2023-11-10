import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import type { CardNumberProps } from './HiddingCardNumber.type'

import { createRound } from './HiddingCardNumber.const'

import {
    cardNumberFontStyles,
    cardNumberRoundStyles,
    cardNumberStyles,
} from './HiddingCardNumber.style'

export const HiddingCardNumber: FC<CardNumberProps> = ({
    cardNumber,
    start = false,
    mini = false,
}) => {
    const endCardNumber = cardNumber?.slice(-4)
    const startCardNumber = cardNumber?.slice(0, 4)

    const countRound = cardNumber ? (start ? 2 : 3) : 4

    const cardNumberStylesSx = cardNumberStyles({ mini })
    const cardNumberFontStylesSx = cardNumberFontStyles({ mini })
    const cardNumberRoundStylesSx = cardNumberRoundStyles({ mini })

    return (
        <Box sx={cardNumberStylesSx}>
            {countRound === 2 && (
                <Typography sx={cardNumberFontStylesSx}>
                    {startCardNumber}
                </Typography>
            )}
            {createRound(countRound).map((item, index) => (
                <Typography
                    sx={cardNumberRoundStylesSx}
                    data-testid="hidding-card-number"
                    key={index}
                >
                    {item}
                </Typography>
            ))}
            {(countRound === 2 || countRound === 3) && (
                <Typography sx={cardNumberFontStylesSx}>
                    {endCardNumber}
                </Typography>
            )}
        </Box>
    )
}
