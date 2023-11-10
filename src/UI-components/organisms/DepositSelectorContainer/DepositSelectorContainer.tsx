import { FC } from 'react'
import { DepositAccountSelector } from 'src/UI-components/molecules/DepositAccountSelector'

import { useGetDepositAccountQuery } from '../../../redux/api/cardsApi'
import { MainMenuPage } from '../MainMenuPageComponent'

export const DepositSelectorContainer: FC = () => {
    const { data } = useGetDepositAccountQuery()

    return (
        <MainMenuPage text="Выбор счета" backButton>
            <DepositAccountSelector data={data} />
        </MainMenuPage>
    )
}
