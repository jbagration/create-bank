import { Theme } from '@mui/material'

export const navLinkStyles = (theme: Theme) => {
    return {
        '.MuiTypography-root': {
            transition: '0.3s ease',
            borderBottom: '2px dashed transparent',
        },
        '.MuiTypography-root:hover': {
            transition: '0.3s ease',
            borderBottom: `2px dashed ${theme.palette.BackAccent.BackgroundHover}`,
        },

        '&.active': {
            '.MuiTypography-root': {
                borderBottom: `2px solid ${theme.palette.BackAccent.BackgroundHover}`,
            },
        },
    }
}
