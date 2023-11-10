import type { Theme } from '@mui/material'

export const itemCardWithTextStyles = (theme: Theme) => {
    return {
        display: 'flex',
        marginTop: '20px',
        maxWidth: '700px',
        padding: '20px',
        borderRadius: '12px',
        transition: '0.3s ease 0s',
        cursor: 'pointer',
        '&:hover': {
            transition: '0.3s ease 0s',
            boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
            top: '10px',
            backgroundColor: theme.palette.BackGray.BackgoundFilter,
        },
        color: theme.palette.Text.TextPrimary,
    }
}
