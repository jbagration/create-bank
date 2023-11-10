import { FC } from 'react'
import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ListItem, ListItemText, Typography } from '@mui/material'

import type { ItemHistoryDateProps } from './ItemHistoryDate.type'

import {
    bottomTextStyles,
    listItemStyles,
    listItemTextStyles,
} from '../ItemHistory.style'

export const ItemHistoryDate: FC<ItemHistoryDateProps> = ({ time, date }) => {
    const parsedDate = parse(date, 'dd.MM.yyyy', new Date())
    return (
        <ListItem sx={{ ...listItemStyles, width: '100px' }}>
            <ListItemText
                sx={{ ...listItemTextStyles, textAlign: 'center' }}
                primary={
                    <Typography variant="textLink3">
                        {format(parsedDate, 'd MMMM yyyy', { locale: ru })}
                    </Typography>
                }
                secondary={
                    <Typography variant="textLink3" sx={bottomTextStyles}>
                        {time}
                    </Typography>
                }
            />
        </ListItem>
    )
}
