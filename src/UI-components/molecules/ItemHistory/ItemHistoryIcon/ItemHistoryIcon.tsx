import { FC } from 'react'
import { ListItem } from '@mui/material'

import { ButtonWithIcon } from '../../../atoms/ButtonWithIcon/ButtonWithIcon'

import type { ItemHistoryIconProps } from './ItemHistoryIcon.type'

import { listItemStyles } from '../ItemHistory.style'

export const ItemHistoryIcon: FC<ItemHistoryIconProps> = ({ icon }) => {
    return (
        <ListItem sx={listItemStyles}>
            <ButtonWithIcon yellowLight>{icon}</ButtonWithIcon>
        </ListItem>
    )
}
