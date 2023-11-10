import { FC } from 'react'
import { Button, ButtonProps, Typography } from '@mui/material'

import { buttonStyles } from './OpenSideBar.style'

export const OpenSideBar: FC<ButtonProps> = ({
    variant = 'contained',
    ...props
}) => {
    const buttonStylesSx = buttonStyles()

    return (
        <Button
            sx={buttonStylesSx}
            variant={variant}
            disableRipple
            disableElevation
            {...props}
        >
            <Typography variant="buttonLarge">{props.children}</Typography>
        </Button>
    )
}
