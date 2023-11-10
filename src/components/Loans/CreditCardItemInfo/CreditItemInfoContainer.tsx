import { FC } from 'react'

import { Preloader } from '../../../assets/svg'
import { useGetCreditItemQuery } from '../../../redux/api/creditItemApi'

import { CreditItemInfo } from './CreditItemInfo'

type Props = {
    id: string
    open: boolean
    loanPeriod: string
}

export const CreditItemInfoContainer: FC<Props> = ({
    id,
    open,
    loanPeriod,
}) => {
    const { data, isLoading, isSuccess } = useGetCreditItemQuery(id, {
        skip: !open,
    })

    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            {isSuccess && data ? (
                <CreditItemInfo loanPeriod={loanPeriod} {...data} />
            ) : null}
        </>
    )
}
