import { FC } from 'react'
import { AttentionIcon, SuccessIcon } from 'src/assets/svg'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'

import { depositInfoModalStyle } from './MyDepositInfo.style'

interface MyDepositInfoModalProps {
    type: 'attention' | 'success'
    message: string
    isOpen: boolean
    children: JSX.Element
}

export const MyDepositInfoModal: FC<MyDepositInfoModalProps> = ({
    type,
    message,
    isOpen,
    children,
}) => {
    return (
        <Dialog open={isOpen} disableEscapeKeyDown>
            <DialogContent sx={depositInfoModalStyle}>
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
                        sx={{ cursor: 'default' }}
                    >
                        {message}
                    </Typography>

                    {children}
                </Box>
            </DialogContent>
        </Dialog>
    )
}
