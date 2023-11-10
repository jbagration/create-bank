import { useLocation } from 'react-router-dom'
import { Preloader } from 'src/assets'
import { ApplyForDepositCaption } from 'src/components/Deposits'
import { LocationParams } from 'src/types/hooksTypes'
import { MainMenuPage } from 'src/UI-components/organisms'

import { BetweenYourCardsFields } from '../BetweenYourCardsFields/BetweenYourCardsFields'

import { transfersMyselfTitle } from '../TransfersPage.const'

import { TransfersOptionState } from '../TransfersPage.type'

export const TransfersMyselfContainer = () => {
    const { state } = useLocation() as LocationParams<TransfersOptionState>

    if (!state) {
        return <Preloader />
    }
    const { cards } = state

    return (
        <MainMenuPage text={transfersMyselfTitle} backButton>
            {cards.length === 0 ? (
                <ApplyForDepositCaption />
            ) : (
                <BetweenYourCardsFields depositCards={cards} />
            )}
        </MainMenuPage>
    )
}
