import { SxProps, Theme } from '@mui/material'

import { SliderPaperStylesProps } from './SliderItem.type'

export const sliderPaperStyles: (
    props: SliderPaperStylesProps
) => SxProps<Theme> =
    ({ cardBackground }) =>
    (theme) => {
        return {
            position: 'relative',
            height: '100vh',
            backgroundSize: 'cover',
            color: theme.palette.Text.TextSecondary,
            backgroundImage: cardBackground,
        }
    }

export const cardTextBoxStyles = {
    position: 'absolute',
    left: 72,
    top: 128,
    width: '44%',
}
