import type { SxProps, Theme } from '@mui/material'

import { FilterItemsStyleProps } from './FilterItems.type'

export const filterItemsButtonStyles: (
    props: FilterItemsStyleProps
) => SxProps<Theme> =
    ({ isActive }) =>
    (theme) => {
        const {
            BackGray: {
                BackgoundFilter,
                BackgroundSlider,
                BackgoundFilterHover,
            },
            Text: { TextPrimary },
            BackAccent: { BackgoundFilter: BackgoundFilterYellow },
        } = theme.palette

        return {
            '&.MuiButton-root': {
                display: 'flex',
                gap: '9px',
                borderRadius: '20px',
                height: '36px',
                textTransform: 'none',
                background: isActive ? BackgoundFilterYellow : BackgoundFilter,
                border: `1px solid ${BackgroundSlider}`,
                color: TextPrimary,
                padding: '8px 12px',
                marginRight: '10px',
                marginTop: '12px',
            },
            '&:hover': {
                background: isActive
                    ? BackgoundFilterYellow
                    : BackgoundFilterHover,
            },
            '&:active': {
                transition: 'all 0.8ms',
                backgroundColor: BackgoundFilterYellow,
            },
        }
    }

export const iconStyles = (theme: Theme) => {
    return {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& svg': {
            path: {
                fill: theme.palette.BackStandart.BackgroundQuaternary,
            },
        },
    }
}
export const tagButtonStyle: (props: FilterItemsStyleProps) => SxProps<Theme> =
    ({ isActive }) =>
    (theme) => {
        return {
            '&.MuiButton-root': {
                display: 'flex',
                gap: '9px',
                borderRadius: '20px',
                height: '36px',
                textTransform: 'none',
                background: isActive
                    ? theme.palette.BackAccent.BackgroundHover
                    : theme.palette.BackGray.BackgroundPrimary,
                color: theme.palette.BackGray.BackgoundDark,
                padding: '8px 12px',
                marginRight: '10px',
                marginTop: '12px',
            },
            '&:hover': {
                background: isActive
                    ? theme.palette.BackAccent.BackgroundHover
                    : theme.palette.BackGray.BackgroundHover,
            },
            '&:active': {
                transition: 'all 0.8ms',
                backgroundColor: theme.palette.BackAccent.BackgroundHover,
            },
        }
    }
