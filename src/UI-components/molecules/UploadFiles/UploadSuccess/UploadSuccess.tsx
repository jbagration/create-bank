import React, { FC } from 'react'
import { SuccessIcon } from 'src/assets/svg'
import { Button } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { boxContainerStyles } from './UploadSuccess.style'

import { UploadSuccessType } from './UploadSuccess.type'

export const UploadSuccess: FC<UploadSuccessType> = ({
    handleSuccess,
    type,
}) => {
    return (
        <Box sx={boxContainerStyles}>
            <SuccessIcon />
            <Typography variant="body1" mt="37px" mb="60px">
                Документы сохранены
            </Typography>

            {type === 'userVerificationUpload' && (
                <Typography variant="body1" width="331px" mb="30px">
                    Ваши документы будут рассмотрены в течение 2-х рабочих дней
                </Typography>
            )}

            <Button type="button" size="medium" onClick={handleSuccess} cancel>
                Ок
            </Button>
        </Box>
    )
}
