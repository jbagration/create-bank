import { Theme } from '@mui/material'

export const favoritesListStyle = {
    height: '400px',
    scrollSnapType: 'y',
    scrollSnapAlign: 'start',
    overflowX: 'hidden',
}

export const favoritePaymentWrapperStyle = (theme: Theme) => ({
    cursor: 'pointer',
    position: 'relative',
    marginTop: '20px',

    '& img': {
        height: '56px',
    },

    '& span, p': {
        fontWeight: '500',
        marginLeft: '32px',
        textDecoration: 'none',
        color: theme.palette.Text.TextPrimary,
        display: 'inline-block',
        width: 'calc(100% / 3.5)',
    },
    '& [test-id="delete-icon"]': { position: 'relative', left: '10%' },
})
