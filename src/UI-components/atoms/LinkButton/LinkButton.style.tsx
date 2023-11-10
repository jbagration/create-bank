import type { Theme } from '@mui/material'

export const fabStyles = (theme: Theme) => {
    const { BackgoundDark } = theme.palette.BackGray
    const { BackgroundPrimary, BackgroundHover } = theme.palette.BackAccent

    return {
        position: 'absolute',
        right: 32,
        bottom: 0,
        color: BackgoundDark,
        backgroundColor: BackgroundPrimary,
        boxShadow: 'none',
        '&: hover': {
            backgroundColor: BackgroundHover,
        },
    }
}
