import { Autocomplete, styled, Theme } from '@mui/material'

interface AutocompleteProps {
    variant?: 'searchBranch' | 'searchCity'
}
export const StyledAutocomplete = styled(Autocomplete, {
    shouldForwardProp: (prop) => prop !== 'variant',
})<AutocompleteProps>(({ theme, variant }) => ({
    width: '364px',

    '&.MuiAutocomplete-root': {
        ...(variant === 'searchBranch' && {
            position: 'absolute',
            top: '82px',

            marginLeft: '32px',
            zIndex: '1300',
            background: 'transparent',
        }),
        ' .MuiOutlinedInput-root': {
            paddingRight: '9px',
        },
        '& .MuiAutocomplete-input': {
            padding: 0,
        },
    },
    '& + .MuiAutocomplete-popper': {
        maxHeight: '200px',
        overflow: 'auto',
        marginTop: '10px!important',
        border: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
        borderRadius: '4px',
        '.MuiPaper-root': {
            borderRadius: 0,
        },
        '& .MuiAutocomplete-noOptions': {
            backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
            color: theme.palette.Text.TextPrimary,
        },
        '& .MuiAutocomplete-option': {
            minHeight: '40px',
            '&.Mui-focused': {
                backgroundColor: theme.palette.BackAccent.BackgoundFilter,
            },
        },
        '& .MuiAutocomplete-listbox': {
            backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
            overflow: 'hidden',
            padding: 0,
            color: theme.palette.Text.TextPrimary,
        },
        '&::-webkit-scrollbar': {
            width: '16px',
        },

        '&::-webkit-scrollbar-track': {
            backgroundColor: 'white',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '100vw',
            backgroundColor: theme.palette.BackGray.BackgroundPrimary,
            border: '4px solid white',
        },
    },
}))

export const svgIconStyles = (theme: Theme) => {
    return {
        '& svg': {
            path: {
                fill: theme.palette.Text.TextPrimary,
            },
            display: 'flex',
            alignItems: 'center',
        },
    }
}
