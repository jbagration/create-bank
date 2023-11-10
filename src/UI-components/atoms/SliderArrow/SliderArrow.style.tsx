import type { SxProps, Theme } from '@mui/material'

import { SliderArrowProps } from './SliderArrow.type'

export const sliderArrowStyles =
    (props: SliderArrowProps): SxProps<Theme> =>
    (theme) => {
        const { top, right } = props
        return {
            position: 'absolute',
            top: `${top}`,
            right: `${right}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.BackStandart.BackgroundNonary,
            width: '24px',
            height: '24px',
            '& svg': {
                path: {
                    fill: theme.palette.BackStandart.BackgroundQuaternary,
                },
            },
            '&:hover': {
                backgroundColor: theme.palette.BackGray.BackgroundSlider,
            },
        }
    }
