import { Box, Container, Typography } from '@mui/material'

import {
    BoldTextStyles,
    BoxStyles,
    ContainerStyles,
    TextStyles,
} from './InfoStatisticsBlock.style'

interface InfoStatistics {
    src: string
    boldText: string
    text: string
}

export const InfoStatisticsBlock = ({
    src,
    boldText,
    text,
}: InfoStatistics) => {
    return (
        <Box sx={BoxStyles}>
            <img src={src} alt="statistics icon" />
            <Container sx={ContainerStyles}>
                <Typography sx={BoldTextStyles}>{boldText}</Typography>
                <Typography sx={TextStyles}>{text}</Typography>
            </Container>
        </Box>
    )
}
