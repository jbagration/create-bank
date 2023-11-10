import type { Theme } from '@mui/material'

export const titleStyles = (theme: Theme) => {
    return {
        marginBottom: '24px',
        textAlign: 'center',
        color: theme.palette.Text.TextPrimary,
    }
}
