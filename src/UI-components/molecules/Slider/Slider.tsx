import React, { FC } from 'react'
import Carousel from 'react-material-ui-carousel'
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types'
import { useTheme } from '@mui/material'

import { SliderItem } from './SliderItem'

import { cardItems } from './Slider.const'

import {
    activeIndicatorIconButtonStyles,
    indicatorContainerStyles,
    indicatorIconButtonStyles,
    sliderStyles,
} from './Slider.style'

export const Slider: FC<CarouselProps> = ({
    autoPlay,
    interval = 5000,
    fullHeightHover = false,
    stopAutoPlayOnHover = false,
    indicatorContainerProps = indicatorContainerStyles,
    indicatorIconButtonProps = indicatorIconButtonStyles,
    activeIndicatorIconButtonProps,
    ...props
}) => {
    const theme = useTheme()

    const activeIndicatorIconButtonTheme =
        activeIndicatorIconButtonProps || activeIndicatorIconButtonStyles(theme)

    return (
        <Carousel
            sx={sliderStyles}
            animation="slide"
            autoPlay={autoPlay}
            duration={500}
            height="100vh"
            interval={interval}
            fullHeightHover={fullHeightHover}
            stopAutoPlayOnHover={stopAutoPlayOnHover}
            indicatorContainerProps={indicatorContainerProps}
            indicatorIconButtonProps={indicatorIconButtonProps}
            activeIndicatorIconButtonProps={activeIndicatorIconButtonTheme}
            {...props}
        >
            {cardItems.map((item, i) => (
                <React.Fragment key={item.cardTitle}>
                    <SliderItem item={item} />
                </React.Fragment>
            ))}
        </Carousel>
    )
}
