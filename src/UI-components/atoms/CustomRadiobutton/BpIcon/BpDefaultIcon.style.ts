import { Theme } from '@mui/material'

export const bpDefaultIconStyles = (theme: Theme) => {
    return {
        width: 24,
        height: 24,
        boxSizing: 'border-box',
        border: `1px solid ${theme.palette.Text.TextPrimary}`,
        borderRadius: '50%',
        'input:hover ~ &': {
            borderColor: theme.palette.BackAccent.BackgroundPrimary,
        },
        'input:disabled ~ &': {
            border: `1px solid ${theme.palette.BackGray.BackgroundHover}`,
        },
    }
}
