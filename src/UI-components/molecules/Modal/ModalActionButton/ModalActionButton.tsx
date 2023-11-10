import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Typography } from '@mui/material'

import {
    arrowStyles,
    closeIconStyles,
    modalActionButtonStyles,
    textStyles,
} from './ModalActionButton.style'

import { ModalActionButtonProps } from './ModalActionButton.type'

export const ModalActionButton: FC<ModalActionButtonProps> = ({
    modalAction,
    disableFocusRipple = true,
    disableRipple = true,
    disableElevation = true,
    ...props
}) => {
    const navigate = useNavigate()
    const actions = modalAction

    const closeIconStylesSx = closeIconStyles()
    const textStylesSx = textStyles()

    if (actions === 'close') {
        const closeButtonStylesSx = modalActionButtonStyles({
            modalAction: 'close',
        })

        return (
            <Button
                sx={closeButtonStylesSx}
                href="#"
                disableElevation={disableElevation}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                variant="text"
                {...props}
            >
                <CloseIcon sx={closeIconStylesSx} />
            </Button>
        )
    }

    if (actions === 'returnOnMain') {
        const returnButtonStylesSx = modalActionButtonStyles({
            modalAction: 'returnOnMain',
        })

        return (
            <Button
                sx={returnButtonStylesSx}
                href="#"
                disableElevation={disableElevation}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                variant="text"
                {...props}
            >
                <ArrowBackIosNewIcon sx={arrowStyles} />
                <Typography variant="textLink1">На главную</Typography>
            </Button>
        )
    }

    const backButtonStylesSx = modalActionButtonStyles({
        modalAction: 'back',
    })

    return (
        <Button
            sx={backButtonStylesSx}
            onClick={() => navigate(-1)}
            variant="text"
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            {...props}
        >
            <ArrowBackIosNewIcon sx={[arrowStyles, { marginRight: '7px' }]} />
            <Typography variant="textLink1" sx={textStylesSx} lineHeight="36px">
                Назад
            </Typography>
        </Button>
    )
}
