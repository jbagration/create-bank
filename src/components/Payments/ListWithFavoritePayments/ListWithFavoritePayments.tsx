import { memo, SyntheticEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetFavoritePaymentsQuery } from 'src/redux/api/favoritePaymentsApi'
import { useAppSelector } from 'src/redux/hooks/redux'
import { AddItemToList } from 'src/UI-components/molecules'
import { Stack } from '@mui/material'

import { FavoritePaymentItem } from './FavoritePaymentItem'

import { FavoriteKey } from './favoritePayments.const'

import { favoritesListStyle } from './listWithFavoritePayments.style'

export const ListWithFavoritePayments = memo(() => {
    const { user } = useAppSelector((store) => store.auth)
    const { data } = useGetFavoritePaymentsQuery(user?.clientId as string)
    const navigate = useNavigate()

    const handleClickByItem = useCallback(
        (transferOrderId: string) => (e: SyntheticEvent<HTMLElement>) => {
            e.stopPropagation()
            if (
                (e.target as HTMLElement).getAttribute('test-id') ===
                'delete-icon'
            ) {
                return
            }
            navigate(`favoritespayments/${transferOrderId}`)
        },
        [navigate]
    )

    const items = data?.map(({ transferTypeName, sum, transferOrderId }) => (
        <FavoritePaymentItem
            key={transferOrderId}
            transferOrderId={transferOrderId}
            title={transferTypeName as FavoriteKey}
            sum={sum}
            onClick={handleClickByItem}
        />
    ))

    const handleClickAddFavo = useCallback(
        () => navigate('favoritespayments'),
        [navigate]
    )

    return (
        <>
            <AddItemToList onClick={handleClickAddFavo} />
            <Stack overflow="scroll" sx={favoritesListStyle}>
                {items}
            </Stack>
        </>
    )
})
