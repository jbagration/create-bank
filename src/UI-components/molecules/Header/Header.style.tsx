import type { SxProps, Theme } from '@mui/material'

import { HeaderProps } from './Header.type'

export const headerWrapperStyles: (props: HeaderProps) => SxProps<Theme> =
    ({ main }) =>
    (theme) => {
        return {
            ...(main && {
                borderBottom: 'none',
            }),
            borderBottom: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
        }
    }

export const toolbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
}
