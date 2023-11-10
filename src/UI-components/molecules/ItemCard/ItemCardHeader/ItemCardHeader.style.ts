import { SxProps, Theme } from '@mui/material'

import { fontWeight } from '../../../../themes/typography'

import { subtitleMini } from '../ItemCard.const'

export const cardHeaderStyles: (props: boolean) => SxProps<Theme> =
    (mini) => (theme) => {
        const { subtitle2 } = theme.typography
        return {
            ...subtitle2,
            fontWeight: fontWeight.bold,
            ...(mini && { ...subtitleMini }),
        }
    }
