import { SxProps, Theme } from '@mui/material'

export const scaleLoanStyles = (): SxProps<Theme> => (theme) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '60px',
        paddingBottom: '32px',
        borderBottom: `10px solid ${theme.palette.BackAccent.BackgroundSecondary}`,
    }
}
