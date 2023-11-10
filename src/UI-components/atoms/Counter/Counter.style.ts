import type { Theme } from '@mui/material'

export const boxCounterStyles = (theme: Theme) => {
    return {
        display: 'flex',
        justifyContent: 'flex-end',
        color: theme.palette.SystemColor.Warning,
    }
}
