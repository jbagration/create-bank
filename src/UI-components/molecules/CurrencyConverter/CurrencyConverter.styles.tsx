import { Theme } from '@mui/material'

export const converterTitleStyles = (theme: Theme) => {
    const { subtitle1, fontWeightBold } = theme.typography
    return {
        ...subtitle1,
        fontWeight: fontWeightBold,
        color: theme.palette.Text.TextPrimary,
    }
}
