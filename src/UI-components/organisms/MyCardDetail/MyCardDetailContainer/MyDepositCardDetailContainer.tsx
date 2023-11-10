import { useParams } from 'react-router-dom'

import { useGetDepositCardItemQuery } from '../../../../redux/api/cardsApi'
import { MyCardDetail } from '../MyCardDetail'

export const MyDepositCardDetailContainer = () => {
    const { id } = useParams() as { id: string }

    const { data, isError } = useGetDepositCardItemQuery(id)

    return (
        <>
            {data && <MyCardDetail card={data} cardId={id} />}
            {isError && <h1>'Ошибка'</h1>}
        </>
    )
}
