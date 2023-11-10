import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { transformRowsName } from 'src/UI-components/atoms/PaymentInfo/paymentInfo.utils'
import {
    MainMenuPage,
    PaymentInfoModal,
    PaymentInfoTable,
} from 'src/UI-components/organisms'
import { formatNumber } from 'src/utils'

import {
    buttonText,
    paymentInfoPageTitle,
} from 'src/UI-components/atoms/PaymentInfo/paymentInfo.const'

export const PaymentInfo = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { state } = useLocation()
    const stateEntries = Object.entries<string>(state)
    const rows = transformRowsName(stateEntries)
    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = () => {
        setOpen(true)
    }
    const amountToPay = state.commision
        ? +state.amountToPay.replace(',', '.') + Number(state.commision)
        : state.amountToPay
    return (
        <>
            <PaymentInfoModal
                open={open}
                onClose={handleClose}
                onClickAddFavorite={() => {}}
            />
            <MainMenuPage text={paymentInfoPageTitle} backButton>
                <PaymentInfoTable rows={rows} />
                <Button
                    size="long"
                    style={{ marginTop: '40px' }}
                    onClick={handleClick}
                >
                    {buttonText} {formatNumber(amountToPay)} RUB
                </Button>
            </MainMenuPage>
        </>
    )
}
