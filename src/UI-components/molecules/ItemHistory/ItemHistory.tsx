import { FC } from 'react'
import { Grid, List } from '@mui/material'

import { choiceIcon } from '../../../utils/choiceIcon'

import type { ItemHistoryProps } from './ItemHistory.type'
import { ItemHistoryAmount } from './ItemHistoryAmount'
import { ItemHistoryDate } from './ItemHistoryDate'
import { ItemHistoryDetails } from './ItemHistoryDetails'
import { ItemHistoryIcon } from './ItemHistoryIcon'

import { transferInfo } from '../TransferItem/TransferItem.const'

import { listStyles } from './ItemHistory.style'

export const ItemHistory: FC<ItemHistoryProps> = ({
    date,
    sum,
    transferTypeName,
    currencyCode,
    time,
    remitterCardNumber,
    name,
}) => {
    const icon = choiceIcon(transferTypeName)
    const cardData = `*${remitterCardNumber.substring(12)}${name}`
        ? name
        : transferTypeName
    const info = transferInfo[transferTypeName]
    const listStylesSx = listStyles()

    return (
        <Grid width="100%">
            <List sx={listStylesSx}>
                <ItemHistoryDate time={time} date={date} />
                <ItemHistoryIcon icon={icon} />
                <ItemHistoryDetails transferInfo={info} text={cardData} />
                <ItemHistoryAmount sum={sum} currencyCode={currencyCode} />
            </List>
        </Grid>
    )
}
