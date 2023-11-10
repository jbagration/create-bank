import { grayColor } from 'src/themes/colors/gray'
import type { SxProps, Theme } from '@mui/material'

import type { FeaturedItemProps } from './FeaturedItem.type'

export const featuredServicesStyles =
    (props: FeaturedItemProps): SxProps<Theme> =>
    (theme) => {
        const { operation } = props

        return {
            border: '4px solid',
            width: '96px',
            height: '96px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px',
            color: grayColor[700],
            marginBottom: '16px',
            borderColor: theme.palette.BackAccent.BackgroundBorder,
        }
    }

export const featuredServicesTextStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        textAlign: 'center',
    }
}
