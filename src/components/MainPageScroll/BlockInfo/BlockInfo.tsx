import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { Box, Grid, Typography } from '@mui/material'

import { BUTTON_NAME, cards, DESCRIPTION, TITLE } from './BlockInfo.const'

import {
    boxStyles,
    descriptionStyles,
    gridStyles,
    imgBoxStyles,
    titleStyles,
} from './BlockInfo.style'

export const BlockInfo: FC = () => {
    const navigate = useNavigate()

    return (
        <Grid sx={gridStyles} container>
            <Box sx={imgBoxStyles}>
                <img
                    style={{ position: 'absolute', bottom: '32px' }}
                    src={cards}
                    alt="Card products"
                />
            </Box>
            <Box sx={boxStyles}>
                <Typography sx={titleStyles}>{TITLE}</Typography>
                <Typography sx={descriptionStyles}>{DESCRIPTION}</Typography>
                <Button
                    variant="contained"
                    size="large"
                    href="#"
                    onClick={() => navigate('/registration')}
                    sx={{ marginTop: '20px' }}
                >
                    {BUTTON_NAME}
                </Button>
            </Box>
        </Grid>
    )
}
