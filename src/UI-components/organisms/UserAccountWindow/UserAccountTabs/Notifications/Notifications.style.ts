import { Theme } from '@mui/material'

export const switcherContainerStyles = (theme: Theme) => {
    return {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const formElementsContainerStyles = (theme: Theme) => {
    return {
        display: 'flex',
        position: 'relative',

        '& .MuiFormHelperText-root.Mui-error': {
            position: 'absolute',
            bottom: '-25px',
        },
        '& .MuiButton-root.MuiButton-contained': {
            marginLeft: '32px',
        },
        color: theme.palette.Text.TextPrimary,
    }
}
