import { Theme } from '@mui/material'

export const BpUncheckedIconStyled = (theme: Theme) => {
    return {
        boxSizing: 'border-box',
        borderRadius: '2px',
        width: 24,
        height: 24,
        border: `1px solid ${theme.palette.BackGray.BackgroundHover}`,

        '.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            borderColor: theme.palette.BackAccent.BackgroundPrimary,
        },
    }
}
