import type { Theme } from '@mui/material'

export const openFilterButtonStyles = (theme: Theme) => {
    const { TextPrimary } = theme.palette.Text
    const { BackgoundFilter: BackgoundFilterGray } = theme.palette.BackGray
    const { BackgoundFilter: BackgoundFilterYellow } = theme.palette.BackAccent
    const { BackgroundPrimary } = theme.palette.BackStandart
    return {
        position: 'absolute',
        zIndex: '1300',
        top: '112px',
        left: '472px',
        padding: '0 18px',
        minWidth: '128px',
        height: '36px',
        borderRadius: '20px',
        textTransform: 'none',
        color: TextPrimary,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
        background: BackgroundPrimary,
        '& svg': {
            marginRight: '9px',
            path: {
                fill: theme.palette.Text.TextPrimary,
            },
        },

        '&:hover': {
            backgroundColor: BackgoundFilterGray,
            transition: 'all 0.02s ease-out',
        },
        '&:active': {
            backgroundColor: BackgoundFilterYellow,
        },
    }
}
