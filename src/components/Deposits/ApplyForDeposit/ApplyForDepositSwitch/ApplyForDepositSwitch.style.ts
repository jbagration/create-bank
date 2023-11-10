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
