import React, { FC, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Box, IconButton, Snackbar, Typography } from '@mui/material'

import { CreditDetailsWrapper } from '../../../components/Loans/ApplyForm/CreditDetailsWrapper/CreditDetailsWrapper'
import { copyToClipboard } from '../../../utils/copyToClipboard/copyToСlipboard'

import type { ClipboardProps } from './ClipboardComponent.type'

import {
    clicboardIconStyles,
    clicboardIconSvgStyles,
    clicboardTitleStyles,
    subtitleStyles,
    titleContainerStyles,
} from './ClipboardComponent.style'

export const ClipboardComponent: FC<ClipboardProps> = ({
    title,
    subtitle,
    copy = false,
    leftTop,
    leftBottom,
    rightTop,
    rightBottom,
    topBorder,
    rightBorder,
    leftBorder,
    bottomBorder,
    textLarge = false,
    center = false,
    flexCenter = false,
    fullWidth,
    loanDetails = false,
    padding,
    size,
    flex,
}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
        copyToClipboard(String(title))
    }

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    )

    const subtitleSxStyles = subtitleStyles({ center, loanDetails })
    const titleContainerSxStyles = titleContainerStyles({ flexCenter })

    return (
        <CreditDetailsWrapper
            leftTop={leftTop}
            leftBottom={leftBottom}
            rightBottom={rightBottom}
            rightTop={rightTop}
            topBorder={topBorder}
            rightBorder={rightBorder}
            leftBorder={leftBorder}
            bottomBorder={bottomBorder}
            fullWidth={fullWidth}
            loanDetails={loanDetails}
            padding={padding}
            size={size}
            flex={flex}
        >
            <Typography
                variant={loanDetails ? 'body1' : 'textLink3'}
                sx={subtitleSxStyles}
            >
                {subtitle}
            </Typography>
            <Box sx={titleContainerSxStyles}>
                {loanDetails ? (
                    <Typography sx={clicboardTitleStyles} variant="h5">
                        {title}
                    </Typography>
                ) : (
                    <Typography
                        variant={textLarge ? 'strong4' : 'strong1'}
                        textAlign="center"
                    >
                        {title}
                    </Typography>
                )}

                {copy && (
                    <Box data-testid="copy">
                        <Typography
                            sx={clicboardIconStyles}
                            onClick={handleClick}
                        >
                            <ContentCopyIcon sx={clicboardIconSvgStyles} />
                        </Typography>
                        <Snackbar
                            sx={{ color: '#fff' }}
                            message="Cкопировано в буфер обмена"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            autoHideDuration={2000}
                            onClose={() => setOpen(false)}
                            open={open}
                            action={action}
                        />
                    </Box>
                )}
            </Box>
        </CreditDetailsWrapper>
    )
}
