import type { Theme } from '@mui/material'

export const arrowsWrapperStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
}

export const arrowButtonStyles = (theme: Theme) => {
    return {
        color: theme.palette.BackAccent.BackgroundPrimary,
        fontSize: '40px',
        '&.Mui-disabled': {
            color: theme.palette.BackAccent.BackgroundSecondary,
        },
        '&:hover': {
            backgroundColor: '#f5f5f54f',
        },
    }
}
