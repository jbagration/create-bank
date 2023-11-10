import type { Theme } from '@mui/material'

export const myLinkSx = (theme: Theme) => {
    return {
        textDecoration: 'underline',
        textDecorationSkipInk: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        color: theme.palette.Text.TextPrimary,
    }
}

export const listStyles = {
    padding: 0,
    display: 'flex',
    maxWidth: '613px',
}

export const listItemLinkStyles = {
    width: 'fit-content',
    display: 'flex',
    gap: '10px',
    padding: 0,
}

export const detailsTextStyles = (theme: Theme) => {
    return {
        marginTop: 0,
        '.MuiListItemText-primary': {
            ...theme.typography.strong1,
        },
        '.MuiListItemText-secondary': {
            fontSize: '16px',
            lineHeight: '24px',
            color: theme.palette.Text.TextDisabled,
        },
    }
}

export const detailsMainBoxStyles = {
    gap: '16px',
    padding: 0,
    whiteSpace: 'nowrap',
    alignItems: 'flex-start',
}

export const detailsInnerBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
}

export const detailsBalanceBoxStyles = {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
}
