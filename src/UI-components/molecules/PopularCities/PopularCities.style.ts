import { Theme } from '@mui/material'

export const citiesContainerStyles = {
    width: '534px',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5px',
}

export const citiesButtonStyles = (theme: Theme) => {
    const {
        BackGray: { BackgoundFilter, BackgroundSlider, BackgoundFilterHover },
        Text: { TextPrimary },
        BackAccent: { BackgoundFilter: BackgoundFilterYellow },
    } = theme.palette

    return {
        '&.MuiButton-root': {
            display: 'flex',
            gap: '9px',
            borderRadius: '20px',
            height: '36px',
            textTransform: 'none',
            background: BackgoundFilter,
            border: `1px solid ${BackgroundSlider}`,
            color: TextPrimary,
            padding: '8px 12px',
            marginRight: '10px',
            marginTop: '12px',
        },
        '&:hover': {
            background: BackgoundFilterHover,
        },
        '&:active': {
            transition: 'all 0.8ms',
            backgroundColor: BackgoundFilterYellow,
        },
    }
}

export const citiesTitleStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
    }
}
