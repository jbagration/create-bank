import { Theme } from '@mui/system'

export const contentStyles = (theme: Theme) => {
    return {
        maxWidth: '1440px',
        paddingTop: 0,
        color: theme.palette.Text.TextPrimary,
    }
}

export const titleStyles = (theme: Theme) => {
    return {
        textAlign: 'center',
        color: theme.palette.Text.TextPrimary,
        paddingTop: '16px',
    }
}
