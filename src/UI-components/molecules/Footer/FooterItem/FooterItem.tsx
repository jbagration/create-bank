import { FC } from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'

import type { FooterItemProps } from './FooterItem.type'

import {
    footerTitleStyles,
    listIconStyles,
    listTextSecondaryStyles,
} from './FooterItem.style'

export const FooterItem: FC<FooterItemProps> = ({
    title,
    subtitle,
    haveContacts,
    codeCalls,
    numberCalls,
}) => {
    const isMt16 = title === 'Для физических лиц' ? '16px' : '0px'
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box mb="16px">
                <Typography sx={footerTitleStyles}>{title}</Typography>
                {subtitle.map((text) => (
                    <Typography fontSize="12px" lineHeight="18px" key={text}>
                        {text}
                    </Typography>
                ))}
            </Box>
            {haveContacts && (
                <List
                    data-testid="footer-contacts"
                    sx={{
                        padding: 0,
                        marginTop: isMt16,
                        display: 'flex',
                    }}
                >
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemIcon sx={listIconStyles}>
                            <PhoneIphoneIcon />
                        </ListItemIcon>
                        <ListItemText
                            sx={listTextSecondaryStyles}
                            primary={codeCalls}
                            secondary="По России"
                        />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemText
                            sx={listTextSecondaryStyles}
                            primary={numberCalls}
                            secondary="Международные звонки"
                        />
                    </ListItem>
                </List>
            )}
        </Box>
    )
}
