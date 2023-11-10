import type { SxProps, Theme } from '@mui/material'

import type { SliderStylesProps } from './Slider.type'

export const typographyStyles = (theme: Theme) => {
    return { color: theme.palette.Text.TextTertiary }
}

export const sliderStyles: (props: SliderStylesProps) => SxProps<Theme> =
    ({ start }) =>
    (theme) => {
        const { BackgroundPrimary, BackgroundSecondary } =
            theme.palette.BackAccent
        const { TextDisabled } = theme.palette.Text

        return {
            '& .MuiSlider-track': {
                backgroundColor: BackgroundPrimary,
                borderColor: BackgroundPrimary,
            },
            '& .MuiSlider-thumb': {
                backgroundColor: BackgroundPrimary,
                boxShadow: 'none !important',
            },
            '& .MuiSlider-rail': {
                backgroundColor: BackgroundSecondary,
                opacity: 1,
            },
            '& .Mui-focusVisible': {
                backgroundColor: BackgroundPrimary,
            },
            ...(start && {
                '& .MuiSlider-rail': {
                    backgroundColor: TextDisabled,
                    opacity: 1,
                },
            }),
        }
    }
