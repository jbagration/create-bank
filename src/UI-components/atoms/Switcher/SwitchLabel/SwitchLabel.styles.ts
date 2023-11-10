import type { SxProps, Theme } from '@mui/material'

import { SwitchLabelStylesProps } from './SwitchLabel.type'

export const switchLabelStyles: (
    props: SwitchLabelStylesProps
) => SxProps<Theme> =
    ({ isSwitchToggled }) =>
    (theme) => {
        const {
            BackAccent: { BackgroundHover },
            BackGray: { BackgroundSecondary },
        } = theme.palette

        return {
            ...theme.typography.body2,
            ...(isSwitchToggled && {
                color: BackgroundHover,
            }),
            ...(!isSwitchToggled && {
                color: BackgroundSecondary,
            }),
        }
    }
