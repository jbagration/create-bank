import { Dispatch, FC, SetStateAction } from 'react'
import { NotificationModal } from 'src/UI-components/molecules'
import { Box, Typography } from '@mui/material'

interface SecurityFormsModalProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    error: boolean
    message: string
}

export const SecurityFormsModal: FC<SecurityFormsModalProps> = ({
    isOpen,
    setOpen,
    message,
    error,
}) => {
    return (
        <NotificationModal
            type={error ? 'error' : 'done'}
            open={isOpen}
            handleClose={() => setOpen(false)}
        >
            <Box mb="50px">
                <Typography variant="body1">{message}</Typography>
            </Box>
        </NotificationModal>
    )
}
