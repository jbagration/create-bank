import React, { FC, useState } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'

import { useAppSelector } from '../../../redux/hooks/redux'

import type { HeaderProps } from './Header.type'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

import { StyledContentContainerLarge } from '../Containers/Containers.style'
import { headerWrapperStyles, toolbarStyles } from './Header.style'

export const Header: FC<HeaderProps> = React.memo(function Header({
    main = true,
}) {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    )
    const profileTheme = useAppSelector(
        (state) => state.auth.user?.profileSettings?.profileTheme
    )

    const theme = profileTheme === 'DARK' ? 'dark' : 'light'

    const [active, setActive] = useState(true)
    const clickHandler = () => {
        setActive(!active)
    }

    const headerWrapperStylesSx = headerWrapperStyles({ main })
    const positionHeader: string = main ? 'absolute' : 'static'

    return (
        <Box sx={{ ...headerWrapperStylesSx, mt: '0px' }}>
            <StyledContentContainerLarge sx={{ padding: '0 20px' }}>
                <AppBar sx={{ position: positionHeader, height: '64px' }}>
                    <Toolbar disableGutters sx={toolbarStyles}>
                        <HeaderLogo
                            main={main}
                            theme={theme}
                            isAuthenticated={isAuthenticated}
                        />
                        <HeaderNav main={main} />
                    </Toolbar>
                </AppBar>
            </StyledContentContainerLarge>
        </Box>
    )
})
