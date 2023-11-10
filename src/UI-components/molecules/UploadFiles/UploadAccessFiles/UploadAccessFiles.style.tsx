import { Theme } from '@mui/material'

export const buttonStyles = (theme: Theme) => {
    return {
        color: theme.palette.SystemColor.Warning,
        fontSize: '14px',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
}

export const iconStyles = (theme: Theme) => {
    return {
        width: '34px',
        '& svg': {
            path: {
                fill: theme.palette.BackStandart.BackgroundQuaternary,
            },
        },
    }
}
