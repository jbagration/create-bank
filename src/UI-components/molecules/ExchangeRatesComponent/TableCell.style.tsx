import type { Theme } from '@mui/material/styles'

export const tableCellStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        '&.MuiTableCell-head': {
            borderBottom: 'none',

            padding: '0 2px',
        },
        '&.MuiTableCell-body': {
            '&:first-child': {
                width: '52%',
            },
            borderBottom: `2px solid ${theme.palette.BackGray.BackgroundSlider}`,
            padding: '18px 5px',
        },
    }
}

export const boxNameContainerStyles = {
    marginLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
}

export const textNameStyles = (theme: Theme) => {
    return {
        paddingRight: '4px',
        color: theme.palette.Text.TextDisabled,
    }
}

export const contentTableRowStyles = {
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}

export const tableContainerStyles = {
    maxWidth: '440px',
    minHeight: '499px',
}

export const imgStyles = {
    maxWidth: '34px',
    height: '24px',
    boxShadow: '0px 0 10px 2px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
}
