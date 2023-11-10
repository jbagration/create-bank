import { Theme } from '@mui/material'

export const buttonStyles = (theme: Theme) => {
    return {
        marginLeft: '24px',
        color: theme.palette.SystemColor.Warning,
        fontSize: '14px',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
}

export const boxContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '521px',
    textAlign: 'center',
}
