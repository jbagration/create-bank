import { Theme } from '@mui/material'

export const textStyles = (theme: Theme) => {
    return {
        fontWeight: '500',
        marginLeft: '32px',
        textDecoration: 'none',
        color: theme.palette.Text.TextPrimary,
    }
}
