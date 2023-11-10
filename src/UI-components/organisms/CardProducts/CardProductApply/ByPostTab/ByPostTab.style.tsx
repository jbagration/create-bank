import { Theme } from '@mui/material'

export const captionStyles = {
    backgroundColor: 'rgba(255, 187, 51, 0.12)',
    width: '522px',
    padding: ' 14px',
    marginTop: '39px',
    marginBottom: '24px',
} as const

export const inputStyles = (theme: Theme) => {
    const {
        BackGray: { BackgroundHover },
    } = theme.palette

    return {
        borderColor: BackgroundHover,
    }
}

export const iconStyles = (theme: Theme) => {
    const {
        BackAccent: { BackgroundPrimary },
    } = theme.palette

    return {
        color: BackgroundPrimary,
    }
}

export const captionContentStyles = {
    display: 'flex',
    gap: '14px 10px',
    alignItems: 'center',
}
