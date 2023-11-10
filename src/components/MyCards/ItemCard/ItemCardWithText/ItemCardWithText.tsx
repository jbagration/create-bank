import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import type { CreditAndDepositCard } from '../../../../types/MyCardsType'
import { ItemCard } from '../../../../UI-components/molecules/ItemCard'
import { DescriptionMyCard } from '../../../../UI-components/organisms'

import { itemCardWithTextStyles } from './ItemCardWithText.style'

export const ItemCardWithText: FC<CreditAndDepositCard> = ({
    cardId,
    type,
    ...props
}) => {
    const navigate = useNavigate()

    const routeTo =
        type === 'creditCard' ? `credit/${cardId}` : `deposit/${cardId}`

    return (
        <Box sx={itemCardWithTextStyles} onClick={() => navigate(routeTo)}>
            <ItemCard {...props} />
            <DescriptionMyCard {...props} />
        </Box>
    )
}
