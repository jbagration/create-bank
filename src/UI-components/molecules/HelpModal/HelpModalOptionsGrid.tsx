import { FC, ReactNode } from 'react'
import { Circle } from 'src/assets'
import { Box, Grid, Typography, useTheme } from '@mui/material'

import { withLink } from './HelpModal.util'

import {
    helpModalOptionIconStyle,
    helpModalOptionStatusStyle,
    helpModalOptionStyle,
} from './HelpModal.style'

interface HelpModalOptionsGridProps {
    children: ReactNode[]
}

export const HelpModalOptionsGrid: FC<HelpModalOptionsGridProps> = ({
    children,
}) => (
    <Grid
        container
        gap="24px"
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        {children}
    </Grid>
)

interface HelpModalOptionsProps {
    icon: ReactNode
    text: string
    disabled?: boolean
    onClick?: () => void
    linkTo?: string
}

export const HelpModalOption: FC<HelpModalOptionsProps> = ({
    icon,
    text,
    disabled = false,
    onClick,
    linkTo,
}) => {
    const theme = useTheme()
    const { Error, Success } = theme.palette.SystemColor
    const { TextPrimary, TextDisabled } = theme.palette.Text

    return withLink(
        <Grid item sx={helpModalOptionStyle(disabled)} onClick={onClick}>
            <Box sx={helpModalOptionIconStyle(disabled)}>{icon}</Box>
            <Typography
                variant="body2"
                color={disabled ? TextDisabled : TextPrimary}
            >
                {text}
            </Typography>
            <Box sx={helpModalOptionStatusStyle}>
                <Circle
                    width="5px"
                    height="5px"
                    fill={disabled ? Error : Success}
                />
                <Typography
                    variant="caption"
                    color={disabled ? Error : Success}
                >
                    {disabled ? 'Недоступно' : 'Доступно'}
                </Typography>
            </Box>
        </Grid>,
        linkTo
    )
}
