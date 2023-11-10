import { Theme } from '@mui/material'

export const transferBoxStyles = {}

export const transferNameStyles = {}

export const transferContainerStyles = {}

export const transferBoxIconStyles = () => (theme: Theme) => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        color: theme.palette.BackAccent.BackgroundPrimary,
        boxShadow:
            '0px 0px 2px rgba(158, 158, 158, 0.14), 0px 2px 2px rgba(158, 158, 158, 0.12), 0px 1px 3px rgba(158, 158, 158, 0.2)',
    }
}
