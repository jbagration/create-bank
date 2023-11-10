import { FC } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { Box, Typography, useTheme } from '@mui/material'

import { RadialSeparators } from '../RadialSeparators/RadialSeparators'

import { progressBarStyles, progressCircleStyles } from './Progress.style'

import 'react-circular-progressbar/dist/styles.css'

export const Progress: FC<{ redeemed: number }> = ({ redeemed }) => {
    const theme = useTheme()

    const progressBarStylesTheme = progressBarStyles(theme)

    return (
        <CircularProgressbarWithChildren
            value={redeemed}
            strokeWidth={6}
            circleRatio={0.75}
            styles={progressBarStylesTheme}
        >
            <RadialSeparators
                count={10}
                style={{
                    background: theme.palette.BackStandart.BackgroundQuinary,
                    width: '5px',
                    height: `${10}%`,
                }}
            />

            <Box sx={progressCircleStyles}>
                <Typography variant="strong4" sx={{ color: '#fff' }}>
                    {`${redeemed}%`}
                </Typography>
            </Box>

            <Typography sx={{ position: 'absolute', bottom: '5px' }}>
                Погашено
            </Typography>
        </CircularProgressbarWithChildren>
    )
}
