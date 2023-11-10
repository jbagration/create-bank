import type { Theme } from '@mui/material'

export const creditTitleStrongTextStyles = (theme: Theme) => {
    return {
        ...theme.typography.strong1,
        color: theme.palette.Text.TextPrimary,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}

export const creditTextStyles = (theme: Theme) => {
    return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.palette.Text.TextDisabled,
    }
}

export const creditRowNumberStyles = (theme: Theme) => {
    return {
        ...theme.typography.strong1,
        color: theme.palette.Text.TextPrimary,
        paddingRight: '16px',
    }
}

export const creditBtnStyles = (theme: Theme) => {
    return {
        ...theme.typography.body2,
        color: theme.palette.Text.TextPrimary,
        marginBottom: '10px',
    }
}

export const linkStyles = (theme: Theme) => {
    const { BackgoundDark } = theme.palette.BackGray

    return {
        color: BackgoundDark,
        textDecorationColor: BackgoundDark,
    }
}

export const gridColumnStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
