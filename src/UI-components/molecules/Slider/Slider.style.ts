import { CarouselNavProps } from 'react-material-ui-carousel/dist/components/types'
import { Theme } from '@mui/material'
import { keyframes } from '@mui/system'

export const sliderStyles = {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    '.MuiPaper-root': {
        borderRadius: 0,
    },
}

export const indicatorContainerStyles: CarouselNavProps = {
    style: {
        position: 'absolute',
        left: 86,
        bottom: 92,
        zIndex: 2,
        marginTop: 0,
        width: 'fit-content',
    },
}

export const indicatorIconButtonStyles: CarouselNavProps = {
    style: {
        color: '#fff',
        height: 12,
        width: 12,
        marginRight: 12,
    },
}

export const activeIndicatorIconButtonStyles = (theme: Theme) => {
    return {
        style: {
            color: theme.palette.BackAccent.BackgroundPrimary,
        },
    }
}

export const arrowAnimation = keyframes`
0%, 100% {
    bottom: 0;
}
50% {
    bottom: 20px;
}
`

export const iconButtonStyles = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    padding: 0,
    transform: 'translateX(-50%)',
    animation: `${arrowAnimation} 1s infinite ease`,
    marginBottom: '10px',
}
