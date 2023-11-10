import { styled, SxProps, Theme } from '@mui/material'

import { InputHandler } from '../FormHandlers'

import type { inputSizeStylesProps } from './InputWithSlider.type'

export const StyledInputSize = styled(InputHandler)<{ start?: string }>(
    ({ theme, start = 'false' }) => ({
        ...(start === 'true' ? { width: '117px' } : { width: '343px' }),
    })
)

export const inputSizeStyles: (props: inputSizeStylesProps) => SxProps = ({
    start = 'false',
}) => {
    return {
        ...(start === 'true' ? { width: '117px' } : { width: '343px' }),
    }
}

export const sliderBoxStyles = {
    width: '343px',
    marginBottom: '40px',
}

export const sliderInfoStyles = (theme: Theme) => {
    return {
        display: 'block',
        marginTop: '8px',
        color: theme.palette.Text.TextTertiary,
    }
}
