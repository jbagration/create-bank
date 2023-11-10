import type { Theme } from '@mui/material'

export const boxStyles = {
    margin: '0 auto',
    width: '60%',
}

export const listStyles = {
    paddingTop: '24px',
    display: 'flex',
    flexWrap: 'wrap',
}

export const listItemStyles = {
    flexDirection: 'column',
    width: '25%',
    marginBottom: '16px',
}

export const linkStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}

export const listItemTextStyles = (theme: Theme) => {
    return {
        ...theme.typography.textLink2,
    }
}
