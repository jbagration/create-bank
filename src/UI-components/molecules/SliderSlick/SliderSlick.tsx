import { FC } from 'react'

import { StyledSliderCards } from './SliderSlick.style'

import { SliderSlickProps } from './SliderSlick.type'

export const SliderSlick: FC<SliderSlickProps> = ({ children, settings }) => {
    return <StyledSliderCards {...settings}>{children}</StyledSliderCards>
}
