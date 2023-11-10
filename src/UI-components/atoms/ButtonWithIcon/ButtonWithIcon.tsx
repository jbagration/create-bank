import { FC, memo } from 'react'
import { Box } from '@mui/material'

import { ButtomWithIconStyled } from './ButtonWithIcon.style'

import { ButtonWithIconProps } from './ButtonWithIcon.type'

export const ButtonWithIcon: FC<ButtonWithIconProps> = memo(
    ({ children, yellow, yellowLight, transparent, size, radius, onClick }) => {
        const ButtomWithIconStyledSx = ButtomWithIconStyled({
            yellow,
            yellowLight,
            transparent,
            size,
            radius,
        })
        return (
            <Box
                onClick={onClick}
                data-testid="button-item"
                sx={ButtomWithIconStyledSx}
            >
                {children}
            </Box>
        )
    }
)
