import React, { FC } from 'react'
import { AttentionIcon, SuccessIcon } from 'src/assets/svg'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'

import { Button } from '../../../UI-components/atoms'

import { dialogStyles } from './UserDataModal.style'

export type Props = {
    type: 'attention' | 'success'
    isOpen: boolean
    message: string
    onConfirmButtonClick: () => void
}

export const UserDataModal: FC<Props> = ({
    type,
    isOpen,
    message,
    onConfirmButtonClick,
}) => {
    const handleClose = () => {
        if (isOpen) {
            onConfirmButtonClick()
        }
    }

    return (
        <Dialog
            open={isOpen}
            disableEscapeKeyDown
            disableRestoreFocus
            sx={dialogStyles}
            onClick={handleClose}
        >
            <DialogContent>
                <Box
                    width="550px"
                    mt="20px"
                    mb="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    {type === 'attention' && <AttentionIcon />}
                    {type === 'success' && <SuccessIcon />}

                    <Typography
                        variant="body1"
                        width="420px"
                        textAlign="center"
                        mt="30px"
                        mb="40px"
                        sx={{
                            cursor: 'default',
                        }}
                    >
                        {message}
                    </Typography>

                    <Button
                        type="button"
                        size="medium"
                        cancel
                        onClick={onConfirmButtonClick}
                    >
                        Ок
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
