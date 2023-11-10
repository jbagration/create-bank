import { FC, memo } from 'react'
import { Box } from '@mui/material'

import { MyCardsPageContainer } from '../../../../components/MyCards/MyCardsPageContainer'
import {
    useGetCreditCardsQuery,
    useGetDepositCardsQuery,
} from '../../../../redux/api/cardsApi'
import { LinkButton } from '../../../../UI-components/atoms'
import { TitlePage } from '../../../../UI-components/molecules/TitlePage'

import { filterCardsByExpirationStatus } from './MyCardPage.util'

export const MyCardPage: FC = memo(() => {
    const { data: debitCards } = useGetDepositCardsQuery()
    const { data: creditCards } = useGetCreditCardsQuery()

    const { debitToDisplay, creditToDisplay, expiredToDisplay } =
        filterCardsByExpirationStatus(debitCards, creditCards)

    return (
        <>
            <Box data-testId="debitCards">
                <TitlePage>Мои дебетовые карты</TitlePage>
                <MyCardsPageContainer
                    data={debitToDisplay}
                    initialCardsLimit={3}
                    skeletonQuantity={3}
                />
            </Box>
            <Box pt="44px" data-testId="creditCards">
                <TitlePage>Мои кредитные карты</TitlePage>
                <MyCardsPageContainer
                    data={creditToDisplay}
                    initialCardsLimit={3}
                    skeletonQuantity={3}
                />
            </Box>
            {expiredToDisplay && (
                <Box pt="44px" data-testId="debitCards">
                    <TitlePage>Недействительные карты</TitlePage>
                    <MyCardsPageContainer
                        data={expiredToDisplay}
                        initialCardsLimit={3}
                        skeletonQuantity={3}
                    />
                </Box>
            )}
            <LinkButton link="/user_main/cards/products" />
        </>
    )
})
