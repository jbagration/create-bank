import { Theme } from '@mui/material'

export const linkStyles = (theme: Theme) => {
    return {
        color: theme.palette.BackGray.BackgoundDark,
        textDecorationColor: theme.palette.BackGray.BackgoundDark,
        '&:hover': {
            cursor: 'pointer',
        },
        display: 'inline',
    }
}

export const captionStyles = (theme: Theme) => {
    return {
        padding: '16px 56px',
        color: theme.palette.BackGray.BackgoundDark,
        textAlign: 'center',
    }
}

export const titleStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        marginBottom: '40px',
    }
}
