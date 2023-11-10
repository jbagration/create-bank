import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePaymentSchedulePdf } from 'src/hooks/useGeneratingPdf'
import { ActionsBar, CardStatementModal } from 'src/UI-components/molecules'

import { captionStyles } from '../../../common/common.styles'
import { useGetPaymentScheduleQuery } from '../../../redux/api/paymentScheduleApi'
import { Caption } from '../../../UI-components/atoms'
import {
    MainMenuPage,
    PaymentScheduleContainer,
} from '../../../UI-components/organisms'

import {
    paymentScheduleText,
    scheduleCaptionText,
    sharePaymentScheduleText,
} from '../../../UI-components/atoms/PaymentSchedule/paymentSchedule.const'

export const PaymentSchedulePage = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { creditId } = useParams()
    const { data } = useGetPaymentScheduleQuery(creditId as string)
    const payments = data?.payments || []
    const accountNumber = data?.accountNumber || ''
    const { handler } = usePaymentSchedulePdf(payments, accountNumber)

    const handleCloseModal = useCallback(() => {
        setOpen(false)
    }, [])
    const handleClickSharedButton = useCallback(() => {
        setOpen(true)
    }, [])

    return (
        <MainMenuPage text={paymentScheduleText} backButton>
            <Caption component sx={captionStyles}>
                <>{scheduleCaptionText}</>
            </Caption>
            <PaymentScheduleContainer data={payments} />
            <ActionsBar
                onClickSharedButton={handleClickSharedButton}
                onClickDownloadButton={handler}
            />
            <CardStatementModal
                text={sharePaymentScheduleText}
                showModal={open}
                closeModal={handleCloseModal}
            />
        </MainMenuPage>
    )
}
