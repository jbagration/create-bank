import { Theme } from '@mui/material'

export const textStyles = (theme: Theme) => {
    return {
        width: '100%',
        textAlign: 'center',
        color: theme.palette.Text.TextPrimary,
    }
}
