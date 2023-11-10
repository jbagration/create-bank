import { FC } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { Box, IconButton } from '@mui/material'

import type { HistoryProps } from './HistoryArrows.type'

import { arrowButtonStyles, arrowsWrapperStyles } from './HistoryArrows.style'

export const HistoryArrows: FC<HistoryProps> = ({
    count,
    dataLength,
    changePrev,
    changeNext,
    error,
    size,
    next = true,
}) => {
    const currentDataLength = dataLength - size * count

    return (
        <Box sx={arrowsWrapperStyles}>
            {dataLength > 0 && (!error || count > 0) && (
                <IconButton
                    sx={arrowButtonStyles}
                    data-testid="arrow-prew"
                    disabled={count < 1}
                    onClick={changePrev}
                >
                    <ArrowCircleLeftIcon fontSize="large" />
                </IconButton>
            )}

            {next && (
                <IconButton
                    sx={arrowButtonStyles}
                    data-testid="arrow-next"
                    disabled={currentDataLength <= size}
                    onClick={changeNext}
                >
                    <ArrowCircleRightIcon fontSize="large" />
                </IconButton>
            )}
        </Box>
    )
}
