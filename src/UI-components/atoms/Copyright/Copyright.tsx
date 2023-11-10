import { FC, memo } from 'react'
import { Typography, TypographyProps } from '@mui/material'

import { TypographyStyled } from './Copyright.style'

export const Copyright: FC<TypographyProps> = memo(
    ({ variant = 'body1', ...props }) => {
        const TypographyStyledSx = TypographyStyled()

        return (
            <Typography
                sx={TypographyStyledSx}
                data-testid="Copyright"
                variant={variant}
            >
                © {new Date().getFullYear()} CreateBank
            </Typography>
        )
    }
)
