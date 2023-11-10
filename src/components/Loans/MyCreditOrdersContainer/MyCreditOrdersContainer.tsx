import { FC, useCallback } from 'react'
import { CreditList } from 'src/components/Loans/CreditList'
import { OrdersItem } from 'src/models'
import { Box } from '@mui/material'

import { CreditOrderDetailsItem } from '../ApplyForm/CreditDetailsItem'

import { myLoanApplicationsText } from '../loans.const'

interface Props {
    data: OrdersItem[]
}
export const MyCreditOrdersContainer: FC<Props> = ({ data }) => {
    const creditOrderItem = useCallback(
        (credit, index, array) => (
            <CreditOrderDetailsItem
                name={credit.name}
                key={credit.id}
                index={index + 1}
                first={index === 0}
                last={index === array.length - 1}
                status={credit.status}
                {...credit}
            />
        ),
        []
    )

    return (
        <Box pt="64px">
            <CreditList
                renderItem={creditOrderItem}
                data={data}
                text={myLoanApplicationsText}
            />
        </Box>
    )
}
