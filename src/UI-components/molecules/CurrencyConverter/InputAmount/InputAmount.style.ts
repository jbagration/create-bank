import { Theme } from '@mui/material'

export const inputAmountStyles = (theme: Theme) => {
    return {
        width: '200px',
        '&.MuiTextField-root .MuiOutlinedInput-root': {
            paddingLeft: 0,
            marginRight: 0,
            '& input': {
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: '10px',
            },
            '& .MuiInputAdornment-root': {
                color: theme.palette.Text.TextPrimary,
                marginRight: '2px',
                paddingBottom: '10px',
            },
        },
        'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
            {
                appearance: 'none',
                margin: 0,
            },
    }
}
