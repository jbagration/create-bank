import { Theme } from '@mui/material'

export const bpErrorIconStyles = (theme: Theme) => {
    return {
        width: 24,
        height: 24,
        boxSizing: 'border-box',
        border: `1px solid ${theme.palette.SystemColor.Error}`,
        borderRadius: '50%',
    }
}
