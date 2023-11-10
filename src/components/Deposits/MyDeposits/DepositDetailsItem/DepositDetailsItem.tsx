import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditDetailsWrapper } from 'src/components/Loans/ApplyForm/CreditDetailsWrapper'
import {
    monthDiff,
    transformEndDate,
} from 'src/UI-components/molecules/CreditTermsTable/DepositTable/DepositTable.help'
import { formatNumber } from 'src/utils'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'

import {
    detailsBalanceBoxStyles,
    detailsInnerBoxStyles,
    detailsMainBoxStyles,
    detailsTextStyles,
    listItemLinkStyles,
    listStyles,
    myLinkSx,
} from './DepositDetailsItem.style'

import { DepositItem } from '../MyDeposits.type'

interface DepositDetailsItemProps extends DepositItem {
    first: boolean
    last: boolean
    index: number
}

export const DepositDetailsItem: FC<DepositDetailsItemProps> = ({
    first,
    last,
    index,
    agreementId,
    productName,
    accountNumber,
    currencyCode,
    currentBalance,
    startDate,
    endDate,
}) => {
    const navigate = useNavigate()
    const monthPeriod = monthDiff(new Date(startDate), new Date(endDate))
    const newEndDate = transformEndDate(new Date(endDate))
    const finishDate = `До ${newEndDate}(${monthPeriod})`
    const balance = formatNumber(currentBalance, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const handleClickNavigate = () => {
        const state = { agreementId, balance, productName, currencyCode }
        navigate(`${agreementId}`, { state })
    }

    return (
        <CreditDetailsWrapper
            paddingSmall
            bottomBorder={last}
            leftTop={first ? '8' : '0'}
            rightTop={first ? '8' : '0'}
            leftBottom={last ? '8' : '0'}
            rightBottom={last ? '8' : '0'}
        >
            <List sx={listStyles}>
                <ListItem sx={detailsMainBoxStyles}>
                    <Typography variant="strong1">{`${index}.`}</Typography>
                    <Box sx={detailsInnerBoxStyles}>
                        <ListItemText
                            sx={detailsTextStyles}
                            primary={productName}
                            data-testid="product-name"
                        />
                        <ListItemText
                            sx={detailsTextStyles}
                            secondary={finishDate}
                            data-testid="finish-date"
                        />
                        <ListItemText
                            sx={detailsTextStyles}
                            secondary={`**** ${accountNumber.slice(-4)}`}
                            data-testid="account-number"
                        />
                    </Box>
                </ListItem>
                <ListItem sx={detailsBalanceBoxStyles}>
                    <Typography variant="strong1" data-testid="balance">
                        {balance} {currencyCode}
                    </Typography>
                </ListItem>

                <ListItem
                    data-testid="credit-more"
                    sx={listItemLinkStyles}
                    alignItems="flex-start"
                >
                    <Typography
                        sx={myLinkSx}
                        variant="textLink2"
                        onClick={handleClickNavigate}
                    >
                        Показать больше
                    </Typography>
                </ListItem>
            </List>
        </CreditDetailsWrapper>
    )
}
