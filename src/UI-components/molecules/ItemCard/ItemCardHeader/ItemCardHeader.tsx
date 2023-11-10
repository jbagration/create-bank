import { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material'

import { ReactComponent as Logo } from './S.svg'

import { itemCardBoxStyles } from '../ItemCard.style'
import { cardHeaderStyles } from './ItemCardHeader.style'

import { ItemCardHeaderProps } from './ItemCardHeader.type'

export const ItemCardHeader: FC<ItemCardHeaderProps> = ({
    cardName,
    mini = false,
}) => {
    const itemCardBoxStylesSx = itemCardBoxStyles(mini)
    const cardHeaderStylesSx = cardHeaderStyles(mini)

    return (
        <Box sx={itemCardBoxStylesSx}>
            <Typography data-cardname sx={cardHeaderStylesSx}>
                {cardName}
            </Typography>

            <IconButton>
                <Logo />
            </IconButton>
        </Box>
    )
}
