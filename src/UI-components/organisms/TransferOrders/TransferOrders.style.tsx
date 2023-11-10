import { Theme } from '@mui/material'

export const transferBoxStyles = {
    margin: '40px 0',
    display: 'flex',
    gap: '16px',
}

export const transferBoxPaginationStyles = (theme: Theme) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.Text.TextDisabled,
    }
}

export const transferOrderCaptionStyles = (theme: Theme) => {
    return {
        padding: '16px 56px',
        textAlign: 'center',
    }
}

export const transferOrdersDaysTextStyles = (theme: Theme) => {
    return {
        textTransform: 'capitalize',
        color: theme.palette.Text.TextPrimary,
    }
}
