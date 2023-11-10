import { Theme } from '@mui/material'

export const mainContainerStyles = (theme: Theme) => {
    return {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        color: theme.palette.Text.TextPrimary,
    }
}
