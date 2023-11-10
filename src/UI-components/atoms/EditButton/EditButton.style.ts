import { SxProps, Theme } from '@mui/material/styles'

export const EditButtonStyled = (): SxProps<Theme> => (theme) => {
    return {
        minWidth: '48px',
        minHeight: '48px',
        marginLeft: '32px',
        borderRadius: '2px',
        color: 'black',
        background: theme.palette.BackAccent.BackgroundPrimary,
        '&:hover': {
            background: theme.palette.BackAccent.BackgroundHover,
        },
    }
}

export const EditOutlinedIconStyled = {
    height: '24px',
    width: '24px',
}
