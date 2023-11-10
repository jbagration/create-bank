import React, { FC } from 'react'
import { AllowAccessFilesIcon } from 'src/assets/svg'
import { Button } from 'src/UI-components/atoms'
import { Box, Icon, Stack, Typography } from '@mui/material'

import { buttonStyles, iconStyles } from './UploadAccessFiles.style'

import { UploadAccessFilesProps } from './UploadAccessFiles.type'

export const UploadAccessFiles: FC<UploadAccessFilesProps> = ({
    handleClose,
    setIsFileAccess,
    clickedInputRef,
}) => {
    const handleAcceptAccess = () => {
        setIsFileAccess(true)
        clickedInputRef.current?.click()
        handleClose()
    }

    return (
        <Box position="relative">
            <Stack direction="row" alignItems="center" spacing={4}>
                <Icon sx={iconStyles}>
                    <AllowAccessFilesIcon />
                </Icon>
                <Typography
                    variant="subtitle3"
                    color="Text.TextPrimary"
                    flex="2"
                >
                    Разрешить{' '}
                    <Typography variant="subtitle3Bold">
                        CreateBank online
                    </Typography>{' '}
                    доступ к фотографиям, мультимедиа и файлам на вашем
                    устройстве?
                </Typography>
            </Stack>
            <Box position="absolute" bottom="-40px" right={0}>
                <Button
                    variant="text"
                    size="small"
                    sx={buttonStyles}
                    type="button"
                    onClick={handleClose}
                >
                    ОТМЕНИТЬ
                </Button>
                <Button
                    variant="text"
                    size="small"
                    sx={buttonStyles}
                    type="button"
                    onClick={handleAcceptAccess}
                >
                    РАЗРЕШИТЬ
                </Button>
            </Box>
        </Box>
    )
}
