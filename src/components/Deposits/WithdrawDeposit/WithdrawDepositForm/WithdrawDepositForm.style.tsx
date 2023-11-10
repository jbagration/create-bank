import { Theme } from '@mui/material'

export const expandListStyles = (theme: Theme) => {
    const { TextPrimary } = theme.palette.Text
    return {
        textDecoration: 'underline',
        textDecorationSkipInk: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        color: TextPrimary,
        mb: '64px',
    }
}

export const depositAmountHeadingStyles = (theme: Theme) => {
    const { textLink3 } = theme.typography
    const { TextDisabled, TextPrimary } = theme.palette.Text

    return {
        ...textLink3,
        color: TextDisabled,

        '& .MuiTypography-root': {
            display: 'block',
            color: TextPrimary,
            mt: '8px',
            mb: '23px',
        },
    }
}
export const formLabelStyles = (theme: Theme) => {
    return { ...depositAmountHeadingStyles(theme) }
}
