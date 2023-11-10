import { FC } from 'react'
import { ButtonProps } from 'react-scroll/modules/components/Button'
import { CloseBtn, DownloadIcon } from 'src/assets/svg'
import { Box, Stack, Typography } from '@mui/material'

import { Button } from '../Button'

import {
    deleteButtonStyle,
    nameButtonStyles,
    uploadButtonStyle,
} from './uploadFiles.styles'

type Props = {
    uploaded: boolean
    onDelete: () => void
} & Pick<ButtonProps, 'onClick' | 'disabled'>

export const UploadButton: FC<Props> = ({
    uploaded,
    onDelete,
    children,
    ...props
}) => {
    const deleteButton = uploaded && (
        <Button size="long" cancel sx={deleteButtonStyle} onClick={onDelete}>
            <CloseBtn />
        </Button>
    )

    const uploadBtnStyle = uploadButtonStyle(uploaded)

    return (
        <Stack direction="row" display="flex" alignItems="stretch">
            <Button size="long" fullWidth sx={uploadBtnStyle} cancel {...props}>
                <Stack direction="row" display="flex" alignItems="center">
                    {uploaded && (
                        <Box>
                            <DownloadIcon />
                        </Box>
                    )}
                    <Typography variant="buttonLarge" sx={nameButtonStyles}>
                        {children}
                    </Typography>
                </Stack>
            </Button>
            {deleteButton}
        </Stack>
    )
}
