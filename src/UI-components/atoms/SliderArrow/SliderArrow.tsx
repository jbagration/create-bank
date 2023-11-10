import { FC } from 'react'
import { IconButton } from '@mui/material'

import { NextArrow, PrevArrow } from '../../../assets/svg'

import { sliderArrowStyles } from './SliderArrow.style'

import { SliderArrowProps } from './SliderArrow.type'

export const SliderArrow: FC<SliderArrowProps> = ({
    top,
    right,
    direction,
    onClick,
}) => {
    const sliderArrowStyledSx = sliderArrowStyles({ top, right, direction })
    return (
        <IconButton sx={sliderArrowStyledSx} onClick={onClick}>
            {direction === 'right' ? <NextArrow /> : <PrevArrow />}
        </IconButton>
    )
}
