import { Theme } from '@mui/material'

export const iconWrapperStyle = (theme: Theme) => ({
    display: 'grid',
    placeItems: 'center',
    padding: '22px',
    borderRadius: '50%',
    backgroundColor: theme.palette.BackAccent.BackgroundSecondary,
})
