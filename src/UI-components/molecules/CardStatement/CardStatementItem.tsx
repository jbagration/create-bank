import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import type { CardStatementItemProps } from './CardStatement.type'

import {
    listItemIconStyles,
    listItemStyles,
    listItemTextStyles,
} from './CardStatement.style'

export const CardStatementItem: FC<CardStatementItemProps> = ({
    icon,
    text,
    path,
    onClick,
}) => {
    return (
        <ListItem sx={listItemStyles} data-testid={`card-statement-${text}`}>
            <ListItemIcon sx={listItemIconStyles}>{icon}</ListItemIcon>
            <ListItemText
                sx={listItemTextStyles}
                disableTypography
                primary={
                    <Link
                        onClick={onClick}
                        to={path}
                        component={path ? RouterLink : Link}
                        color="inherit"
                        underline="hover"
                        sx={{ cursor: 'pointer' }}
                    >
                        {text}
                    </Link>
                }
            />
        </ListItem>
    )
}
