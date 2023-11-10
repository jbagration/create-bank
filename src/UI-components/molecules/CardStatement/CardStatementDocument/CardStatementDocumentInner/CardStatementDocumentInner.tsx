import { ForwardedRef, forwardRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyGetStatementInfoQuery } from 'src/redux/api/cardsApi'
import { toIsoString } from 'src/utils/dateNormalize'
import { Box } from '@mui/material'

import { CardStatementDocumentHeader } from './CardStatementDocumentHeader'
import { CardStatementDocumentTitleBox } from './CardStatementDocumentTitleBox'
import CardStatementOperations from './CardStatementOperations'
import CardStatementTotal from './CardStatementTotal'

import { mockData } from '../../CardStatement.const'

import { cardStatementDocumentContainerStyles } from './CardStatementDocumentInner.style'

export const CardStatementDocumentInner = forwardRef(
    function CardStatementDocumentInner(
        { ...props },
        ref: ForwardedRef<HTMLDivElement>
    ) {
        const {
            state: { cardBalance, from, to, cardId, type, creditId },
        } = useLocation()
        const [trigger, result] = useLazyGetStatementInfoQuery()
        useEffect(() => {
            const body = {
                cardId: cardId || creditId,
                from: toIsoString(from),
                to: toIsoString(to),
                pageNumber: '0',
                pageSize: '10',
                type: type.replace('Card', ''),
            }
            trigger(body)
        }, [cardId, from, to, trigger, type, creditId])
        return (
            <Box ref={ref} sx={cardStatementDocumentContainerStyles} {...props}>
                <CardStatementDocumentHeader />
                <CardStatementDocumentTitleBox title="Общие итоги" />
                <CardStatementTotal
                    balance={cardBalance}
                    operations={result.data || mockData}
                />
                <CardStatementOperations operations={result.data || mockData} />
            </Box>
        )
    }
)
