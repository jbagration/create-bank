import type { Theme } from '@mui/material'

export const allTimePeriodContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '15px',
    paddingBottom: '30px',
}

export const iconContainerStyles = (theme: Theme) => {
    return {
        borderRadius: '50%',
        backgroundColor: theme.palette.BackAccent.BackgroundPrimary,
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export const calendarIconStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextSecondary,
        width: '15px',
        height: '17px',
    }
}

export const timePeriodContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'capitalize',
    minWidth: '200px',
}

export const periodStyles = (theme: Theme) => {
    return {
        ...theme.typography.body2,
        color: theme.palette.Text.TextDisabled,
    }
}

export const datesStyles = (theme: Theme) => {
    return {
        ...theme.typography.strong1,
        color: theme.palette.Text.TextPrimary,
    }
}
