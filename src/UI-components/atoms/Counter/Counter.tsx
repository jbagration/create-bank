import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import type { CounterProps } from './Counter.type'

import { boxCounterStyles } from './Counter.style'

export const Counter: FC<CounterProps> = ({ count, countLimit, testId }) => {
    return (
        <Box sx={boxCounterStyles} data-testid={testId}>
            <Typography variant="body2" fontSize="12px">
                {count}
            </Typography>
            <Typography variant="body2" fontSize="12px">
                /
            </Typography>
            <Typography variant="body2" fontSize="12px">
                {countLimit}
            </Typography>
        </Box>
    )
}
