import { FC, memo } from 'react'
import {
    Button as MUiButton,
    ButtonProps,
    SxProps,
    Theme,
    Typography,
} from '@mui/material'

import { ButtonStyled } from './Button.style'

import { StyledButtonProps } from './Button.type'

export const Button: FC<ButtonProps & StyledButtonProps> = memo(
    ({
        variant = 'contained',
        buttonVariant = 'primary',
        sx,
        testId,
        ...props
    }) => {
        const ButtonStyledSx = ButtonStyled({ buttonVariant, ...props })
        const StylesWithSxProps = [ButtonStyledSx, sx] as SxProps<Theme>

        return (
            <MUiButton
                sx={StylesWithSxProps}
                data-testid={
                    testId ?? `${props.size}-${buttonVariant}-${variant}-button`
                }
                variant={variant}
                disableRipple
                disableElevation
                {...props}
            >
                {(props.size === 'large' || props.size === 'long') && (
                    <Typography variant="buttonLarge">
                        {props.children}
                    </Typography>
                )}
                {props.size === 'medium' && (
                    <Typography variant="buttonMedium">
                        {props.children}
                    </Typography>
                )}
                {props.size === 'small' && (
                    <Typography variant="buttonSmall">
                        {props.children}
                    </Typography>
                )}
            </MUiButton>
        )
    }
)
