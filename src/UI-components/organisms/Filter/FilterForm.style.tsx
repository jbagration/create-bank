import { Theme } from '@mui/material'

export const filterFormTypographyStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextDisabled,
    }
}

export const filterFormGridTextStyles = (theme: Theme) => {
    return {
        justifyContent: 'space-between',
        color: theme.palette.Text.TextPrimary,
    }
}
