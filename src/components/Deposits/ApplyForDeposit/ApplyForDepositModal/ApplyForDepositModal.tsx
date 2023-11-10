import { Dispatch, FC, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationModal } from 'src/UI-components/molecules'
import { Box, Typography } from '@mui/material'

interface ApplyForDepositModalProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    error: boolean
}

export const ApplyForDepositModal: FC<ApplyForDepositModalProps> = ({
    isOpen,
    setOpen,
    error,
}) => {
    const navigate = useNavigate()

    return (
        <NotificationModal
            type={error ? 'error' : 'done'}
            open={isOpen}
            handleClose={() => {
                setOpen(false)
                navigate(`/user_main/deposits/my_deposits`, {
                    replace: true,
                })
            }}
        >
            <Box mb="50px">
                <Typography variant="body1">
                    {error
                        ? 'Заявка не была отправлена по техническим причинам'
                        : 'Заявка на внесение депозита успешно принята'}
                </Typography>
            </Box>
        </NotificationModal>
    )
}
