import { SxProps, Theme } from '@mui/material'

export const CaptionStyles = (): SxProps<Theme> => (theme) => {
    return {
        color: theme.palette.Text.TextQuinary,
        lineHeight: 1,
        backgroundColor: theme.palette.BackStandart.BackgroundSenary,
    }
}
