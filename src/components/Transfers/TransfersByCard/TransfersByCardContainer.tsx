import { useLocation } from 'react-router-dom'
import { Preloader } from 'src/assets'
import { ApplyForDepositCaption } from 'src/components/Deposits'
import { LocationParams } from 'src/types/hooksTypes'
import { MainMenuPage } from 'src/UI-components/organisms'

import { TransferByCard } from './TransfersByCard'

import { TransfersOptionState } from '../TransfersPage.type'

export const TransfersByCardContainer = () => {
    const { state } = useLocation() as LocationParams<TransfersOptionState>

    if (!state) {
        return <Preloader />
    }
    const { cards } = state

    return (
        <MainMenuPage text="Перевод по номеру карты" backButton>
            {cards.length === 0 ? (
                <ApplyForDepositCaption />
            ) : (
                <TransferByCard depositCards={cards} />
            )}
        </MainMenuPage>
    )
}
