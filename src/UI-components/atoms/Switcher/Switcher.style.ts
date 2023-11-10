import type { Theme } from '@mui/material'

export const switcherStyles = (theme: Theme) => {
    const { BackgroundPrimary } = theme.palette.BackAccent

    return {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: BackgroundPrimary,
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '& .MuiSwitch-switchBase': {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: BackgroundPrimary,
        },
    }
}
