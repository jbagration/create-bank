import { Theme } from '@mui/material'

export const mainBoxStyles = {
    marginLeft: 0,
    marginBottom: '24px',
    marginRight: '16px',
    width: '386px',
    height: '225px',
    border: '1px solid #EEEEEE',
    borderRadius: '8px',
}

export const titleBoxStyles = (theme: Theme) => {
    return {
        height: '64px',
        padding: '0 22px',
        background: theme.palette.BackStandart.BackgroundOctonary,
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px 8px 0 0',
        alignItems: 'center',
    }
}

export const currencyCharBoxStyles = (theme: Theme) => {
    return {
        width: '40px',
        height: '40px',
        background: theme.palette.BackAccent.BackgroundPrimary,
        borderRadius: '50%',
        textAlign: 'center',
        padding: '8px 0',
    }
}

export const contentBoxStyles = {
    padding: '16px 22px',
    ul: {
        listStylePosition: 'inside',
        margin: '24px 0 0',
        padding: '0',
    },
}

export const mainInfoStyles = {
    display: 'flex',
    justifyContent: 'space-between',
}

export const infoBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
}

export const moreLinkStyles = (theme: Theme) => {
    const { TextPrimary } = theme.palette.Text
    return {
        marginTop: '-10px',
        display: 'block',
        color: TextPrimary,
        textAlign: 'end',
        fontSize: '12px',
        textDecoration: 'underline',
        cursor: 'pointer',
        textDecorationSkipInk: 'none',
    }
}
