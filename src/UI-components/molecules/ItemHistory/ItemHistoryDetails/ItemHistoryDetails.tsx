import { FC } from 'react'
import { ListItem, ListItemText, Typography } from '@mui/material'

import {
    bottomTextStyles,
    listItemStyles,
    listItemTextStyles,
} from '../ItemHistory.style'

import { ItemHistoryDetailsProps } from './ItemHistoryDetails.type'

export const ItemHistoryDetails: FC<ItemHistoryDetailsProps> = ({
    transferInfo,
    text,
}) => {
    return (
        <ListItem sx={listItemStyles}>
            <ListItemText
                sx={listItemTextStyles}
                primary={
                    <Typography variant="textLink3">{transferInfo}</Typography>
                }
                secondary={
                    <Typography variant="textLink3" sx={bottomTextStyles}>
                        {text}
                    </Typography>
                }
            />
        </ListItem>
    )
}
