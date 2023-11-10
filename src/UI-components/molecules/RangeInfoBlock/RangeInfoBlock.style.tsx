import { Theme } from '@mui/material'

export const rangeStyles = (theme: Theme) => {
    return {
        width: '100%',
        height: '10px',
        background: theme.palette.BackAccent.BackgroundSecondary,
        marginBottom: '60px',
        marginTop: '30px',
    }
}

export const textBoxStyles = (theme: Theme) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        color: theme.palette.Text.TextPrimary,
    }
}
