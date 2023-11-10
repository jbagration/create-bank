import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alert as MuiAlert, Snackbar } from '@mui/material'

import { LocationParams } from '../../../types/hooksTypes'

import { muiAlertStyles, snackbarStyles } from './LoanApprovalNotice.style'

interface State {
    isAccepted?: boolean
    isRejected?: boolean
}

export const LoanApprovalNotice: FC = () => {
    const { state, pathname } = useLocation() as LocationParams<State>
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    const [text, setText] = useState('')

    useEffect(() => {
        if (state?.isAccepted || state?.isRejected) {
            setText(
                state.isAccepted
                    ? 'Поздравляем! Ваша заявка на кредит одобрена!'
                    : 'Ваша заявка на кредит отклонена! Обратитесь в службу поддержки'
            )
            setOpen(true)
            navigate(pathname, { state: {}, replace: false })
        }
    }, [])

    return open ? (
        <Snackbar
            sx={snackbarStyles}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={6000}
            onClose={handleClose}
            open={open}
        >
            <MuiAlert icon={false} variant="filled" sx={muiAlertStyles}>
                {text}
            </MuiAlert>
        </Snackbar>
    ) : null
}
