import { Theme } from '@mui/material'

export const iconStyles = (theme: Theme) => {
    return {
        '& svg': {
            path: {
                fill: theme.palette.BackStandart.BackgroundQuaternary,
            },
        },
    }
}
