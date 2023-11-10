import { Theme } from '@mui/material'

export const notificationDialogStyles = (theme: Theme) => {
    return {
        overflowX: 'hidden',
        '& .MuiDialog-paper': {
            overflowX: 'hidden',
            backgroundColor: theme.palette.BackStandart.BackgroundSecondary,
        },
    }
}

export const notificationBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '603px',
    minHeight: '236px',
    borderRadius: '6px',
    overflow: 'hidden',
    paddingTop: '32px',
    paddingBottom: '60px',
}

export const notificationCircleStyles = (theme: Theme) => {
    return {
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: theme.palette.BackAccent.BackgroundPrimary,
    }
}

export const iconButtonStyles = (theme: Theme) => {
    return {
        position: 'absolute',
        right: 8,
        top: 8,
        '& svg': {
            fill: theme.palette.BackStandart.BackgroundQuaternary,
        },
    }
}
