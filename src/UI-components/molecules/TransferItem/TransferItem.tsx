import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { textMainStyles } from 'src/common/common.styles'
import { useAppSelector } from 'src/redux/hooks/redux'
import { formatNumber } from 'src/utils'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { Box, Typography } from '@mui/material'

import { transferInfo } from './TransferItem.const'

import {
    transferBoxIconStyles,
    transferBoxStyles,
    transferNameStyles,
    transferPurposeStyles,
    transferSumTextStyles,
    transferTypographyStyle,
} from './TransferItem.style'

import { OrderItem } from './TransferItem.type'

export const TransferItem: FC<OrderItem> = React.memo(
    ({
        transferOrderId,
        sum,
        time,
        transferTypeName,
        currencyCode,
        purpose,
        name,
    }) => {
        const navigate = useNavigate()
        const { tabNumber, filters } = useAppSelector((state) => state.myCards)

        const onClick = () => {
            navigate('#', { state: { tabNumber, filters }, replace: true })
            navigate(`${transferOrderId}`, {
                state: {
                    transferOrderId,
                    sum,
                    time,
                    transferTypeName,
                    currencyCode,
                    purpose,
                    name,
                },
            })
        }

        return (
            <Box
                sx={{
                    ...transferBoxStyles,
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                <Typography
                    variant="textLink3"
                    color="BackGray.BackgroundSecondary"
                >
                    {time}
                </Typography>

                <Box sx={transferNameStyles}>
                    <Box sx={transferBoxIconStyles}>
                        <KeyboardDoubleArrowLeftIcon fontSize="small" />
                    </Box>

                    {name ? (
                        <Box sx={transferTypographyStyle}>
                            <Typography variant="textLink2" sx={textMainStyles}>
                                {name}
                            </Typography>
                            <Typography
                                variant="textLink2"
                                color="BackGray.BackgroundSecondary"
                            >
                                {transferInfo[transferTypeName]}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography variant="textLink2" sx={textMainStyles}>
                            {transferInfo[transferTypeName]}
                        </Typography>
                    )}
                </Box>

                <Typography
                    variant="textLink3"
                    color="BackGray.BackgroundSecondary"
                    sx={transferPurposeStyles}
                >
                    {purpose}
                </Typography>

                <Typography variant="strong2" sx={transferSumTextStyles}>
                    {`${formatNumber(+sum, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })} ${currencyCode}`}
                </Typography>
            </Box>
        )
    }
)
