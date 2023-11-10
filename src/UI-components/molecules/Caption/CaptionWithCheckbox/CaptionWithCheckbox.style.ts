import { Theme } from '@mui/material/styles/createTheme'

export const captionContainerStyles = (theme: Theme) => ({
    margin: '30px 0 25px',
    display: 'flex',
    alignItems: 'center',
    padding: '16px 16px 16px 16px',
    '& a': {
        color: theme.palette.BackStandart.BackgroundQuaternary,
    },
})

export const tabCheckboxStyles = {
    height: '25px',
    alignItems: 'start',
    marginRight: '16px',
    padding: '0px',
}
