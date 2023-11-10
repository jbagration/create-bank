import { FC, memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink, LinkProps, SxProps, Theme } from '@mui/material'

import { linkStyles } from './Link.style'

interface CustomLinkProps extends LinkProps {
    to?: string
    state?: Object
}

export const Link: FC<CustomLinkProps> = memo(
    ({
        href,
        variant = 'inherit',
        target = '_blank',
        rel = 'noopenreferrer',
        children,
        underline = 'hover',
        sx,
        to = '',
        ...props
    }) => {
        const linkStylesSx = linkStyles()

        const stylesWithSxProps = [sx, linkStylesSx] as SxProps<Theme>

        return (
            <MuiLink
                sx={stylesWithSxProps}
                component={RouterLink}
                variant={variant}
                underline={underline}
                href={href}
                target={target}
                rel={rel}
                to={to}
                {...props}
            >
                {children}
            </MuiLink>
        )
    }
)
