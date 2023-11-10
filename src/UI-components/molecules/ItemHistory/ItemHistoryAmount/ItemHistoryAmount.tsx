import { FC } from 'react'
import { ListItem, ListItemText, Typography } from '@mui/material'

import type { ItemHistoryAmountProps } from './ItemHistoryAmount.type'

import { listItemStyles } from '../ItemHistory.style'

export const ItemHistoryAmount: FC<ItemHistoryAmountProps> = ({
    sum,
    currencyCode,
}) => {
    const correctedSum = Math.abs(parseFloat(sum))

    return (
        <ListItem sx={{ marginLeft: 'auto', ...listItemStyles }}>
            <ListItemText
                primary={
                    <Typography variant="specificTextBold">
                        {correctedSum !== 0
                            ? `-${correctedSum} `
                            : `${correctedSum} `}
                    </Typography>
                }
                secondary={
                    <Typography variant="specificText1">
                        {currencyCode}
                    </Typography>
                }
            />
        </ListItem>
    )
}
