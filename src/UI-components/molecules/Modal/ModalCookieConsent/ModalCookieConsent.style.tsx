import { SxProps, Theme } from '@mui/material'
import { dialogClasses } from '@mui/material/Dialog'

export const modalBorderRadius = '8px'

export const modalCookieDialogStyles: () => SxProps<Theme> = () => (theme) => {
    return {
        top: 'unset',
        borderRadius: `${modalBorderRadius}`,
        [`& .${dialogClasses.paper}`]: {
            margin: '0',
            marginBottom: '20px',
            maxWidth: '100vw',
            maxHeight: 'unset',
            backgroundColor: theme.palette.BackStandart.BackgroundSecondary,
            borderRadius: `${modalBorderRadius}`,
        },
        [`& .MuiDialog-container`]: {
            alignItems: 'flex-end',
        },
    }
}

export const modalCookieDialogContentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

export const modalCookieDialogContentText = () => (theme: Theme) => {
    const { TextPrimary } = theme.palette.Text

    return {
        color: TextPrimary,
        fontSize: '16px',
        lineHeight: '24px',
    }
}

export const linkStyles = {
    textDecoration: 'underline',
}
