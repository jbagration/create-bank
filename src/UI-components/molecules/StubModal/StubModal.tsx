import { FC } from 'react'
import { AttentionIcon, SuccessIcon } from 'src/assets/svg'
import { modalStyle } from 'src/common/common.styles'
import { Button } from 'src/UI-components/atoms'
import { Box, Dialog, DialogContent, Typography } from '@mui/material'

interface StubModalProps {
    isOpen: boolean
    message: string
    onConfirmButtonClick: () => void
    type?: 'success' | 'attention'
}

export const StubModal: FC<StubModalProps> = ({
    isOpen,
    message,
    onConfirmButtonClick,
    type,
}) => {
    const styles = modalStyle()

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
            onClick={handleClose}
        >
            <DialogContent sx={styles}>
                <Box
                    width="550px"
                    mt="20px"
                    mb="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    {type === 'success' ? <SuccessIcon /> : <AttentionIcon />}

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

StubModal.defaultProps = {
    type: 'attention',
}
