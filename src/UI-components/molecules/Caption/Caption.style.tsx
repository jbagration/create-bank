import { SxProps, Theme } from '@mui/material'

export const CaptionStyles: (props?: boolean) => SxProps<Theme> =
    (info) => (theme) => {
        const {
            Text: { TextTertiary },
            BackGray: { BackgroundSlider },
            SystemColor: { Warning },
        } = theme.palette

        const WarningTransparent12 = `${Warning}1F`

        return {
            color: TextTertiary,
            lineHeight: 1,
            backgroundColor: BackgroundSlider,
            ...(info && {
                display: 'flex',
                padding: theme.spacing(2, 4),
                backgroundColor: WarningTransparent12,
                alignItems: 'center',
            }),
        }
    }
