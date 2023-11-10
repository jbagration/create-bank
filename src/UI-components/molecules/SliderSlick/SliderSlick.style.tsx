import Slider from 'react-slick'
import { styled } from '@mui/material'

export const StyledSliderCards = styled(Slider)`
    .slider {
        overflow: hidden;
    }
    .slick-track {
        display: flex;
        cursor: grab;
    }
    .slick-track:active {
        cursor: grabbing;
    }
    .slick-list {
        width: 370px;
    }
`
