import { Theme } from '@mui/material'

export const captionBoxStyles = () => (theme: Theme) => {
    return {
        marginTop: '36px',
        padding: '8px 12px',
        width: '343px',
        color: theme.palette.Text.TextTertiary,
        backgroundColor: theme.palette.BackGray.BackgroundSlider,
    }
}
