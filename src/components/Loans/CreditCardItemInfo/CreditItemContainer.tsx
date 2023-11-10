import { useGetCreditCardItemQuery } from 'src/redux/api/cardsApi'
import { Box } from '@mui/material'

import { getCreditDurationInMonths } from '../ApplyForm/CreditDetailsItem/CreditDetailsItem.utils'

import { CreditItemInfoContainer } from './CreditItemInfoContainer'

interface CreditItemContainerProps {
    cardId: string
    open: boolean
}

export const CreditItemContainer = ({
    cardId,
    open,
}: CreditItemContainerProps) => {
    const { data, isSuccess } = useGetCreditCardItemQuery(cardId)
    const terminationDate = data?.terminationDate
    const creationDate = data?.creationDate

    if (!isSuccess || !data || !terminationDate) {
        return null
    }

    const creditMonth = getCreditDurationInMonths(terminationDate, creationDate)
    return (
        <Box pt={10} pb={10}>
            <CreditItemInfoContainer
                id={data.creditId}
                open={open}
                loanPeriod={creditMonth}
            />
        </Box>
    )
}
