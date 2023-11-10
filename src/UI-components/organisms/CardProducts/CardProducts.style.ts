import { Theme } from '@mui/material'

export const cardBoxStyles = (theme: Theme) => {
    return {
        display: 'flex',
        gap: '65px',
        marginBottom: '85px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const cardTitleStyles = (theme: Theme) => {
    return {
        display: 'block',
        marginBottom: '30px',
        ...theme.typography.strong1,
    }
}

export const cardListStyles = {
    margin: 0,
    paddingLeft: '15px',
}
