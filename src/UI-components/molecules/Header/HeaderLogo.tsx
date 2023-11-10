import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Box, BoxProps } from '@mui/material'

import { headerLogoStyles } from './HeaderLogo.style'

interface HeaderLogoProps extends BoxProps {
    main?: boolean
    theme: 'dark' | 'light'
    isAuthenticated: boolean
}

export const HeaderLogo: FC<HeaderLogoProps> = ({
    main = true,
    theme,
    isAuthenticated,
}) => {
    const headerLogoStylesSx = headerLogoStyles({
        main,
        theme,
        isAuthenticated,
    })

    return (
        <>
            <Box
                data-testid="login-link"
                component={Link}
                to="/user_main"
                sx={headerLogoStylesSx}
            />
            <Box className="logoSlider" width="141px" height="46px" />
        </>
    )
}
