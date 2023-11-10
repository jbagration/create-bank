import { FC, memo } from 'react'
import { Link } from 'react-scroll'
import { Box, IconButton } from '@mui/material'

import { ReactComponent as ArrowScrollDown } from '../assets/img/Slider/scrolldown.svg'

import { MainPageInfo } from '../components'
import { LoginWindow, Slider } from '../UI-components/molecules'
import { Header } from '../UI-components/molecules/Header/Header'
import { StoreLinkBox } from '../UI-components/molecules/StoreLinkBox'
import { Page } from '../UI-components/organisms'

import { iconButtonStyles } from '../UI-components/molecules/Slider/Slider.style'

export const Main: FC = memo(() => {
    return (
        <Page>
            <Slider />
            <Header />
            <Box
                sx={{
                    position: 'absolute',
                    top: '96px',
                    right: '72px',
                    zIndex: 50,
                }}
            >
                <LoginWindow />
            </Box>

            <Link
                to="scrollbarButtonGoal"
                spy
                smooth
                offset={-400}
                duration={400}
            >
                <IconButton
                    sx={{
                        ...iconButtonStyles,
                        zIndex: 50,
                    }}
                    disableRipple
                >
                    <ArrowScrollDown />
                </IconButton>
            </Link>

            <StoreLinkBox
                isMain
                title="Скачать мобильный банк CreateBank Online"
                isMinified={false}
                sx={{ zIndex: 50 }}
            />
            <MainPageInfo />
        </Page>
    )
})
