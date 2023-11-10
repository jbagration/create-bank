import type { SxProps, Theme } from '@mui/material'

export const linkStyles = (): SxProps<Theme> => (theme) => {
    const { TextPrimary } = theme.palette.Text

    return {
        color: TextPrimary,
        textDecorationColor: TextPrimary,
    }
}
