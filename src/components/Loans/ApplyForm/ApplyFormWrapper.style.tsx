import { Theme } from '@mui/material'

export const applyFormSubtitleStyles = (theme: Theme) => {
    return {
        width: '50%',
        mb: '64px',
        color: theme.palette.Text.TextPrimary,
    }
}
