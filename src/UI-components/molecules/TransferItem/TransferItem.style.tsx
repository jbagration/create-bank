import { Theme } from '@mui/material'

export const transferBoxStyles = {
    marginBottom: '40px',
    display: 'grid',
    gridTemplateColumns: '86px 1fr 120px 120px',
    gap: '24px',
    alignItems: 'center',
    justifyContent: 'space-between',
}

export const transferNameStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
}

export const transferPurposeStyles = {
    textAlign: 'center',
    '&::first-letter': {
        textTransform: 'uppercase',
    },
}

export const transferBoxIconStyles = (theme: Theme) => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        color: theme.palette.BackAccent.BackgroundPrimary,
        boxShadow:
            '0px 0px 2px rgba(158, 158, 158, 0.14), 0px 2px 2px rgba(158, 158, 158, 0.12), 0px 1px 3px rgba(158, 158, 158, 0.2)',
    }
}

export const transferSumTextStyles = (theme: Theme) => {
    return { textAlign: 'end', color: theme.palette.Text.TextPrimary }
}

export const transferTypographyStyle = {
    display: 'flex',
    flexDirection: 'column',
}
