import { FC, useCallback } from 'react'
import { CreditList } from 'src/components/Loans/CreditList'
import { CreditCard } from 'src/types/MyCardsType'
import { Box } from '@mui/material'

import { CreditCardDetailsItem } from '../ApplyForm/CreditDetailsItem'

import { myCreditCardsText } from '../loans.const'

interface Props {
    data: CreditCard[]
}
export const MyCreditCardsContainer: FC<Props> = ({ data }) => {
    const creditCardItem = useCallback(
        (credit, index, array) => (
            <CreditCardDetailsItem
                key={credit.id}
                index={index + 1}
                first={index === 0}
                last={index === array.length - 1}
                {...credit}
            />
        ),
        []
    )

    return (
        <Box pt="64px">
            <CreditList
                renderItem={creditCardItem}
                data={data}
                text={myCreditCardsText}
            />
        </Box>
    )
}
