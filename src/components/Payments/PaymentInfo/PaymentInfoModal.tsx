import { FC } from 'react'
import { SuccessIcon } from 'src/assets/svg'
import { ListOfActions } from 'src/UI-components/molecules/PaymentInfo'
import { Close } from '@mui/icons-material'
import {
    ButtonBase,
    Dialog,
    DialogContent,
    Stack,
    Typography,
} from '@mui/material'

import { paymentSuccess } from 'src/UI-components/atoms/PaymentInfo/paymentInfo.const'

import {
    paymentInfoModalCloseBtnStyle,
    paymentInfoModalStyle,
} from 'src/UI-components/atoms/PaymentInfo/paymentInfo.style'

interface Props {
    open: boolean
    onClose: () => void
    onClickAddFavorite: () => void
}
export const PaymentInfoModal: FC<Props> = ({
    open,
    onClose,
    onClickAddFavorite,
}) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogContent sx={paymentInfoModalStyle}>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 300 }}
                >
                    <SuccessIcon />
                    <Typography variant="strong2" mt={7}>
                        {paymentSuccess}
                    </Typography>
                    <ListOfActions onClickAddFavorite={onClickAddFavorite} />
                </Stack>
            </DialogContent>
            <ButtonBase
                disableTouchRipple
                sx={paymentInfoModalCloseBtnStyle}
                onClick={onClose}
            >
                <Close sx={{ height: 25, width: 25 }} />
            </ButtonBase>
        </Dialog>
    )
}
