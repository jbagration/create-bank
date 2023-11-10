import { useLocation } from 'react-router-dom'
import { Preloader } from 'src/assets'
import { ApplyForDepositCaption } from 'src/components/Deposits'
import { LocationParams } from 'src/types/hooksTypes'
import { MainMenuPage } from 'src/UI-components/organisms'

import { TransferByDetails } from './TransferByDetails'

import { transferByDetailsTitle } from '../TransfersPage.const'

import { TransfersOptionState } from '../TransfersPage.type'

export const TransfersByDetailsContainer = () => {
    const { state } = useLocation() as LocationParams<TransfersOptionState>
    if (!state) {
        return <Preloader />
    }
    const { cards } = state

    return (
        <MainMenuPage text={transferByDetailsTitle} backButton>
            {cards.length === 0 ? (
                <ApplyForDepositCaption />
            ) : (
                <TransferByDetails depositCards={cards} />
            )}
        </MainMenuPage>
    )
}
