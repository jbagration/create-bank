import { FC } from 'react'
import { Grid } from '@mui/material'

import type { CreditDetailsWrapperProps } from './CreditDetailsWrapper.type'

import { creditWrapperStyles } from './CreditDetailsWrapper.style'

export const CreditDetailsWrapper: FC<CreditDetailsWrapperProps> = ({
    children,
    leftTop,
    leftBottom,
    rightBottom,
    rightTop,
    bottomBorder,
    topBorder,
    leftBorder,
    rightBorder,
    containerHeight,
    paddingSmall,
    fullWidth,
    textCenter,
    padding,
    size,
    flex,
}) => {
    const creditWrapperStyleSx = creditWrapperStyles({
        leftTop,
        rightTop,
        leftBottom,
        rightBottom,
        bottomBorder,
        topBorder,
        leftBorder,
        rightBorder,
        containerHeight,
        paddingSmall,
        fullWidth,
        textCenter,
        padding,
        flex,
    })
    return (
        <Grid
            item
            md={size}
            sx={creditWrapperStyleSx}
            data-testid="credit-wrapper"
        >
            {children}
        </Grid>
    )
}
