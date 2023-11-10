import { styled, TextField } from '@mui/material'

export const StyledSearch = styled(TextField)(({ theme, sx }) => ({
    backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
    width: '364px',
    height: '48px',
    marginTop: '24px',
    '& svg': {
        path: {
            fill: theme.palette.Text.TextPrimary,
        },
    },

    '& .MuiOutlinedInput-root': {
        height: '48px',

        '.MuiAutocomplete-popupIndicator': {
            display: 'none',
        },
        '& .MuiAutocomplete-clearIndicator': { margin: '0px 15px' },
        fieldset: {
            border: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
        },
        '&:hover': {
            fieldset: {
                border: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
            },
        },
        '&.Mui-focused': {
            '& svg': {
                display: 'block',
                path: {
                    fill: theme.palette.Text.TextPrimary,
                },
            },
            fieldset: {
                border: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
            },
        },
        input: {
            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
                {
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: theme.palette.Text.TextPrimary,
                    caretColor: theme.palette.Text.TextPrimary,
                    WebkitBoxShadow: `inset 0 0 0 ${theme.palette.BackGray.BackgroundPrimary}`,
                    transition: 'background-color 5000s ease-in-out 0s',
                },
            color: theme.palette.Text.TextPrimary,
            ...theme.typography.body1,
            '&::placeholder': {
                ...theme.typography.body1,
                color: theme.palette.Text.TextDisabled,
            },
        },
    },
    sx,
}))
