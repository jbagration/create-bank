import { Theme } from '@mui/material'

export const converterTitleStyles = (theme: Theme) => {
    const { subtitle1, fontWeightBold } = theme.typography
    return {
        ...subtitle1,
        fontWeight: fontWeightBold,
    }
}

export const menuItemStyles = {
    '& svg': {
        display: 'flex',
        marginRight: '8px',
        boxShadow: 2,
    },
}

export const labelTextStyles = {
    display: 'inline-block',
    minWidth: '33px',
}

export const countryTextStyles = (theme: Theme) => {
    const { body1 } = theme.typography

    return {
        ...body1,
        ml: '3px',
        color: theme.palette.Text.TextDisabled,
    }
}
