import { FC } from 'react'
import { AttentionIcon, ErrorAlert } from 'src/assets/svg'
import { formatNumber } from 'src/utils'
import { Box, Typography } from '@mui/material'

import { almostExpiredMessage, expiredMessage } from './DescriptionMyCard.const'

import {
    almostExpiredMessageStyle,
    DescriptionMyCardBoxStyle,
    DescriptionMyCardTextStyle,
    expiredBoxStyle,
    expiredMessageStyle,
} from './DescriptionMyCard.style'

import { DescriptionMyCardProps } from './DescriptionMyCard.type'

export const DescriptionMyCard: FC<DescriptionMyCardProps> = ({
    cardNumber,
    cardName,
    cardAlias,
    cardBalance: balance,
    currencyCode,
    mini = false,
    expired,
    almostExpired,
}) => {
    const DescriptionMyCardBoxStyleSx = DescriptionMyCardBoxStyle(mini)
    const DescriptionMyCardTextStyleSx = DescriptionMyCardTextStyle(mini)

    const cardBalance = balance
        ? formatNumber(balance, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
          })
        : '0'

    return (
        <Box sx={DescriptionMyCardBoxStyleSx}>
            <Typography variant="body1">
                {`****${cardNumber?.slice(-4)}`} {cardAlias ?? cardName}
            </Typography>

            <Typography sx={DescriptionMyCardTextStyleSx}>
                {`${cardBalance} ${currencyCode}`}
            </Typography>

            {expired && (
                <Box sx={expiredBoxStyle}>
                    <ErrorAlert width="25px" height="25px" />
                    <Typography variant="caption" sx={expiredMessageStyle}>
                        {expiredMessage}
                    </Typography>
                </Box>
            )}
            {almostExpired && (
                <Box sx={expiredBoxStyle}>
                    <AttentionIcon width="25px" height="25px" />
                    <Typography
                        variant="caption"
                        sx={almostExpiredMessageStyle}
                    >
                        {almostExpiredMessage}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}
