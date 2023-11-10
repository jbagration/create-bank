import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import macbookMainPage from 'src/assets/img/MainPageScroll/macbookPro.png'
import { Button } from 'src/UI-components/atoms'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { descrAboutBankFrases } from '../Data/blockAboutText'

import {
    aboutBankHeader,
    descriptionStyle,
    gridContainer,
} from './BlockAbout.style'

export const BlockAbout: FC = () => {
    const navigate = useNavigate()

    return (
        <Grid sx={gridContainer} id="scrollbarButtonGoal" container>
            <Grid item xs={4.75}>
                <img
                    src={macbookMainPage}
                    alt="macbook CreateBank"
                    style={{
                        width: '546px',
                        height: '350px',
                        marginLeft: '40px',
                    }}
                />
            </Grid>
            <Grid
                sx={{
                    marginLeft: '60px',
                }}
                item
                xs={6.6}
            >
                <Typography sx={aboutBankHeader}>Интернет-банк</Typography>
                <Typography sx={descriptionStyle}>
                    {descrAboutBankFrases}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    href="#"
                    onClick={() => navigate('/registration')}
                    sx={{ marginTop: '20px' }}
                >
                    Подробнее
                </Button>
            </Grid>
        </Grid>
    )
}
