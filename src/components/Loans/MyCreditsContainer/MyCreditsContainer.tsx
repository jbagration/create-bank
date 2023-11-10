import { FC, useCallback } from 'react'
import { CreditList } from 'src/components/Loans/CreditList'

import { CreditDetailsItem } from '../ApplyForm/CreditDetailsItem'
import { LoanCaption } from '../LoanCaption/LoanCaption'

import { myLoansText } from '../loans.const'

import { Credits } from '../ApplyForm/CreditDetailsItem/CreditDetailsItem.type'

interface Props {
    data: Credits[]
}

export const MyCreditsContainer: FC<Props> = ({ data }) => {
    const creditItem = useCallback(
        (credit, index, array) => (
            <CreditDetailsItem
                key={credit.id}
                index={index + 1}
                first={index === 0}
                last={index === array.length - 1}
                {...credit}
            />
        ),
        []
    )

    const component =
        data.length > 0 ? (
            <CreditList
                renderItem={creditItem}
                data={data}
                text={myLoansText}
            />
        ) : (
            <LoanCaption />
        )
    return component
}
