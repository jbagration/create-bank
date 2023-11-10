import type { Theme } from '@mui/material'

export const searchInputStyles = (error: boolean) => (theme: Theme) => {
    const { BackgroundHover, BackgroundSecondary } = theme.palette.BackGray
    const { TextTertiary, TextPrimary } = theme.palette.Text
    const { Error } = theme.palette.SystemColor
    const { body1 } = theme.typography

    return {
        width: '100%',
        height: '48px',
        '& .MuiOutlinedInput-root': {
            '& svg': {
                margin: '14px',
                display: 'block',
                path: {
                    fill: TextPrimary,
                },
            },
            fieldset: {
                borderRadius: '100px',
                borderColor: error ? Error : BackgroundHover,
                borderWidth: '1px',
            },
            '&:hover': {
                fieldset: {
                    borderColor: error ? Error : TextTertiary,
                },
            },
            '&.Mui-focused': {
                fieldset: {
                    borderColor: error ? Error : BackgroundSecondary,
                    borderWidth: '2px',
                },
            },
            input: {
                padding: theme.spacing(3, 5),
                color: TextPrimary,
                ...body1,
                height: '24px',
            },
        },
    }
}

export const searchBoxStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}
