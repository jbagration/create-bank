import { Theme } from '@mui/material'

export const BoxStyles = (theme: Theme) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
        width: '416px',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.BackGray.BackgroundPrimary}`,
        padding: '40px 0',
    }
}

export const ContainerStyles = {
    width: '30%',
    margin: 0,
}

export const BoldTextStyles = {
    fontFamily: 'Roboto',
    fontSize: '40px',
    fontWeight: 900,
    lineHeight: '64px',
}

export const TextStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextTertiary,
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
    }
}
