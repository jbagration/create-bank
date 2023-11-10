import type { Theme } from '@mui/material/styles'

export const tableCellStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        '&.MuiTableCell-head': {
            borderBottom: 'none',
            padding: '4px 20px',
            textAlign: 'right',
        },
        '&.MuiTableCell-body': {
            '&:first-child': {
                width: '50%',
            },
            borderBottom: 'none',
            padding: '4px 20px',
            textAlign: 'right',
        },
    }
}

export const tableLeftSideStyles = (theme: Theme) => {
    return {
        borderBottom: 'none',
        padding: '4px 20px',
        textAlign: 'left',
        color: theme.palette.Text.TextPrimary,
    }
}

export const tableSummaryStyles = (theme: Theme) => {
    return {
        borderTop: `2px solid ${theme.palette.BackStandart.BackgroundQuaternary}`,
        borderBottom: 'none',
        padding: '4px 20px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const tableSummaryAmountStyles = (theme: Theme) => {
    return {
        borderTop: `2px solid ${theme.palette.BackStandart.BackgroundQuaternary}`,
        borderBottom: 'none',
        padding: '4px 20px',
        textAlign: 'right',
        color: theme.palette.Text.TextPrimary,
    }
}

export const contentTableRowStyles = {
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}

export const hrStyles = {
    height: '3px',
    border: 'none',
}

export const hrThinStyles = {
    height: '2px',
    border: 'none',
}

export const boxTitleStyles = (theme: Theme) => {
    return {
        marginBottom: '40px',
        marginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.Text.TextPrimary,
    }
}

export const mainTitleStyles = (theme: Theme) => {
    return {
        border: `2px solid ${theme.palette.BackStandart.BackgroundQuaternary}`,
        padding: '2px 10px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const tableContainerStyles = {
    maxWidth: '600px',
}
export const cardStatementDocumentBoxStyles = {
    marginTop: '20px',
    marginLeft: '-50px',
    display: 'flex',
    alignItems: 'start',
    gap: '30px',
}

export const cardStatementPromptTextStyles = (theme: Theme) => {
    return {
        padding: '20px 0',
        color: theme.palette.Text.TextPrimary,
    }
}
