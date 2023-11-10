import { Theme } from '@mui/material/styles'

export const textButtonStyles = (theme: Theme) => {
    return {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '16px',
        color: theme.palette.BackAccent.BackgroundPrimary,
        backgroundColor: '#FFFFFF',
        textTransform: 'none',
        paddingTop: '32px',
        paddingBottom: '0px',
        '&:hover': {
            color: theme.palette.BackAccent.BackgroundHover,
            backgroundColor: '#FFFFFF',
        },
        '.MuiButton-startIcon': {
            marginRight: '15.5px',
            '&:hover': {
                fill: theme.palette.BackAccent.BackgroundHover,
            },
        },
    }
}
