import { Theme } from '@mui/material'

export const cardStatementContainerStyles = {
    display: 'flex',
    margin: '0px auto',
    marginTop: '110px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '660px',
}

export const creditTermsTableBoxStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        marginTop: '20px',
        minWidth: '600px',
    }
}
