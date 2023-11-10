import { FC } from 'react'
import { HeadphonesMicrophone } from 'src/assets'
import { Box, Typography } from '@mui/material'

import { navItemContainerStyles } from './HeaderNavItem.style'
import { navLinkStyles } from './NavLink.style'

interface HeaderNavItemHelpProps {
    mainColor: string
    handleOpenHelpModal: () => void
}

export const HeaderNavItemHelp: FC<HeaderNavItemHelpProps> = ({
    mainColor,
    handleOpenHelpModal,
}) => {
    return (
        <Box sx={navItemContainerStyles} onClick={handleOpenHelpModal}>
            <HeadphonesMicrophone fill={mainColor} />
            <Box component="span" sx={navLinkStyles}>
                <Typography variant="subtitle3" color={mainColor}>
                    Онлайн-помощник
                </Typography>
            </Box>
        </Box>
    )
}
