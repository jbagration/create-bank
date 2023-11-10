import { FC } from 'react'
import { InfoStatisticsBlock } from 'src/UI-components/atoms/InfoStatisticsBlock'
import { Box } from '@mui/material'

import { statisticksText } from '../Data/blockStatisticsText'

import { BoxStyles } from './BlockStatistics.style'

export const BlockStatistics: FC = () => {
    return (
        <Box sx={BoxStyles}>
            {statisticksText.map((item) => {
                return <InfoStatisticsBlock {...item} />
            })}
        </Box>
    )
}
