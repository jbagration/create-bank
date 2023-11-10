import type { Theme } from '@mui/material'

export const footerTitleStyles = (theme: Theme) => {
    return {
        ...theme.typography.strong1,
        marginBottom: '8px',
    }
}

export const listTextSecondaryStyles = (theme: Theme) => {
    return {
        '.MuiListItemText-secondary': {
            fontSize: '12px',
            lineHeight: '16px',
            color: theme.palette.Text.TextDisabled,
        },
    }
}

export const listIconStyles = (theme: Theme) => {
    return {
        minWidth: '45px',
        color: theme.palette.Text.TextDisabled,
    }
}
