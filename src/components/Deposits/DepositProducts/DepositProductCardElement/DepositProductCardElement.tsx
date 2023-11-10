import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    maxInterestRateNonRevocable,
    maxInterestRateRevocable,
    minInterestRateNonRevocable,
    minInterestRateRevocable,
    nonRevocableDepositDurationByRate,
    revocableDepositDurationByRate,
} from 'src/common'
import { Box, Typography } from '@mui/material'

import {
    currencyText,
    depositMode,
    link,
    minAmount,
    month,
    rateDescribe,
} from './DepositProductCardElement.const'

import {
    contentBoxStyles,
    currencyCharBoxStyles,
    infoBoxStyles,
    mainBoxStyles,
    mainInfoStyles,
    moreLinkStyles,
    titleBoxStyles,
} from './DepositProductCardElement.style'

import { DepositProductsType } from '../DepositProducts.type'

type DepositProductCardElementProps = Omit<
    DepositProductsType,
    'interestRate' | 'durationMonths'
>

export const DepositProductCardElement: FC<DepositProductCardElementProps> = ({
    id,
    name,
    currencyCode,
    amountMin,
    amountMax,
    isRevocable,
    interestRateEarly,
}) => {
    const navigate = useNavigate()

    const depositType = isRevocable ? 'отзывной' : 'безотзывной'

    const maxInterestRate = isRevocable
        ? `до ${maxInterestRateRevocable}`
        : `до ${maxInterestRateNonRevocable}`

    const durationText = isRevocable
        ? `от ${revocableDepositDurationByRate[minInterestRateRevocable]} до ${revocableDepositDurationByRate[maxInterestRateRevocable]}`
        : `от ${nonRevocableDepositDurationByRate[minInterestRateNonRevocable]} до ${nonRevocableDepositDurationByRate[maxInterestRateNonRevocable]}`

    return (
        <Box sx={mainBoxStyles}>
            <Box sx={titleBoxStyles}>
                <Typography variant="strong1">{name}</Typography>
                <Box sx={currencyCharBoxStyles}>
                    <Typography variant="strong1">{currencyCode}</Typography>
                </Box>
            </Box>

            <Box sx={contentBoxStyles}>
                <Box sx={mainInfoStyles}>
                    <Box sx={infoBoxStyles}>
                        <Typography variant="strong1">
                            {maxInterestRate}
                        </Typography>
                        <Typography variant="body2">{rateDescribe}</Typography>
                    </Box>

                    <Box sx={infoBoxStyles}>
                        <Typography variant="strong1">
                            {durationText}
                        </Typography>
                        <Typography variant="body2">{month}</Typography>
                    </Box>

                    <Box sx={infoBoxStyles}>
                        <Typography variant="strong1">
                            {`${amountMin} ${currencyCode}`}
                        </Typography>
                        <Typography variant="body2">{minAmount}</Typography>
                    </Box>
                </Box>

                <ul>
                    <li>
                        <Typography variant="subtitle3">
                            {`${depositMode} - ${depositType}`}
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="subtitle3">
                            {`${currencyText} - ${currencyCode}`}
                        </Typography>
                    </li>
                </ul>

                <Typography
                    sx={moreLinkStyles}
                    data-testid="more"
                    variant="textLink3"
                    onClick={() =>
                        navigate(`${name}`, {
                            state: {
                                id,
                                isRevocable,
                                currencyCode,
                                amountMin,
                                amountMax,
                                interestRateEarly,
                            },
                        })
                    }
                >
                    {link}
                </Typography>
            </Box>
        </Box>
    )
}
