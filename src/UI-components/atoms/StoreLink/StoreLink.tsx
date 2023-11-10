import { FC, memo } from 'react'
import { Link as MUILink, LinkProps } from '@mui/material'

import type { StoreLinkProps } from './StoreLink.type'

import { storeLinkStyled } from './StoreLink.style'

export const StoreLink: FC<LinkProps & StoreLinkProps> = memo(
    ({
        href,
        target = '_blank',
        rel = 'noopenreferrer',
        isMinified,
        children,
        ...props
    }) => {
        const storeLinkStyledSx = storeLinkStyled({ isMinified })

        return (
            <MUILink
                data-testid={`${href}`}
                href={href}
                target={target}
                rel={rel}
                {...props}
            >
                {children}
            </MUILink>
        )
    }
)
