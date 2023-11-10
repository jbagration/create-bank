import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { Box, SxProps, Theme, Typography } from '@mui/material'

import type { ErrorNotificatorProps } from './ErrorNotificator.type'

import {
    buttonStyles,
    errorNotificatorBoxStyles,
    textStyles,
    titleStyles,
} from './ErrorNotificator.style'

export const ErrorNotificator: FC<ErrorNotificatorProps> = ({
    title,
    text,
    imgStyles,
    sx,
    isButton = true,
    handleError,
}) => {
    const navigate = useNavigate()

    const textStylesWithSxProps = [textStyles, sx] as SxProps<Theme>

    const handleClick = () => {
        navigate('/user_main')
        if (handleError) {
            handleError()
        }
    }
    return (
        <Box sx={errorNotificatorBoxStyles}>
            <Typography variant="h4" sx={titleStyles}>
                {title}
            </Typography>
            <Typography variant="subtitle1" sx={textStylesWithSxProps}>
                {text}
            </Typography>

            <Box sx={imgStyles} />
            {isButton && (
                <Button
                    sx={buttonStyles}
                    variant="contained"
                    size="long"
                    onClick={handleClick}
                >
                    На главную
                </Button>
            )}
        </Box>
    )
}
