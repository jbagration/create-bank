import { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import {
    appStore,
    DESCRIPTION,
    googleStore,
    logo,
    phone,
    qr,
    TITLE,
} from './BlockApps.const'

import {
    boxStyle,
    containerStyle,
    descriptionStyle,
    gridStyle,
    pictureStyle,
    titleStyle,
} from './BlockApps.style'

export const BlockApps: FC = () => {
    return (
        <Grid sx={gridStyle} container>
            <Box sx={boxStyle}>
                <Container sx={containerStyle} style={{ padding: 0 }}>
                    <img src={qr} alt="QR code" />
                    <img src={logo} alt="Logo CreateBank" />
                </Container>
                <Typography sx={titleStyle}>{TITLE}</Typography>
                <Typography sx={descriptionStyle}>{DESCRIPTION}</Typography>
                <Container sx={containerStyle} style={{ padding: 0 }}>
                    <img src={googleStore} alt="Google Play Badge" />
                    <img src={appStore} alt="App Store Badge" />
                </Container>
            </Box>
            <Box sx={pictureStyle}>
                <img src={phone} alt="Phone" />
            </Box>
        </Grid>
    )
}
