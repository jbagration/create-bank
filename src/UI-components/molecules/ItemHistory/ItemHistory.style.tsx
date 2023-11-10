import { Theme } from '@mui/material'

export const listItemStyles = {
    width: 'fit-content',
    padding: '0',
}

export const listStyles = () => (theme: Theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(4),
    color: theme.palette.Text.TextPrimary,
})

export const listItemTextStyles = {
    display: 'flex',
    flexDirection: 'column',
}

export const bottomTextStyles = (theme: Theme) => {
    return {
        marginTop: '4px',
        color: theme.palette.Text.TextDisabled,
    }
}
