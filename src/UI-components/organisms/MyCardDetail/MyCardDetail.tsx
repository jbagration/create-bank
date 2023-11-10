import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { TransferOrdersContainer } from 'src/components/TransferOrders'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { setMyCardName } from 'src/redux/slices/myCardsSlice'
import { TabsWithContent } from 'src/UI-components/atoms'
import { ItemCard } from 'src/UI-components/molecules'
import { Box } from '@mui/material'

import { MainMenuPage } from '../MainMenuPageComponent'
import { ManageTab, MyCardsInfotab } from '../MyCards'

import { myCardWindowLabels } from './MyCardDetail.const'
import { emptyString } from 'src/common/common.const'

import { MyCardDetailProps } from './MyCardDetail.type'

export const MyCardDetail: FC<MyCardDetailProps> = ({ card }) => {
    const { cardName, status, cardNumber, type, cardAlias } = card
    const dispatch = useAppDispatch()
    dispatch(setMyCardName(cardName))
    const { state } = useLocation()
    return (
        <MainMenuPage text={`${cardAlias ?? cardName}`} backButton>
            <ItemCard {...card} />
            <Box
                sx={{
                    width: '636px',
                    margin: '80px 0px',
                }}
            >
                <TabsWithContent
                    labels={myCardWindowLabels}
                    padding
                    tabNumber={state?.tabNumber}
                >
                    <MyCardsInfotab card={card} />
                    <TransferOrdersContainer
                        cardNumber={cardNumber}
                        savedFilters={state?.filters}
                    />
                    <ManageTab
                        cardId={card.cardId ?? ''}
                        cardStatus={status}
                        cardNumber={cardNumber ?? emptyString}
                        cardType={type ?? emptyString}
                        cardAlias={cardAlias ?? cardName}
                    />
                </TabsWithContent>
            </Box>
        </MainMenuPage>
    )
}
