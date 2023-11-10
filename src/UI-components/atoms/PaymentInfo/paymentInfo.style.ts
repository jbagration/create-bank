import { Theme } from '@mui/material'

export const paymentInfoRowStyle =
    (cell: 'left' | 'right') => (theme: Theme) => {
        const width = cell === 'left' ? '263px' : '483px'
        return {
            border: `1px solid ${theme.palette.BackGray.BackgroundPrimary}`,
            width,
            height: '116px',
            padding: '0 0 0 40px',
        }
    }

export const paymentInfoModalStyle = (theme: Theme) => {
    return {
        height: 480,
        width: 600,
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: theme.palette.BackStandart.BackgroundQuaternary,
        backgroundColor: theme.palette.BackStandart.BackgroundTertiary,
    }
}
export const paymentInfoModalCloseBtnStyle = (theme: Theme) => {
    return {
        position: 'absolute',
        right: 5,
        top: 5,
        color: theme.palette.BackStandart.BackgroundQuaternary,
    }
}
export const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
}
