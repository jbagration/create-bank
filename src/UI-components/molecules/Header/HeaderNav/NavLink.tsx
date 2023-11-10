import React, { FC } from 'react'
import {
    NavLink as NavLinkRoute,
    NavLinkProps as LinkPropsRouter,
} from 'react-router-dom'
import { Box, LinkProps, SxProps, Theme, Typography } from '@mui/material'

import { navLinkStyles } from './NavLink.style'

export const NavLink: FC<LinkProps & LinkPropsRouter> = ({ sx, ...props }) => {
    const navLinkStylesSx = [sx, navLinkStyles] as SxProps<Theme>

    return (
        <NavLinkRoute style={{ textDecoration: 'none' }} {...props}>
            <Box component="span" sx={navLinkStylesSx}>
                <Typography variant="subtitle3" color={props.color}>
                    {props.children}
                </Typography>
            </Box>
        </NavLinkRoute>
    )
}
