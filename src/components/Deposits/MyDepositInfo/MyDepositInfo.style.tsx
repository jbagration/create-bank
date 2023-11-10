import { Theme } from '@mui/material'

export const yellowSwitchStyles = (theme: Theme) => {
    return {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: theme.palette.BackAccent.BackgroundPrimary,
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: theme.palette.BackAccent.BackgroundPrimary,
        },
    }
}
export const depositInfoModalStyle = (theme: Theme) => {
    return {
        cursor: 'default',
        color: theme.palette.BackStandart.BackgroundQuaternary,
        backgroundColor: theme.palette.BackStandart.BackgroundSecondary,
    }
}

export const buttonsBoxStyles = {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    gap: '20px',
}
