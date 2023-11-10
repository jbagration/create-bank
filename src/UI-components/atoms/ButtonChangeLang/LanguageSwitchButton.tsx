import { FC } from 'react'
import { Button as MUiButton, ButtonProps, Typography } from '@mui/material'

import { ButtonStyled } from './LanguageSwitchButton.style'

import { StyledButtonProps } from './LanguageSwitchButton.type'

export const LanguageSwitchButton: FC<ButtonProps & StyledButtonProps> = ({
    isActive = false,
    textColor,
    ...props
}) => {
    const ButtonStyledSx = ButtonStyled({ isActive, ...props })
    return (
        <MUiButton sx={ButtonStyledSx} variant="outlined" {...props}>
            <Typography
                data-testid={`caption-${props.children}`}
                variant="subtitle3"
                textTransform="none"
                color={textColor}
            >
                {props.children}
            </Typography>
        </MUiButton>
    )
}
