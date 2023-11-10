import type { Theme } from '@mui/material'

export const footerContainerStyles = {
    flex: '0 0 auto',
    justifyContent: 'space-around',
    padding: '0 40px 0 22px',
    width: '100%',
    boxShadow:
        '0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 20px rgba(2, 3, 3, 0.05)',
}

export const footerStyles = {
    padding: '40px 20px',
    margin: 'auto',
}

export const footerContainerLargeStyles = (theme: Theme) => {
    return {
        padding: '40px 20px',
        color: theme.palette.Text.TextPrimary,
    }
}
