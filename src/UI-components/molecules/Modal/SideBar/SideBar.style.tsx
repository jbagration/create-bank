import { Theme } from '@mui/material'
import { dialogClasses } from '@mui/material/Dialog'

export const sideBarStyles = () => (theme: Theme) => {
    return {
        position: 'absolute',
        top: '64px',
        left: 0,
        width: '428px',
        zIndex: '1200',
        '& .MuiDialogContent-root': {
            alignItems: 'flex-start',
        },

        [`& .${dialogClasses.paper}`]: {
            margin: 0,
            borderRadius: 0,

            padding: '96px 32px 32px',
            width: '428px',
            maxWidth: 'unset',
            maxHeight: 'unset',
            height: '100%',
            backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
        },
    }
}

export const sideBarDialogContentStyles = {
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    overflow: 'auto',
}

export const sideBarDialogActionsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
}
