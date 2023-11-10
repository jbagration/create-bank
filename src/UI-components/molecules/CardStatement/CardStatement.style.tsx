import type { Theme } from '@mui/material'

export const listSubheaderStyles = (theme: Theme) => {
    return {
        ...theme.typography.subtitle1Bold,
        color: theme.palette.Text.TextPrimary,
        paddingBottom: '35px',
        backgroundColor: 'inherit',
    }
}

export const listStyles = {
    width: '100%',
    maxWidth: '300px',
}

export const listItemStyles = (theme: Theme) => {
    return {
        height: '56px',
        color: theme.palette.Text.TextPrimary,
        '& svg': {
            path: {
                fill: theme.palette.Text.TextPrimary,
            },
        },
    }
}

export const listItemIconStyles = (theme: Theme) => {
    return {
        color: theme.palette.BackGray.BackgoundDark,
    }
}

export const listItemTextStyles = (theme: Theme) => {
    return {
        ...theme.typography.textLink2,
    }
}

export const infoStatementStyles = () => {
    return {
        '.MuiBox-root': {
            display: 'flex',
            alignItem: 'center',
            gap: '10px',
        },
    }
}
