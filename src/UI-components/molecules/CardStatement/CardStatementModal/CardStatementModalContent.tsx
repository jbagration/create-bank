import { FC } from 'react'
import { Link, List, ListItem, ListItemText } from '@mui/material'

import { listItemStyles } from '../../../../common/common.styles'

import type { ModalContentProps } from './CardsStatementModal.type'

import {
    linkStyles,
    listItemTextStyles,
    listStyles,
} from './CardStatementModal.style'

export const CardStatementModalContent: FC<ModalContentProps> = ({
    content,
}) => {
    return (
        <List sx={listStyles}>
            {content.map(({ icon, text, linkTo }) => (
                <ListItem sx={listItemStyles} key={linkTo}>
                    <Link sx={linkStyles} href={linkTo}>
                        {icon}
                        <ListItemText
                            sx={listItemTextStyles}
                            disableTypography
                            primary={text}
                        />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}
