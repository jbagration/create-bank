import { SxProps, Theme } from '@mui/material'

import { LoginWindowStylesProps } from './LoginWindow.type'

export const loginWindowStyles: (
    props: LoginWindowStylesProps
) => SxProps<Theme> =
    ({ top, right, position }) =>
    (theme) => {
        const { BackgroundPrimary } = theme.palette.BackStandart
        const { TextPrimary } = theme.palette.Text

        return {
            top,
            right,
            position,
            zIndex: 50,
            backgroundColor: BackgroundPrimary,
            color: TextPrimary,
            p: 8,
            borderRadius: 2,
            width: '407px',
        }
    }
