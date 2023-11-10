import { Theme } from '@mui/material'

export const textDepositStyles = {
    container: {
        marginTop: '30px',
        padding: '0',
    },
    boxMain: {
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
    },
    btnImg: {
        cursor: 'pointer',
    },
} as const

export const textStyles = (theme: Theme) => {
    return {
        marginLeft: '16px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const iconButtonStyles = (theme: Theme) => {
    return {
        '& svg': {
            path: {
                fill: theme.palette.Text.TextPrimary,
            },
            circle: {
                fill: theme.palette.BackStandart.BackgroundNonary,
            },
            rect: {
                fill: theme.palette.BackStandart.BackgroundNonary,
            },
        },
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
}
