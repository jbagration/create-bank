import { SxProps, Theme } from '@mui/material'

import { PickPersonallyTabItemStylesProps } from './PickPersonallyTabItem.type'

export const PickPersonallyTabItemStyles =
    ({ isSelected }: PickPersonallyTabItemStylesProps): SxProps<Theme> =>
    (theme) => {
        const { BackgoundFilterHover } = theme.palette.BackGray
        const { TextPrimary } = theme.palette.Text
        const { BackgroundQuaternary } = theme.palette.BackAccent

        return {
            backgroundColor: isSelected ? BackgroundQuaternary : '',
            '&:hover': {
                backgroundColor: isSelected
                    ? BackgroundQuaternary
                    : BackgoundFilterHover,
            },
            padding: '16px',
            display: 'flex',
            borderBottom: '1px solid #eeeeee',
            cursor: 'pointer',
            color: TextPrimary,
        }
    }
