import { useParams } from 'react-router-dom'
import { useGetFavoritePaymentQuery } from 'src/redux/api/favoritePaymentsApi'
import { transformRowsName } from 'src/UI-components/atoms/PaymentInfo/paymentInfo.utils'
import { MainMenuPage, PaymentInfoTable } from 'src/UI-components/organisms'

interface Params {
    transferOrderId: string
}

const title = 'Избранный платеж'
export const FavoritePaymentPage = () => {
    const { transferOrderId } = useParams() as Readonly<Params>
    const { data, isSuccess } = useGetFavoritePaymentQuery(transferOrderId)

    const dataEntries = Object.entries(
        isSuccess ? { purpose: data.purpose, sum: data.sum } : {}
    ) as Array<[string, string | number]>
    const rows = transformRowsName(dataEntries)

    return (
        <MainMenuPage backButton text={title}>
            {isSuccess && <PaymentInfoTable rows={rows} />}
        </MainMenuPage>
    )
}
