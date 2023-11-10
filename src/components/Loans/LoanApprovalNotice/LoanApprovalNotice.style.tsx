import type { Theme } from '@mui/material'

export const snackbarStyles = {
    width: '300px',
    borderRadius: '5px',
    marginTop: '79px',
    marginRight: '69px',
    boxShadow: '0px 2px 5px 0px #898E8B',
}

export const muiAlertStyles = (theme: Theme) => {
    const { BackgroundPrimary } = theme.palette.BackAccent
    const { TextPrimary } = theme.palette.Text
    return {
        width: '100%',
        backgroundColor: BackgroundPrimary,
        padding: '24px',
        textAlign: 'center',
        '& .MuiAlert-message': {
            color: TextPrimary,
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
        },
    }
}
