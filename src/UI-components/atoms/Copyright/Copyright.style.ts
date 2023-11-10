import { SxProps, Theme } from '@mui/material/styles'

export const TypographyStyled = (): SxProps<Theme> => (theme) => {
    return {
        display: 'inline-block',
        position: 'absolute',
        bottom: '24px',
        left: '72px',
        color: theme.palette.Text.TextSecondary,
    }
}
