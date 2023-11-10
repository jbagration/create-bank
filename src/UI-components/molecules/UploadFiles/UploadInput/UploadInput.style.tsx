import { Theme } from '@mui/material'

export const labelTextStyles = (theme: Theme) => {
    return {
        paddingBottom: '16px',
        color: theme.palette.Text.TextDisabled,
    }
}

export const errorTextStyles = (theme: Theme) => {
    return {
        paddingTop: '11px',
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.SystemColor.Error,
    }
}

export const errorButtonTextStyles = (theme: Theme) => {
    return {
        marginTop: '-20px',
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.SystemColor.Error,
    }
}
