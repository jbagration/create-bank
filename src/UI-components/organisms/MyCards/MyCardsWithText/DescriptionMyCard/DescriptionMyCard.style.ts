import { SxProps, Theme } from '@mui/material'

export const DescriptionMyCardBoxStyle: (props: boolean) => SxProps<Theme> =
    (mini) => (theme) => {
        return {
            paddingLeft: mini ? '16px' : '32px',
            display: 'flex',
            flexDirection: 'column',
            color: theme.palette.Text.TextPrimary,
        }
    }

export const DescriptionMyCardTextStyle: (props: boolean) => SxProps<Theme> =
    (mini) => (theme) => {
        const { fontWeightBold } = theme.typography
        return {
            fontWeight: fontWeightBold,
            paddingTop: mini ? '3px' : '16px',
            color: theme.palette.Text.TextPrimary,
        }
    }

export const expiredMessageStyle: SxProps<Theme> = (theme) => ({
    color: theme.palette.SystemColor.Error,
})

export const almostExpiredMessageStyle: SxProps<Theme> = (theme) => ({
    color: theme.palette.SystemColor.Warning,
})

export const expiredBoxStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
    alignItems: 'center',
}
