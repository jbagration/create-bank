import { Theme } from '@mui/material'

export const rangeInputsBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

export const rangeInputsDashStyled = () => (theme: Theme) => {
    return {
        marginTop: '30px',
        width: '16px',
        height: '2px',
        background: '#000',
        backgroundColor: theme.palette.Text.TextDisabled,
    }
}
