import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogContentText } from '@mui/material'

import { Button, Link } from '../../../atoms'

import { textConsent } from './ModalCookieConsent.const'

import {
    linkStyles,
    modalCookieDialogContentStyles,
    modalCookieDialogContentText,
    modalCookieDialogStyles,
} from './ModalCookieConsent.style'

import { ModalCookieConsentProps } from './ModalCookieConsent.type'

export const ModalCookieConsent = ({
    showModalCookie,
    setShowModalCookie,
}: ModalCookieConsentProps) => {
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        setShowModalCookie(false)
    }

    const modalCookieDialogStylesSx = modalCookieDialogStyles()
    const modalCookieDialogContentTextSx = modalCookieDialogContentText()

    const navigate = useNavigate()

    const handleClickPolicy = () => {
        navigate('/registration/policy')
    }

    return (
        <Dialog
            sx={modalCookieDialogStylesSx}
            fullWidth
            disableAutoFocus
            disableEnforceFocus
            disableEscapeKeyDown
            hideBackdrop
            open={showModalCookie}
            data-testid="modal-cookie-consent"
        >
            <DialogContent sx={modalCookieDialogContentStyles}>
                <DialogContentText sx={modalCookieDialogContentTextSx}>
                    {textConsent}
                    <Link to="" sx={linkStyles} onMouseDown={handleClickPolicy}>
                        Условиями обработки персональных данных и Cookies.
                    </Link>
                </DialogContentText>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    size="medium"
                    buttonVariant="primary"
                >
                    Закрыть
                </Button>
            </DialogContent>
        </Dialog>
    )
}
