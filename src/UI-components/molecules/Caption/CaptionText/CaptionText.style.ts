import { SxProps, Theme } from '@mui/material'

export const captionTextStyles: (props?: boolean) => SxProps<Theme> =
    (info) => (theme) => {
        const { body1, body2 } = theme.typography
        const { TextPrimary } = theme.palette.Text

        return {
            ...body1,
            color: TextPrimary,
            ...(info && { ...body2 }),
        }
    }
