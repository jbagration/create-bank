import type { SxProps, Theme } from '@mui/material'

import { GridItemTitleStylesProps } from './GridItemTitle.type'

export const GridItemTitleStyles: (
    props: GridItemTitleStylesProps
) => SxProps<Theme> =
    ({ textBold }) =>
    (theme) => {
        const { TextTertiary, TextPrimary } = theme.palette.Text

        return {
            display: 'flex',
            alignItems: 'center',
            color: textBold ? TextPrimary : TextTertiary,
        }
    }
