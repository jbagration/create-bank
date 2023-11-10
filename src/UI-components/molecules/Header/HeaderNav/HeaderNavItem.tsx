import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, SxProps, useTheme } from '@mui/material'

import { NavLink } from './NavLink'

import { navItemContainerStyles } from './HeaderNavItem.style'

import { HeaderNavItemProps } from './HeaderNavItem.type'

export const HeaderNavItem: FC<HeaderNavItemProps> = memo(
    ({ src, sx, to, text, children, main = true, onClick }) => {
        const theme = useTheme()

        const { TextSecondary, TextPrimary } = theme.palette.Text

        const navItemContainerStylesSx = [navItemContainerStyles, sx] as SxProps

        return (
            <Box sx={navItemContainerStylesSx}>
                <Link to={to}>
                    {children || (
                        <Avatar
                            sx={{ width: '32px', height: '32px' }}
                            src={src}
                        />
                    )}
                </Link>
                <NavLink
                    data-testid={`${to}-link`}
                    to={to}
                    onClick={() => onClick && onClick()}
                    color={main ? TextSecondary : TextPrimary}
                >
                    {text}
                </NavLink>
            </Box>
        )
    }
)
