import { useParams } from 'react-router-dom'

import { useGetCreditCardItemQuery } from '../../../../redux/api/cardsApi'
import { MyCardDetail } from '../MyCardDetail'

export const MyCreditCardDetailContainer = () => {
    const { id } = useParams() as { id: string }

    const { data, isError } = useGetCreditCardItemQuery(id)

    return (
        <>
            {data && <MyCardDetail card={data} cardId={data.creditId} />}
            {isError && <h1>'Ошибка'</h1>}
        </>
    )
}
