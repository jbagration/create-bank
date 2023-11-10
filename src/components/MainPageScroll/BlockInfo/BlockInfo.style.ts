import { Theme } from '@mui/material'

export const gridStyles = (theme: Theme) => {
    return {
        backgroundColor: theme.palette.BackGray.BackgoundDark,
        marginTop: '370px',
        height: '588px',
    }
}

export const titleStyles = (theme: Theme) => {
    return {
        fontSize: '48px',
        fontWeight: 900,
        lineHeight: '72px',
        color: theme.palette.Text.TextSecondary,
    }
}

export const descriptionStyles = (theme: Theme) => {
    return {
        paddingBottom: '56px',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '36px',
        color: theme.palette.Text.TextSecondary,
        maxWidth: '496px',
    }
}

export const boxStyles = {
    padding: '160px 0 0 105px',
    width: '50%',
}

export const imgBoxStyles = {
    position: 'relative',
    paddingLeft: '115px',
    width: '45%',
}
